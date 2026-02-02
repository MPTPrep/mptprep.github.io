import React, { useState } from 'react';
import { auth } from '../firebase';

export default function LandingPage({french,setFrench, onNavigate, streak, xp, user, darkMode, setDarkMode, onBackHome }) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  
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
                backgroundColor: '#1cb0f6', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white', fontWeight: 'bold',
                fontFamily: 'Montserrat', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                {user?.email?.charAt(0).toUpperCase()}
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
                  <span style={{ fontSize: '0.8rem', backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', color: '#000' }}>{french ? (<>FR <a href="https://emoji.gg/emoji/8690-franco-ontarian-flag" target="_blank" rel="noopener noreferrer"><img src="https://cdn3.emoji.gg/emojis/8690-franco-ontarian-flag.png" width="13px" height="auto" alt="Franco_Ontarian_Flag" style={{ verticalAlign: 'middle' }} /></a></>) : 'EN 🇨🇦'}</span>
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