import React, { useState, useEffect, useMemo } from 'react';
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
    return content.split(/(\$\$.*?\$\$|\$.*?\$)/gs);
  }, [content]);

  return (
    <span className="comment-body">
      {parts.map((part, i) => {
        
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2);
          return renderMath(math, true, i);
        }
        
       
        if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1);
          return renderMath(math, false, i);
        }

        
        const formattedHTML = formatText(part);
        return (
          <span 
            key={i} 
            dangerouslySetInnerHTML={{ __html: formattedHTML }} 
          />
        );
      })}
    </span>
  );
};
const formatText = (text) => {
  let safeText = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return safeText
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/@(\w+)/g, '<span style="color: #1cb0f6; font-weight: bold;">@$1</span>');
};
const renderMath = (math, isBlock, index) => {
  try {
    const html = katex.renderToString(math, {
      throwOnError: false,
      displayMode: isBlock,
    });
    return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
  } catch (error) {
    return <code key={index} style={{ color: '#ff4b4b' }}>{math}</code>;
  }
};

export default function TestComments({ testId, user, profileName, profileIcon, profileColor, isAdmin, userHistory, darkMode, french }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLatexHint, setShowLatexHint] = useState(false);

  
  const isUsingLatex = newComment.includes('$') || newComment.includes('*');
  
  const specificTestHistory = userHistory.filter(h => h.testId === testId);

  const bestScore = specificTestHistory.length > 0 
    ? Math.max(...specificTestHistory.map(h => h.totalScore)) 
    : 0;
  const hasPassed = bestScore >= 70;

  useEffect(() => {
    if (!testId) return;
    const q = query(
      collection(db, "test_comments"),
      where("testId", "==", testId),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(fetched);
    }, (error) => console.error("Firestore Error:", error));
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
        parentId, 
        text: textToPost,
        authorId: user.uid,
        authorName: profileName || "Student",
		authorColor: profileColor || '#1cb0f6', 
		authorIcon: profileIcon || "",
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
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (commentId) => {
    if (!window.confirm((!french?"Are you sure you want to delete this comment?":"Êtes-vous sûr de vouloir supprimer ce commentaire ?"))) return;
    try {
      await deleteDoc(doc(db, "test_comments", commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const CommentCard = ({ comment, isReply, onReply }) => (
  <div style={{ 
    display: 'flex', 
    border: `1px solid ${darkMode ? '#444' : '#eee'}`, 
    borderRadius: '12px', 
    overflow: 'hidden',
    backgroundColor: darkMode ? '#262626' : '#fff',
    fontSize: isReply ? '0.85rem' : '0.9rem'
  }}>
    <div style={{ 
      width: '85px', padding: '12px 8px', 
      backgroundColor: darkMode ? '#1a1a1a' : '#fcfcfc', 
      borderRight: `1px solid ${darkMode ? '#444' : '#eee'}`,
      textAlign: 'center', flexShrink: 0,
      display: 'flex', flexDirection: 'column', alignItems: 'center' 
    }}>
      
      <div style={{
        width: '40px', height: '40px', borderRadius: '50%',
        backgroundColor: comment.authorColor || '#1cb0f6',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'white', fontWeight: 'bold', fontSize: '1.2rem',
        marginBottom: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {comment.authorIcon || (comment.authorName || "?")[0].toUpperCase()}
      </div>

     
      <div style={{ 
        fontWeight: 'bold', 
        fontSize: '0.7rem', 
        marginBottom: '5px', 
        overflowWrap: 'break-word',
        width: '100%' 
      }}>
        {comment.authorName}
      </div>

      {comment.authorPassed && (
        <div style={{ fontSize: '0.55rem', color: '#2ecc71', fontWeight: 'bold' }}>✓ PASSED</div>
      )}
      <div style={{ fontSize: '0.55rem', color: '#888' }}>
        {!french ? 'Best' : 'Meilleur'}: {comment.authorBestScore}%
      </div>
    </div>

     <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
  
  <div style={{ 
    margin: 0, 
    lineHeight: '1.3', 
    flex: 1, 
    display: 'block' 
  }}>
    <LatexContent content={comment.text}/>
  </div>

  <div style={{ 
    marginTop: '8px', 
    display: 'flex', 
    gap: '15px', 
    alignItems: 'center' 
  }}>
    <span style={{ fontSize: '0.7rem', color: '#666' }}>
      {comment.createdAt?.toDate().toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
    </span>
    {!isReply && (
      <button onClick={onReply} style={{ background: 'none', border: 'none', color: '#1cb0f6', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 'bold', padding: 0 }}>{!french?'Reply':'Répondre'}</button>
    )}
    {(user.uid === comment.authorId || isAdmin) && (
      <button onClick={() => handleDelete(comment.id)} style={{ background: 'none', border: 'none', color: '#ff4b4b', cursor: 'pointer', fontSize: '0.75rem', padding: 0 }}>{!french?'Delete':'Supprimer'}</button>
    )}
  </div>
</div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <form onSubmit={(e) => postComment(e)} style={{ marginBottom: '10px' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={!french?"Share a tip or ask a question...":"Partagez un conseil ou posez une question ..."}
            style={{
              width: '100%', padding: '12px', paddingBottom: '35px', borderRadius: '12px',
              border: darkMode ? '1px solid #444' : '1px solid #ddd',
              backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000',
              resize: 'none', fontFamily: 'inherit', outline: 'none'
            }}
            rows="3"
          />
          
          <div 
            onMouseEnter={() => setShowLatexHint(true)}
            onMouseLeave={() => setShowLatexHint(false)}
            style={{
              position: 'absolute', bottom: '10px', right: '12px',
              cursor: 'help', color: '#1cb0f6', fontSize: '0.75rem', fontWeight: 'bold',
              display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.8
            }}
          >
		<span><LatexContent content  = "$\sqrt{x}$"/></span>
            {showLatexHint && (
              <div style={{
                position: 'absolute', bottom: '25px', right: '0', width: '220px',
                backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '8px',
                fontSize: '11px', zIndex: 100, boxShadow: '0 4px 12px rgba(0,0,0,0.3)', pointerEvents: 'none'
              }}>
                <strong>{!french?'LaTeX Formatting':'Formatage LaTeX'}:</strong><br/>
				{!french?'Use ':'Utilisez '} <code>$..$</code> {!french?'for inline math.':'pour les maths en ligne.'}<br/>
                {!french?'Use ':'Utilisez '} <code>$$..$$</code> {!french?'for blocks.':'pour les blocs.'}<br/>
                Ex{!french?'a':'e'}mple: <code>$\frac{1}{2}$</code>
              </div>
            )}
          </div>
        </div>

        {isUsingLatex && newComment.trim() !== "" && (
          <div style={{
            marginTop: '8px',
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: darkMode ? '#1a1a1a' : '#f9f9f9',
            border: `1px dashed ${darkMode ? '#444' : '#ccc'}`,
            fontSize: '0.9rem'
          }}>
            <div style={{ fontSize: '0.65rem', color: '#888', marginBottom: '5px', fontWeight: 'bold', textTransform: 'uppercase' }}>Preview:</div>
            <LatexContent content={newComment} />
          </div>
        )}

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{
            width: '100%', marginTop: '8px', padding: '10px', borderRadius: '8px',
            border: 'none', backgroundColor: '#1cb0f6', color: '#fff',
            fontWeight: 'bold', cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? (!french?'Posting...':'Publication ...') : (!french?'Post Comment':'Publier le commentaire')}
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {comments.filter(c => !c.parentId).map(parent => (
          <div key={parent.id} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <CommentCard comment={parent} isReply={false} onReply={() => setReplyingTo(parent.id)} />
            <div style={{ 
              marginLeft: '30px', paddingLeft: '15px', borderLeft: `2px solid ${darkMode ? '#333' : '#eee'}`,
              display: 'flex', flexDirection: 'column', gap: '10px' 
            }}>
              {comments.filter(reply => reply.parentId === parent.id).map(reply => (
                <CommentCard key={reply.id} comment={reply} isReply={true} />
              ))}
              {replyingTo === parent.id && (
                <div style={{ marginTop: '5px' }}>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a reply..."
                    style={{
                      width: '100%', padding: '10px', borderRadius: '8px',
                      backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000',
                      border: '1px solid #1cb0f6', outline: 'none'
                    }}
                  />
                  {replyText.includes('$') && (
                    <div style={{ marginTop: '5px', padding: '8px', borderRadius: '6px', backgroundColor: darkMode ? '#111' : '#f0f0f0', fontSize: '0.8rem' }}>
                      <LatexContent content={replyText} />
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                    <button onClick={(e) => postComment(e, parent.id)} style={{ padding: '6px 15px', borderRadius: '6px', border: 'none', backgroundColor: '#1cb0f6', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Post Reply</button>
                    <button onClick={() => setReplyingTo(null)} style={{ padding: '6px 15px', borderRadius: '6px', border: 'none', backgroundColor: '#888', color: '#fff', cursor: 'pointer' }}>Cancel</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}