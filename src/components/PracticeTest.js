
import React, { useState, useEffect, useMemo } from 'react';
import Latex from 'react-latex-next';

export default function PracticeTest({ testData, onComplete, onExit, darkMode, reviewData, french }) {
  const activeTest = testData;  
  
  const isReview = !!reviewData;
  const [viewMode, setViewMode] = useState(isReview ? 'summary' : 'test'); 
  const [currentSectionIdx, setCurrentSectionIdx] = useState(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState(reviewData?.answers || {});
  const [timeElapsed, setTimeElapsed] = useState(reviewData?.timeTaken || 0);

  const currentSection = activeTest.sections[currentSectionIdx];
  const currentQuestion = currentSection.questions[currentQuestionIdx];

  useEffect(() => {
    if (viewMode !== 'test') return;
    const timer = setInterval(() => setTimeElapsed(p => p + 1), 1000);
    return () => clearInterval(timer);
  }, [viewMode]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scores = useMemo(() => {
    let pedTotal = 0, pedCorrect = 0, mathTotal = 0, mathCorrect = 0;
    const tagStats = {};

    activeTest.sections.forEach(sec => {
      sec.questions.forEach(q => {
        const isCorrect = userAnswers[q.id] === q.a;
        
        if (sec.id === 'pedagogy') {
          pedTotal++;
          if (isCorrect) pedCorrect++;
        } else {
          mathTotal++;
          if (isCorrect) mathCorrect++;
        }

        q.tags.forEach(tag => {
          if (!tagStats[tag]) tagStats[tag] = { total: 0, correct: 0 };
          tagStats[tag].total++;
          if (isCorrect) tagStats[tag].correct++;
        });
      });
    });

    const totalQuestions = pedTotal + mathTotal;
    return {
      totalScore: totalQuestions > 0 ? Math.round(((pedCorrect + mathCorrect) / totalQuestions) * 100) : 0,
      pedScore: pedTotal > 0 ? Math.round((pedCorrect / pedTotal) * 100) : 0,
      mathScore: mathTotal > 0 ? Math.round((mathCorrect / mathTotal) * 100) : 0,
      timeTaken: timeElapsed,
      tagStats,
      answers: userAnswers
    };
  }, [userAnswers, activeTest, timeElapsed]);

  const handleFinish = () => {
    setViewMode('summary');
    onComplete({ ...scores, testId: activeTest.id });
  };

  const getOptionStyle = (idx) => {
    const isSelected = userAnswers[currentQuestion.id] === idx;
    const isCorrect = currentQuestion.a === idx;
    const showResults = viewMode === 'review' || viewMode === 'summary';

    let style = {
      padding: '20px', borderRadius: '12px', marginBottom: '10px', border: '2px solid',
      position: 'relative', transition: '0.2s', cursor: 'pointer',
      backgroundColor: 'transparent', borderColor: '#e5e5e5'
    };

    if (!showResults) {
      if (isSelected) {
        style.borderColor = '#1cb0f6';
        style.backgroundColor = '#f0f9ff';
      }
      return style;
    }

    style.cursor = 'default';
    if (isCorrect) {
      style.borderColor = '#2ecc71';
      style.backgroundColor = '#e8f8ef';
    } else if (isSelected && !isCorrect) {
      style.borderColor = '#ff4b4b';
      style.backgroundColor = '#fff0f0';
    } else {
      style.opacity = 0.6;
    }
    return style;
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      
      {/* SIDEBAR */}
      <div style={{ width: '320px', borderRight: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', backgroundColor: darkMode ? '#222' : '#f7f7f7', borderBottom: '1px solid #e5e5e5' }}>
          {activeTest.sections.map((sec, i) => (
            <button
              key={i}
              onClick={() => { setCurrentSectionIdx(i); setCurrentQuestionIdx(0); }}
              style={{
                flex: 1, padding: '15px 5px', border: 'none', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 'bold',
                backgroundColor: 'transparent', color: currentSectionIdx === i ? '#1cb0f6' : '#888',
                borderBottom: currentSectionIdx === i ? '3px solid #1cb0f6' : '3px solid transparent'
              }}
            >
              {sec.title.toUpperCase()} {i > 0 ? (i === 1 ? '(PT 1)' : '(PT 2)') : ''}
            </button>
          ))}
        </div>

        <div style={{ padding: '20px', borderBottom: '1px solid #e5e5e5' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>{!french?'Section':'Partie'} {currentSectionIdx + 1}</span>
            <span style={{ color: '#1cb0f6', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '1.1rem' }}>{formatTime(timeElapsed)}</span>
          </div>
          {currentSection.id !== 'pedagogy' && (
            <div style={{ 
              display: 'inline-block', padding: '4px 10px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 'bold',
              backgroundColor: currentSection.calc ? '#e8f8ef' : '#fff0f0', color: currentSection.calc ? '#2ecc71' : '#ff4b4b',
              border: `1px solid ${currentSection.calc ? '#2ecc71' : '#ff4b4b'}`
            }}>
              {currentSection.calc ? (!french?'CALCULATOR ALLOWED':'CALCULATRICE AUTHORISEE') : (!french?'NO CALCULATOR':'CALCULATRICE INTERDITE')}
            </div>
          )}
        </div>

        <div style={{ flex: 1, padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', alignContent: 'start', overflowY: 'auto' }}>
          {currentSection.questions.map((q, i) => {
            const isAnswered = userAnswers[q.id] !== undefined;
            const isCorrect = userAnswers[q.id] === q.a;
            let bgColor = isAnswered ? '#1cb0f6' : 'transparent';
            if (viewMode === 'review' || viewMode === 'summary') bgColor = isCorrect ? '#2ecc71' : '#ff4b4b';

            return (
              <button 
                key={q.id} 
                onClick={() => { if (viewMode === 'summary') setViewMode('review'); setCurrentQuestionIdx(i); }} 
                style={{ 
                  height: '35px', backgroundColor: bgColor, color: (isAnswered || viewMode !== 'test') ? '#fff' : 'inherit', 
                  cursor: 'pointer', borderRadius: '4px', border: currentQuestionIdx === i ? '2px solid #1cb0f6' : '1px solid #ddd' 
                }}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <div style={{ padding: '20px', borderTop: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(viewMode === 'review' || viewMode === 'summary') && (
            <button onClick={() => setViewMode('summary')} style={{ width: '100%', padding: '10px', backgroundColor: '#1cb0f6', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>{!french?'View Summary':'Voir le résumé'}</button>
          )}
          <button onClick={onExit} style={{ width: '100%', padding: '10px', backgroundColor: '#3c3c3c', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none' }}>{!french?'Exit':'Sortir'}</button>
          {viewMode === 'test' && <button onClick={handleFinish} style={{ width: '100%', padding: '10px', backgroundColor: '#2ecc71', color: '#fff', borderRadius: '8px', cursor: 'pointer', border: 'none', fontWeight: 'bold' }}>{!french?'Finish Test':'Terminer le test'}</button>}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: '60px', overflowY: 'auto' }}>
        {viewMode === 'summary' ? (
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ color: '#1cb0f6' }}>{!french?'Exam Summary':"Résumé de l'examen"}</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
              <div style={{ padding: '30px', borderRadius: '16px', border: '2px solid #e5e5e5', backgroundColor: darkMode ? '#222' : '#fcfcfc', gridColumn: 'span 2' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>{scores.totalScore}%</div>
                <div style={{ color: '#666', fontWeight: 'bold', marginBottom: '10px' }}>{!french?'OVERALL SCORE':'SCORE TOTAL'}</div>
                <div style={{ fontSize: '1.2rem', color: '#1cb0f6', fontWeight: 'bold' }}>{!french?'Time Elapsed':'Temps écoulé'}: {formatTime(timeElapsed)}</div>
              </div>
              <div style={{ padding: '20px', border: '2px solid #e5e5e5', borderRadius: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1cb0f6' }}>{scores.pedScore}%</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>{!french?'PEDAGOGY':'PÉDAGOGIE'}</div>
              </div>
              <div style={{ padding: '20px', border: '2px solid #e5e5e5', borderRadius: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1cb0f6' }}>{scores.mathScore}%</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>MATH{!french?'':'S'}</div>
              </div>

              {/* Performance by Topic Table */}
              <div style={{ padding: '20px', border: '2px solid #e5e5e5', borderRadius: '16px', textAlign: 'left', gridColumn: 'span 2' }}>
                <h3 style={{ marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Performance {!french?'by Topic':'par sujet'}</h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {Object.entries(scores.tagStats).map(([tag, stat]) => {
                    const percent = Math.round((stat.correct / stat.total) * 100);
                    return (
                      <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ width: '120px', fontSize: '0.85rem', fontWeight: 'bold' }}>{tag}</div>
                        <div style={{ flex: 1, height: '8px', backgroundColor: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: `${percent}%`, height: '100%', backgroundColor: percent > 70 ? '#2ecc71' : percent > 40 ? '#f1c40f' : '#ff4b4b' }}></div>
                        </div>
                        <div style={{ width: '40px', fontSize: '0.8rem', textAlign: 'right' }}>{percent}%</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
              {currentQuestion.tags.map(t => <span key={t} style={{ fontSize: '0.7rem', backgroundColor: '#f0f0f0', padding: '2px 8px', borderRadius: '10px', color: '#666' }}>#{t}</span>)}
            </div>
            <div style={{ fontSize: '1.5rem', marginBottom: '30px' }}><Latex>{currentQuestion.q}</Latex></div>
			
            {currentQuestion.options.map((opt, i) => (
              <div key={i} onClick={() => viewMode === 'test' && setUserAnswers({...userAnswers, [currentQuestion.id]: i})} style={getOptionStyle(i)}>
                <div style={{ position: 'absolute', left: '-35px', fontWeight: 'bold' }}>
                  {viewMode === 'review' && currentQuestion.a === i && <span style={{ color: '#2ecc71' }}>✓</span>}
                  {viewMode === 'review' && userAnswers[currentQuestion.id] === i && currentQuestion.a !== i && <span style={{ color: '#ff4b4b' }}>✕</span>}
                </div>
                <Latex>{opt}</Latex>
              </div>
            ))}
            {(viewMode === 'review' || viewMode === 'summary') && userAnswers[currentQuestion.id] === undefined && (
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 'bold', 
            backgroundColor: '#ff9f43', 
            color: '#fff', 
            padding: '4px 12px', 
            borderRadius: '4px',
			marginBottom:'10px'			
          }}>
            NOT ANSWERED
          </span>
        )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
              <button disabled={currentQuestionIdx === 0 && currentSectionIdx === 0} onClick={() => {
                if (currentQuestionIdx > 0) setCurrentQuestionIdx(p => p - 1);
                else { 
                  const prevSecIdx = currentSectionIdx - 1;
                  setCurrentSectionIdx(prevSecIdx); 
                  setCurrentQuestionIdx(activeTest.sections[prevSecIdx].questions.length - 1); 
                }
              }} style={{ padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', border: '1px solid #ddd', backgroundColor: 'transparent', color: darkMode ? '#fff' : '#000' }}>← {!french?'Back':'Précédent'}</button>
              
              {currentQuestionIdx === currentSection.questions.length - 1 ? (
                currentSectionIdx < activeTest.sections.length - 1 ? (
                  <button onClick={() => { setCurrentSectionIdx(p => p + 1); setCurrentQuestionIdx(0); }} style={{ padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#1cb0f6', color: '#fff', border: 'none', fontWeight: 'bold' }}>Next Section →</button>
                ) : (
                  viewMode === 'test' && <button onClick={handleFinish} style={{ padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#2ecc71', color: '#fff', border: 'none', fontWeight: 'bold' }}>Complete Exam</button>
                )
              ) : (
                <button onClick={() => setCurrentQuestionIdx(p => p + 1)} style={{ padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', backgroundColor: '#1cb0f6', color: '#fff', border: 'none', fontWeight: 'bold' }}>{!french?'Next Question':'Question suivante'}</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}