import React, { useState } from 'react';
import { auth } from '../firebase';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

export default function TestInfo({french, setFrench, user, darkMode, setDarkMode, onBackHome }) {
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
            {!french ? 'Home' : 'Accueil'}
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
                  {user?.email || (!french ? "Not logged in" : "Non connecté")}
                </div>
                
                <div 
                  onClick={() => setDarkMode(!darkMode)}
                  style={{ padding: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}
                >
                  <span>{!french ? 'Dark Mode' : 'Mode sombre'}</span>
                  <span>{darkMode ? '🌙' : '☀️'}</span>
                </div>

               <div  onClick={() => setFrench(!french)} style={{ padding: '12px', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span onClick={() => setFrench(!french)} > {!french ? 'Language':'Langue'}</span>
                  <span style={{ fontSize: '0.8rem', backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', color: '#000' }}>{french ? (<>FR <a href="https://emoji.gg/emoji/8690-franco-ontarian-flag" target="_blank" rel="noopener noreferrer"><img src="https://cdn3.emoji.gg/emojis/8690-franco-ontarian-flag.png" width="13px" height="auto" alt="Franco_Ontarian_Flag" style={{ verticalAlign: 'middle' }} /></a></>) : 'EN 🇨🇦'}</span>
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
      </div>
      <header className="test-info-header">
        <h1>{!french ? 'MPT Framework' : 'Cadre du TCM'}</h1>
        
        <div className="framework-explainer">
          <p>
            {!french 
              ? <>This guide is a simplified breakdown of the <strong>Mathematics Proficiency Test Framework (August 2025)</strong> found on the Ministry's website (linked below). This document gives a detailed breakdown of the content of each component of the test. The summary presented here reflects much of the information found in the document, but intentionally simplifies its contents. Therefore, please consult official ministry resources for authoritative information regarding the test.</>
              : <>Ce guide est une version simplifiée du <strong>Cadre du test de compétences mathématiques (août 2025)</strong> disponible sur le site Web du ministère (lien ci-dessous). Ce document fournit une ventilation détaillée du contenu de chaque composante du test. Le résumé présenté ici reflète une grande partie des informations contenues dans le document, mais en simplifie intentionnellement le contenu. Par conséquent, veuillez consulter les ressources officielles du ministère pour obtenir des renseignements faisant autorité concernant le test.</>
            }
          </p>
          <a 
            href={!french 
              ? "https://s3.ca-central-1.amazonaws.com/authoring.mathproficiencytest.ca/user_uploads/515714/authoring/MPT_Framework_August_2025_EN_-s/MPT_Framework_August_2025_EN_-s.pdf"
              : "https://s3.ca-central-1.amazonaws.com/authoring.mathproficiencytest.ca/user_uploads/515714/authoring/TCM_Document-cadre_Aout_2025_FR_-s/TCM_Document-cadre_Aout_2025_FR_-s.pdf"
            } 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-link"
          >
            📄 {!french ? 'View Official Ministry Framework (PDF)' : 'Consulter le cadre officiel du ministère (PDF)'}
          </a>
        </div>
      </header>

      {/* DASHBOARD TABS */}
      <section className="visual-breakdown">
        <div 
          className={`component-card ${activeTab === 'math' ? 'active' : ''}`}
          onClick={() => setActiveTab('math')}
        >
          <h3>{!french ? 'Math Content' : 'Contenu mathématique'}</h3>
          <div className="stat">70%</div>
          <p>{!french ? '50 Questions' : '50 questions'}</p>
        </div>

        <div 
          className={`component-card ${activeTab === 'pedagogy' ? 'active' : ''}`}
          onClick={() => setActiveTab('pedagogy')}
        >
          <h3>{!french ? 'Pedagogy' : 'Pédagogie'}</h3>
          <div className="stat">30%</div>
          <p>{!french ? '21 Questions' : '21 questions'}</p>
        </div>

        <div className="pass-requirement">
            {!french 
              ? <>You must achieve at least <strong>70% in EACH</strong> component to pass.</>
              : <>Vous devez obtenir au moins <strong>70 % dans CHAQUE</strong> composante pour réussir.</>
            }
        </div>
      </section>

      <div className="tab-content-area">
        {activeTab === 'math' ? (
          <section className="info-block">
            <h2 className="block-title">{!french ? 'Math Content Breakdown' : 'Répartition du contenu mathématique'}</h2>
            
            <p className="section-intro">
              {!french 
                ? 'Questions are based on the Ontario Mathematics Curriculum (Grades 3–9). Select a dimension below to see specific skills tested:'
                : 'Les questions sont basées sur le curriculum de mathématiques de l\'Ontario (de la 3e à la 9e année). Sélectionnez une dimension ci-dessous pour voir les compétences spécifiques testées :'
              }
            </p>

            <details className="info-card">
              <summary>{!french ? 'Number Sense (16 Questions)' : 'Sens du nombre (16 questions)'}</summary>
              <div className="details-content">
                <p><strong>{!french ? 'Fundamental Knowledge & Skills:' : 'Connaissances et compétences fondamentales :'}</strong></p>
                <ul>
                  <li>{!french ? 'Operations (addition, subtraction, multiplication, division, and square roots) involving whole numbers, integers, decimals, and fractions.' : 'Opérations (addition, soustraction, multiplication, division et racines carrées) portant sur les nombres naturels, les nombres entiers, les nombres décimaux et les fractions.'}</li>
                  <li>{!french ? 'Expressing whole numbers using place value and expanded form.' : 'Exprimer des nombres naturels en utilisant la valeur de position et la forme développée.'}</li>
                  <li>{!french ? 'Working with exponents and square roots of perfect squares.' : 'Travailler avec des exposants et des racines carrées de carrés parfaits.'}</li>
                  <li>{!french ? (<Latex>{'Evaluating numeric expressions involving order of operations (BEDMAS/PEMDAS).'}</Latex>) : (<Latex>{'Évaluer des expressions numériques en respectant l\'ordre des opérations (PEDMAS).'}</Latex>)}</li>
                  <li>{!french ? 'Rounding decimal numbers to specified place values.' : 'Arrondir des nombres décimaux à des valeurs de position spécifiées.'}</li>
                  <li>{!french ? 'Scientific notation for very large or very small numbers.' : 'Notation scientifique pour les nombres très grands ou très petits.'}</li>
                </ul>
              </div>
            </details>

            <details className="info-card">
              <summary>{!french ? 'Relationships & Proportional Reasoning (27 Questions)' : 'Relations et raisonnement proportionnel (27 questions)'}</summary>
              <div className="details-content">
                <p><strong>{!french ? 'Fundamental Knowledge & Skills:' : 'Connaissances et compétences fondamentales :'}</strong></p>
                <ul>
                  <li>{!french ? 'Representing and comparing rates, ratios, and proportions.' : 'Représenter et comparer des taux, des rapports et des proportions.'}</li>
                  <li>{!french ? 'Solving problems involving percentages, including sales tax (13% HST), commissions, and discounts.' : 'Résoudre des problèmes impliquant des pourcentages, y compris la taxe de vente (TVH de 13 %), les commissions et les remises.'}</li>
                  <li>
                    {!french ? 'Financial math: Simple interest (' : 'Mathématiques financières : '}
                    <Latex>{!french ? '$I=Prt$)' : '$I=Crt$'}</Latex>
                    {!french ? ' and calculating earnings (Gross vs Net).' : ' et calcul des gains (brut c. net).'}
                  </li>
                  <li>{!french ? 'Algebraic expressions: simplifying and evaluating by substitution.' : 'Expressions algébriques : simplification et évaluation par substitution.'}</li>
                  <li>
                    {!french ? 'Solving first-degree equations ' : 'Résolution d\'équations du premier degré '}
                    <Latex>{'$ax + b = c$'}</Latex>
                    {!french ? ' or ' : ' ou '}
                    <Latex>{'$ax + b = cx + d$'}</Latex>.
                  </li>
                  <li>
                    {!french ? 'Linear Relations: Understanding slope (rate of change), ' : 'Relations linéaires : Comprendre la pente (taux de variation), '}
                    <Latex>{'$y$'}</Latex>
                    {!french ? '-intercepts, and graphing lines.' : '-ordonnée à l\'origine et la représentation graphique de droites.'}
                  </li>
                  <li>{!french ? 'Data literacy: Analyzing mean, median, mode, and probability of independent events.' : 'Littératie des données : Analyser la moyenne, la médiane, le mode et la probabilité d\'événements indépendants.'}</li>
                </ul>
              </div>
            </details>

            <details className="info-card">
              <summary>{!french ? 'Measurement (7 Questions)' : 'Mesure (7 questions)'}</summary>
              <div className="details-content">
                <p><strong>{!french ? 'Fundamental Knowledge & Skills:' : 'Connaissances et compétences fondamentales :'}</strong></p>
                <ul>
                  <li>
                    {!french ? 'Conversions within the metric system (e.g., ' : 'Conversions au sein du système métrique (p. ex., de '}
                    <Latex>{'$mm^2$'}</Latex>
                    {!french ? ' to ' : ' à '}
                    <Latex>{'$cm^2$'}</Latex>
                    {!french ? ' or ' : ' ou de '}
                    <Latex>{'$mL$'}</Latex>
                    {!french ? ' to ' : ' à '}
                    <Latex>{'$L$'}</Latex>).
                  </li>
                  <li>
                    {!french ? 'Applying the Pythagorean theorem (' : 'Appliquer le théorème de Pythagore ('}
                    <Latex>{'$a^2 + b^2 = c^2$'}</Latex>
                    {!french ? ') in right-angled triangles.' : ') dans des triangles rectangles.'}
                  </li>
                  <li>{!french ? 'Determining perimeter and area of composite 2D shapes (circles, trapezoids, etc.).' : 'Déterminer le périmètre et l\'aire de figures planes composées (cercles, trapèzes, etc.).'}</li>
                  <li>{!french ? 'Calculating surface area and volume of right prisms and cylinders.' : 'Calculer l\'aire totale et le volume de prismes droits et de cylindres.'}</li>
                </ul>
              </div>
            </details>
          </section>
        ) : (
  <section className="info-block">
    <h2 className="block-title">{!french ? 'Pedagogy & Professional Practice' : 'Pédagogie et pratique professionnelle'}</h2>
    
    <h2 className="sub-section-title"> {!french ? 'Assessment & Evaluation (Growing Success) [9 Questions]' : 'Évaluation et rendement (Faire croître le succès) [9 questions]'} </h2>
    
    <details className="info-card" open>
      <summary>{!french ? 'The 7 Fundamental Principles' : 'Les 7 principes fondamentaux'}</summary>
      <div className="details-content">
        <p>{!french ? 'To ensure every student has a fair chance, assessment must:' : 'Pour garantir que chaque élève ait une chance équitable, l\'évaluation doit :'}</p>
        <ul className="concept-list">
          <li><strong>1. {!french ? 'Be Fair, Transparent, and Equitable:' : 'Être juste, transparente et équitable :'}</strong> {!french ? 'Free of bias; students know the criteria before starting.' : 'Exempte de partialité ; les élèves connaissent les critères avant de commencer.'}</li>
          <li><strong>2. {!french ? 'Support All Students:' : 'Soutenir tous les élèves :'}</strong> {!french ? 'Includes specific provisions for Special Education (IEP) and ELL.' : 'Comprend des dispositions spécifiques pour l\'éducation de l\'enfance en difficulté (PEI) et les élèves plurilangues.'}</li>
          <li><strong>3. {!french ? 'Be Carefully Planned:' : 'Être planifiée avec soin :'}</strong> {!french ? 'Relate directly to curriculum expectations and learning goals.' : 'Se rapporter directement aux attentes du curriculum et aux objectifs d\'apprentissage.'}</li>
          <li><strong>4. {!french ? 'Be Communicated Clearly:' : 'Être communiquée clairement :'}</strong> {!french ? 'Regular updates to parents and students throughout the year.' : 'Mises à jour régulières aux parents et aux élèves tout au long de l\'année.'}</li>
          <li><strong>5. {!french ? 'Be Ongoing and Varied:' : 'Être continue et variée :'}</strong> {!french ? 'Use Triangulation (Observations, Conversations, Products).' : 'Utiliser la triangulation (observations, conversations, productions).'}</li>
          <li><strong>6. {!french ? 'Provide Descriptive Feedback:' : 'Fournir une rétroaction descriptive :'}</strong> {!french ? '"Actionable" next steps given during learning.' : 'Étapes suivantes concrètes données pendant l\'apprentissage.'}</li>
          <li><strong>7. {!french ? 'Develop Self-Assessment:' : 'Développer l\'auto-évaluation :'}</strong> {!french ? 'Help students monitor their own growth (metacognition).' : 'Aider les élèves à suivre leur propre cheminement (métacognition).'}</li>
        </ul>
      </div>
    </details>

    <details className="info-card">
      <summary>{!french ? 'Assessment FOR, AS, and OF Learning' : 'L\'évaluation AU SERVICE DE, EN TANT QU\' ET DE l\'apprentissage'}</summary>
      <div className="details-content">
        <div className="concept-grid">
          <div className="concept-box"><strong>{!french ? 'FOR:' : 'AU SERVICE DE :'}</strong> {!french ? 'Diagnostic/Formative. Teacher adjusts instruction.' : 'Diagnostique/Formative. L\'enseignant ajuste l\'enseignement.'}</div>
          <div className="concept-box"><strong>{!french ? 'AS:' : 'EN TANT QUE :'}</strong> {!french ? 'Formative. Student monitors own learning.' : 'Formative. L\'élève suit son propre apprentissage.'}</div>
          <div className="concept-box"><strong>{!french ? 'OF:' : 'DE:'}</strong> {!french ? 'Summative. Final evaluation for report card.' : 'Sommative. Évaluation finale pour le bulletin.'}</div>
        </div>
      </div>
    </details>

    <h2 className="sub-section-title">{!french ? 'Inclusive Instruction (Learning for All) [7 Questions]' : 'Enseignement inclusif (L\'apprentissage pour tous) [7 questions]'}</h2>

    <details className="info-card">
      <summary>{!french ? 'The Tiered Approach to Intervention' : 'L\'approche par paliers pour l\'intervention'}</summary>
      <div className="details-content">
        <p>{!french ? 'A systematic model for addressing learning gaps before they become failures:' : 'Un modèle systématique pour combler les lacunes d\'apprentissage avant qu\'elles ne deviennent des échecs :'}</p>
        <div className="tier-card tier-1">
          <strong>{!french ? 'Tier 1: Universal' : 'Palier 1 : Universel'}</strong>
          <p>{!french ? 'High-quality classroom instruction for 100% of students. Teacher monitors class-wide progress.' : 'Enseignement en classe de haute qualité pour 100 % des élèves. L\'enseignant suit les progrès de toute la classe.'}</p>
        </div>
        <div className="tier-card tier-2">
          <strong>{!french ? 'Tier 2: Targeted' : 'Palier 2 : Ciblé'}</strong>
          <p>{!french ? 'Small-group instruction and specific skill-building for students not progressing in Tier 1.' : 'Enseignement en petits groupes et renforcement des compétences spécifiques pour les élèves qui ne progressent pas au palier 1.'}</p>
        </div>
        <div className="tier-card tier-3">
          <strong>{!french ? 'Tier 3: Intensive' : 'Palier 3 : Intensif'}</strong>
          <p>{!french ? 'Individualized, high-intensity support (e.g., SERT involvement or alternative programming).' : 'Soutien individualisé et intensif (p. ex., implication de l\'EED ou programmation alternative).'} </p>
        </div>
      </div>
    </details>

    <details className="info-card">
      <summary>{!french ? 'UDL vs. Differentiated Instruction (DI)' : 'CUA c. Enseignement différencié (ED)'}</summary>
      <div className="details-content">
        <div className="concept-grid">
          <div className="concept-box">
            <strong>{!french ? 'Universal Design (UDL)' : 'Conception universelle (CUA)'}</strong>
            <p><em>{!french ? 'Proactive.' : 'Proactif.'}</em> {!french ? 'Barriers are removed for everyone before instruction (Representation, Expression, Engagement).' : 'Les obstacles sont éliminés pour tous avant l\'enseignement (représentation, expression, engagement).'}</p>
          </div>
          <div className="concept-box">
            <strong>{!french ? 'Differentiated Instruction (DI)' : 'Enseignement différencié (ED)'}</strong>
            <p><em>{!french ? 'Responsive.' : 'Réactif.'}</em> {!french ? 'Adjusting Content, Process, or Product based on Readiness/Interest.' : 'Ajustement du contenu, du processus ou de la production en fonction de l\'état de préparation ou de l\'intérêt.'}</p>
          </div>
        </div>
      </div>
    </details>

    <h2 className="sub-section-title">{!french ? 'Math-Specific Pedagogy (Curriculum Context) [5 Questions]' : 'Pédagogie spécifique aux mathématiques (contexte du curriculum) [5 questions]'}</h2>

    <details className="info-card">
      <summary>{!french ? 'The 7 Mathematical Processes' : 'Les 7 processus mathématiques'}</summary>
      <div className="details-content">
        <p>{!french ? 'These characterize how students interact with math concepts. You will be asked to identify these in classroom scenarios:' : 'Ceux-ci caractérisent la façon dont les élèves interagissent avec les concepts mathématiques. On vous demandera de les identifier dans des scénarios de classe :'}</p>
        <ul className="concept-list">
          <li><strong>{!french ? 'Problem Solving:' : 'Résolution de problèmes :'}</strong> {!french ? 'Applying strategies to solve tasks with no obvious solution.' : 'Appliquer des stratégies pour résoudre des tâches sans solution évidente.'}</li>
          <li><strong>{!french ? 'Reasoning & Proving:' : 'Raisonnement et preuve :'}</strong> {!french ? 'Investigating conjectures and justifying conclusions with logic.' : 'Examiner des conjectures et justifier des conclusions par la logique.'}</li>
          <li><strong>{!french ? 'Reflecting:' : 'Réflexion :'}</strong> {!french ? 'Checking if a solution "makes sense."' : 'Vérifier si une solution « a du sens ».'}</li>
          <li><strong>{!french ? 'Selecting Tools:' : 'Sélection d\'outils :'}</strong> {!french ? 'Choosing the right tech (calculator) or mental strategy.' : 'Choisir la bonne technologie (calculatrice) ou stratégie mentale.'}</li>
          <li><strong>{!french ? 'Connecting:' : 'Établissement de liens :'}</strong> {!french ? 'Linking math concepts to other topics or the real world.' : 'Relier les concepts mathématiques à d\'autres sujets ou au monde réel.'}</li>
          <li><strong>{!french ? 'Representing:' : 'Représentation :'}</strong> {!french ? 'Using symbols, graphs, physical models, or diagrams.' : 'Utiliser des symboles, des graphiques, des modèles physiques ou des diagrammes.'}</li>
          <li><strong>{!french ? 'Communicating:' : 'Communication :'}</strong> {!french ? 'Expressing math ideas clearly using proper vocabulary.' : 'Expresser clairement des idées mathématiques en utilisant le vocabulaire approprié.'}</li>
        </ul>
      </div>
    </details>

    <details className="info-card">
      <summary>{!french ? 'High-Impact Instructional Practices' : 'Pratiques pédagogiques à impact élevé'}</summary>
      <div className="details-content">
        <p>{!french ? 'The Ministry identifies these as the most effective ways to teach math:' : 'Le Ministère identifie celles-ci comme les façons les plus efficaces d\'enseigner les mathématiques :'}</p>
        <ul className="concept-list">
          <li><strong>{!french ? 'Learning Goals & Success Criteria:' : 'Objectifs d\'apprentissage et critères de réussite :'}</strong> {!french ? 'Knowing exactly what is being learned.' : 'Savoir exactement ce qui est appris.'}</li>
          <li><strong>{!french ? 'Direct Instruction:' : 'Enseignement explicite :'}</strong> {!french ? 'Intentional, guided instruction.' : 'Enseignement intentionnel et guidé.'}</li>
          <li><strong>{!french ? 'Small-Group Instruction:' : 'Enseignement en petits groupes :'}</strong> {!french ? 'Working with students on specific needs.' : 'Travailler avec les élèves sur des besoins spécifiques.'}</li>
          <li><strong>{!french ? 'Math Conversations:' : 'Conversations mathématiques :'}</strong> {!french ? 'Students sharing strategies and "Math Talk."' : 'Les élèves partagent des stratégies et participent à des « causeries mathématiques ».'}</li>
          <li><strong>{!french ? 'Tools & Representations:' : 'Outils et représentations :'}</strong> {!french ? 'Using manipulatives (e.g., Alge-tiles, blocks).' : 'Utiliser du matériel de manipulation (p. ex., tuiles algébriques, blocs).'}</li>
        </ul>
      </div>
    </details>
  </section>
)}
      </div>
    </div>
  );
  
};