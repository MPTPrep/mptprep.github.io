import React from 'react';
import { jsPDF } from 'jspdf';

export default function PathComplete({ totalXp, streak, darkMode, user, onReview }) {
  
  const downloadCertificate = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [842, 595]
    });

    // 1. ROBUST NAME FETCHING
    const emailName = user?.email ? user.email.split('@')[0].replace(/[._0-9]/g, ' ') : "";
    const nameToDisplay = (user?.displayName || emailName || "MPT Learner").toUpperCase();

    // 2. STATIC DATE (2026)
    const today = new Date();
    const dateStr = `${today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, 2026`;

    // 3. DRAW BORDERS
    doc.setDrawColor(28, 176, 246); // MPT Blue
    doc.setLineWidth(15);
    doc.rect(20, 20, 802, 555); 
    
    doc.setDrawColor(255, 215, 0); // Gold accent
    doc.setLineWidth(2);
    doc.rect(35, 35, 772, 525); 

    // 4. MAIN TITLES
    doc.setTextColor(40, 40, 40);
    doc.setFont('times', 'bolditalic');
    doc.setFontSize(50);
    doc.text('Certificate of Completion', 421, 110, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(22);
    doc.text('This officially certifies that', 421, 175, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(44);
    doc.setTextColor(28, 176, 246);
    doc.text(nameToDisplay, 421, 235, { align: 'center' });

    // Underline
    doc.setDrawColor(220, 220, 220);
    doc.line(220, 245, 622, 245);

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(18);
    doc.text('has mastered the comprehensive curriculum of the', 421, 295, { align: 'center' });
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.text('MPT PREP TRAINING FRAMEWORK', 421, 335, { align: 'center' });

    // 5. THE SEAL WITH A VECTOR STAR
    const cx = 421;
    const cy = 460;
    
    // Gold Circle
    doc.setDrawColor(218, 165, 32);
    doc.setFillColor(255, 215, 0);
    doc.circle(cx, cy, 40, 'FD');



    // 6. DATE & SIGNATURE
    doc.setTextColor(80, 80, 80);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    
    doc.text(dateStr, 150, 485);
    doc.line(100, 490, 250, 490);
    doc.text('Date of Issue', 150, 505);

    doc.setFont('times', 'italic');
    doc.setFontSize(22);
    doc.text('MPT Prep Team', 620, 485);
    doc.line(600, 490, 750, 490);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Official Representative', 620, 505);

    doc.save(`MPT_Certificate_${nameToDisplay.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '80px 20px', color: darkMode ? '#fff' : '#333' }}>
      <div style={{ fontSize: '8rem', textShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>🏆</div>
      <h1 style={{ 
        fontSize: '3.5rem', fontWeight: '800', margin: '20px 0',
        background: 'linear-gradient(to right, #1cb0f6, #58cc02)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>
        Congratulations!
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '50px' }}>
        You've completed all modules. You are officially MPT ready! Download your certificate below.
      </p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button onClick={downloadCertificate} style={primaryBtn}>
          📜 Download Certificate
        </button>
        
      </div>
    </div>
  );
}

const primaryBtn = {
  padding: '18px 45px', borderRadius: '20px', backgroundColor: '#58cc02',
  color: 'white', border: 'none', fontWeight: 'bold', fontSize: '1.2rem',
  cursor: 'pointer', boxShadow: '0 5px 0 #46a302', transition: 'transform 0.1s'
};

const secondaryBtn = (darkMode) => ({
  padding: '18px 45px', borderRadius: '20px', backgroundColor: 'transparent',
  color: darkMode ? '#fff' : '#888', border: `2px solid ${darkMode ? '#444' : '#e5e5e5'}`, 
  fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer'
});