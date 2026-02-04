import React, { useState, useMemo } from 'react';
import { auth, db } from '../firebase';


import { updateProfile, updatePassword,sendPasswordResetEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import { resourceData } from '../data/resourceData';
import { resourceDataFR } from '../data/resourceDataFR';

export default function Resources({ french, setFrench, darkMode, user, setDarkMode, onBackHome, profileName, setProfileName, profileColor, updateProfileIcon, profileIcon }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
  
  const categories = !french 
    ? ["All", "Math", "Pedagogy", "Ministry Documents", "Tools"]
    : ["Tout", "Maths", "Pédagogie", "Documents du ministère", "Outils"];

  const getCategoryFilter = (cat) => {
    if (cat === "All" || cat === "Tout") return "All";
    if (cat === "Math" || cat === "Maths") return "Math";
    if (cat === "Pedagogy" || cat === "Pédagogie") return "Pedagogy";
    if (cat === "Ministry Documents" || cat === "Documents du ministère") return "Ministry Documents";
    if (cat === "Tools" || cat === "Outils") return "Tools";
    return cat;
  };

  const filteredResources = useMemo(() => {
    const dataToFilter = french ? resourceDataFR : resourceData;
    const filterKey = getCategoryFilter(activeCategory);

    return dataToFilter.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterKey === "All" || item.allCategories.includes(filterKey);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, french]);

  const navBtnStyle = {
    padding: '8px 18px', 
    borderRadius: '12px', 
    border: `1px solid ${darkMode ? '#e5e5e5' : '#e5e5e5'}`,
    backgroundColor: darkMode ? '#2c2c2c' : '#fff', 
    cursor: 'pointer',
    fontFamily: 'Montserrat', 
    fontWeight: '600', 
    fontSize: '0.85rem',
    color: darkMode ? '#fff' : '#777',
    transition: '0.2s'
  };
  const mobileStyles = `
  @media (max-width: 768px) {
    .resources-sidebar {
      position: fixed !important;
      top: 0;
      left: ${isSidebarOpen ? '0' : '-100%'} !important;
      width: 80% !important;
      height: 100vh !important;
      z-index: 2000;
      transition: 0.3s ease;
      background-color: ${darkMode ? '#1a1a1a' : '#fff'} !important;
      box-shadow: 5px 0 15px rgba(0,0,0,0.2);
    }
    .resources-main {
      padding: 20px !important;
    }
    .mobile-toggle {
      display: flex !important;
    }
    
    .resources-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
  const gridContainerStyle = {
    display: viewMode === "grid" ? 'grid' : 'flex',
    flexDirection: viewMode === "grid" ? 'unset' : 'column',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '20px'
  };

  const cardStyle = () => ({
    backgroundColor: darkMode ? '#2c2c2c' : '#fff',
    borderRadius: '16px',
    padding: viewMode === "grid" ? '20px' : '12px 20px',
    border: `1px solid ${darkMode ? '#444' : '#eee'}`,
    display: 'flex',
    flexDirection: viewMode === "grid" ? 'column' : 'row',
    alignItems: viewMode === "grid" ? 'unset' : 'center',
    justifyContent: 'space-between',
    gap: viewMode === "grid" ? '12px' : '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: '0.2s'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#fcfcfc', color: darkMode ? '#fff' : '#000' }}>
      <style>{mobileStyles}</style>
	  <button 
  className="mobile-toggle"
  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  style={{
    position: 'fixed', bottom: '25px', right: '25px',
    width: '60px', height: '60px', borderRadius: '50%',
    backgroundColor: '#1cb0f6', color: '#fff', border: 'none',
    zIndex: 2001, boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    display: 'none', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
  }}
>
  {isSidebarOpen ? '✕' : '🔍'}
</button>
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
        <h2 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'Montserrat' }}>
            {!french ? 'MPT Additional Resources' : 'Ressources supplémentaires du TCM'}
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onBackHome} style={navBtnStyle}>
            {!french ? 'Home' : 'Accueil'}
          </button>
          <button 
            onClick={() => auth.signOut()} 
            style={navBtnStyle}
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
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <aside className="resources-sidebar" style={{ width: '280px', borderRight: `1px solid ${darkMode ? '#333' : '#eee'}`, padding: '30px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* SEARCH */}
          <div>
             <input 
              type="text" 
              placeholder={!french ? "Search..." : "Rechercher..."} 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '10px', border: `1px solid ${darkMode ? '#444' : '#eee'}`, backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000' }}
            />
          </div>

          {/* VIEW TOGGLE */}
          <div>
            <label style={{ fontSize: '0.7rem', fontWeight: 'bold', opacity: 0.6, marginBottom: '8px', display: 'block' }}>
                {!french ? 'LAYOUT' : 'DISPOSITION'}
            </label>
            <div style={{ display: 'flex', backgroundColor: darkMode ? '#222' : '#eee', padding: '4px', borderRadius: '10px' }}>
                <button onClick={() => setViewMode("grid")} style={{ flex: 1, padding: '6px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'grid' ? (darkMode ? '#444' : '#fff') : 'transparent', color: darkMode ? '#fff' : '#000', fontWeight: 'bold' }}>
                    {!french ? 'Grid' : 'Grille'}
                </button>
                <button onClick={() => setViewMode("list")} style={{ flex: 1, padding: '6px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'list' ? (darkMode ? '#444' : '#fff') : 'transparent', color: darkMode ? '#fff' : '#000', fontWeight: 'bold' }}>
                    {!french ? 'List' : 'Liste'}
                </button>
            </div>
          </div>

          {/* CATEGORIES */}
          <div>
            <label style={{ fontSize: '0.7rem', fontWeight: 'bold', opacity: 0.6, marginBottom: '8px', display: 'block' }}>
                {!french ? 'CATEGORIES' : 'CATÉGORIES'}
            </label>
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => {setActiveCategory(cat);setIsSidebarOpen(false);}} 
                style={{ width: '100%', textAlign: 'left', padding: '10px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: activeCategory === cat ? '#1cb0f6' : 'transparent', color: activeCategory === cat ? '#fff' : (darkMode ? '#aaa' : '#555'), fontWeight: '600' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        <main className="resources-main" style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
          <div style={gridContainerStyle}>
            {filteredResources.map(res => (
              <div key={res.id} style={cardStyle()}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    {res.allCategories.map((cat) => (
                      <span 
                        key={cat} 
                        style={{ 
                          fontSize: '0.65rem', 
                          fontWeight: 'bold', 
                          backgroundColor: darkMode ? '#1cb0f630' : '#1cb0f615', 
                          color: '#1cb0f6', 
                          padding: '3px 8px', 
                          borderRadius: '6px',
                          border: `1px solid ${darkMode ? '#1cb0f640' : '#1cb0f620'}`,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {cat.toUpperCase()}
                      </span>
                    ))}
                    {viewMode === "list" && <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{res.type}</span>}
                  </div>
                  <h4 style={{ margin: 0, fontSize: viewMode === 'grid' ? '1.1rem' : '1rem' }}>{res.title}</h4>
                  {viewMode === "grid" && <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '8px' }}>{res.description}</p>}
                </div>

                {viewMode === "grid" ? (
                   res.type === "Video" || res.type === "Vidéo" ? (
                    <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '10px', overflow: 'hidden', marginTop: '10px' }}>
                      <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} src={`https://www.youtube.com/embed/${res.videoId}`} title={res.title} allowFullScreen></iframe>
                    </div>
                  ) : (
                    <a href={res.url} target="_blank" rel="noreferrer" download={res.type === "PDF" ? "" : undefined} style={{ marginTop: 'auto', padding: '10px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#1cb0f6', color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>
                        {res.type === "PDF" ? (!french ? "Download PDF" : "Télécharger le PDF") : (!french ? "Visit Website" : "Visiter le site")}
                    </a>
                  )
                ) : (
                  <a href={(res.type === "Video" || res.type === "Vidéo") ? `https://youtube.com/watch?v=${res.videoId}` : res.url} target="_blank" rel="noreferrer" download={res.type === "PDF" ? "" : undefined} style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: darkMode ? '#333' : '#f0f0f0', color: darkMode ? '#fff' : '#000', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    {(res.type === "Video" || res.type === "Vidéo") ? (!french ? "Watch" : "Regarder") : res.type === "PDF" ? (!french ? "View PDF" : "Voir le PDF") : (!french ? "Open Link" : "Ouvrir le lien")}
                  </a>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}