
import React from 'react';

export default function TestBriefing({ test, onStart, onBack, darkMode }) {
  
  const totalQuestions = test.sections.reduce((acc, sec) => acc + sec.questions.length, 0);

  return (
    <div style={{ 
      maxWidth: '650px', 
      margin: '40px auto', 
      padding: '40px', 
      borderRadius: '24px', 
      backgroundColor: darkMode ? '#222' : '#fff',
      boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.08)',
      color: darkMode ? '#fff' : '#000',
      border: darkMode ? '1px solid #333' : '1px solid #eee'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{test.title}</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: '#666', fontSize: '0.9rem' }}>
          <span>{totalQuestions} Questions</span>
          <span>⏱️ No Time Limit</span>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
         Instructions
        </h3>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
          <li>The test is divided into <strong>Pedagogy</strong> and <strong>Mathematics</strong> sections.</li>
          <li>A calculator is only permitted in the second Math section (indicated on the test).</li>
          <li>You can review your results and see correct answers immediately after finishing.</li>
        </ul>
      </div>

      {/* MINISTRY TRANSPARENCY BOX */}
      <div style={{ 
        borderLeft: '4px solid #1cb0f6', 
        padding: '20px', 
        backgroundColor: darkMode ? '#1a262e' : '#f0f9ff', 
        borderRadius: '0 12px 12px 0',
        marginBottom: '30px' 
      }}>
        <h3 style={{ marginTop: 0, fontSize: '1rem', color: '#1cb0f6' }}>Notes and Caution</h3>
		
		{test.isOfficial && (
          <p style={{ fontSize: '0.85rem', lineHeight: '1.5', margin: '10px 0' }}>
            Questions in this particular practice exam are directly taken from publicly available <strong>Ministry of Education</strong> practice materials.
          </p>
        )}
        
        <p style={{ fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
         This text-based version does not include questions requiring interpretation of visual graphs, geometric figures, or  data ables (<strong>all of which are tested on the real MPT</strong>). To practice those specific skills and to use the official  mock test environment, including the specific calculator, accessibility tools, and formula sheet that you will have access to on the real test, please visit the following:
        </p>
        <a 
          href="https://mathproficiencytest.ca/#/en/applicant/explore/before:practice" 
          target="_blank" 
          rel="noreferrer" 
          style={{ 
            display: 'inline-block', 
            marginTop: '12px', 
            color: '#1cb0f6', 
            fontWeight: 'bold', 
            fontSize: '0.85rem',
            textDecoration: 'none',
            borderBottom: '1px solid #1cb0f6'
          }}
        >
          Official MPT Practice Portal →
        </a>
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <button 
          onClick={onBack}
          style={{ 
            flex: 1, padding: '16px', borderRadius: '12px', border: '2px solid #ddd', 
            backgroundColor: 'transparent', color: darkMode ? '#fff' : '#444', 
            fontWeight: 'bold', cursor: 'pointer' 
          }}
        >
          Cancel
        </button>
        <button 
          onClick={onStart} 
          style={{ 
            flex: 2, padding: '16px', borderRadius: '12px', border: 'none', 
            backgroundColor: '#2ecc71', color: '#fff', 
            fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem'
          }}
        >
          Start Practice Exam
        </button>
      </div>
    </div>
  );
}