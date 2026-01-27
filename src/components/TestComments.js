import React, { useState, useEffect,useMemo } from 'react';
import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  serverTimestamp,
  doc,
  deleteDoc
} from 'firebase/firestore';
import katex from 'katex';
import 'katex/dist/katex.min.css';


const LatexContent = ({ content }) => {
  const parts = useMemo(() => {
    // Regex splits text into parts, keeping the $$blocks$$ included in the array
    return content.split(/(\$\$.*?\$\$)/gs);
  }, [content]);

  return (
    <span className="comment-body">
      {parts.map((part, i) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2); // Strip the $$
          try {
            const html = katex.renderToString(math, {
              throwOnError: false,
              displayMode: false // Keep it inline with text
            });
            return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />;
          } catch (error) {
            return <code key={i}>{part}</code>;
          }
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
};

export default function TestComments({ testId, user, profileName, isAdmin, userHistory, darkMode }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate stats to attach to the comment
  const bestScore = userHistory.length > 0 
    ? Math.max(...userHistory.map(h => h.totalScore)) 
    : 0;
  const hasPassed = bestScore >= 70;

  useEffect(() => {
  if (!testId) return;

  const q = query(
    collection(db, "test_comments"),
    where("testId", "==", testId),
    orderBy("createdAt", "desc")
  );

  const unsubscribe = onSnapshot(q, 
    (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(fetched);
    },
    (error) => {
      // If you see "The query requires an index" here, click the link in the console!
      console.error("Firestore Error:", error);
    }
  );

  return () => unsubscribe();
}, [testId]);

  const postComment = async (e, parentId = null) => {
    e.preventDefault();
    const textToPost = parentId ? replyText : newComment;
    
    if (!textToPost.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "test_comments"), {
        testId,
        parentId, // null for top-level, commentId for replies
        text: textToPost,
        authorId: user.uid,
        authorName: profileName || "Student",
        authorBestScore: bestScore,
        authorPassed: hasPassed,
        createdAt: serverTimestamp()
      });
      
      if (parentId) {
        setReplyText('');
        setReplyingTo(null);
      } else {
        setNewComment('');
      }
    } catch (error) {
      console.error("Error adding comment: ", error);
      alert("Error posting comment. Check console for details.");
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (commentId) => {
    if (!window.confirm("Are you sure you want to delete this comment?")) return;
    
    try {
      await deleteDoc(doc(db, "test_comments", commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Permission denied or error deleting.");
    }
  };

  // Internal Helper Component for the Card
  const CommentCard = ({ comment, isReply, onReply }) => (
    <div style={{ 
      display: 'flex', 
      border: `1px solid ${darkMode ? '#444' : '#eee'}`, 
      borderRadius: '12px', 
      overflow: 'hidden',
      backgroundColor: darkMode ? '#262626' : '#fff',
      fontSize: isReply ? '0.85rem' : '0.9rem'
    }}>
      {/* Profile Sidebar */}
      <div style={{ 
        width: '85px', padding: '12px 8px', 
        backgroundColor: darkMode ? '#1a1a1a' : '#fcfcfc', 
        borderRight: `1px solid ${darkMode ? '#444' : '#eee'}`,
        textAlign: 'center', flexShrink: 0
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '0.75rem', marginBottom: '5px', overflowWrap: 'break-word' }}>
          {comment.authorName}
        </div>
        {comment.authorPassed && (
          <div style={{ fontSize: '0.6rem', color: '#2ecc71', fontWeight: 'bold' }}>✓ PASSED</div>
        )}
        <div style={{ fontSize: '0.6rem', color: '#888' }}>Best: {comment.authorBestScore}%</div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '12px', flex: 1 }}>
        <p style={{ margin: 0, lineHeight: '1.4' }}><LatexContent content = {comment.text}/></p>
        <div style={{ marginTop: '10px', display: 'flex', gap: '15px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: '#666' }}>
            {comment.createdAt?.toDate().toLocaleString([], { 
    dateStyle: 'short', 
    timeStyle: 'short' 
  })}
          </span>
          
          {!isReply && (
            <button 
              onClick={onReply}
              style={{ background: 'none', border: 'none', color: '#1cb0f6', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 'bold', padding: 0 }}
            >
              Reply
            </button>
          )}

          {(user.uid === comment.authorId || isAdmin) && (
            <button 
              onClick={() => handleDelete(comment.id)}
              style={{ background: 'none', border: 'none', color: '#ff4b4b', cursor: 'pointer', fontSize: '0.75rem', padding: 0 }}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Top Level Post Form */}
      <form onSubmit={(e) => postComment(e)} style={{ marginBottom: '10px' }}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share a tip or ask a question..."
          style={{
            width: '100%', padding: '12px', borderRadius: '12px',
            border: darkMode ? '1px solid #444' : '1px solid #ddd',
            backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000',
            resize: 'none', fontFamily: 'inherit'
          }}
          rows="3"
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{
            width: '100%', marginTop: '8px', padding: '10px', borderRadius: '8px',
            border: 'none', backgroundColor: '#1cb0f6', color: '#fff',
            fontWeight: 'bold', cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      {/* Threaded Comments List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {comments.filter(c => !c.parentId).map(parent => (
          <div key={parent.id} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            
            <CommentCard 
              comment={parent} 
              isReply={false} 
              onReply={() => setReplyingTo(parent.id)} 
            />

            {/* Replies Container */}
            <div style={{ 
              marginLeft: '30px', 
              paddingLeft: '15px', 
              borderLeft: `2px solid ${darkMode ? '#333' : '#eee'}`,
              display: 'flex', flexDirection: 'column', gap: '10px' 
            }}>
              {comments.filter(reply => reply.parentId === parent.id).map(reply => (
                <CommentCard key={reply.id} comment={reply} isReply={true} />
              ))}

              {/* Conditional Reply Input */}
              {replyingTo === parent.id && (
                <div style={{ marginTop: '5px' }}>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a reply..."
                    style={{
                      width: '100%', padding: '10px', borderRadius: '8px',
                      backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000',
                      border: '1px solid #1cb0f6'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                    <button 
                      onClick={(e) => postComment(e, parent.id)}
                      style={{ padding: '6px 15px', borderRadius: '6px', border: 'none', backgroundColor: '#1cb0f6', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                      Post Reply
                    </button>
                    <button 
                      onClick={() => setReplyingTo(null)}
                      style={{ padding: '6px 15px', borderRadius: '6px', border: 'none', backgroundColor: '#888', color: '#fff', cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {comments.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
            No comments yet. Be the first to start the discussion!
          </p>
        )}
      </div>
    </div>
  );
}