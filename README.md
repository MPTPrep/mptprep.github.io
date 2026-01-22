# MPT Prep
### Gamified Learning for the Ontario Math Proficiency Test

[**Visit the Live Site**](https://mptprep.github.io/)

**MPT Prep** is a web-based educational platform designed to help teacher education students master the Math Proficiency Test. By utilizing a structured learning path and gamification principles, the app provides a clear, engaging roadmap for students to build mathematical confidence and track their progress.

---

## Features

### Structured Learning Path
The curriculum is organized into a series of learning nodes. Students unlock new mathematical concepts only after demonstrating mastery of prerequisites, ensuring a solid foundation before advancing to complex topics.

### Progress Tracking
* **Daily Streaks:** Encourages consistent practice by tracking consecutive days of learning. The system resets the streak to zero if a day is missed to encourage accountability.
* **XP System:** Students earn Experience Points (XP) for completing lessons and quizzes, contributing to an overall level.
* **Mastery Levels:** Each topic features a mastery percentage based on quiz performance, allowing students to visualize their proficiency.

### Interactive Quizzes
* **Lesson Modules:** Direct instruction on specific math concepts.
* **Assessment:** Immediate feedback on quiz results to identify strengths and weaknesses.
* **Performance History:** Tracks progress across different attempts to show improvement over time.

### User Experience
* **Authentication:** Secure user accounts via Firebase to save progress across devices.
* **Theme Support:** Includes both Light and Dark modes to accommodate user preference.
* **Responsive Design:** Optimized for study sessions on various screen sizes.

---

## Technical Overview

The application is built using a modern frontend stack to ensure performance and reliability:

* **Framework:** React.js
* **Database & Auth:** Firebase (Firestore and Authentication)
* **Deployment:** GitHub Pages
* **State Management:** React Hooks (useState, useEffect)
