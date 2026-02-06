# MPT Prep
### Gamified Learning for the Ontario Math Proficiency Test (MPT)
*(Le français suit)*

[**Visit the Live Application**](https://mptprep.github.io/)

---

## Documentation

**MPT Prep** is a specialized web-based educational platform designed to assist Ontario teacher candidates in preparing for the Math Proficiency Test (MPT). By integrating a structured curriculum with gamification principles, the platform provides a clear roadmap for students to build mathematical confidence and track their mastery of essential concepts.

### Core Features
* **MPT Duolingo:** A training module inspired by Duolingo, featuring XP leveling and daily streaks.
* **Practice Tests:** Reproductions of the Ministry Practice test alongside additional custom-built practice tests.
    * features improved review functions and a summary of strengths by topic.
* **MPT Information:** Visual summary of the MPT Framework document.
* **Study Guide:** Comprehensive dictionary of mathematical and pedagogical terms relevant to the MPT
* **Additional Resources:** Interactice list of additional external resources.
* **Fully Bilingual Support:** Built from the ground up to support both English and French-speaking candidates.

### Technical Stack
* **Frontend Framework:** React.js
* **Internationalization:** Custom-built bilingual state management (EN/FR)
* **Database & Logic:** Firebase (Firestore and Authentication)
* **Deployment:** GitHub Pages
* **Styling:** CSS3 (including Responsive Design and Dark Mode support)

### Local Development
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MPTPrep/mptprep.github.io.git](https://github.com/MPTPrep/mptprep.github.io.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    ```

### Deployment
1. Commit changes to the `main` branch.
2. Run the build script: `npm run build`
3. Deploy to the `gh-pages` branch: `npm run deploy`

---

## Documentation en français

**Préparation TCM** est une plateforme éducative en ligne spécialisée, conçue pour aider les futurs enseignants de l'Ontario à se préparer au Test de compétences en mathématiques (TCM). En intégrant un programme structuré aux principes de ludification, la plateforme offre un parcours bilingue clair pour renforcer la confiance en mathématiques et suivre la maîtrise des concepts essentiels.

### Caractéristiques principales
* **TCM Duolingo :** Un module d’entraînement inspiré de Duolingo, comprenant des niveaux d'expérience (XP) et des séries quotidiennes.
* **Tests de pratique :** Des reproductions du test de pratique du Ministère ainsi que des tests d’entraînement personnalisés supplémentaires.
    * Comprend des fonctions de révision améliorées et un résumé des points forts par domaine.
* **Informations sur le TCM :** Un résumé visuel du document cadre du Test de compétences en mathématiques.
* **Guide d'étude :** Un dictionnaire complet des termes mathématiques et pédagogiques pertinents au TCM.
* **Ressources supplémentaires :** Une liste interactive de ressources externes complémentaires.
* **Soutien bilingue intégral :** Conçu dès le départ pour soutenir les candidats anglophones et francophones de manière équitable.

### Pile technique
* **Cadre (Framework) :** React.js
* **Internationalisation :** Gestion d'état bilingue personnalisée (EN/FR)
* **Base de données :** Firebase (Firestore et Authentication)
* **Déploiement :** GitHub Pages
* **Stylisation :** CSS3 (incluant le design adaptatif et le support du mode sombre)

### Développement local
1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/MPTPrep/mptprep.github.io.git](https://github.com/MPTPrep/mptprep.github.io.git)
    ```
2.  **Installer les dépendances :**
    ```bash
    npm install
    ```
3.  **Lancer le serveur :**
    ```bash
    npm start
    ```

### Déploiement
1. Validez les modifications sur la branche `main`.
2. Exécutez le script de construction : `npm run build`
3. Déployez sur la branche `gh-pages` : `npm run deploy`
