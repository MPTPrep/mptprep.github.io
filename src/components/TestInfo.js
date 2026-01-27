import React, { useState } from 'react';
import { auth } from '../firebase';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

export default function TestInfo({ user, darkMode, setDarkMode, onBackHome }) {
  const [activeTab, setActiveTab] = useState('math');
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : '?';

  return (
    <div className="test-info-wrapper" style={{ 
      padding: '20px 40px', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      fontFamily: 'Montserrat, sans-serif',
      backgroundColor: darkMode ? '#1a1a1a' : '#fff',
      minHeight: '100vh',
      color: darkMode ? '#fff' : '#000',
      transition: 'background-color 0.3s ease'
    }}>
      
      {/* HEADER NAVIGATION */}
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
              color: darkMode ? '#fff' : '#777'
            }}
          >
            Home
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
            Logout
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
                {userInitial}
              </div>
            </div>

            {/* DROPDOWN MENU */}
            {showAccountMenu && (
              <div style={{
                position: 'absolute', top: '50px', right: '0', width: '220px',
                backgroundColor: darkMode ? '#2c2c2c' : '#fff',
                border: '1px solid #e5e5e5', borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000,
                padding: '10px', color: darkMode ? '#fff' : '#000'
              }}>
                <div style={{ padding: '10px', fontSize: '0.8rem', color: '#888', borderBottom: '1px solid #eee' }}>
                  {user?.email || "Not logged in"}
                </div>
                
                <div 
                  onClick={() => setDarkMode(!darkMode)}
                  style={{ padding: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}
                >
                  <span>Dark Mode</span>
                  <span>{darkMode ? '🌙' : '☀️'}</span>
                </div>

                <div style={{ padding: '12px', opacity: 0.6, fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Language</span>
                  <span style={{ fontSize: '0.7rem', backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', color: '#000' }}>
                    EN (FR soon)
                  </span>
                </div>

                <div 
                  onClick={() => auth.signOut()}
                  style={{ padding: '12px', cursor: 'pointer', color: '#ff4b4b', fontWeight: '600', borderTop: '1px solid #eee', marginTop: '5px', fontSize: '0.9rem' }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <header className="test-info-header">
        <h1>MPT Framework Blueprint</h1>
		
        <div className="framework-explainer">
          <p>
            This guide is a simplified breakdown of the <strong>Mathematics Proficiency Test Framework (August 2025)</strong> found on the Ministry's website (linked below). This document gives a detailed breakdown of
			the content of each component of the test.
             The summary presented here reflects much of the information found in 
			the document, but intentionally simplifies its contents. Therefore, please consult official ministry resources for authoritative information regarding the test.
          </p>
          <a 
            href="https://s3.ca-central-1.amazonaws.com/authoring.mathproficiencytest.ca/user_uploads/515714/authoring/MPT_Framework_August_2025_EN_-s/MPT_Framework_August_2025_EN_-s.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-link"
          >
            📄 View Official Ministry Framework (PDF)
          </a>
        </div>
      </header>

      {/* DASHBOARD TABS */}
      <section className="visual-breakdown">
        <div 
          className={`component-card ${activeTab === 'math' ? 'active' : ''}`}
          onClick={() => setActiveTab('math')}
        >
          <h3>Math Content</h3>
          <div className="stat">70%</div>
          <p>50 Questions</p>
        </div>

        <div 
          className={`component-card ${activeTab === 'pedagogy' ? 'active' : ''}`}
          onClick={() => setActiveTab('pedagogy')}
        >
          <h3>Pedagogy</h3>
          <div className="stat">30%</div>
          <p>21 Questions</p>
        </div>

        <div className="pass-requirement">
            You must achieve at least <strong>70% in EACH</strong> component to pass.
        </div>
      </section>

      <div className="tab-content-area">
        {activeTab === 'math' ? (
          <section className="info-block">
            <h2 className="block-title">Math Content Breakdown</h2>
            
            <p className="section-intro">Questions are based on the Ontario Mathematics Curriculum (Grades 3–9). Select a dimension below to see specific skills tested:</p>

            <details className="info-card">
              <summary>Number Sense (16 Questions)</summary>
              <div className="details-content">
                <p><strong>Fundamental Knowledge & Skills:</strong></p>
                <ul>
                  <li>Operations (addition, subtraction, multiplication, division, and square roots) involving whole numbers, integers, decimals, and fractions.</li>
                  <li>Expressing whole numbers using place value and expanded form.</li>
                  <li>Working with exponents and square roots of perfect squares.</li>
                  <li>Evaluating numeric expressions involving order of operations (BEDMAS/PEMDAS).</li>
                  <li>Rounding decimal numbers to specified place values.</li>
                  <li>Scientific notation for very large or very small numbers.</li>
                </ul>
              </div>
            </details>

            <details className="info-card">
              <summary>Relationships & Proportional Reasoning (27 Questions)</summary>
              <div className="details-content">
                <p><strong>Fundamental Knowledge & Skills:</strong></p>
                <ul>
                  <li>Representing and comparing rates, ratios, and proportions.</li>
                  <li>Solving problems involving percentages, including sales tax (13% HST), commissions, and discounts.</li>
                  <li>Financial math: Simple interest (<Latex>$I=Prt$</Latex>) and calculating earnings (Gross vs Net).</li>
                  <li>Algebraic expressions: simplifying and evaluating by substitution.</li>
                  <li>Solving first-degree equations <Latex>$ax + b = c$</Latex> or <Latex>$ax + b = cx + d$</Latex>.</li>
                  <li>Linear Relations: Understanding slope (rate of change), <Latex>$y$</Latex>-intercepts, and graphing lines.</li>
                  <li>Data literacy: Analyzing mean, median, mode, and probability of independent events.</li>
                </ul>
              </div>
            </details>

            <details className="info-card">
              <summary>Measurement (7 Questions)</summary>
              <div className="details-content">
                <p><strong>Fundamental Knowledge & Skills:</strong></p>
                <ul>
                  <li>Conversions within the metric system (e.g., <Latex>$mm^2$</Latex> to <Latex>$cm^2$</Latex> or <Latex>$mL$</Latex> to <Latex>$L$</Latex>).</li>
                  <li>Applying the Pythagorean theorem (<Latex>$a^2 + b^2 = c^2$</Latex>) in right-angled triangles.</li>
                  <li>Determining perimeter and area of composite 2D shapes (circles, trapezoids, etc.).</li>
                  <li>Calculating surface area and volume of right prisms and cylinders.</li>
                </ul>
              </div>
            </details>
            
            
          </section>
        ) : (
  /* PEDAGOGY TAB */
  <section className="info-block">
    <h2 className="block-title">Pedagogy & Professional Practice</h2>
    

    {/* PILLAR 1: ASSESSMENT POLICY */}
    <h2 className="sub-section-title"> Assessment & Evaluation (Growing Success) [9 Questions] </h2>
    
    <details className="info-card" open>
      <summary>The 7 Fundamental Principles</summary>
      <div className="details-content">
        <p>To ensure every student has a fair chance, assessment must:</p>
        <ul className="concept-list">
          <li><strong>1. Be Fair, Transparent, and Equitable:</strong> Free of bias; students know the criteria before starting.</li>
          <li><strong>2. Support All Students:</strong> Includes specific provisions for Special Education (IEP) and ELL.</li>
          <li><strong>3. Be Carefully Planned:</strong> Relate directly to curriculum expectations and learning goals.</li>
          <li><strong>4. Be Communicated Clearly:</strong> Regular updates to parents and students throughout the year.</li>
          <li><strong>5. Be Ongoing and Varied:</strong> Use <strong>Triangulation</strong> (Observations, Conversations, Products).</li>
          <li><strong>6. Provide Descriptive Feedback:</strong> "Actionable" next steps given <em>during</em> learning.</li>
          <li><strong>7. Develop Self-Assessment:</strong> Help students monitor their own growth (metacognition).</li>
        </ul>
        
      </div>
    </details>

    <details className="info-card">
      <summary>Assessment FOR, AS, and OF Learning</summary>
      <div className="details-content">
        <div className="concept-grid">
          <div className="concept-box"><strong>FOR:</strong> Diagnostic/Formative. Teacher adjusts instruction.</div>
          <div className="concept-box"><strong>AS:</strong> Formative. Student monitors own learning.</div>
          <div className="concept-box"><strong>OF:</strong> Summative. Final evaluation for report card.</div>
        </div>
        
      </div>
    </details>

    {/* PILLAR 2: INSTRUCTIONAL FRAMEWORKS */}
    <h2 className="sub-section-title">Inclusive Instruction (Learning for All) [7 Questions]</h2>

    <details className="info-card">
      <summary>The Tiered Approach to Intervention</summary>
      <div className="details-content">
        <p>A systematic model for addressing learning gaps before they become failures:</p>
        <div className="tier-card tier-1">
          <strong>Tier 1: Universal</strong>
          <p>High-quality classroom instruction for 100% of students. Teacher monitors class-wide progress.</p>
        </div>
        <div className="tier-card tier-2">
          <strong>Tier 2: Targeted</strong>
          <p>Small-group instruction and specific skill-building for students not progressing in Tier 1.</p>
        </div>
        <div className="tier-card tier-3">
          <strong>Tier 3: Intensive</strong>
          <p>Individualized, high-intensity support (e.g., SERT involvement or alternative programming).</p>
        </div>
        
      </div>
    </details>

    <details className="info-card">
      <summary>UDL vs. Differentiated Instruction (DI)</summary>
      <div className="details-content">
        <div className="concept-grid">
          <div className="concept-box">
            <strong>Universal Design (UDL)</strong>
            <p><em>Proactive.</em> Barriers are removed for everyone before instruction (Representation, Expression, Engagement).</p>
          </div>
          <div className="concept-box">
            <strong>Differentiated Instruction (DI)</strong>
            <p><em>Responsive.</em> Adjusting Content, Process, or Product based on Readiness/Interest.</p>
          </div>
        </div>
        
      </div>
    </details>

    {/* PILLAR 3: MATHEMATICAL PEDAGOGY */}
    <h2 className="sub-section-title">Math-Specific Pedagogy (Curriculum Context)  [5 Questions]</h2>

    <details className="info-card">
      <summary>The 7 Mathematical Processes</summary>
      <div className="details-content">
        <p>These characterize how students interact with math concepts. You will be asked to identify these in classroom scenarios:</p>
        <ul className="concept-list">
          <li><strong>Problem Solving:</strong> Applying strategies to solve tasks with no obvious solution.</li>
          <li><strong>Reasoning & Proving:</strong> Investigating conjectures and justifying conclusions with logic.</li>
          <li><strong>Reflecting:</strong> Checking if a solution "makes sense."</li>
          <li><strong>Selecting Tools:</strong> Choosing the right tech (calculator) or mental strategy.</li>
          <li><strong>Connecting:</strong> Linking math concepts to other topics or the real world.</li>
          <li><strong>Representing:</strong> Using symbols, graphs, physical models, or diagrams.</li>
          <li><strong>Communicating:</strong> Expressing math ideas clearly using proper vocabulary.</li>
        </ul>
        
      </div>
    </details>

    <details className="info-card">
      <summary>High-Impact Instructional Practices</summary>
      <div className="details-content">
        <p>The Ministry identifies these as the most effective ways to teach math:</p>
        <ul className="concept-list">
          <li><strong>Learning Goals & Success Criteria:</strong> Knowing exactly what is being learned.</li>
          <li><strong>Direct Instruction:</strong> Intentional, guided instruction.</li>
          <li><strong>Small-Group Instruction:</strong> Working with students on specific needs.</li>
          <li><strong>Math Conversations:</strong> Students sharing strategies and "Math Talk."</li>
          <li><strong>Tools & Representations:</strong> Using manipulatives (e.g., Alge-tiles, blocks).</li>
        </ul>
      </div>
    </details>
  </section>
)}
      </div>
    </div>
  );
  
};
