import React, { useState, useMemo } from 'react';
import { auth } from '../firebase';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { studyData } from '../data/studyData';

export default function Study({ darkMode, user, setDarkMode, onBackHome }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : '?';
  const categories = ["All", "Number Sense", "Pedagogy", "Geometry", "Measurement", "Data Literacy"];
	
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
    return [...studyData].sort((a, b) => a.term.localeCompare(b.term));
  }, []);

  const filteredData = useMemo(() => {
    return sortedStudyData.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
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

  const navBtnStyle = {
    padding: '8px 18px', borderRadius: '12px', 
    border: `1px solid ${darkMode ? '#444' : '#e5e5e5'}`,
    backgroundColor: darkMode ? '#2c2c2c' : '#fff', cursor: 'pointer',
    fontFamily: 'Montserrat', fontWeight: '600', fontSize: '0.85rem',
    color: darkMode ? '#fff' : '#777'
  };
  const handleRandomTerm = () => {
    const randomIndex = Math.floor(Math.random() * studyData.length);
    setSelectedTerm(studyData[randomIndex]);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      
      {/* HEADER */}
      <header style={{ 
        height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '0 30px', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}`,
        backgroundColor: darkMode ? '#1a1a1a' : '#fff', zIndex: 100
      }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'Montserrat' }}>MPT Study Room</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onBackHome} style={navBtnStyle}>Home</button>
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
              onClick={(e) => { e.stopPropagation(); setShowAccountMenu(!showAccountMenu); }}
              style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1cb0f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {userInitial}
            </div>
            {showAccountMenu && (
              <div style={{ position: 'absolute', top: '55px', right: '0', width: '220px', backgroundColor: darkMode ? '#2c2c2c' : '#fff', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 1000 }}>
                <div onClick={() => setDarkMode(!darkMode)} style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Dark Mode</span> <span>{darkMode ? '🌙' : '☀️'}</span>
                </div>
                <div onClick={() => auth.signOut()} style={{ padding: '10px', cursor: 'pointer', color: '#ff4b4b', fontWeight: 'bold' }}>Logout</div>
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
            placeholder="Search terms..."
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
      Random Article
    </button>
        </div>

        {/* CONTENT PANEL */}
        <main style={{ flex: 1, padding: '60px', overflowY: 'auto' }}>
          {selectedTerm ? (
            <div style={{ maxWidth: '750px' }}>
              <span style={{ backgroundColor: '#1cb0f6', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>{selectedTerm.category}</span>
              <h1 style={{ fontSize: '3.5rem', margin: '15px 0' }}>{selectedTerm.term}</h1>
              

<section style={{ marginBottom: '30px' }}>
  <h3 style={{ color: '#1cb0f6' }}>Definition</h3>
  <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
    <Latex>
      {formattedDefinition}
    </Latex>
  </div>
</section>

<div style={{ padding: '20px', borderRadius: '16px', backgroundColor: darkMode ? '#252525' : '#f0faff', borderLeft: '5px solid #1cb0f6' }}>
  <h4 style={{ color: '#1cb0f6', marginTop: 0 }}>Dive Deeper</h4>
  <div style={{ fontStyle: 'italic' }}>
    <Latex>
      {formattedRigor}
    </Latex>
  </div>
</div>

<section style={{ marginTop: '40px' }}>
  <h4 style={{ opacity: 0.6 }}>Sample MPT Question</h4>
  <div style={{ padding: '20px', borderRadius: '12px', border: `1px dashed ${darkMode ? '#444' : '#ccc'}`, marginBottom: '10px' }}>
    <Latex>
      {formattedQuestion}
    </Latex>
  </div>
  
  <details style={answerDropdownStyle}>
    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>View Solution</summary>
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
              <h2>Select a term to start studying</h2>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}