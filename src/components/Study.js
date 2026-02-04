import React, { useState, useMemo } from 'react';

import { auth, db } from '../firebase';
import { updateProfile, updatePassword,sendPasswordResetEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { studyData } from '../data/studyData';
import { studyDataFR } from '../data/studyDataFR';


export default function Study({ french, setFrench, darkMode, user, setDarkMode, onBackHome, profileName, setProfileName, profileColor, updateProfileIcon, profileIcon  }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [activeCategory, setActiveCategory] = useState(!french ? "All" : "Tout");
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
  
  const categories = useMemo(() => [
  !french ? "All" : "Tout", 
  !french ? "Number Sense" : "Sens du nombre", 
  !french ? "Pedagogy" : "Pédagogie", 
  !french ? "Geometry" : "Géométrie", 
  !french ? "Measurement" : "Mesure", 
  !french ? "Data Literacy" : "Littératie des données"
], [french]);
	
  const formatText = (text) => {
    if (!text) return "";
    let safeText = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return safeText
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/@(\w+)/g, '<span style="color: #1cb0f6; font-weight: bold;">@$1</span>');
  };

  
  const formattedDefinition = useMemo(() => formatText(selectedTerm?.definition), [selectedTerm]);
  const formattedRigor = useMemo(() => formatText(selectedTerm?.rigorousNote), [selectedTerm]);
  const formattedQuestion = useMemo(() => formatText(selectedTerm?.exampleQuestion), [selectedTerm]);
  const formattedAnswer = useMemo(() => formatText(selectedTerm?.sampleAnswer), [selectedTerm]);

  const sortedStudyData = useMemo(() => {
    return [...(!french ? studyData: studyDataFR)].sort((a, b) => a.term.localeCompare(b.term));
  }, [french]);

  const filteredData = useMemo(() => {
    return sortedStudyData.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = activeCategory === (!french ? "All" : "Tout") || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, sortedStudyData]);
  
  const answerDropdownStyle = {
    backgroundColor: darkMode ? '#2c2c2c' : '#f9f9f9',
    padding: '15px',
    borderRadius: '12px',
    marginTop: '20px',
    border: `1px solid ${darkMode ? '#444' : '#eee'}`,
    color: darkMode ? '#fff' : '#333'
  };
  
  useMemo(() => {
  if (!french && activeCategory === "Tout") setActiveCategory("All");
  if (french && activeCategory === "All") setActiveCategory("Tout");
  if (!french && activeCategory === "Sens du nombre") setActiveCategory("Number Sense");
  if (french && activeCategory === "Number Sense") setActiveCategory("Sens du nombre");
  if (!french && activeCategory === "Géométrie") setActiveCategory("Geometry");
  if (french && activeCategory === "Geometry") setActiveCategory("Géométrie");
  if (!french && activeCategory === "Pédagogie") setActiveCategory("Pedagogy");
  if (french && activeCategory === "Pedagogy") setActiveCategory("Pédagogie");
  if (!french && activeCategory === "Mesure") setActiveCategory("Measurement");
  if (french && activeCategory === "Measurement") setActiveCategory("Mesure");
  if (!french && activeCategory === "Littératie des données") setActiveCategory("Data Literacy");
  if (french && activeCategory === "Data Literacy") setActiveCategory("Littératie des données");

 
 
  if (selectedTerm) {
    const newDataSet = french ? studyDataFR : studyData;
    const matchingTerm = newDataSet.find(item => item.id === selectedTerm.id);
    if (matchingTerm) {
      setSelectedTerm(matchingTerm);
    }
  }
}, [french]);
  
  const navBtnStyle = {
    padding: '8px 18px', borderRadius: '12px', 
    border: `1px solid ${darkMode ? '#e5e5e5' : '#e5e5e5'}`,
    backgroundColor: darkMode ? '#2c2c2c' : '#fff', cursor: 'pointer',
    fontFamily: 'Montserrat', fontWeight: '600', fontSize: '0.85rem',
    color: darkMode ? '#fff' : '#777',
	
  };
  const handleRandomTerm = () => {
    const randomIndex = Math.floor(Math.random() * (!french ? studyData: studyDataFR).length);
    setSelectedTerm((!french ? studyData: studyDataFR)[randomIndex]);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#fff', color: darkMode ? '#fff' : '#000' }}>
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
      {/* HEADER */}
      <header style={{ 
        height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '0 30px', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}`,
        backgroundColor: darkMode ? '#1a1a1a' : '#fff', zIndex: 100
      }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'Montserrat' }}> {!french ? 'MPT Study Room': 'Salle d\'étude du TCM'}</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onBackHome} style={navBtnStyle}>{!french ? 'Home' : 'Accueil'}</button>
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
		  {!french ? 'Logout':'Déconnexion'}
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
                  <span> {!french ? 'Dark Mode':'Mode sombre'}</span>
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
                   {!french ? 'Logout':'Déconnexion'}
                </div>
              </div>
            )}
          </div>
		  </div>
		  </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* SIDEBAR */}
        <div style={{ width: '350px', borderRight: `1px solid ${darkMode ? '#333' : '#eee'}`, display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <input 
            type="text"
            placeholder={!french ? "Search terms...": 'Rechercher des termes...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '14px', borderRadius: '12px', border: `2px solid ${darkMode ? '#333' : '#eee'}`, backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000', outline: 'none' }}
          />
		  
		  
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '15px 0' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: '6px 12px', borderRadius: '15px', border: 'none', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 'bold', backgroundColor: activeCategory === cat ? '#1cb0f6' : (darkMode ? '#333' : '#eee'), color: activeCategory === cat ? '#fff' : (darkMode ? '#bbb' : '#666') }}>
                {cat}
              </button>
            ))}
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {filteredData.map(item => (
              <div key={item.id} onClick={() => setSelectedTerm(item)} style={{ padding: '15px', borderRadius: '12px', cursor: 'pointer', marginBottom: '8px', backgroundColor: selectedTerm?.id === item.id ? '#1cb0f620' : 'transparent', border: `1px solid ${selectedTerm?.id === item.id ? '#1cb0f6' : 'transparent'}` }}>
                <div style={{ fontWeight: 'bold' }}>{item.term}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>{item.category}</div>
              </div>
            ))}
          </div>
		  <button 
      onClick={handleRandomTerm}
      style={{
        marginTop: '15px',
        padding: '12px',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#1cb0f6',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'transform 0.1s'
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
	{!french ? 'Random Article' : 'Article aléatoire' }
    </button>
        </div>

        {/* CONTENT PANEL */}
        <main style={{ flex: 1, padding: '60px', overflowY: 'auto' }}>
          {selectedTerm ? (
            <div style={{ maxWidth: '750px' }}>
              <span style={{ backgroundColor: '#1cb0f6', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>{selectedTerm.category}</span>
              <h1 style={{ fontSize: '3.5rem', margin: '15px 0' }}>{selectedTerm.term}</h1>
              

<section style={{ marginBottom: '30px' }}>
  <h3 style={{ color: '#1cb0f6' }}>{!french ? 'Definition' : 'Définition'}</h3>
  <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
    <Latex>
      {formattedDefinition}
    </Latex>
  </div>
</section>

<div style={{ padding: '20px', borderRadius: '16px', backgroundColor: darkMode ? '#252525' : '#f0faff', borderLeft: '5px solid #1cb0f6' }}>
  <h4 style={{ color: '#1cb0f6', marginTop: 0 }}>{!french ? "Dive Deeper" : "Approfondissement"}</h4>
  <div style={{ fontStyle: 'italic' }}>
    <Latex>
      {formattedRigor}
    </Latex>
  </div>
</div>

<section style={{ marginTop: '40px' }}>
  <h4 style={{ opacity: 0.6 }}>{!french ? "Sample MPT Question" : "Exemple de question du TCM"}</h4>
  <div style={{ padding: '20px', borderRadius: '12px', border: `1px dashed ${darkMode ? '#444' : '#ccc'}`, marginBottom: '10px' }}>
    <Latex>
      {formattedQuestion}
    </Latex>
  </div>
  
  <details style={answerDropdownStyle}>
    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>{!french ? "View Solution" : "Voir la solution"}</summary>
    <div style={{ marginTop: '15px', padding: '15px', borderTop: `1px solid ${darkMode ? '#444' : '#eee'}` }}>
      <Latex>
        {formattedAnswer}
      </Latex>
    </div>
  </details>
</section>
              <footer style={{ marginTop: '60px', fontSize: '0.8rem', opacity: 0.5 }}>Source: {selectedTerm.source}</footer>
            </div>
          ) : (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
              <div style={{ fontSize: '5rem' }}>📚</div>
              <h2>{!french ? 'Select a term to start studying':'Sélectionnez un terme pour commencer à étudier'}</h2>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}