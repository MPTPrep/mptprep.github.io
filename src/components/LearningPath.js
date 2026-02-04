import React, { useState } from 'react'; 
import Sidebar from './Sidebar';
import Lesson from './Lesson';
import Quiz from './Quiz';
import LessonResult from './LessonResult';
import PathComplete from './PathComplete';

import { auth, db } from '../firebase';
import { updateProfile, updatePassword,sendPasswordResetEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";


export default function LearningPath({ 
  nodes, 
  currentNode, 
  handleSelectNode, 
  showLesson, 
  showQuiz, 
  showResult, 
  lastResult,
  handleStartQuiz,
  handleQuizComplete,
  handleReplay,
  handleContinue,
  addOverallXp,
  handleWin,
  xp,
  lessonXp,
  streak,
  french,
  setFrench,
  darkMode,
  setDarkMode,
  user,
  showAccountMenu,
  setShowAccountMenu,
  onBackHome,
  profileName,
  setProfileName,
  profileColor,
  updateProfileIcon,
  profileIcon 
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  
  const [forceTrophy, setForceTrophy] = useState(false);

  const isPathMastered = nodes.length > 0 && nodes.every(n => n.mastery >= 100);
  const isFocusMode = showLesson || showQuiz || showResult;

  const [showSettingsModal, setShowSettingsModal] = useState(false);	  
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
  const [newPassword, setNewPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [activeSettingTab, setActiveSettingTab] = useState('menu'); 
  const COLORS = ['#1cb0f6', '#ff4b4b', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22', '#34495e'];
  const EMOJIS = ['🎓', '✏️', '🧠', '🦉', '⭐', '🔥', '📈', '🎯'];
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
const mobileStyles = `
  @media (max-width: 768px) {
    .lp-sidebar-container {
      position: fixed !important;
      left: ${isSidebarOpen ? '0' : '-100%'} !important;
      width: 85% !important;
      height: 100vh !important;
      z-index: 2000 !important;
      box-shadow: 5px 0 15px rgba(0,0,0,0.2);
    }
    .lp-main-workspace {
      width: 100vw !important;
    }
    .mobile-hide {
      display: none !important;
    }
    .lp-content-wrapper {
      padding: 20px 15px !important;
    }
  }
`;
  const handleTrophyToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Trophy Clicked! Previous State:", forceTrophy);
    setForceTrophy(!forceTrophy);
  };

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      width: '100vw', 
      backgroundColor: darkMode ? '#1a1a1a' : '#fff',
      color: darkMode ? '#fff' : '#000',
      overflow: 'hidden',
      position: 'fixed',
      top: 0, left: 0
    }}>
      <style>{mobileStyles}</style>
      {/* 1. SIDEBAR */}
      <div className="lp-sidebar-container" style={{ 
        width: isSidebarOpen ? '300px' : '0px', 
        flexShrink: 0,
        transition: 'width 0.3s ease',
        borderRight: `1px solid ${darkMode ? '#333' : '#eee'}`,
        zIndex: 100,
        backgroundColor: darkMode ? '#1a1a1a' : '#fff',
        overflow: 'hidden'
      }}>
        <Sidebar 
          nodes={nodes} 
          onSelect={(node) => {
            setForceTrophy(false); 
            handleSelectNode(node);
			if(window.innerWidth <= 768) setIsSidebarOpen(false);
          }} 
          currentNode={currentNode} 
          xp={xp} 
          streak={streak} 
          darkMode={darkMode}
		  french = {french}
		  setFrench = {setFrench}
        />
      </div>

      {/* 2. MAIN WORKSPACE */}
      <div className="lp-main-workspace" style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, position: 'relative' }}>
        
        {/* HEADER BAR */}
        <header style={{ 
          height: '70px',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '0 30px', 
          borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}`,
          backgroundColor: darkMode ? '#1a1a1a' : '#fff',
          zIndex: 1000, 
          position: 'relative',
          pointerEvents: 'auto'
        }}>

          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
		  
		  <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: 'none', border: 'none', fontSize: '1.5rem', 
              cursor: 'pointer', color: '#1cb0f6', padding: '5px'
            }}
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
		  <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{!french?'MPT Duolingo':'TCM Duolingo'}</h2>
		  </div>
		  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
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
            {/* THE TROPHY TOGGLE */}
            {isPathMastered && (
              <button 
                type="button"
                onClick={handleTrophyToggle}
                style={{ 
                  fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '5px', borderRadius: '50%',
                  filter: forceTrophy ? 'none' : 'grayscale(1)',
                  transition: 'transform 0.2s',
                  outline: 'none'
                }}
              >
                🏆
              </button>
            )}

            <button onClick={onBackHome} style={headerBtnStyle(darkMode)}>{!french ? 'Home' : 'Accueil'}</button>
            <button className="mobile-hide" onClick={() => auth.signOut()} style={headerBtnStyle(darkMode)}>{!french?'Logout':'Déconnexion'}</button>
            
            
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

            {/* Dropdown Menu */}
            {showAccountMenu && (
              <div style={{
                position: 'absolute', top: '50px', right: '0', width: '220px',
                backgroundColor: darkMode ? '#2c2c2c' : '#fff',
                border: '1px solid #e5e5e5', borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000,
                padding: '10px', fontFamily: 'Montserrat',
                color: darkMode ? '#fff' : '#000'
              }}>
                <div style={{ padding: '10px', fontSize: '0.8rem', color: '#888', borderBottom: '1px solid #eee' }}>
                  {user?.email}
                </div>
                
                <div 
                  onClick={() => setDarkMode(!darkMode)}
                  style={{ padding: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}
                >
                  <span>{!french?'Dark Mode':'Mode sombre'}</span>
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
                  {!french?'Logout':'Déconnexion'}
                </div>
              </div>
            )}
          </div>
      
          </div>
        </header>

        {/* SIDEBAR TOGGLE BUTTON */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
            zIndex: 1099, width: '25px', height: '50px', backgroundColor: '#1cb0f6',
            color: 'white', border: 'none', borderRadius: '0 8px 8px 0', cursor: 'pointer'
          }}
        >
          {isSidebarOpen ? '‹' : '›'}
        </button>

        {/* MAIN SCROLLABLE CONTENT */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '40px 20px', zIndex: 1 }}>
          <div  className="lp-content-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* VIEW SELECTOR LOGIC */}
            {(() => {
              if (isFocusMode) {
			  if (showResult) return <LessonResult success={lastResult.success} lessonXpBefore={lastResult.before} lessonXpAfter={lastResult.after} onReplay={handleReplay} onContinue={handleContinue} darkMode = {darkMode} french = {french}/>;
                if (showQuiz) return <Quiz node={currentNode} onComplete={handleQuizComplete} addXp={addOverallXp} onWin={handleWin} darkMode = {darkMode} french = {french}/>;
                return <Lesson node={currentNode} onNext={handleStartQuiz} darkMode = {darkMode} french = {french} />;
              }
              
              if (forceTrophy) {
                
                return (
                  <PathComplete 
                    totalXp={xp} 
                    streak={streak} 
                    darkMode={darkMode} 
                    onReview={() => setForceTrophy(false)} 
					user={user}
                  />
                );
              }

              
              return (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  {currentNode ? (
                    <div style={{ 
                      padding: '40px', borderRadius: '24px', 
                      backgroundColor: darkMode ? '#222' : '#fcfcfc',
                      border: `1px solid ${darkMode ? '#333' : '#eee'}`,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                    }}>
                      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{currentNode.title}</h2>
                      <p style={{ color: '#888', marginBottom: '30px' }}>Mastery: {currentNode.mastery}%</p>
                      <button className="option primary-button" style={{ width: '250px' }} onClick={handleStartQuiz}>
                        Review Module
                      </button>
                    </div>
                  ) : (
                    <div style={{ opacity: 0.3, marginTop: '100px' }}>
                      <div style={{ fontSize: '5rem', marginBottom: '20px' }}></div>
                      <h2>{!french ? 'Pick a topic from the sidebar to begin' : 'Choisissez un sujet dans la barre latérale pour commencer.'}</h2>
					  <h3>{!french ? 'Your progress is saved automatically' : 'Votre progression est enregistrée automatiquement.'}</h3>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </main>
      </div>
	  {isSidebarOpen && window.innerWidth <= 768 && (
      <div 
        onClick={() => setIsSidebarOpen(false)}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1999
        }}
      />
    )}
    </div>
  );
}

const headerBtnStyle = (darkMode) => ({
  padding: '8px 16px', 
  borderRadius: '12px', 
  cursor: 'pointer',
  border: `1px solid ${darkMode ? '#444' : '#e5e5e5'}`, 
  backgroundColor: darkMode ? '#2c2c2c' : '#fff', 
  color: darkMode ? '#fff' : '#444', 
  fontWeight: '600', 
  fontSize: '0.85rem',
  display: 'inline-flex', 
  alignItems: 'center',
  whiteSpace: 'nowrap'    
});

const avatarStyle = {
  width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#1cb0f6',
  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', cursor: 'pointer'
};

const dropdownStyle = (darkMode) => ({
  position: 'absolute', top: '50px', right: '0', width: '180px',
  backgroundColor: darkMode ? '#222' : '#fff', border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
  borderRadius: '10px', zIndex: 10001, padding: '5px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
});