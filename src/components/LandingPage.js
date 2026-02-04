import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { updateProfile, updatePassword,sendPasswordResetEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

export default function LandingPage({french,setFrench, onNavigate, streak, xp, user, darkMode, setDarkMode, onBackHome, profileName, setProfileName, profileColor, updateProfileIcon, profileIcon  }) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  
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
  
  const modules = [
    {
      id: 'learning-path',
      title: !french ? 'MPT Duolingo' : 'TCM Duolingo',
      subtitle: !french?'Knowledge Map':"Carte de connaissances",
      icon: '❤️',
      description: !french?'Master math and pedagogy concepts step-by-step.':'Maîtrisez les concepts de mathématiques et de pédagogie étape par étape.',
      color: '#1cb0f6'
    },
    {
      id: 'practice-tests',
      title: !french ? 'Practice Tests' : "Tests de pratique",
      subtitle: !french?'Timed Exams':'Examens chronométrés',
      icon: '📝',
      description: !french?'Simulate the real MPT with full-length exams.':'Simulez le vrai TCM avec des examens complets.',
      color: '#ff4b4b'
    },
    
	{
      id: 'study-guide',
      title: !french?'Study':"Étudier",
      subtitle: !french?'Dictionary of Terms':'Dictionnaire de termes',
      icon: '📚',
      description: !french?'Definitions of terms and example questions.':'Définitions de termes et exemples de questions.',
      color: '#06c248'
    },
	{
      id: 'test-info',
      title: 'Test Info',
      subtitle: !french?'Requirements':'Exigences',
      icon: 'ℹ️',
      description: !french?'Details about what the test contains.':'Détails sur le contenu du test.',
      color: '#ffc107'
    },
	{
      id: 'resources-info',
      title: 'Resources',
      subtitle: !french?'Helpful Links':'Liens utiles',
      icon: '🔗',
      description: !french?'Helplful external resources.':'Liens utiles externales.',
      color: '#db82ed'
    },
	{
      id: 'about',
      title: !french?'About':"À propos",
      subtitle: 'Information',
      icon: '🌎',
      description: !french?'Information about this site.':'Informations sur ce site',
      color: '#8c8c8b'
    }
	
  ];

  return (
    <div style={{ 
      padding: '20px 40px', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      fontFamily: 'Montserrat',
      backgroundColor: darkMode ? '#1a1a1a' : '#fff',
      minHeight: '100vh'
    }}>
      
    
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
	
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          <button 
            onClick={onBackHome}
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
                  <span>{!french ? 'Dark Mode' : 'Mode sombre'}</span>
                  <span>{darkMode ? '🌙' : '☀️'}</span>
                </div>

                <div  onClick={() => setFrench(!french)} style={{ padding: '12px', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span onClick={() => setFrench(!french)} > {!french ? 'Language':'Langue'}</span>
                  <span style={{ fontSize: '0.8rem', backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', color: '#000' }}>{french ? (<>FR <img src="https://cdn3.emoji.gg/emojis/8690-franco-ontarian-flag.png" width="13px" height="auto" alt="Franco_Ontarian_Flag" style={{ verticalAlign: 'middle' }} /></>) : 'EN 🇨🇦'}</span>
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

      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '5rem', marginBottom: '10px', color: darkMode ? '#fff' : '#3c3c3c' }}>{!french ? 'MPT Prep' : 'Prépa au TCM'}</h1>
        <p style={{ color: darkMode ? '#fff': '#666', marginBottom: '50px' }}>{!french ? "Welcome back! Choose a module below to get started." : "Bonjour ! Choisissez un module ci-dessous pour commencer."}</p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
		
          {modules.map((m) => (
			
			<div 
              key={m.id}
              onClick={() => onNavigate(m.id)}
              style={{
                backgroundColor: darkMode ? '#2c2c2c' : 'white',
                borderRadius: '24px',
                border: '2px solid #e5e5e5',
                padding: '40px 20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = m.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e5e5';
              }}
            >
              <div style={{ 
                fontSize: '3rem', 
                background: darkMode ? '#333' : '#f7f7f7', 
                width: '100px', 
                height: '100px', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {m.icon}
              </div>
              <h2 style={{ margin: '0', color: darkMode ? '#fff' : '#3c3c3c' }}>{m.title}</h2>
              <p style={{ fontWeight: 'bold', color: m.color, marginTop: '5px' }}>{m.subtitle}</p>
              <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: '1.4' }}>{m.description}</p>
              
              {m.id === 'learning-path' && (
                <div style={{ marginTop: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: '#ff9600' }}>
					{!french?`🔥 ${streak} DAY STREAK`:`🔥 Série de ${streak} jour`+(streak != 1 ?'s':'')} 
                </div>
              )}
            </div>
			  ))
			  
			  
			  }
        </div>
      </div>
	  
	  
    </div>
  );
}