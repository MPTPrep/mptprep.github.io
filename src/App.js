import React, { useState, useEffect } from 'react';
import { nodes as nodeData } from './data/nodes'; 
import { nodes as nodeDataFR } from './data/nodesFR'; 
import Sidebar from './components/Sidebar';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import LessonResult from './components/LessonResult'
import { auth, db } from './firebase';
import { onAuthStateChanged, updateProfile, updatePassword,sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
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
import { MOCK_TESTS as MOCK_TESTS_FR } from './data/testsFR';

export default function App() {
  const [french, setFrench] = useState(null); 
  const [nodes, setNodes] = useState([]);
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
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [showSettingsModal, setShowSettingsModal] = useState(false);	  
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
  const [newPassword, setNewPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [activeSettingTab, setActiveSettingTab] = useState('menu'); 
  const COLORS = ['#1cb0f6', '#ff4b4b', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22', '#34495e'];
  const EMOJIS = ['🎓', '✏️', '🧠', '🦉', '⭐', '🔥', '📈', '🎯'];
  
  const [profileColor, setProfileColor] = useState('#1cb0f6'); 
  const [profileIcon, setProfileIcon] = useState("");
  const userInitial = profileIcon || (profileName || user?.displayName || user?.email || " ")[0].toUpperCase();
  
  const handleSaveSettings = async () => {
    if (!auth.currentUser || !newDisplayName.trim()) return;
    setIsSaving(true);

    try {
      await updateProfile(auth.currentUser, { displayName: newDisplayName });
      await setProfileName(newDisplayName);

      setActiveSettingTab('menu');
    } catch (error) {
      console.error("Settings update failed:", error);
      alert(error.message);
    } finally {
      setIsSaving(false);
    }
  };
  
  const currentMockTests = french ? MOCK_TESTS_FR : MOCK_TESTS;


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
      xp: 0,
      streak: 0,
      lastActiveDate: "",
      nodes: nodeData,
      testHistory: [],
      displayName: initialName,
      profileColor: '#1cb0f6',
      profileIcon: "",
      role: 'student' 
    };

    await setDoc(docRef, initialData, { merge: true });

    
    setProfileName(initialData.displayName);
    setProfileColor(initialData.profileColor);
    setProfileIcon(initialData.profileIcon);
    setXp(initialData.xp);
    setStreak(initialData.streak);
    setIsAdmin(false);

  } else {
    setProfileName(data.displayName || "Student");
    setProfileColor(data.profileColor || '#1cb0f6');
    setProfileIcon(data.profileIcon || "");
    setXp(data.xp || 0);
    setStreak(data.streak || 0);
    setLastActiveDate(data.lastActiveDate || "");
    setUserHistory(data.testHistory || []);
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

const updateProfileIcon = async (newColor, newIcon) => {
  if (!user) return;
  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, { profileColor: newColor, profileIcon: newIcon }, { merge: true });
  setProfileColor(newColor);
  setProfileIcon(newIcon);
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



  useEffect(() => {
  const baseData = french ? nodeDataFR : nodeData;

  if (user) {
    const mergedNodes = baseData.map(localNode => {
      const existingProgress = nodes.find(n => n.id === localNode.id);
      if (existingProgress) {
        return { 
          ...localNode, 
          mastery: existingProgress.mastery, 
          unlocked: existingProgress.unlocked 
        };
      }
      return localNode;
    });
    setNodes(mergedNodes);
  } else {
    setNodes(baseData);
  }
}, [french]);

  const currentLevel = Math.floor(xp / 500) + 1;
  const xpProgress = ((xp % 500) / 500) * 100;


  if (loading) return <div className="loading">Loading MPT Prep...</div>;
  if (!user) return <Login />;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#fff' }}>
      
      {view === 'landing' && <LandingPage profileColor = {profileColor} profileIcon = {profileIcon} updateProfileIcon = {updateProfileIcon} profileName = {profileName} setProfileName={setProfileName} french = {french} setFrench = {setFrench} onNavigate={(target) => {if (target === 'about') {
        setShowAboutModal(true);
      } else {
        setView(target);
      }}} streak={streak} xp={xp} user={user} darkMode={darkMode} setDarkMode={setDarkMode} />}

      {view === 'learning-path' && (
        <LearningPath 
          nodes={nodes} currentNode={currentNode} handleSelectNode={handleSelectNode}
          showLesson={showLesson} showQuiz={showQuiz} showResult={showResult}
          lastResult={lastResult} handleStartQuiz={handleStartQuiz} handleQuizComplete={handleQuizComplete}
          handleReplay={handleReplay} handleContinue={handleContinue} addOverallXp={addOverallXp}
          handleWin={handleWin} xp={xp} streak={streak} darkMode={darkMode} setDarkMode={setDarkMode}
		  french={french} setFrench = {setFrench}
          user={user} showAccountMenu={showAccountMenu} setShowAccountMenu={setShowAccountMenu} onBackHome={() => setView('landing')}
		  profileColor = {profileColor} profileIcon = {profileIcon} updateProfileIcon = {updateProfileIcon} profileName = {profileName} setProfileName={setProfileName}
        />
      )}

      {view === 'practice-tests' && (
  <div style={{ padding: '20px', minHeight: '100vh', color: darkMode ? '#fff' : '#000' }} > 
    
	
	
    {!activeTest && !reviewTest ? (
      <div style={{ maxWidth: '1000px', margin: '0 auto' }} >
	  
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
		
		 {showSettingsModal && (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center',
    justifyContent: 'center', zIndex: 3000, backdropFilter: 'blur(4px)'
  }}>
    <div style={{
      width: '90%', maxWidth: '400px', backgroundColor: darkMode ? '#2c2c2c' : '#fff',
      borderRadius: '20px', padding: '25px', color: darkMode ? '#fff' : '#000',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)', position: 'relative'
    }}>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {activeSettingTab !== 'menu' && (
          <button 
            onClick={() => setActiveSettingTab('menu')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#1cb0f6', padding: '0 10px 0 0' }}
          >
            ←
          </button>
        )}
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>
          {activeSettingTab === 'menu' && (!french ? 'Account Settings' : 'Paramètres')}
          {activeSettingTab === 'name' && (!french ? 'Change Name' : 'Changer le nom')}
		  
          {activeSettingTab === 'password' && (!french ? 'Security' : 'Sécurité')}
        </h2>
      </div>

      {activeSettingTab === 'menu' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div 
            onClick={() => setActiveSettingTab('name')}
            style={{ padding: '15px', borderRadius: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', backgroundColor: darkMode ? '#3c3c3c' : '#f7f7f7' }}
          >
            <span>👤 {!french ? 'Display Name' : 'Nom d’affichage'}</span>
            <span style={{ color: '#888' }}>{user?.displayName || (!french ? 'Edit' : 'Modifier')} ›</span>
          </div>
<div 
      onClick={() => setActiveSettingTab('appearance')}
      style={{ padding: '15px', borderRadius: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', backgroundColor: darkMode ? '#3c3c3c' : '#f7f7f7' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        
        <span>🎨 {!french ? 'Appearance' : 'Apparence'}</span>
      </div>
      <span style={{ color: '#888' }}>{!french ? 'Edit' : 'Modifier'} ›</span>
    </div>
          <div 
            onClick={() => setActiveSettingTab('password')}
            style={{ padding: '15px', borderRadius: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', backgroundColor: darkMode ? '#3c3c3c' : '#f7f7f7' }}
          >
            <span>🔒 {!french ? 'Password' : 'Mot de passe'}</span>
            <span style={{ color: '#888' }}>{!french ? 'Change' : 'Changer'} ›</span>
          </div>

          <button 
            onClick={() => setShowSettingsModal(false)}
            style={{ marginTop: '20px', padding: '12px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer', backgroundColor: '#1cb0f6', color: '#fff' }}
          >
            {!french ? 'Done' : 'Terminé'}
          </button>
        </div>
      )}
	  
{activeSettingTab === 'appearance' && (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    
   
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
      <div style={{
        width: '80px', height: '80px', borderRadius: '50%',
        backgroundColor: profileColor, display: 'flex', alignItems: 'center',
        justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
      }}>
        {profileIcon || userInitial}
      </div>
    </div>

    <div>
      <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
        {!french ? 'Background Color' : 'Couleur de fond'}
      </label>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {COLORS.map(c => (
          <div 
            key={c}
            onClick={() => updateProfileIcon(c, profileIcon)}
            style={{ 
              width: '30px', height: '30px', borderRadius: '50%', backgroundColor: c, 
              cursor: 'pointer', border: profileColor === c ? '3px solid #000' : 'none' 
            }}
          />
        ))}
		
		<div style={{ position: 'relative', width: '30px', height: '30px' }}>
    <label 
      htmlFor="customColorPicker"
      style={{
        width: '30px', height: '30px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: darkMode ? '#444' : '#eee',
        cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold',
        border: !COLORS.includes(profileColor) && profileColor !== '' ? '3px solid #1cb0f6' : '1px dashed #888'
      }}
    >
      +
    </label>
    <input 
      id="customColorPicker"
      type="color"
      value={profileColor}
      onChange={(e) => updateProfileIcon(e.target.value, profileIcon)}
      style={{
        position: 'absolute', top: 0, left: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer'
      }}
    />
  </div>
      </div>
    </div>

   
<div>
  <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
    {!french ? 'Icon / Emoji' : 'Icône / Emoji'}
  </label>
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '1.5rem' }}>
    
    <div 
      onClick={() => updateProfileIcon(profileColor, "")} 
      style={{ 
        cursor: 'pointer', 
        width: '40px', height: '40px', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: profileIcon === "" ? (darkMode ? '#444' : '#eee') : 'transparent',
        border: profileIcon === "" ? '2px solid #1cb0f6' : '1px solid transparent'
      }}
    >
      
      {(profileName || user?.displayName || user?.email || "?")[0].toUpperCase()}
    </div>

    {EMOJIS.map(e => (
      <div 
        key={e}
        onClick={() => updateProfileIcon(profileColor, e)}
        style={{ 
          cursor: 'pointer', 
          padding: '5px',
          borderRadius: '8px',
          backgroundColor: profileIcon === e ? (darkMode ? '#444' : '#eee') : 'transparent',
          border: profileIcon === e ? '2px solid #1cb0f6' : '1px solid transparent'
        }}
      >
        {e}
      </div>
    ))}
  </div>
</div>
  </div>
)}
	  
	  
      {activeSettingTab === 'name' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder={!french ? "Enter new name" : "Entrez le nom"}
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', background: darkMode ? '#444' : '#fff', color: darkMode ? '#fff' : '#000' }} 
          />
          <button 
            onClick={handleSaveSettings}
            disabled={isSaving}
            style={{ padding: '12px', borderRadius: '12px', border: 'none', backgroundColor: '#1cb0f6', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {isSaving ? '...' : (!french ? 'Save Name' : 'Enregistrer')}
          </button>
        </div>
      )}

      {activeSettingTab === 'password' && (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'center' }}>
    <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✉️</div>
    <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
      {!french 
        ? `We will send a password reset link to:` 
        : `Nous enverrons un lien de réinitialisation à :`}
      <br />
      <strong>{user?.email}</strong>
    </p>
    
    <button 
      onClick={async () => {
        setIsSaving(true);
        try {
          await sendPasswordResetEmail(auth, user.email);
          alert(!french 
            ? "Reset email sent! Please check your inbox." 
            : "Email de réinitialisation envoyé ! Veuillez consulter votre boîte de réception.");
          setActiveSettingTab('menu');
        } catch (error) {
          alert(error.message);
        } finally {
          setIsSaving(false);
        }
      }}
      disabled={isSaving}
      style={{ 
        padding: '12px', borderRadius: '12px', border: 'none', 
        backgroundColor: '#1cb0f6', color: '#fff', 
        fontWeight: 'bold', cursor: 'pointer' 
      }}
    >
      {isSaving ? '...' : (!french ? 'Send Reset Email' : 'Envoyer l’email')}
    </button>
    
    <p style={{ fontSize: '0.75rem', color: '#888' }}>
      {!french 
        ? "Note: You will be logged out on other devices after changing your password." 
        : "Remarque : Vous serez déconnecté sur vos autres appareils après le changement."}
    </p>
  </div>
)}
    </div>
  </div>
)}
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
		  {!french?'Home':'Accueil'}
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
            {!french ? 'Logout' : 'Déconnexion'}
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
			  backgroundColor: profileColor, 

			  display: 'flex', alignItems: 'center', justifyContent: 'center', 
			  color: 'white', fontWeight: 'bold'
			}}>
			  {profileIcon || (profileName || user?.email || "?")[0].toUpperCase()}
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
                  <span>{!french ? 'Dark Mode' : 'Mode sombre'}</span>
                  <span>{darkMode ? '🌙' : '☀️'}</span>
                </div>

                <div  onClick={() => setFrench(!french)} style={{ padding: '12px', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span onClick={() => setFrench(!french)} > {!french ? 'Language':'Langue'}</span>
                  <span style={{ fontSize: '0.8rem', backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', color: '#000' }}>{french ? (<>FR <a href="https://emoji.gg/emoji/8690-franco-ontarian-flag" target="_blank" rel="noopener noreferrer"><img src="https://cdn3.emoji.gg/emojis/8690-franco-ontarian-flag.png" width="13px" height="auto" alt="Franco_Ontarian_Flag" style={{ verticalAlign: 'middle' }} /></a></>) : 'EN 🇨🇦'}</span>
                </div>
				
				<div 
				  onClick={() => {
					setShowAccountMenu(false);
					setShowSettingsModal(true);
				  }}
				  style={{ 
					padding: '12px', 
					cursor: 'pointer', 
					display: 'flex', 
					justifyContent: 'space-between', 
					alignItems: 'center', 
					fontSize: '0.9rem'
				  }}
				>
				  <span>{!french ? 'Settings' : 'Paramètres'}</span>
				  <span>⚙️</span>
				</div>
                <div 
                  onClick={() => auth.signOut()}
                  style={{ padding: '12px', cursor: 'pointer', color: '#ff4b4b', fontWeight: '600', borderTop: '1px solid #eee', marginTop: '5px', fontSize: '0.9rem' }}
                >
                  {!french ? 'Logout' : 'Déconnexion'}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {Object.values(currentMockTests).map((test) => {
            const testId = test.id;
			
			const testTitle = test.title;
            const scores = userHistory.filter(h => h.testId === testId).map(h => h.totalScore);
            const highScore = scores.length > 0 ? Math.max(...scores) : null;
            
            return (
              <div key={testId} style={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff', border: '2px solid #e5e5e5', borderRadius: '16px', padding: '30px', textAlign: 'center',position: 'relative' }}>
                <div 
          title={test.isOfficial ? (!french?"Questions sourced from Ministry Practice Tests":"Questions tirées des tests d’entraînement du Ministère.") : (!french?"Custom Practice Test":"Test d'entraînement personnalisé")}
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
                
                  {highScore !== null ? `${!french?'High Score':'Meilleur score'}: ${highScore}%` : (!french?'No attempts yet':'Aucune tentative')}
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
                  {!french?'Start Exam':'Commencer examen'}
                </button>
              </div>
            );
          })}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2 style={{ margin: 0 }}>{!french?'Recent Activity':'Activité Récente'}</h2>
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
			{!french?'Clear History':"Effacer l'historique"}
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gap: '10px' }}>
          {userHistory.length === 0 ? (
            <p style={{ color: '#aaa' }}>{!french?'No recent activity to show.':'Aucune activité récente à afficher'}</p>
          ) : (
            userHistory.slice(0, 10).map((attempt, i) => (
              <div key={i} style={{ padding: '15px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{attempt.date} - {!french?'Test':'Examen'} #{attempt.testId.split('-').pop()}</div>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '5px', fontSize: '0.9rem', color: '#666' }}>
                    <span>{!french?'Overall':'Total'}: <strong>{attempt.totalScore}%</strong></span>
                    <span>{!french?'Pedagogy':'Pédagogie'}: {attempt.pedScore || 0}%</span>
                    <span>{!french?'Math':'Maths'}: {attempt.mathScore || 0}%</span>
                  </div>
                </div>
                <button 
                  onClick={() => setReviewTest(attempt)} 
                  style={{ color: '#1cb0f6', cursor: 'pointer', background: 'none', border: '1px solid #1cb0f6', padding: '8px 20px', borderRadius: '8px', fontWeight: 'bold' }}
                >
				{!french?'Review':'Réviser'}
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
        testData={currentMockTests[reviewTest.testId]} 
        darkMode={darkMode} 
        reviewData={reviewTest} 
        onComplete={saveTestResult}
		french = {french}		
        onExit={() => { setReviewTest(null); }} 
      />
    )}

    {activeTest && !testStarted && (
      <TestBriefing 
        test={currentMockTests[activeTest.id]}
        darkMode={darkMode}
        onBack={() => setActiveTest(null)}
        onStart={() => setTestStarted(true)}
	french = {french}
      />
    )}

    {activeTest && testStarted && (
      <PracticeTest 
        key={activeTest.instanceId}
        testData={currentMockTests[activeTest.id]} 
        darkMode={darkMode} 
        reviewData={null} 
		french = {french}
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

      {view === 'test-info' && <TestInfo profileColor = {profileColor} profileIcon = {profileIcon} updateProfileIcon = {updateProfileIcon} profileName = {profileName} setProfileName={setProfileName} french = {french} setFrench = {setFrench} user={user} darkMode={darkMode} setDarkMode={setDarkMode} onBackHome={()=> setView('landing')}  />}
	  {view === 'study-guide' && <Study profileColor = {profileColor} profileIcon = {profileIcon} updateProfileIcon = {updateProfileIcon} profileName = {profileName} setProfileName={setProfileName} french = {french} setFrench = {setFrench} user={user} darkMode={darkMode} setDarkMode={setDarkMode} onBackHome={()=> setView('landing')}  />}
	  {view === 'resources-info' && <Resources profileColor = {profileColor} profileIcon = {profileIcon} updateProfileIcon = {updateProfileIcon} profileName = {profileName} setProfileName={setProfileName} french = {french} setFrench = {setFrench} user={user} darkMode={darkMode} setDarkMode={setDarkMode} onBackHome={()=> setView('landing')}  />}
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
			Discussion: {currentMockTests[openComments]?.title}
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
  profileColor={profileColor} 
  profileIcon={profileIcon}   
  isAdmin={isAdmin}         
  userHistory={userHistory} 
  darkMode={darkMode} 
  french={french}
/>
      </div>
    </div>
  </div>
)}
{showAboutModal && (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 5000, padding: '15px', boxSizing: 'border-box'
  }}>
    {/* Background Overlay */}
    <div 
      onClick={() => setShowAboutModal(false)}
      style={{
        position: 'absolute', width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'
      }}
    />
    
    {/* Modal Card */}
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      maxHeight: '90vh', // Ensures it doesn't go off-screen on mobile
      backgroundColor: darkMode ? '#2c2c2c' : '#fff',
      borderRadius: '24px',
      padding: window.innerWidth < 600 ? '30px 20px' : '40px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      color: darkMode ? '#fff' : '#3c3c3c',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }}>
      <button 
        onClick={() => setShowAboutModal(false)}
        style={{
          position: 'absolute', top: '20px', right: '20px',
          background: 'none', border: 'none', fontSize: '1.5rem',
          cursor: 'pointer', color: '#888', zIndex: 10
        }}
      >
        ×
      </button>

      <div style={{ fontSize: '3rem', marginBottom: '20px', flexShrink: 0 }}>🌎</div>
      <h2 style={{ marginBottom: '15px', flexShrink: 0 }}>{!french?'About MPT Prep':'À propos de Prépa TCM'}</h2>
      
      <div style={{ textAlign: 'left' }}>
        <p style={{ 
          lineHeight: '1.6', 
          color: darkMode ? '#bbb' : '#666',
          fontSize: '0.95rem',
          marginBottom: '15px'
        }}>
          {!french ? "This site was originally created by me, Liam Salt, in December of 2025 while I was in my second year of teacher's college at the University of Ottawa." : "Ce site a été initialement créé par moi, Liam Salt, en décembre 2025, alors que j'étais en deuxième année à la Faculté d'éducation de l'Université d'Ottawa."}
          {" "}
          {!french ? "While preparing for the MPT, I noticed that the existing preparation resources did not really work for me. Something which many teacher education students do not seem to be aware of is the" : "En me préparant pour le TCM (Test de compétences en mathématiques), j'ai remarqué que les ressources de préparation existantes ne me convenaient pas vraiment. Un élément dont beaucoup d'étudiants en enseignement ne semblent pas avoir connaissance est le document du "}
          <a href={!french ? "https://s3.ca-central-1.amazonaws.com/authoring.mathproficiencytest.ca/user_uploads/515714/authoring/MPT_Framework_August_2025_EN_-s/MPT_Framework_August_2025_EN_-s.pdf" : "https://s3.ca-central-1.amazonaws.com/authoring.mathproficiencytest.ca/user_uploads/515714/authoring/TCM_Document-cadre_Aout_2025_FR_-s/TCM_Document-cadre_Aout_2025_FR_-s.pdf"} style={{color: '#1cb0f6', fontWeight: 'bold'}}>{!french ? 'MPT Framework' : 'Cadre du TCM'}</a>
          {!french ? ' document, provided by the ministry.' : '.'} 
          {" "}
          {!french ? "This document outlines exactly what content is to be tested on any instance of the test, including specific topics, number of questions, etc. My initial idea for this site was to make the information contained in that document more easily accessible and also more digestible. This original idea is what is found under the \"Test Info\" tab on this site." : "Ce document précise exactement le contenu évalué lors de chaque passation du test, y compris les sujets spécifiques, le nombre de questions, etc. Mon idée initiale pour ce site était de rendre les informations contenues dans ce document plus accessibles et plus faciles à assimiler. Cette idée originale se retrouve sous l'onglet « Info Test » de ce site."}
        </p>

        <p style={{ 
          lineHeight: '1.6', 
          color: darkMode ? '#bbb' : '#666',
          fontSize: '0.95rem'
        }}>
          {!french ? "While I was back for winter break, waiting for the continuation of my last practicum, I noticed that many members of my family were playing Duolingo. I wondered if I could somehow involve Duolingo-style gamification to make preparation for the Math Proficiency Test more engaging. Finding myself with a bounty of free time, I startedto slowly building up the site. Eventually, I got it to a presentable state, implementing Duolingo-inspired features like XP, streaks, and iconic sounds (musical credit goes to Damara). I'm always working on improving the site, I plan on implementing support for graphs and tables sometime soon. If you want to see what's going on underthe hood, feel free to check out this project on " : "Pendant les vacances d'hiver, en attendant le début de mon dernier stage, j'ai remarqué que plusieurs membres de ma famille jouaient à Duolingo. Je me suis demandé si je pouvais intégrer une part de ludification (gamification) à la Duolingo pour rendre la préparation au Test de compétences en mathématiques plus stimulante. Profitant de ce temps libre, j'ai commencé à bâtir ce site peu à peu. J'ai finalement réussi à obtenir un résultat présentable en implantant des fonctionnalités inspirées de Duolingo, comme les points d'expérience (XP), les séries de jours et des sons emblématiques (crédit musical à Damara). Je travaille constamment à l'amélioration du site et je prévois d'ajouter prochainement la prise en charge des graphiques et des tableaux. Si vous voulez voir ce qui se passe sous le capot, n'hésitez pas à consulter ce projet sur "}
          <a href="https://github.com/MPTPrep/mptprep.github.io" style={{color: '#1cb0f6'}}>Github</a>.
        </p>
      </div>

      <button 
        onClick={() => setShowAboutModal(false)}
        style={{
          marginTop: '30px',
          padding: '12px 30px',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#1cb0f6',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
          flexShrink: 0
        }}
      >
        {!french ? 'Got it!' : 'Fermer'}
      </button>
    </div>
  </div>
)}
  
  {view === 'landing' && (
  <>
  <div style={{height:'200px'}}></div>

	
  <div style={{ 
        padding: '40px 0', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderTop: darkMode ? '1px solid #333' : '1px solid #eee' 
      }}>
        <a 
          href="https://github.com/MPTPrep/mptprep.github.io" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: darkMode ? '#888' : '#3c3c3c',
            textDecoration: 'none',
            fontSize: '1.5rem', 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: '600', fontFamily: 'Montserrat' }}>GitHub</span>
        </a>
  </div></> )}
  
</div>
 );
}