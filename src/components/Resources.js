import React, { useState, useMemo } from 'react';
import { auth } from '../firebase';
import { resourceData } from '../data/resourceData';
import { resourceDataFR } from '../data/resourceDataFR';

export default function Resources({ french, setFrench, darkMode, user, setDarkMode, onBackHome }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); 

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
                backgroundColor: '#1cb0f6', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white', fontWeight: 'bold',
                fontFamily: 'Montserrat', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                {user?.email?.charAt(0).toUpperCase()}
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

                <div onClick={() => setFrench(!french)} style={{ padding: '12px', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <span>{!french ? 'Language' : 'Langue'}</span>
                  <span style={{ fontSize: '0.8rem', backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', color: '#000' }}>{french ? 'FR 🇫🇷' : 'EN 🇨🇦'}</span>
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
        <aside style={{ width: '280px', borderRight: `1px solid ${darkMode ? '#333' : '#eee'}`, padding: '30px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
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
                onClick={() => setActiveCategory(cat)} 
                style={{ width: '100%', textAlign: 'left', padding: '10px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: activeCategory === cat ? '#1cb0f6' : 'transparent', color: activeCategory === cat ? '#fff' : (darkMode ? '#aaa' : '#555'), fontWeight: '600' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
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