import React, { useEffect, useState } from 'react';

export default function LessonResult({
  success, lessonXpBefore, lessonXpAfter,
  overallXpAfter, leveledUp, unlockedNext,
  streakContinued, onContinue
}) {
  const [lessonFill, setLessonFill] = useState(lessonXpBefore);

  useEffect(() => {
    const timer = setTimeout(() => setLessonFill(lessonXpAfter), 400);
    return () => clearTimeout(timer);
  }, [lessonXpAfter]);

  return (
    <div className="max-w-xl mx-auto p-8 border rounded-2xl shadow-lg text-center bg-white">
      <div className="text-6xl mb-4">{success ? '🎉' : '💔'}</div>
      <h2 className="text-3xl font-bold mb-4">{success ? 'Lesson Complete!' : 'Out of Hearts'}</h2>
      
      {success && (
        <div className="space-y-6">
          <div>
            <p className="text-gray-600 mb-2">Lesson Mastery: {lessonXpAfter}%</p>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-1000" 
                style={{ width: `${lessonFill}%` }}
              ></div>
            </div>
          </div>
          <div className="space-y-2 font-semibold text-blue-600">
            {unlockedNext && <p>🔓 New topic unlocked!</p>}
            {leveledUp && <p>⬆️ You reached a new Level!</p>}
            {streakContinued && <p>🔥 Daily streak maintained!</p>}
          </div>
        </div>
      )}
      
      {!success && <p className="text-gray-600 mb-6">Don't give up! Review the material and try again.</p>}
      
      <button 
        onClick={onContinue} 
        className="mt-6 w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors"
      >
        Continue
      </button>
    </div>
  );
}