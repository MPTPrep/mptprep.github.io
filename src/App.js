import React, { useState, useEffect } from 'react';
import { nodes as nodeData } from './data/nodes'; 
import Sidebar from './components/Sidebar';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import LessonResult from './components/LessonResult'
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import LearningPath from './components/LearningPath';
import TestInfo from './components/TestInfo';
import PracticeTest from './components/PracticeTest';
import TestBriefing from './components/TestBriefing';
import TestComments from './components/TestComments';
import Study from './components/Study';
import Resources from './components/Resources';
import { MOCK_TESTS } from './data/tests';

export default function App() {
  const [nodes, setNodes] = useState(nodeData);
  const [currentNode, setCurrentNode] = useState(null);
  const [showLesson, setShowLesson] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false); 
  const [lastResult, setLastResult] = useState({ success: false, before: 0, after: 0 }); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [xp, setXp] = useState(0);
   const [lessonXp, setLessonXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastActiveDate, setLastActiveDate] = useState("");
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [view, setView] = useState('landing'); 
  const [activeTest, setActiveTest] = useState(null); 
  const [userHistory, setUserHistory] = useState([]); 
  const [reviewTest, setReviewTest] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('mpt_dark_mode') === 'true');
  const [testStarted, setTestStarted] = useState(false);
  const [openComments, setOpenComments] = useState(null);
  const [profileName, setProfileName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u && u.emailVerified) {
        setUser(u);
        loadUserData(u.uid);
      } else {
        if (u && !u.emailVerified) auth.signOut(); 
        setUser(null);
        setProfileName("");
        setIsAdmin(false);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem('mpt_dark_mode', darkMode);
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

const loadUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const data = docSnap.exists() ? docSnap.data() : null;


  if (!data || !data.role) {
    console.log("Initializing new profile fields...");
    const initialName = `Student_${Math.random().toString(36).substring(7)}`;
    const initialData = {
      xp: data?.xp || 0,
      streak: data?.streak || 0,
      lastActiveDate: data?.lastActiveDate || "",
      nodes: data?.nodes || nodeData,
      testHistory: data?.testHistory || [],
      displayName: data?.displayName || initialName,
      role: 'student' 
    };

    await setDoc(docRef, initialData, { merge: true });
    setProfileName(initialData.displayName);
    setIsAdmin(false);
  } else {
	  
    setXp(data.xp || 0);
    setStreak(data.streak || 0);
    setLastActiveDate(data.lastActiveDate || "");
    setUserHistory(data.testHistory || []);
    setProfileName(data.displayName || "Student");
    setIsAdmin(data.role === 'admin');
    
    if (data.nodes) {
      const mergedNodes = nodeData.map(localNode => {
        const firebaseNode = data.nodes.find(n => n.id === localNode.id);
        return firebaseNode ? { ...localNode, ...firebaseNode } : localNode;
      });
      setNodes(mergedNodes);
    }
  }
  setLoading(false);
};
const saveTestResult = async (results) => {
  const today = new Date().toLocaleDateString('en-CA');
  const newAttempt = { 
    id: Date.now(), 
    testId: results.testId, 
    date: today, 
    totalScore: results.totalScore, 
    pedScore: results.pedScore, 
    mathScore: results.mathScore,
    timeTaken: results.timeTaken, 
    answers: results.answers 
  };
  const updatedHistory = [newAttempt, ...userHistory];
  setUserHistory(updatedHistory);
  if (user) {
    await setDoc(doc(db, "users", user.uid), { testHistory: updatedHistory }, { merge: true });
  }
};

  const handleWin = async () => {
  const today = new Date().toISOString().split('T')[0];
  
  let newXP = xp + 100;
  let newStreak = streak;
  let newLastActiveDate = lastActiveDate;

  if (lastActiveDate !== today) {
    
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toISOString().split('T')[0];

    
    
    if (lastActiveDate === yesterday || lastActiveDate === "") {
      newStreak += 1;
    } else {
      newStreak = 1;
    }
    newLastActiveDate = today;
  }

    setXp(newXP);
    setStreak(newStreak);
    setLastActiveDate(newLastActiveDate);

    if (user) {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        xp: newXP,
        streak: newStreak,
        lastActiveDate: newLastActiveDate,
        nodes: nodes 
      }, { merge: true });
    }
  };
const updateProfileName = async (newName) => {
  if (!newName.trim() || !user) return;
  
  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { displayName: newName }, { merge: true });
    setProfileName(newName);
    alert("Name updated successfully!");
  } catch (err) {
    console.error("Error updating name:", err);
  }
};
  const addOverallXp = (amount) => {
    setXp(prev => prev + amount);
  };

  const addLessonXp = (amount) => {
    setLessonXp(prev => Math.min(prev + amount, 100));
  };

  const handleSelectNode = (node) => {
    if (!node.unlocked) return;
    setCurrentNode(node);
    setShowLesson(true);
    setShowQuiz(false);
    setShowResult(false);
  };

  const handleStartQuiz = () => { setShowLesson(false); setShowQuiz(true); };

  const handleQuizComplete = (earnedMastery, totalQuestions, isSuccess) => {
    if (isSuccess) {
      const currentMastery = currentNode.mastery || 0;
      const newMastery = Math.min(100, currentMastery + earnedMastery);
      const updatedCurrentNode = { ...currentNode, mastery: newMastery };

      const updatedNodes = nodes.map(n => {
        if (n.id === currentNode.id) return updatedCurrentNode;
        if (currentNode.children?.includes(n.id) && newMastery === 100) {
          return { ...n, unlocked: true };
        }
        return n;
      });

      setNodes(updatedNodes);
      setCurrentNode(updatedCurrentNode);
      setLastResult({ success: true, before: currentMastery, after: newMastery });
    } else {
      setLastResult({ success: false, before: currentNode.mastery, after: currentNode.mastery });
    }
    setShowQuiz(false);
    setShowResult(true);
  };

  const handleReplay = () => { setShowResult(false); setShowQuiz(true); };

  const handleContinue = () => {
    const nextNodeId = currentNode.children?.[0]; 
    const nextNode = nodes.find(n => n.id === nextNodeId);
    if (nextNode && nextNode.unlocked) {
      handleSelectNode(nextNode); 
    } else {
      setShowResult(false);
      setCurrentNode(null);
    }
  };

  const currentLevel = Math.floor(xp / 500) + 1;
  const xpProgress = ((xp % 500) / 500) * 100;


  if (loading) return <div className="loading">Loading MPT Prep...</div>;
  if (!user) return <Login />;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#fff' }}>
      
      {view === 'landing' && <LandingPage onNavigate={(target) => setView(target)} streak={streak} xp={xp} user={user} />}

      {view === 'learning-path' && (
        <LearningPath 
          nodes={nodes} currentNode={currentNode} handleSelectNode={handleSelectNode}
          showLesson={showLesson} showQuiz={showQuiz} showResult={showResult}
          lastResult={lastResult} handleStartQuiz={handleStartQuiz} handleQuizComplete={handleQuizComplete}
          handleReplay={handleReplay} handleContinue={handleContinue} addOverallXp={addOverallXp}
          handleWin={handleWin} xp={xp} streak={streak} darkMode={darkMode} setDarkMode={setDarkMode}
          user={user} showAccountMenu={showAccountMenu} setShowAccountMenu={setShowAccountMenu} onBackHome={() => setView('landing')}
        />
      )}

      {view === 'practice-tests' && (
  <div style={{ padding: '20px', minHeight: '100vh', color: darkMode ? '#fff' : '#000' }} > 
    
	
	
    {!activeTest && !reviewTest ? (
      <div style={{ maxWidth: '1000px', margin: '0 auto' }} >
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          <button 
            onClick={() => setView('landing')}
            style={{ 
              padding: '8px 16px',
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
              backgroundColor: darkMode ? '#2c2c2c' : '#fff',
              cursor: 'pointer',
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '0.85rem',
              color: darkMode ? '#fff' : '#777'
            }}
          >
            Home
          </button>
		  
		        <button 
            onClick={() => auth.signOut()} 
            style={{ 
              padding: '8px 16px',
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
              backgroundColor: darkMode ? '#2c2c2c' : '#fff',
              cursor: 'pointer',
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '0.85rem',
              color: darkMode ? '#fff' : '#777',
              transition: '0.2s'
            }}
          >
            Logout
          </button>


          <div style={{ position: 'relative' }}>
            <div 
              onClick={(e) => {
                e.stopPropagation();
                setShowAccountMenu(!showAccountMenu);
              }}
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                backgroundColor: '#1cb0f6', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white', fontWeight: 'bold',
                fontFamily: 'Montserrat', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                {
				user?.email ? user.email.charAt(0).toUpperCase() : '?'}
              </div>
            </div>

            {/* DROPDOWN MENU */}
            {showAccountMenu && (
              <div style={{
                position: 'absolute', top: '50px', right: '0', width: '220px',
                backgroundColor: darkMode ? '#2c2c2c' : '#fff',
                border: '1px solid #e5e5e5', borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000,
                padding: '10px', color: darkMode ? '#fff' : '#000'
              }}>
                <div style={{ padding: '10px', fontSize: '0.8rem', color: '#888', borderBottom: '1px solid #eee' }}>
                  {user?.email || "Not logged in"}
                </div>
                
                <div 
                  onClick={() => setDarkMode(!darkMode)}
                  style={{ padding: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}
                >
                  <span>Dark Mode</span>
                  <span>{darkMode ? '🌙' : '☀️'}</span>
                </div>

                <div style={{ padding: '12px', opacity: 0.6, fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Language</span>
                  <span style={{ fontSize: '0.7rem', backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', color: '#000' }}>
                    EN (FR soon)
                  </span>
                </div>

                <div 
                  onClick={() => auth.signOut()}
                  style={{ padding: '12px', cursor: 'pointer', color: '#ff4b4b', fontWeight: '600', borderTop: '1px solid #eee', marginTop: '5px', fontSize: '0.9rem' }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {Object.values(MOCK_TESTS).map((test) => {
            const testId = test.id;
			
			const testTitle = test.title;
            const scores = userHistory.filter(h => h.testId === testId).map(h => h.totalScore);
            const highScore = scores.length > 0 ? Math.max(...scores) : null;
            
            return (
              <div key={testId} style={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff', border: '2px solid #e5e5e5', borderRadius: '16px', padding: '30px', textAlign: 'center',position: 'relative' }}>
                <div 
          title={test.isOfficial ? "Questions sourced from Ministry Practice Tests" : "Custom Practice Test"}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: test.isOfficial ? '#1cb0f6' : '#9b59b6',
            color: '#fff',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'help'
          }}
        >
          {test.isOfficial ? 'M' : 'C'}
        </div>
		<button 
    onClick={(e) => {
      e.stopPropagation(); 
      setOpenComments(test.id); 
    }}
    style={{
      position: 'absolute',
      top: '15px',
      left: '15px', 
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }}
  >
    💬 
    <span style={{ fontSize: '0.7rem', color: '#888' }}>
    </span>
  </button>
				<h3 style={{ marginBottom: '5px' }}>{testTitle}</h3>
                
                  {highScore !== null ? `High Score: ${highScore}%` : 'No attempts yet'}
                <div style={{ fontSize: '0.85rem', color: '#1cb0f6', fontWeight: 'bold', height: '20px', marginBottom: '15px' }}>
                </div>

                <button 
                  onClick={() => {
                    setReviewTest(null); 
                    setActiveTest({ id: testId, instanceId: Date.now() }); 
					if (!test.requiresBriefing) {
					  setTestStarted(true);
					} else {
					}
					  setTestStarted(false);
                  }} 
                  style={{ width: '100%', padding: '12px', backgroundColor: '#1cb0f6', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  {'Start Exam'}
                </button>
              </div>
            );
          })}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2 style={{ margin: 0 }}>Recent Activity</h2>
          {userHistory.length > 0 && (
            <button 
              onClick={async () => {
                if(window.confirm("Clear all recent activity? This will wipe your history from the cloud.")) {
                  setUserHistory([]);
                  if (user) {
                    await setDoc(doc(db, "users", user.uid), { testHistory: [] }, { merge: true });
                  }
                }
              }}
              style={{ backgroundColor: 'transparent', border: '1px solid #ff4b4b', color: '#ff4b4b', padding: '5px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.8rem' }}
            >
              Clear History
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gap: '10px' }}>
          {userHistory.length === 0 ? (
            <p style={{ color: '#aaa' }}>No recent activity to show.</p>
          ) : (
            userHistory.slice(0, 10).map((attempt, i) => (
              <div key={i} style={{ padding: '15px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{attempt.date} - Test #{attempt.testId.split('-').pop()}</div>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '5px', fontSize: '0.9rem', color: '#666' }}>
                    <span>Overall: <strong>{attempt.totalScore}%</strong></span>
                    <span>Pedagogy: {attempt.pedScore || 0}%</span>
                    <span>Math: {attempt.mathScore || 0}%</span>
                  </div>
                </div>
                <button 
                  onClick={() => setReviewTest(attempt)} 
                  style={{ color: '#1cb0f6', cursor: 'pointer', background: 'none', border: '1px solid #1cb0f6', padding: '8px 20px', borderRadius: '8px', fontWeight: 'bold' }}
                >
                  Review
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    ) : (
  <>
    {reviewTest && (
      <PracticeTest 
        key={reviewTest.id}
        testData={MOCK_TESTS[reviewTest.testId]} 
        darkMode={darkMode} 
        reviewData={reviewTest} 
        onComplete={saveTestResult} 
        onExit={() => { setReviewTest(null); }} 
      />
    )}

    {activeTest && !testStarted && (
      <TestBriefing 
        test={MOCK_TESTS[activeTest.id]}
        darkMode={darkMode}
        onBack={() => setActiveTest(null)}
        onStart={() => setTestStarted(true)}
      />
    )}

    {activeTest && testStarted && (
      <PracticeTest 
        key={activeTest.instanceId}
        testData={MOCK_TESTS[activeTest.id]} 
        darkMode={darkMode} 
        reviewData={null} 
        onComplete={(results) => {
          saveTestResult(results);
		   
        }} 
        onExit={() => { 
          setActiveTest(null); 
          setTestStarted(false); 
        }} 
      />
    )}
  </>
)}
  </div>
)}

      {view === 'test-info' && <TestInfo user={user} darkMode={darkMode} setDarkMode={setDarkMode} onBackHome={()=> setView('landing')}  />}
	  {view === 'study-guide' && <Study user={user} darkMode={darkMode} setDarkMode={setDarkMode} onBackHome={()=> setView('landing')}  />}
	  {view === 'resources-info' && <Resources user={user} darkMode={darkMode} setDarkMode={setDarkMode} onBackHome={()=> setView('landing')}  />}
    {openComments && (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000
  }}>
    <div 
      onClick={() => setOpenComments(null)}
      style={{
        position: 'absolute', width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'
      }}
    />
    
    <div style={{
      position: 'relative',
      width: 'min(600px, 95%)',
      maxHeight: '85vh',
      backgroundColor: darkMode ? '#1a1a1a' : '#fff',
      borderRadius: '24px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      color: darkMode ? '#fff' : '#000',
      overflow: 'hidden', 
      border: darkMode ? '1px solid #333' : '1px solid #eee'
    }}>
      <div style={{ 
        padding: '20px 25px', 
        borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}`, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: darkMode ? '#222' : '#fcfcfc'
      }}>
        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>
          Discussion: {MOCK_TESTS[openComments]?.title}
        </h2>
        <button 
          onClick={() => setOpenComments(null)} 
          style={{ background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer', color: '#888', lineHeight: 1 }}
        >
          ×
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '25px' }}>
       <TestComments 
  testId={openComments} 
  user={user} 
  profileName={profileName} 
  isAdmin={isAdmin}         
  userHistory={userHistory} 
  darkMode={darkMode} 
/>
      </div>
    </div>
  </div>
)}
	</div>
  );

}