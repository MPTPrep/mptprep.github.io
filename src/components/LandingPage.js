import React from 'react';

export default function LandingPage({ onNavigate, streak, xp }) {
  const modules = [
    {
      id: 'learning-path',
      title: 'MPT Duolingo',
      subtitle: 'Knowledge Map',
      icon: '❤️', // You can replace this with an <img> tag for your logo
      description: 'Master math and pedagogy concepts step-by-step.',
      color: '#1cb0f6'
    },
    {
      id: 'practice-tests',
      title: 'Practice Tests',
      subtitle: 'Timed Exams',
      icon: '📝',
      description: 'Simulate the real MPT with full-length exams.',
      color: '#ff4b4b'
    },
    {
      id: 'test-info',
      title: 'Test Info',
      subtitle: 'Requirements',
      icon: 'ℹ️',
      description: 'Scoring rubrics, dates, and what to bring.',
      color: '#ffc107'
    }
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>MPT Prep Portal</h1>
      <p style={{ color: '#666', marginBottom: '50px' }}>Welcome back! Choose your training module.</p>

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
              backgroundColor: 'white',
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
              background: '#f7f7f7', 
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
            <h2 style={{ margin: '0', color: '#3c3c3c' }}>{m.title}</h2>
            <p style={{ fontWeight: 'bold', color: m.color, marginTop: '5px' }}>{m.subtitle}</p>
            <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: '1.4' }}>{m.description}</p>
            
            {m.id === 'learning-path' && (
              <div style={{ marginTop: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: '#ff9600' }}>
                🔥 {streak} DAY STREAK
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}