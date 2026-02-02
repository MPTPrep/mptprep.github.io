

export const MOCK_TESTS = {
  "mpt-mock-1": {
    id: "mpt-mock-1",
    title: "Test d'entraînement nº 1",
    requiresBriefing: true,
    isOfficial: true,
    sections: [
      {
        id: "pedagogy",
        title: "Pédagogie",
        calc: false,
        questions: [
          { 
            id: "p1", 
            q: "Selon « Croissance et réussite », où les enseignants peuvent-ils trouver les adaptations requises par un élève ayant des besoins particuliers en matière d'éducation spécialisée pour l'évaluation ?", 
            options: ["Le plan d'apprentissage annuel de l'élève", "Le plan d'enseignement individuel (PEI) de l'élève", "Le plan de réussite de l'élève", "Le plan de préférences d'apprentissage de l'élève"], 
            a: 1, 
            tags: ["Croissance et réussite", "Éducation spécialisée", "Évaluation"] 
          },
          { 
            id: "p2", 
            q: "Selon « L'apprentissage pour tous », quelle pratique sera la plus utile lors de la différenciation pédagogique ?", 
            options: ["Rencontrer les enseignants de l'année suivante", "Discuter des stratégies proposées avec la direction de l'école", "Créer des groupements d'élèves flexibles basés sur les styles d'apprentissage", "Utiliser des ressources identiques pour tous les élèves"], 
            a: 2, 
            tags: ["L'apprentissage pour tous", "Différenciation pédagogique"] 
          },
          { 
            id: "p3", 
            q: "Qu'est-ce qui ne change pas pour les élèves recevant des adaptations ?", 
            options: ["Les stratégies d'enseignement", "Le temps alloué pour les tests", "L'environnement de la classe", "Les attentes du curriculum"], 
            a: 3, 
            tags: ["Croissance et réussite", "Éducation spécialisée", "Curriculum"] 
          },
          { 
            id: "p4", 
            q: "Quelle option n'est pas répertoriée dans « L'apprentissage pour tous » comme exemple d'outil ou de mesure d'évaluation formative ?", 
            options: ["Fournir une rétroaction descriptive ponctuelle aux élèves", "Utiliser les résultats de l'évaluation pour guider l'enseignement ultérieur", "Répertorier les intérêts des élèves pour guider l'enseignement ultérieur", "Utiliser le processus de notation modérée pour soutenir l'évaluation continue"], 
            a: 3, 
            tags: ["L'apprentissage pour tous", "Évaluation formative"] 
          },
          { 
            id: "p5", 
            q: "Selon « L'apprentissage pour tous », que permet aux éducateurs la combinaison de la conception universelle de l'apprentissage (CUA) et de la différenciation pédagogique ?", 
            options: ["Répondre efficacement aux forces et aux besoins de tous les élèves", "Promouvoir une communication positive entre l'école et les parents", "Prédire avec précision les notes du bulletin d'un élève", "Préparer les plans d'enseignement individuels plus rapidement"], 
            a: 0, 
            tags: ["L'apprentissage pour tous", "CUA"] 
          },
          { 
            id: "p6", 
            q: "Selon « Croissance et réussite », lequel des éléments suivants n'est pas un objectif de la grille d'évaluation du rendement ?", 
            options: ["Guider l'élaboration de tâches d'évaluation de haute qualité", "Aider les enseignants à planifier l'enseignement pour l'apprentissage", "S'assurer que tous les élèves sont préparés aux évaluations provinciales", "Établir des catégories et des critères pour évaluer l'apprentissage"], 
            a: 2, 
            tags: ["Croissance et réussite", "Grille d'évaluation du rendement"] 
          },
          { 
            id: "p7", 
            q: "Quelle stratégie d'évaluation n'est pas recommandée par « Croissance et réussite » pour recueillir des preuves du rendement des élèves aux fins d'évaluation ?", 
            options: ["L'observation", "La conversation", "La production de l'élève", "L'évaluation par les pairs"], 
            a: 3, 
            tags: ["Croissance et réussite", "Évaluation"] 
          },
          { 
            id: "p8", 
            q: "Selon « Croissance et réussite », quel principe est l'un des sept principes fondamentaux qui garantissent que l'évaluation et la communication du rendement sont valides et fiables ?", 
            options: ["Développer les compétences des élèves en matière d'évaluation par les pairs", "Éliminer toutes les lacunes du curriculum vécues par les élèves", "Offrir des opportunités d'évaluation identiques à tous les élèves", "Soutenir tous les élèves, y compris ceux qui ont des besoins particuliers en matière d'éducation spécialisée"], 
            a: 3, 
            tags: ["Croissance et réussite", "Principes d'évaluation"] 
          },
          { 
            id: "p9", 
            q: "Quelle option n'est pas répertoriée sous « Les processus mathématiques » dans le Curriculum de l'Ontario de la 1re à la 8e année : Mathématiques ?", 
            options: ["Communiquer", "Représenter", "Multiplier", "Établir des liens"], 
            a: 2, 
            tags: ["Curriculum", "Processus mathématiques"] 
          },
          { 
            id: "p10", 
            q: "Selon « L'apprentissage pour tous », quelle stratégie facilite l'apprentissage par une variété de différentes opportunités axées sur un sujet ou un thème particulier ?", 
            options: ["L'apprentissage coopératif", "L'approche par projet", "L'approche par problèmes", "L'enseignement explicite"], 
            a: 1, 
            tags: ["L'apprentissage pour tous", "Stratégies d'enseignement"] 
          },
          { 
            id: "p11", 
            q: "Selon « Croissance et réussite », quel qualificatif est utilisé pour décrire le rendement d'un élève au niveau 2 ?", 
            options: ["Un certain", "Limité", "Un haut degré de", "Considérable"], 
            a: 0, 
            tags: ["Croissance et réussite", "Niveaux de rendement"] 
          },
          { 
            id: "p12", 
            q: "Dilshad invite les élèves à mesurer des objets liés à une célébration culturelle et facilite la justification de leur réflexion. Quelle pratique à impact élevé démontre-t-elle ?", 
            options: ["Regroupements flexibles", "Pratique délibérée", "Conversations mathématiques", "Enseignement de la résolution de problèmes"], 
            a: 2, 
            tags: ["Curriculum", "Conversations mathématiques", "Pratiques à impact élevé"] 
          },
          { 
            id: "p13", 
            q: "Selon « L'apprentissage pour tous », l'évaluation en tant qu'apprentissage aide à développer et à soutenir les élèves dans quel processus de régulation ?", 
            options: ["L'estime de soi", "La précognition", "La confiance en soi", "La métacognition"], 
            a: 3, 
            tags: ["L'apprentissage pour tous", "Évaluation en tant qu'apprentissage"] 
          },
          { 
            id: "p14", 
            q: "Comment l'approche d'évaluation critériée de l'Ontario exige-t-elle que les enseignants évaluent le travail des élèves ?", 
            options: ["En classant le rendement des élèves", "En comparant le travail effectué par d'autres élèves", "En se référant à des normes de rendement élaborées par les enseignants", "En se référant aux critères établis pour les quatre niveaux de rendement"], 
            a: 3, 
            tags: ["Croissance et réussite", "Évaluation critériée"] 
          },
          { 
            id: "p15", 
            q: "Selon « L'apprentissage pour tous », quelle stratégie est un exemple de différenciation pédagogique ?", 
            options: ["Encourager l'activité non disciplinée", "Isoler les élèves en difficulté", "Utiliser une variété de regroupements pour répondre aux besoins des élèves", "Offrir des opportunités d'évaluation identiques"], 
            a: 2, 
            tags: ["L'apprentissage pour tous", "Différenciation pédagogique"] 
          },
          { 
            id: "p16", 
            q: "Selon « Croissance et réussite », quelle est l'habileté d'apprentissage manifestée par un élève qui « recherche et met en œuvre de nouvelles idées et opportunités » ?", 
            options: ["L'esprit d'initiative", "L'organisation", "Le sens des responsabilités", "L'autonomie"], 
            a: 0, 
            tags: ["Croissance et réussite", "Habiletés d'apprentissage"] 
          },
          { 
            id: "p17", 
            q: "Quelle catégorie de connaissances et d'habiletés exige que les élèves établissent des liens au sein de divers contextes et entre eux ?", 
            options: ["La pensée", "L'application", "La communication", "La connaissance et la compréhension"], 
            a: 1, 
            tags: ["Curriculum", "Grille d'évaluation du rendement"] 
          },
          { 
            id: "p18", 
            q: "Selon « L'apprentissage pour tous », quel type d'évaluation définit où en est l'apprenant, où il doit aller et comment s'y rendre au mieux ?", 
            options: ["L'évaluation de l'apprentissage", "L'évaluation en tant qu'apprentissage", "L'évaluation au service de l'apprentissage", "L'évaluation des habiletés d'apprentissage"], 
            a: 2, 
            tags: ["L'apprentissage pour tous", "Évaluation au service de l'apprentissage"] 
          },
          { 
            id: "p19", 
            q: "Patrick encourage les élèves à surveiller leur processus de pensée et à examiner la vraisemblance des réponses. De quel processus mathématique s'agit-il ?", 
            options: ["La réflexion", "L'établissement de liens", "La représentation", "La communication"], 
            a: 0, 
            tags: ["Curriculum", "Processus mathématiques"] 
          },
          { 
            id: "p20", 
            q: "Selon « Croissance et réussite », qu'identifie le niveau 1 ?", 
            options: ["Un rendement qui dépasse la norme provinciale", "Un rendement qui représente la norme provinciale", "Un rendement qui se rapproche de la norme provinciale", "Un rendement qui est bien en dessous de la norme provinciale"], 
            a: 3, 
            tags: ["Croissance et réussite", "Niveaux de rendement"] 
          },
          { 
            id: "p21", 
            q: "D'après « L'apprentissage pour tous », quel est l'objectif commun de la différenciation pédagogique et de la conception universelle de l'apprentissage (CUA) ?", 
            options: ["Utiliser les mêmes manuels scolaires", "Utiliser uniquement l'enseignement pour toute la classe", "Répondre aux différents besoins des élèves d'une classe", "Satisfaire aux exigences des attentes du curriculum"], 
            a: 2, 
            tags: ["L'apprentissage pour tous", "CUA"] 
          },
          { 
            id: "p22", 
            q: "Selon « Croissance et réussite », à quelle fréquence la communication avec les parents concernant le rendement des élèves doit-elle avoir lieu ?", 
            options: ["Uniquement lors de la publication des bulletins scolaires", "Au début de l'année", "Uniquement lorsque l'élève rencontre des difficultés", "De manière continue tout au long de l'année"], 
            a: 3, 
            tags: ["Croissance et réussite", "Communication"] 
          },
          { 
            id: "p23", 
            q: "Comme indiqué dans « Croissance et réussite », quand l'évaluation diagnostique a-t-elle lieu ?", 
            options: ["Avant que l'enseignement ne commence", "À la fin d'une période d'apprentissage", "Fréquemment et de manière continue", "Après les recommandations des parents"], 
            a: 0, 
            tags: ["Croissance et réussite", "Évaluation diagnostique"] 
          }
        ]
      },
      {
        id: "math-no-calc",
        title: "Mathématiques",
        calc: false,
        questions: [
          { 
            id: "m1", 
            q: "Calculez : $11 + (-2) - (-3) - 4$", 
            options: ["2", "6", "8", "12"], 
            a: 2, 
            tags: ["Arithmétique", "Nombres entiers"] 
          },
          { 
            id: "m2", 
            q: "Quelle est la valeur de $3^4 \\div 3$ ?", 
            options: ["3", "9", "27", "81"], 
            a: 2, 
            tags: ["Arithmétique", "Exposants"] 
          },
          { 
            id: "m3", 
            q: "Quelle est la valeur du chiffre $2$ dans le nombre $425\\,380$ ?", 
            options: ["20", "2\\,000", "20\\,000", "200\\,000"], 
            a: 2, 
            tags: ["Sens du nombre", "Valeur de position"] 
          },
          { 
            id: "m4", 
            q: "Calculez : $24 \\div \\frac{2}{3}$", 
            options: ["4", "8", "16", "36"], 
            a: 3, 
            tags: ["Arithmétique", "Fractions"] 
          },
          { 
            id: "m5", 
            q: "Quel est le nombre minimum de fois qu'Amal doit ajouter $15\\$$ à ses économies pour les augmenter d'au moins $100\\$$ ?", 
            options: ["4 fois", "5 fois", "6 fois", "7 fois"], 
            a: 3, 
            tags: ["Sens du nombre", "Problèmes écrits"] 
          }
        ]
      },
      {
        id: "math-calc",
        title: "Mathématiques",
        calc: true,
        questions: [
          { 
            id: "mc1", 
            q: "Calculez : $\\frac{5}{3} - 1 + \\frac{2}{3}$", 
            options: ["$\\frac{6}{3}$", "$\\frac{10}{6}$", "$\\frac{4}{3}$", "$\\frac{6}{6}$"], 
            a: 2, 
            tags: ["Arithmétique", "Fractions"] 
          },
          { 
            id: "mc2", 
            q: "La longueur d'une salle de classe est de $7,5$ m. Quelle est la longueur de la salle de classe en millimètres ?", 
            options: ["0,0075 mm", "0,075 mm", "750 mm", "7500 mm"], 
            a: 3, 
            tags: ["Mesure", "Conversions"] 
          },
          { 
            id: "mc3", 
            q: "Salim choisit un forfait de téléphonie mobile qui facture des frais fixes de $40\\$$ par mois et $10\\$$ par gigaoctet de données. Quelle équation représente le coût $C$, où $n$ est le nombre de gigaoctets utilisés ?", 
            options: ["$C = 50n$", "$C = 40(10n)$", "$C = 40n + 10$", "$C = 10n + 40$"], 
            a: 3, 
            tags: ["Algèbre", "Relations linéaires"] 
          },
          { 
            id: "mc4", 
            q: "Sam gagne $306\\$$ pour $15$ heures de travail. Miko gagne $189\\$$ pour $10$ heures de travail. Quelle affirmation compare correctement leur salaire ?", 
            options: ["Sam gagne $19,80\\$$ de plus par heure que Miko.", "Sam gagne $23,40\\$$ de plus par heure que Miko.", "S'ils travaillent chacun 5 heures, Sam gagne $117\\$$ de plus que Miko.", "S'ils travaillent chacun 30 heures, Sam gagne $45\\$$ de plus que Miko."], 
            a: 3, 
            tags: ["Raisonnement proportionnel", "Taux"] 
          },
          { 
            id: "mc6", 
            q: "Calculez : $2 + 2 \\times 4 + 2$", 
            options: ["12", "14", "18", "24"], 
            a: 0, 
            tags: ["Arithmétique", "Ordre des opérations"] 
          },
          { 
            id: "mc8", 
            q: "Quatre coureurs participent à un relais. Temps : $58,409$ s, $59,685$ s, $59,438$ s, $58,127$ s. De combien le temps total est-il inférieur au record précédent de $240,201$ secondes ?", 
            options: ["4,542 secondes", "5,552 secondes", "15,458 secondes", "235,659 secondes"], 
            a: 0, 
            tags: ["Arithmétique", "Décimaux"] 
          },
          { 
            id: "mc11", 
            q: "Un club compte $30$ membres, et $\\frac{4}{5}$ d'entre eux assistent à un événement. Le coût est de $10\\$$ par membre. Quel est le coût total payé par tous les membres présents ?", 
            options: ["$300\\$$", "$240\\$$", "$60\\$$", "$24\\$$"], 
            a: 1, 
            tags: ["Sens du nombre", "Fractions"] 
          },
          { 
            id: "mc12", 
            q: "Quelle est la valeur de $b$ dans l'équation : $\\frac{b}{4} = b - 12$ ?", 
            options: ["3", "8", "16", "48"], 
            a: 2, 
            tags: ["Algèbre", "Équations"] 
          },
          { 
            id: "mc13", 
            q: "Un triangle rectangle a une hypoténuse de $73$ cm et une base de $55$ cm. Quelle est la hauteur du triangle ?", 
            options: ["18 cm", "36 cm", "48 cm", "91 cm"], 
            a: 2, 
            tags: ["Géométrie", "Théorème de Pythagore"] 
          },
          { 
            id: "mc14", 
            q: "Quel nombre décimal est équivalent à $\\frac{2}{5}$ ?", 
            options: ["0,25", "0,4", "2,5", "5"], 
            a: 1, 
            tags: ["Sens du nombre", "Décimaux"] 
          },
          { 
            id: "mc15", 
            q: "Suite A : $36\\,864, 9216, 2304, 576, \\ldots$ Suite B : $26\\,244, 8748, 2916, 972, \\ldots$. Quel nombre figure dans les deux suites ?", 
            options: ["324", "144", "36", "12"], 
            a: 2, 
            tags: ["Algèbre", "Suites"] 
          },
          { 
            id: "mc19", 
            q: "Une équipe récolte $1650\\$$ en vendant $550$ rondelles de hockey. Si Harjot récolte $24\\$$, combien de rondelles a-t-elle vendues ?", 
            options: ["3", "8", "45", "72"], 
            a: 1, 
            tags: ["Raisonnement proportionnel", "Taux"] 
          },
          { 
            id: "mc23", 
            q: "Un sac contient 3 billes bleues, 9 vertes, 6 rouges et 12 jaunes. Quelle est la probabilité de NE PAS tirer une bille jaune ?", 
            options: ["0,2", "0,3", "0,4", "0,6"], 
            a: 3, 
            tags: ["Données", "Probabilité"] 
          },
          { 
            id: "mc26", 
            q: "Quelle liste de fractions est classée par ordre croissant (du plus petit au plus grand) ?", 
            options: ["$\\frac{5}{3}, \\frac{5}{8}, \\frac{5}{10}, \\frac{5}{15}$", "$\\frac{5}{3}, \\frac{5}{10}, \\frac{5}{8}, \\frac{5}{15}$", "$\\frac{5}{15}, \\frac{5}{10}, \\frac{5}{8}, \\frac{5}{3}$", "$\\frac{5}{15}, \\frac{5}{8}, \\frac{5}{10}, \\frac{5}{3}$"], 
            a: 2, 
            tags: ["Sens du nombre", "Fractions"] 
          },
          { 
            id: "mc28", 
            q: "Quel dentifrice a le coût le plus bas par ml ?", 
            options: ["$1,35\\$$ pour 100 ml", "$1,94\\$$ pour 150 ml", "$2,40\\$$ pour 200 ml", "$3,25\\$$ pour 250 ml"], 
            a: 2, 
            tags: ["Raisonnement proportionnel", "Prix unitaires"] 
          },
          { 
            id: "mc30", 
            q: "Quelle est la valeur de $m$ dans l'équation : $48 = 2(12 + m)$ ?", 
            options: ["12", "18", "24", "34"], 
            a: 0, 
            tags: ["Algèbre", "Équations"] 
          },
          { 
            id: "mc32", 
            q: "Lequel représente le nombre $4937$ sous forme décomposée ?", 
            options: ["$4\\times100 + 9\\times10 + 3\\times10 + 7\\times1$", "$4\\times1000 + 9\\times100 + 3\\times10 + 7\\times1$", "$4\\times1 + 9\\times10 + 3\\times100 + 7\\times1000$", "$4\\times10 + 9\\times100 + 3\\times1000 + 7\\times1$"], 
            a: 1, 
            tags: ["Sens du nombre", "Valeur de position"] 
          },
          { 
            id: "mc33", 
            q: "En janvier, un vélo coûte $300\\$$. En juin, il coûte $426\\$$. Quel pourcentage représente l'augmentation ?", 
            options: ["14%", "30%", "42%", "70%"], 
            a: 2, 
            tags: ["Sens du nombre", "Pourcentages"] 
          },
          { 
            id: "mc34", 
            q: "Un gâteau est coupé en tiers. Chaque tiers est coupé en trois tranches égales. Quelle fraction du gâteau représente une tranche ?", 
            options: ["$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{1}{9}$", "$\\frac{1}{18}$"], 
            a: 2, 
            tags: ["Sens du nombre", "Fractions"] 
          },
          { 
            id: "mc36", 
            q: "Quelle équation est vraie ?", 
            options: ["$3 + 4 \\times 7 = 49$", "$17 - 3 \\times 4 = 56$", "$3 \\times 2 + 4 \\div 4 = 7$", "$3 + 3 \\div 3 \\times 2 = 4$"], 
            a: 2, 
            tags: ["Arithmétique", "Ordre des opérations"] 
          },
          { 
            id: "mc37", 
            q: "Quel nombre est représenté par : $(3 \\times 1\\,000\\,000) + (2 \\times 10\\,000) + (7 \\times 1000) + (9 \\times 100) + (6 \\times 10) + (8 \\times 1)$ ?", 
            options: ["327 968", "3 027 968", "3 207 968", "3 270 968"], 
            a: 1, 
            tags: ["Sens du nombre", "Valeur de position"] 
          },
          { 
            id: "mc38", 
            q: "Félix a 3 mangues et 4 papayes. Quel rapport est équivalent ?", 
            options: ["3:8", "4:3", "8:6", "9:12"], 
            a: 3, 
            tags: ["Raisonnement proportionnel", "Rapports"] 
          },
          { 
            id: "mc39", 
            q: "Calculez : $3^{11} \\times 3^2$", 
            options: ["$3^{13}$", "$3^{22}$", "$9^{13}$", "$9^{22}$"], 
            a: 0, 
            tags: ["Arithmétique", "Exposants"] 
          },
          { 
            id: "mc40", 
            q: "Le coût de 5 avocats est de $3,70\\$$. Quel est le prix par avocat ?", 
            options: ["$0,74\\$$", "$1,35\\$$", "$3,65\\$$", "$18,50\\$$"], 
            a: 0, 
            tags: ["Raisonnement proportionnel", "Prix unitaires"] 
          },
          { 
            id: "mc41", 
            q: "Merrick passe 8 tests, et la note moyenne est de 72. Quel est le total des notes pour les 8 tests ?", 
            options: ["64", "80", "576", "648"], 
            a: 2, 
            tags: ["Données", "Moyenne"] 
          },
          { 
            id: "mc43", 
            q: "Suite : $1683, 1598, 1513, 1428, \\ldots$ Quel est le 9e terme ?", 
            options: ["918", "1003", "1088", "1173"], 
            a: 1, 
            tags: ["Algèbre", "Suites"] 
          },
          { 
            id: "mc44", 
            q: "Calculez : $6905 \\div 34$", 
            options: ["23,3", "23 R3", "203 R3", "203,3"], 
            a: 2, 
            tags: ["Arithmétique", "Division"] 
          },
          { 
            id: "mc45", 
            q: "Quelle équation a $x = 12$ comme solution ?", 
            options: ["$3(x - 17) = 19$", "$8x + 4 = 12$", "$\\frac{2}{3}x + 3 = -5$", "$\\frac{7}{3}x - 6 = 22$"], 
            a: 3, 
            tags: ["Algèbre", "Équations"] 
          },
          { 
            id: "mc46", 
            q: "Lequel décrit la somme de $\\frac{11}{5} + \\frac{1}{7}$ ?", 
            options: ["Exactement 2", "Entre 1 et 2", "Entre 2 et 3", "Exactement 3"], 
            a: 2, 
            tags: ["Sens du nombre", "Estimation"] 
          },
          { 
            id: "mc47", 
            q: "Quelle fraction est équivalente à 8 % ?", 
            options: ["$\\frac{2}{25}$", "$\\frac{2}{20}$", "$\\frac{1}{8}$", "$\\frac{8}{10}$"], 
            a: 0, 
            tags: ["Sens du nombre", "Pourcentages"] 
          }
        ]
      }
    ]
  },
  "mpt-mock-2": {
    id: "mpt-mock-2",
    title: "Practice Test #2",
	requiresBriefing: true,
	isOfficial:true,
    sections: [
      {
        id: "pedagogy",
        title: "Pédagogie",
        calc: false,
        
questions: [
  {
    id: "p24",
    q: "Lequel des éléments suivants n'est PAS un exemple de programme alternatif?",
    options: ["Compétences sociales", "Rééducation de la parole", "Éducation coopérative", "Orientation et mobilité"],
    a: 0,
    tags: ["Éducation de l'enfance en difficulté", "Programmes alternatifs"]
  },
  {
    id: "p25",
    q: "La différenciation pédagogique encourage les enseignants à :",
    options: ["Fournir à chaque élève une fiche de travail ou une tâche différente.", "Créer des groupes de niveau à long terme pour maintenir une routine stable.", "Utiliser une variété d'approches pédagogiques pour toute la classe afin de maintenir l'engagement.", "Adapter l'enseignement pour refléter les forces, les intérêts, les styles d'apprentissage et le degré de préparation de l'élève."],
    a: 3,
    tags: ["L'apprentissage pour tous", "Différenciation pédagogique"]
  },
  {
    id: "p26",
    q: "Les enseignants qui travaillent avec des élèves ayant des besoins particuliers utilisent des stratégies d'évaluation pour toutes les raisons suivantes, SAUF :",
    options: ["Appuyer des décisions précises concernant le programme de l'élève.", "Aider à trier et à regrouper les élèves ayant des besoins particuliers.", "Déterminer les interventions nécessaires pour permettre à l'élève de démontrer son rendement.", "Appuyer les décisions relatives à l'aiguillage, au dépistage et à la planification pédagogique."],
    a: 1,
    tags: ["Éducation de l'enfance en difficulté", "Faire croître le succès"]
  },
  {
    id: "p27",
    q: "Un enseignant de 6e année utilise du matériel de manipulation, établit des liens avec l'art autochtone et valorise différentes stratégies. Quel principe est le mieux reflété ici?",
    options: ["Un programme est plus efficace lorsqu'il est enseigné dans l'ordre des domaines d'étude.", "Un programme est plus efficace lorsqu'il valorise et célèbre la diversité des élèves.", "Un programme est plus efficace lorsqu'il se concentre sur la mémorisation et la répétition.", "Un programme est plus efficace lorsque tous les élèves utilisent le même matériel de manipulation."],
    a: 1,
    tags: ["Programme d'études", "Diversité", "Perspectives autochtones"]
  },
  {
    id: "p28",
    q: "Lequel est un exemple d'adaptation?",
    options: ["Utiliser les attentes d'un niveau d'études différent", "Diminuer la complexité des attentes", "Permettre à l'élève de faire un test écrit à l'oral", "Diminuer le nombre d'attentes évaluées"],
    a: 2,
    tags: ["Éducation de l'enfance en difficulté", "Adaptations"]
  },
  {
    id: "p29",
    q: "Quel est l'un des principaux avantages d'impliquer les élèves en tant que partenaires de leur apprentissage?",
    options: ["Cela mène à un plus grand engagement et à un meilleur rendement des élèves.", "Cela garantit que les élèves suivent un chemin tracé pour atteindre les attentes.", "Cela réduit la fréquence de la différenciation pédagogique.", "Cela diminue le temps que les enseignants passent à planifier les leçons."],
    a: 0,
    tags: ["L'apprentissage pour tous", "Agentivité de l'élève"]
  },
  {
    id: "p30",
    q: "Lequel des éléments suivants ne fait PAS partie des sept principes fondamentaux de 'Faire croître le succès'?",
    options: ["Ils doivent être justes, transparents et équitables pour tous les élèves.", "Ils doivent être continus, de nature variée et administrés sur une période de temps.", "Ils doivent maintenir l'objectivité en basant l'évaluation sur des tâches de production.", "Ils doivent permettre une rétroaction descriptive continue, claire et opportune."],
    a: 2,
    tags: ["Faire croître le succès", "Principes d'évaluation"]
  },
  {
    id: "p31",
    q: "Selon le programme d'études de l'Ontario, quelle est la responsabilité d'un enseignant de mathématiques?",
    options: ["Fournir une rétroaction continue aux élèves sur leur apprentissage.", "Enseigner les concepts et les habiletés d'apprentissage indépendamment les uns des autres.", "Prioriser la littératie financière par rapport aux autres domaines d'étude.", "Utiliser un manuel scolaire comme principale ressource de planification."],
    a: 0,
    tags: ["Programme d'études", "Rôles de l'enseignant"]
  },
  {
    id: "p32",
    q: "Adina comprend bien les mathématiques mais ne remet pas son travail à temps. Comment cela doit-il être reflété sur son bulletin?",
    options: ["Répond à la norme provinciale ; 'Bien' en Sens des responsabilités.", "Répond à la norme provinciale ; 'À améliorer' en Sens des responsabilités.", "S'approche de la norme provinciale ; 'Bien' en Sens des responsabilités.", "S'approche de la norme provinciale ; 'À améliorer' en Sens des responsabilités."],
    a: 1,
    tags: ["Faire croître le succès", "Bulletin", "Habiletés d'apprentissage"]
  },
  {
    id: "p33",
    q: "Quel est l'objectif principal de l'évaluation au service de l'apprentissage?",
    options: ["Déterminer où en sont les élèves, où ils doivent aller et comment y arriver.", "Permettre aux élèves de se familiariser avec les tests utilisés pour l'évaluation en tant qu'apprentissage.", "Permettre aux enseignants de simplifier la planification en regroupant par rendement.", "Fournir aux enseignants des données sommatives pour communiquer le rendement."],
    a: 0,
    tags: ["Faire croître le succès", "Évaluation au service de l'apprentissage"]
  },
  {
    id: "p34",
    q: "Lequel est un exemple de comportement pour l'habileté 'Sens de l'organisation'?",
    options: ["Élaborer des plans pour aborder des enjeux et résoudre des problèmes.", "Fixer des objectifs personnels et suivre ses progrès.", "Utiliser ses expériences personnelles et en classe comme occasions d'apprentissage.", "Rassembler, évaluer et utiliser la technologie et les ressources pour accomplir des tâches."],
    a: 3,
    tags: ["Faire croître le succès", "Habiletés d'apprentissage"]
  },
  {
    id: "p35",
    q: "Quelle catégorie de la grille d'évaluation évalue la capacité à établir des liens à l'intérieur de divers contextes et entre eux?",
    options: ["Mise en application", "Mise en application", "Communication", "Connaissance et compréhension"],
    a: 1,
    tags: ["Programme d'études", "Grille d'évaluation"]
  },
  {
    id: "p36",
    q: "Lequel des éléments suivants décrit le mieux la conception universelle de l'apprentissage (CUA)?",
    options: ["Une approche pédagogique de type 'taille unique'.", "Des stratégies nécessaires pour certains et bonnes pour tous.", "Une approche qui crée des leçons uniques pour chaque élève.", "Une stratégie de regroupement qui reste constante tout au long d'un cours."],
    a: 1,
    tags: ["L'apprentissage pour tous", "CUA"]
  },
  {
    id: "p37",
    q: "Lequel des éléments suivants est un exemple de modification figurant dans un PEI?",
    options: ["Accorder du temps supplémentaire pour terminer une évaluation.", "Fournir des supports visuels pour clarifier les instructions verbales.", "Diminuer la complexité des attentes du niveau d'études.", "Offrir un milieu d'apprentissage alternatif."],
    a: 2,
    tags: ["Éducation de l'enfance en difficulté", "Modifications"]
  },
  {
    id: "p38",
    q: "La fiabilité de l'évaluation au service de l'apprentissage dépend principalement de :",
    options: ["L'utilisation constante de rubriques de notation et de tests communs.", "Des objectifs d'apprentissage clairs, des critères de réussite et une rétroaction descriptive.", "Des évaluations sommatives fréquentes et des observations de l'enseignant.", "La capacité de l'élève à se souvenir des informations pour les quiz."],
    a: 1,
    tags: ["L'apprentissage pour tous", "Évaluation au service de l'apprentissage"]
  },
  {
    id: "p39",
    q: "Lequel est un comportement pour l'habileté d'apprentissage 'Autorégulation'?",
    options: ["Éviter les tâches difficiles pour réduire le stress.", "Accomplir les tâches seulement lorsqu'on le lui rappelle.", "Demander des précisions ou de l'aide au besoin.", "Gérer ses émotions en classe."],
    a: 3,
    tags: ["Faire croître le succès", "Habiletés d'apprentissage"]
  },
  {
    id: "p40",
    q: "Quel processus mathématique est soutenu par l'utilisation de modèles et de matériel de manipulation?",
    options: ["Réflexion", "Représentation", "Communication", "Résolution de problèmes"],
    a: 1,
    tags: ["Programme d'études", "Processus mathématiques"]
  },
  {
    id: "p41",
    q: "Selon 'Faire croître le succès', quel est l'objectif premier de la rétroaction?",
    options: ["Avoir des preuves concrètes à partager avec les parents.", "Assurer des données suffisantes pour les bulletins scolaires.", "Satisfaire aux exigences de variété dans l'évaluation.", "Réduire l'écart entre le niveau actuel de l'élève et les objectifs d'apprentissage."],
    a: 3,
    tags: ["Faire croître le succès", "Rétroaction descriptive"]
  },
  {
    id: "p42",
    q: "Comment une approche par projet soutient-elle à la fois la CUA et la différenciation pédagogique?",
    options: ["En créant des groupes homogènes de capacités similaires.", "En réduisant l'implication de l'enseignant.", "En fournissant des gabarits qui aident les élèves à travailler de manière autonome.", "En facilitant l'apprentissage par une variété de sujets ou de thèmes."],
    a: 3,
    tags: ["L'apprentissage pour tous", "CUA", "Différenciation pédagogique"]
  },
  {
    id: "p43",
    q: "Quelle pratique reconnaît que l'apprentissage est lié aux antécédents, à la langue et à l'identité sociale?",
    options: ["Pensée critique", "Approche à plusieurs niveaux", "Enseignement explicite", "Pédagogie sensible et adaptée à la culture (PSAC)"],
    a: 3,
    tags: ["Programme d'études", "Diversité", "PSAC"]
  },
  {
    id: "p44",
    q: "Quel type d'évaluation aide à comprendre où en sont les apprenants, où ils doivent aller et comment s'y rendre au mieux?",
    options: ["Évaluation au service de l'apprentissage", "Évaluation à grande échelle", "Évaluation sommative", "Évaluation de l'apprentissage"],
    a: 0,
    tags: ["Faire croître le succès", "Évaluation au service de l'apprentissage"]
  },
  {
    id: "p45",
    q: "Kothai utilise des outils, des petits groupes et des conversations mathématiques basés sur les besoins des élèves. Quel principe est le mieux démontré?",
    options: ["Un programme enseigné dans l'ordre des domaines d'étude.", "Des pratiques à fort impact utilisées une à la fois.", "Toutes les pratiques à fort impact utilisées dans chaque leçon.", "Choisir et combiner stratégiquement des pratiques pédagogiques à fort impact."],
    a: 3,
    tags: ["Programme d'études", "Pratiques à fort impact"]
  },
  {
    id: "p46",
    q: "Selon 'L'apprentissage pour tous', qu'entend-on par l'expression 'écarts de rendement'?",
    options: ["Une disparité de rendement entre des groupes d'élèves.", "Une mesure de réussite basée sur les capacités et les habitudes d'étude.", "L'écart entre le rendement réel et le rendement potentiel.", "Le regroupement des élèves selon le rendement démontré."],
    a: 0,
    tags: ["L'apprentissage pour tous", "Équité"]
  }
	  ]},
      {
        id: "math-no-calc",
        title: "Mathématiques",
        calc: false,
    
questions: [
  { 
    id: "m6", 
    q: "Quelle est la valeur de cette expression? $9,05 + 6,5 + 8,05 + 5 + 1,5$", 
    options: ["30,01", "30,1", "30,11", "31"], 
    a: 1, 
    tags: ["Arithmétique", "Décimaux"] 
  },
  { 
    id: "m7", 
    q: "Quelle est la valeur de : $(3 \\times 10^6) + (2 \\times 10^4) + (5 \\times 10^3) + (4 \\times 10^2) + (7 \\times 10^1) + (1 \\times 10^0)$?", 
    options: ["325 471", "3 025 470", "3 025 471", "30 254 710"], 
    a: 2, 
    tags: ["Sens du nombre", "Valeur de position", "Exposants"] 
  },
  { 
    id: "m8", 
    q: "Calculez : $(7 + 2,3) + 61 \\times 10^3$", 
    options: ["7 030", "70 300", "61 009,3", "61 093"], 
    a: 3, 
    tags: ["Arithmétique", "Priorité des opérations", "Notation scientifique"] 
  },
  { 
    id: "m9", 
    q: "Quelle est la valeur de : $17,86 \\div 0,19$?", 
    options: ["0,94", "9,4", "94", "940"], 
    a: 2, 
    tags: ["Arithmétique", "Décimaux", "Division"] 
  },
  { 
    id: "m10", 
    q: "Quelle est la valeur du chiffre $9$ dans le nombre $3\\ 590\\ 672$?", 
    options: ["$90$", "$9\\ 000$", "$90\\ 000$", "$900\\ 000$"], 
    a: 2, 
    tags: ["Sens du nombre", "Valeur de position"] 
  }
]
      },
      {
        id: "math-calc",
        title: "Mathématiques",
        calc: true,
        questions: [
          {
            id: "mc48",
            q: "Lesquelles des dimensions suivantes correspondent au rectangle ayant le plus petit périmètre ?",
            options: ["$10\\text{ m} \\times 1230\\text{ m}$", "$30\\text{ m} \\times 40\\text{ m}$", "$50\\text{ m} \\times 24\\text{ m}$", "$60\\text{ m} \\times 40\\text{ m}$"],
            a: 1,
            tags: ["Mesure", "Optimisation"]
          },
          {
            id: "mc49",
            q: "Une bouteille de shampooing de $530\\text{ mL}$ coûte $7,95\\$$. Quelle bouteille a le même coût par millilitre ?",
            options: ["$265\\text{ mL}$ pour $4,25\\$$", "$600\\text{ mL}$ pour $8,65\\$$", "$1160\\text{ mL}$ pour $15,90\\$$", "$1280\\text{ mL}$ pour $19,20\\$$"],
            a: 3,
            tags: ["Raisonnement proportionnel", "Taux unitaires"]
          },
          {
            id: "mc50",
            q: "Quelle puissance est équivalente à $3^{-6} \\times 3^2$ ?",
            options: ["$3^{-4}$", "$3^{-12}$", "$9^{-4}$", "$9^{-12}$"],
            a: 0,
            tags: ["Sens du nombre", "Exposants"]
          },
          {
            id: "mc51",
            q: "Onyee installe une clôture pour un jardin. Elle a besoin de deux sections de clôture de $6,2\\text{ mètres}$ de long chacune et de deux autres sections de $3,1\\text{ mètres}$ de long chacune. Si le prix de la clôture est de $4,17\\$ \\text{ par mètre}$, combien dépensera-t-elle au total ?",
            options: ["$38,78\\$$", "$64,64\\$$", "$77,56\\$$", "$80,15\\$$"],
            a: 2,
            tags: ["Mesure", "Arithmétique"]
          },
          {
            id: "mc52",
            q: "Le coût de $12$ biscuits est de $7,56\\$$. Chaque biscuit coûte le même montant. Combien coûtent $14$ biscuits ?",
            options: ["$1,00\\$$", "$8,19\\$$", "$8,82\\$$", "$9,56\\$$"],
            a: 2,
            tags: ["Raisonnement proportionnel", "Taux unitaires"]
          },
          {
            id: "mc53",
            q: "Deux associés vendent un article pour $175\\$$. La part de Christopher est de $80\\%$ du prix de vente. Combien Christopher reçoit-il de la vente ?",
            options: ["$141\\$$", "$351\\$$", "$140\\$$", "$155\\$$"],
            a: 2,
            tags: ["Sens du nombre", "Pourcentages"]
          },
          {
            id: "mc54",
            q: "Quelle est la valeur de l'expression $48 + 23 \\times 9 - (65 - 3)$ ?",
            options: ["$87$", "$193$", "$317$", "$571$"],
            a: 1,
            tags: ["Arithmétique", "Ordre des opérations"]
          },
          {
            id: "mc55",
            q: "Lesquels des éléments suivants sont les longueurs des côtés d'un triangle rectangle ?",
            options: ["$a = 2\\text{ cm}, b = 3\\text{ cm}, c = 13\\text{ cm}$", "$a = 9\\text{ cm}, b = 12\\text{ cm}, c = 15\\text{ cm}$", "$a = 30\\text{ cm}, b = 60\\text{ cm}, c = 90\\text{ cm}$", "$a = 64\\text{ cm}, b = 225\\text{ cm}, c = 289\\text{ cm}$"],
            a: 1,
            tags: ["Géométrie", "Théorème de Pythagore"]
          },
          {
            id: "mc56",
            q: "Quelle valeur de $x$ rendrait cette équation vraie ? $\\frac{(a^{12})(a^x)}{a^4} = a^2$",
            options: ["$x = -14$", "$x = -6$", "$x = 6$", "$x = 14$"],
            a: 1,
            tags: ["Algèbre", "Exposants"]
          },
          {
            id: "mc57",
            q: "Le prix, taxes incluses, d'un sac d'engrais de $25\\text{ kg}$ est de $62,25\\$$. Chaque hectare d'un champ nécessite $67\\text{ kg}$ d'engrais. Combien un agriculteur dépenserait-il en sacs complets d'engrais pour un champ de $8$ hectares ?",
            options: ["$1\\,307,25\\$$", "$1\\,334,64\\$$", "$1\\,369,50\\$$", "$1\\,494,00\\$$"],
            a: 2,
            tags: ["Mesure", "Arithmétique"]
          },
          {
            id: "mc58",
            q: "L'année dernière, Diana a vendu $800$ colliers. Cette année, elle en vend $1080$. Quel est le pourcentage d'augmentation du nombre de colliers vendus ?",
            options: ["$26\\%$", "$35\\%$", "$57\\%$", "$74\\%$"],
            a: 1,
            tags: ["Sens du nombre", "Pourcentages"]
          },
          {
            id: "mc59",
            q: "Le kiosque à légumes d'un agriculteur ne contient que des poivrons rouges et verts. Le rapport entre les poivrons rouges et les poivrons verts est de $2:3$. S'il y a $30$ poivrons au total, combien sont verts ?",
            options: ["$20$", "$18$", "$12$", "$5$"],
            a: 1,
            tags: ["Raisonnement proportionnel", "Rapports"]
          },
          {
            id: "mc60",
            q: "Quelle fraction est équivalente à $1,875$ ?",
            options: ["$\\frac{1875}{100}$", "$\\frac{8}{15}$", "$\\frac{1}{875}$", "$\\frac{15}{8}$"],
            a: 3,
            tags: ["Sens du nombre", "Fractions"]
          },
          {
            id: "mc61",
            q: "François lit $96$ pages en $2$ heures. Il reste $216$ pages dans le livre. S'il continue au même rythme, combien de temps supplémentaire lui faudra-t-il pour finir ?",
            options: ["$135$ minutes", "$195$ minutes", "$270$ minutes", "$390$ minutes"],
            a: 2,
            tags: ["Raisonnement proportionnel", "Taux"]
          },
          {
            id: "mc62",
            q: "Quel nombre est égal à $19$ milliers $+ 7$ dizaines ?",
            options: ["$190070$", "$19070$", "$19000,7$", "$0,000197$"],
            a: 1,
            tags: ["Sens du nombre", "Valeur de position"]
          },
          {
            id: "mc63",
            q: "Les billets d'un cinéma coûtent $14,25\\$$ chacun. Quel couple de coordonnées n'est PAS sur le graphique du Revenu par rapport au Nombre de billets vendus ?",
            options: ["$(0,0)$", "$(13, 185)$", "$(44, 637)$", "$(56, 798)$"],
            a: 1,
            tags: ["Algèbre", "Relations linéaires"]
          },
          {
            id: "mc64",
            q: "Une boîte contient $125$ trombones rouges, $201$ bleus et $174$ jaunes. Si Carla en choisit un au hasard, quelle valeur est la plus proche de la probabilité de choisir un jaune ?",
            options: ["$0,17$", "$0,35$", "$0,53$", "$0,65$"],
            a: 1,
            tags: ["Données", "Probabilité"]
          },
          {
            id: "mc65",
            q: "Un jeu vidéo comporte $15$ niveaux. Brom a terminé $6$ niveaux. Quel pourcentage des niveaux Brom a-t-il terminé ?",
            options: ["$6\\%$", "$9\\%$", "$40\\%$", "$60\\%$"],
            a: 2,
            tags: ["Sens du nombre", "Pourcentages"]
          },
          {
            id: "mc66",
            q: "Quelle est la valeur de $\\frac{3}{4} + 6 - \\frac{1}{4}$ ?",
            options: ["$\\frac{4}{8}$", "$\\frac{10}{8}$", "$\\frac{8}{4}$", "$\\frac{26}{4}$"],
            a: 3,
            tags: ["Arithmétique", "Fractions"]
          },
          {
            id: "mc67",
            q: "Omar s'entraîne pour un marathon. Au cours des trois dernières semaines, il a couru $35,3\\text{ km}$ deux fois, $37,8\\text{ km}$ deux fois et $17,6\\text{ km}$ une fois. Combien de kilomètres a-t-il courus au total ?",
            options: ["$181,4\\text{ km}$", "$163,8\\text{ km}$", "$94,7\\text{ km}$", "$90,7\\text{ km}$"],
            a: 1,
            tags: ["Arithmétique", "Décimaux"]
          },
          {
            id: "mc68",
            q: "Un paquet de graines coûte $1,35\\$$. Combien coûteraient $42$ paquets de graines ?",
            options: ["$5,67\\$$", "$56,70\\$$", "$567\\$$", "$5\\,670\\$$"],
            a: 1,
            tags: ["Arithmétique", "Décimaux"]
          },
          {
            id: "mc69",
            q: "Une boîte contient des billes oranges et vertes. La probabilité de choisir orange est de $0,46$. Quelle est la probabilité de choisir verte ?",
            options: ["$0,46$", "$0,5$", "$0,54$", "$0,64$"],
            a: 2,
            tags: ["Données", "Probabilité"]
          },
          {
            id: "mc70",
            q: "Quel ensemble de nombres est classé du plus petit au plus grand ?",
            options: ["$1/4, 2/3, 3/8, 4/5, 7/16$", "$2/3, 1/4, 4/5, 3/8, 7/16$", "$1/4, 3/8, 7/16, 2/3, 4/5$", "$1/4, 3/8, 2/3, 4/5, 7/16$"],
            a: 2,
            tags: ["Sens du nombre", "Fractions"]
          },
          {
            id: "mc71",
            q: "Une caisse de $12$ bouteilles d'eau coûte $6,48\\$$. Quel est le coût par bouteille ?",
            options: ["$0,50\\$$", "$0,54\\$$", "$1,85\\$$", "$5,52\\$$"],
            a: 1,
            tags: ["Raisonnement proportionnel", "Taux unitaires"]
          },
          {
            id: "mc72",
            q: "Quelle est la médiane de $[6,09; 6,15; 6,28; 6,86; 7,04; 7,18; 7,18; 7,45]$ ?",
            options: ["$6,78$", "$6,86$", "$6,95$", "$7,18$"],
            a: 2,
            tags: ["Données", "Médiane"]
          },
          {
            id: "mc73",
            q: "Amale convertit $1000$ euros en CAD ($1\\text{ CAD} = 0,6169\\text{ EUR}$). Kumar convertit $1100$ SGD en CAD ($1\\text{ CAD} = 0,9288\\text{ SGD}$). Quelle affirmation est vraie ?",
            options: ["Amale a $436,68\\$$ de plus que Kumar.", "Amale a $599,33\\$$ de plus que Kumar.", "Kumar a $404,78\\$$ de plus que Amale.", "Kumar a $567,42\\$$ de plus que Amale."],
            a: 0,
            tags: ["Raisonnement proportionnel", "Conversions"]
          },
          {
            id: "mc74",
            q: "Quelle est la solution de cette équation ? $\\frac{t}{3} - 4 = 14$",
            options: ["$26$", "$30$", "$46$", "$54$"],
            a: 3,
            tags: ["Algèbre", "Équations"]
          },
          {
            id: "mc75",
            q: "Max parcourt $60\\text{ km}$ en $50\\text{ minutes}$. Il lui reste $90\\text{ km}$. À la même vitesse, combien de temps supplémentaire lui faudra-t-il ?",
            options: ["$75$ minutes", "$80$ minutes", "$108$ minutes", "$125$ minutes"],
            a: 0,
            tags: ["Raisonnement proportionnel", "Taux"]
          },
          {
            id: "mc76",
            q: "Quelle est la solution de cette équation ? $3(7 - x) = 27$",
            options: ["$-2$", "$-6$", "$-17$", "$-74$"],
            a: 0,
            tags: ["Algèbre", "Équations"]
          },
          {
            id: "mc77",
            q: "Un programme de fidélité offre $2500$ points par achat, plus un bonus de $7500$ points. Combien d'achats permettent d'obtenir $70\\,000$ points ?",
            options: ["$7$", "$9$", "$25$", "$31$"],
            a: 2,
            tags: ["Algèbre", "Relations linéaires"]
          },
          {
            id: "mc78",
            q: "Quel nombre est représenté par cette forme décomposée ? $(7 \\times 10^6) + (3 \\times 10^4) + (6 \\times 10^3) + (2 \\times 10) + (9 \\times 1)$?",
            options: ["$736\\,291$", "$7\\,036\\,029$", "$7\\,030\\,629$", "$7\\,003\\,629$"],
            a: 1,
            tags: ["Sens du nombre", "Valeur de position"]
          }
        ]
      }
      
    ]
  },
  "mpt-mock-3": {
    id: "mpt-mock-3",
    title: "Test d'entraînement nº 3",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pédagogie",
        calc: false,
        questions: [
          { id: "p15", q: "Selon « Croissance et réussite », quel type d'évaluation est utilisé pour fournir une rétroaction aux élèves et aux enseignants afin d'ajuster l'enseignement en cours ?", options: ["L'évaluation de l'apprentissage", "L'évaluation au service de l'apprentissage", "L'évaluation en tant qu'apprentissage", "L'évaluation sommative"], a: 1, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p16", q: "Quel document met l'accent sur « l'approche par paliers » en matière de prévention et d'intervention pour soutenir tous les apprenants ?", options: ["Croissance et réussite", "L'apprentissage pour tous", "Le curriculum de mathématiques de l'Ontario", "La Loi sur l'éducation"], a: 1, tags: ["L'apprentissage pour tous", "Éducation spécialisée"] },
          { id: "p17", q: "Quels sont les trois principes de la « conception universelle de l'apprentissage » (CUA) selon L'apprentissage pour tous ?", options: ["Adaptation, Modification, Approche alternative", "Différenciation pédagogique, Approche par paliers, Communautés d'apprentissage professionnelles", "Représentation, Expression, Engagement", "Diagnostique, Formative, Sommative"], a: 2, tags: ["L'apprentissage pour tous", "CUA"] },
          { id: "p18", q: "Dans le curriculum de mathématiques de l'Ontario, quel « processus mathématique » consiste à établir des liens entre les concepts mathématiques et les contextes du monde réel ?", options: ["La résolution de problèmes", "Le raisonnement et la démonstration", "L'établissement de liens", "La communication"], a: 2, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p19", q: "Selon « Croissance et réussite », quel est l'objectif principal de « l'évaluation en tant qu'apprentissage » ?", options: ["Attribuer une note", "Surveiller les progrès des élèves", "Développer la capacité des élèves à s'auto-évaluer et à utiliser la métacognition", "Fournir des données pour les rapports des conseils scolaires"], a: 2, tags: ["Croissance et réussite", "Métacognition"] },
          { id: "p20", q: "Lequel des éléments suivants est une « adaptation » plutôt qu'une « modification » ?", options: ["Changer le niveau scolaire des attentes du curriculum", "Réduire le nombre d'attentes qu'un élève doit satisfaire", "Fournir du temps supplémentaire ou un endroit calme pour les tests", "Utiliser un ensemble différent de critères de rendement pour l'évaluation"], a: 2, tags: ["Croissance et réussite", "Adaptations"] },
          { id: "p21", q: "Selon « L'apprentissage pour tous », à quoi sert principalement un « profil de classe » ?", options: ["Enregistrer l'assiduité et les problèmes de comportement", "Classer les élèves dans des groupes de niveau permanents", "Planifier un enseignement qui répond aux besoins divers de l'ensemble de la classe", "Résumer les notes finales pour la direction"], a: 2, tags: ["L'apprentissage pour tous", "Profil de classe"] },
          { id: "p22", q: "Le curriculum de mathématiques de l'Ontario de 2020 introduit les « habiletés d'apprentissage socioémotionnel (ASE) ». Où ces habiletés sont-elles intégrées ?", options: ["Sous forme d'unité distincte et autonome", "Dans tous les domaines d'étude du curriculum", "Uniquement dans le domaine du Sens du nombre", "Uniquement pour les élèves ayant un PEI"], a: 1, tags: ["Curriculum", "ASE"] },
          { id: "p23", q: "Selon « Croissance et réussite », les « habiletés d'apprentissage et habitudes de travail » doivent être communiquées...", options: ["Séparément du rendement académique", "Comme faisant partie de la note en pourcentage", "Uniquement si l'élève est en situation d'échec", "Uniquement à la fin de l'année"], a: 0, tags: ["Croissance et réussite", "Communication du rendement"] },
          { id: "p24", q: "Quel est l'objectif de la « différenciation pédagogique » tel que décrit dans L'apprentissage pour tous ?", options: ["Enseigner la même leçon à tout le monde en même temps", "Fournir des expériences d'apprentissage différentes basées sur la préparation et les intérêts de l'élève", "Grouper les élèves par genre", "Éliminer toutes les évaluations"], a: 1, tags: ["L'apprentissage pour tous", "Différenciation pédagogique"] },
          { id: "p25", q: "Quel processus mathématique implique de « justifier une solution » et de « formuler des conjectures » ?", options: ["La réflexion", "Le choix d'outils et de stratégies de calcul", "Le raisonnement et la démonstration", "La représentation"], a: 2, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p26", q: "Selon « Croissance et réussite », qu'est-ce qui définit une évaluation « critériée » ?", options: ["Comparer le rendement d'un élève à celui d'autres élèves", "Évaluer le rendement par rapport à des normes fixes et prédéterminées", "Noter selon une courbe de distribution", "Évaluer uniquement l'effort et la participation"], a: 1, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p27", q: "L'apprentissage pour tous identifie les « communautés d'apprentissage professionnelles » (CAP) comme un moyen de...", options: ["Sanctionner les enseignants", "Améliorer la réussite des élèves grâce à une enquête collaborative entre enseignants", "Recueillir des fonds pour les fournitures scolaires", "Organiser des assemblées scolaires"], a: 1, tags: ["L'apprentissage pour tous", "CAP"] },
          { id: "p28", q: "La vision du curriculum de mathématiques de l'Ontario inclut d'aider les élèves à développer une « identité positive en tant qu'apprenant des mathématiques ». Ceci est étroitement lié à :", options: ["La mémorisation de tous les faits mathématiques", "Des concours de mathématiques compétitifs", "L'apprentissage socioémotionnel et l'équité", "Le rendement aux tests standardisés"], a: 2, tags: ["Curriculum", "Vision"] },
          { id: "p29", q: "Que dit « Croissance et réussite » à propos des « travaux en retard ou non remis » de la 7e à la 12e année ?", options: ["Ils doivent toujours entraîner une note de zéro", "Les enseignants doivent faire preuve de jugement professionnel et tenir compte des circonstances individuelles", "Ils ne peuvent être acceptés que si un parent fournit un billet du médecin", "Ils n'ont aucun impact sur la note finale"], a: 1, tags: ["Croissance et réussite", "Communication du rendement"] },
          { id: "p30", q: "Quelle approche, dans L'apprentissage pour tous, utilise les données d'évaluation pour décider quels élèves ont besoin d'un soutien plus intensif ?", options: ["L'approche par paliers", "La conception universelle", "La grille d'évaluation du rendement", "L'évaluation diagnostique"], a: 0, tags: ["L'apprentissage pour tous", "Approche par paliers"] },
          { id: "p31", q: "Selon le contexte du curriculum de mathématiques, qu'est-ce qu'une « pratique pédagogique à impact élevé » ?", options: ["Utiliser un seul manuel scolaire pour toute l'année", "Des stratégies fondées sur des données probantes comme l'enseignement direct, la résolution de problèmes et les conversations mathématiques", "Donner un cours magistral pendant toute la période", "Assigner 50 problèmes de devoirs chaque jour"], a: 1, tags: ["Curriculum", "Pratiques pédagogiques"] },
          { id: "p32", q: "« Croissance et réussite » stipule que « l'évaluation » (evaluation) est le processus consistant à :", options: ["Recueillir des informations pour soutenir l'apprentissage", "Juger la qualité de l'apprentissage de l'élève sur la base de critères établis et lui attribuer une valeur", "Prédire la réussite future à l'université", "Classer les élèves du plus fort au plus faible"], a: 1, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p33", q: "Comment les élèves qui apprennent l'anglais (ELL) doivent-ils être évalués selon « Croissance et réussite » ?", options: ["En utilisant immédiatement les mêmes critères que les locuteurs natifs", "Avec des modifications aux attentes s'ils sont aux premières étapes de l'acquisition de l'anglais", "Ils devraient être exemptés de toutes les évaluations", "En traduisant chaque test dans leur langue maternelle"], a: 1, tags: ["Croissance et réussite", "ELL"] },
          { id: "p34", q: "Qu'est-ce que la « triangulation » dans le contexte de la collecte de preuves d'évaluation ?", options: ["Utiliser trois enseignants différents pour noter un test", "Recueillir des preuves à partir d'observations, de conversations et de productions d'élèves", "S'assurer que toutes les questions de mathématiques impliquent des triangles", "Évaluer les élèves exactement trois fois par unité"], a: 1, tags: ["Croissance et réussite", "Triangulation"] },
          { id: "p35", q: "Dans le curriculum de mathématiques de 9e année de 2021, le « codage » est inclus pour aider les élèves à :", options: ["Devenir uniquement des informaticiens", "Développer la pensée computationnelle et approfondir leur compréhension des concepts mathématiques", "Remplacer la nécessité d'apprendre l'arithmétique de base", "Augmenter leur temps d'écran"], a: 1, tags: ["Curriculum", "Codage"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Mathématiques",
        calc: false,
        questions: [
          { id: "mnc1", q: "Calculez : $15 - (4 + 2)^2 \\div 4$", options: ["6", "12", "6,5", "5"], a: 0, tags: ["Sens du nombre", "Ordre des opérations"] },
          { id: "mnc2", q: "Lequel des nombres suivants est égal à $0,075$ ?", options: ["$3/40$", "$75/100$", "$7/50$", "$3/4$"], a: 0, tags: ["Sens du nombre", "Fractions/Décimaux"] },
          { id: "mnc3", q: "Un jardin rectangulaire a une longueur de $12,5\\text{ m}$ et une largeur de $4\\text{ m}$. Quelle est son aire ?", options: ["$48\\text{ m}^2$", "$50\\text{ m}^2$", "$62,5\\text{ m}^2$", "$500\\text{ m}^2$"], a: 1, tags: ["Mesure", "Aire"] },
          { id: "mnc4", q: "Quelle est la valeur de $2^5 - \\sqrt{81}$ ?", options: ["1", "11", "23", "25"], a: 2, tags: ["Sens du nombre", "Exposants"] },
          { id: "mnc5", q: "Classez les nombres suivants du plus petit au plus grand : $-0,6; -1/2; -0,75; 0$.", options: ["$-0,75; -0,6; -1/2; 0$", "$0; -1/2; -0,6; -0,75$", "$-1/2; -0,6; -0,75; 0$", "$-0,75; -1/2; -0,6; 0$"], a: 0, tags: ["Sens du nombre", "Nombres entiers"] }
        ]
      },
      {
        id: "math-calc",
        title: "Mathématiques",
        calc: true,
        questions: [
          { id: "mc79", q: "Un magasin offre un rabais de $15\\%$ sur une veste dont le prix initial est de $120\\$$. Après le rabais, une taxe de vente de $13\\%$ est appliquée. Quel est le prix final ?", options: ["$102,00\\$$", "$115,26\\$$", "$113,10\\$$", "$122,40\\$$"], a: 1, tags: ["Littératie financière", "Pourcentages"] },
          { id: "mc80", q: "Le rapport entre les billes bleues et les billes rouges dans un sac est de $4:7$. S'il y a $36$ billes bleues, combien y a-t-il de billes rouges ?", options: ["28", "49", "63", "84"], a: 2, tags: ["Raisonnement proportionnel", "Rapports"] },
          { id: "mc81", q: "Résolvez pour $x$ : $4(x - 3) = 2x + 10$.", options: ["1", "4", "7", "11"], a: 3, tags: ["Algèbre", "Équations"] },
          { id: "mc82", q: "Un réservoir cylindrique a un rayon de $3\\text{ m}$ et une hauteur de $5\\text{ m}$. Quel est son volume ? (Utilisez $\\pi \\approx 3,14$)", options: ["$47,1\\text{ m}^3$", "$94,2\\text{ m}^3$", "$141,3\\text{ m}^3$", "$282,6\\text{ m}^3$"], a: 2, tags: ["Mesure", "Volume"] },
          { id: "mc83", q: "Une voiture parcourt $240\\text{ km}$ en $3$ heures. À ce même rythme constant, quelle distance parcourra-t-elle en $7$ heures ?", options: ["$480\\text{ km}$", "$560\\text{ km}$", "$600\\text{ km}$", "$720\\text{ km}$"], a: 1, tags: ["Raisonnement proportionnel", "Taux"] },
          { id: "mc84", q: "Déterminez la moyenne de l'ensemble de données : $[12, 15, 18, 22, 22, 31]$.", options: ["20", "22", "18,5", "21"], a: 0, tags: ["Données", "Moyenne"] },
          { id: "mc85", q: "Quelle expression est équivalente à $(x^4 \\cdot x^3) \\div x^2$ ?", options: ["$x^5$", "$x^9$", "$x^6$", "$x^{10}$"], a: 0, tags: ["Sens du nombre", "Exposants"] },
          { id: "mc86", q: "Un investissement de $5000\\$$ rapporte un intérêt simple de $3\\%$ par an. Quel est le montant des intérêts gagnés après $4$ ans ?", options: ["$150\\$$", "$450\\$$", "$600\\$$", "$6000\\$$"], a: 2, tags: ["Littératie financière", "Intérêt"] },
          { id: "mc87", q: "L'hypoténuse d'un triangle rectangle est de $13\\text{ cm}$ et l'un des côtés de l'angle droit mesure $5\\text{ cm}$. Quelle est la longueur de l'autre côté ?", options: ["$8\\text{ cm}$", "$10\\text{ cm}$", "$12\\text{ cm}$", "$18\\text{ cm}$"], a: 2, tags: ["Géométrie", "Théorème de Pythagore"] },
          { id: "mc88", q: "Représentez numériquement la relation linéaire $y = -2x + 5$. Quel ensemble de paires $(x, y)$ est correct ?", options: ["$(0,5), (1,3), (2,1)$", "$(0,5), (1,7), (2,9)$", "$(1,3), (2,5), (3,7)$", "$(0,-2), (1,3), (2,8)$"], a: 0, tags: ["Algèbre", "Relations linéaires"] },
          { id: "mc89", q: "Une personne gagne $18,50\\$$ de l'heure. Si elle travaille $37,5$ heures par semaine, quel est son salaire hebdomadaire brut ?", options: ["$693,75\\$$", "$712,50\\$$", "$685,00\\$$", "$740,00\\$$"], a: 0, tags: ["Littératie financière", "Taux"] },
          { id: "mc90", q: "Quelle est la probabilité d'obtenir une somme de $7$ en lançant deux dés standard à six faces ?", options: ["$1/6$", "$1/12$", "$5/36$", "$1/7$"], a: 0, tags: ["Données", "Probabilité"] },
          { id: "mc91", q: "Convertissez $4500\\text{ millilitres}$ en litres.", options: ["$0,45\\text{ L}$", "$4,5\\text{ L}$", "$45\\text{ L}$", "$450\\text{ L}$"], a: 1, tags: ["Mesure", "Conversions"] },
          { id: "mc92", q: "Une recette nécessite $2/3$ de tasse de sucre pour chaque $2$ tasses de farine. Quelle quantité de sucre est nécessaire pour $5$ tasses de farine ?", options: ["$1,5\\text{ tasse}$", "$1,67\\text{ tasse}$", "$1\\text{ tasse}$", "$1,33\\text{ tasse}$"], a: 1, tags: ["Raisonnement proportionnel", "Rapports"] },
          { id: "mc93", q: "Lequel des éléments suivants représente une relation non linéaire ?", options: ["$y = 3x - 1$", "$y = x^2 + 4$", "$x + y = 10$", "$y = 0,5x$"], a: 1, tags: ["Algèbre", "Linéaire vs Non linéaire"] },
          { id: "mc94", q: "Évaluez $3^0 + 3^{-1}$ sous forme de fraction.", options: ["$1/3$", "$4/3$", "$0$", "$1$"], a: 1, tags: ["Sens du nombre", "Exposants"] },
          { id: "mc95", q: "Un prisme rectangulaire a pour dimensions $4\\text{ cm} \\times 5\\text{ cm} \\times 10\\text{ cm}$. Quelle est son aire de surface ?", options: ["$200\\text{ cm}^2$", "$110\\text{ cm}^2$", "$220\\text{ cm}^2$", "$180\\text{ cm}^2$"], a: 2, tags: ["Mesure", "Aire de surface"] },
          { id: "mc96", q: "Un vendeur reçoit un salaire de base de $400\\$$ par semaine plus une commission de $5\\%$ sur les ventes. S'il vend pour $8000\\$$ de marchandises, quel est son salaire total ?", options: ["$400\\$$", "$800\\$$", "$1200\\$$", "$4400\\$$"], a: 1, tags: ["Littératie financière", "Modélisation algébrique"] },
          { id: "mc97", q: "Quelle valeur de $x$ rend vraie la proportion $x/15 = 8/12$ ?", options: ["6", "10", "11", "12"], a: 1, tags: ["Raisonnement proportionnel", "Proportions"] },
          { id: "mc98", q: "Quelle est la valeur de $\\sqrt{0,64}$ ?", options: ["0,08", "0,8", "8", "0,32"], a: 1, tags: ["Sens du nombre", "Racines"] },
          { id: "mc99", q: "Un budget alloue $30\\%$ pour le loyer, $20\\%$ pour la nourriture et $15\\%$ pour le transport. Si le budget total est de $3200\\$$, combien reste-t-il pour les autres dépenses ?", options: ["$1120\\$$", "$2080\\$$", "$1000\\$$", "$1200\\$$"], a: 0, tags: ["Littératie financière", "Budget"] },
          { id: "mc100", q: "Trouvez la médiane de : $14, 12, 19, 22, 14, 16$.", options: ["14", "15", "16", "17"], a: 1, tags: ["Données", "Médiane"] },
          { id: "mc101", q: "L'échelle d'une carte est $1:50\\,000$. Si deux villes sont distantes de $8\\text{ cm}$ sur la carte, quelle est la distance réelle en kilomètres ?", options: ["$4\\text{ km}$", "$40\\text{ km}$", "$400\\text{ km}$", "$0,4\\text{ km}$"], a: 0, tags: ["Raisonnement proportionnel", "Échelle"] },
          { id: "mc102", q: "Résolvez le système linéaire graphiquement : $y = x + 1$ et $y = -x + 5$. Quel est le point d'intersection ?", options: ["$(1,2)$", "$(2,3)$", "$(3,2)$", "$(4,1)$"], a: 1, tags: ["Algèbre", "Systèmes linéaires"] },
          { id: "mc103", q: "Combien font $45\\%$ de $150,00\\$$ ?", options: ["$67,50\\$$", "$60,00\\$$", "$75,00\\$$", "$55,50\\$$"], a: 0, tags: ["Littératie financière", "Pourcentages"] },
          { id: "mc104", q: "L'aire d'un cercle est de $78,5\\text{ cm}^2$. Quel est son rayon approximatif ? (Utilisez $\\pi \\approx 3,14$)", options: ["$5\\text{ cm}$", "$10\\text{ cm}$", "$25\\text{ cm}$", "$12,5\\text{ cm}$"], a: 0, tags: ["Mesure", "Aire des cercles"] },
          { id: "mc105", q: "Le salaire d'un travailleur passe de $20\\$/\\text{h}$ à $23\\$/\\text{h}$. Quel est le pourcentage d'augmentation ?", options: ["$3\\%$", "$15\\%$", "$13\\%$", "$20\\%$"], a: 1, tags: ["Littératie financière", "Variation en pourcentage"] },
          { id: "mc106", q: "Quelle fraction se situe entre $1/2$ et $3/4$ ?", options: ["$2/5$", "$5/8$", "$7/8$", "$1/3$"], a: 1, tags: ["Sens du nombre", "Fractions"] },
          { id: "mc107", q: "Une voiture de location coûte $40\\$$ par jour plus $0,15\\$$ par kilomètre. Si la voiture parcourt $200\\text{ km}$ en une journée, quel est le coût total ?", options: ["$70\\$$", "$60\\$$", "$30\\$$", "$55\\$$"], a: 0, tags: ["Littératie financière", "Modélisation algébrique"] },
          { id: "mc108", q: "Simplifiez : $5(2x - 3) - 3(x + 4)$.", options: ["$7x - 27$", "$7x - 3$", "$10x - 15$", "$13x - 3$"], a: 0, tags: ["Algèbre", "Polynômes"] },
          { id: "mc109", q: "Quel est le mode de l'ensemble de données : $[5, 8, 5, 12, 10, 8, 5]$ ?", options: ["5", "8", "10", "12"], a: 0, tags: ["Données", "Mode"] },
          { id: "mc110", q: "Une paire de chaussures est en solde à $64\\$$, ce qui représente $80\\%$ du prix original. Quel était le prix original ?", options: ["$80\\$$", "$75\\$$", "$100\\$$", "$120\\$$"], a: 0, tags: ["Littératie financière", "Pourcentages"] },
          { id: "mc111", q: "Trouvez le périmètre d'un demi-cercle d'un rayon de $10\\text{ cm}$. (Utilisez $\\pi \\approx 3,14$)", options: ["$31,4\\text{ cm}$", "$51,4\\text{ cm}$", "$41,4\\text{ cm}$", "$62,8\\text{ cm}$"], a: 1, tags: ["Mesure", "Périmètre"] },
          { id: "mc112", q: "Si $x = -3$, quelle est la valeur de $2x^2 - 5x + 1$ ?", options: ["2", "34", "4", "22"], a: 1, tags: ["Algèbre", "Substitution"] },
          { id: "mc113", q: "Un sac contient $3$ boules rouges, $5$ vertes et $2$ bleues. Quelle est la probabilité de ne PAS choisir une boule verte ?", options: ["$1/2$", "$1/5$", "$3/10$", "$7/10$"], a: 0, tags: ["Données", "Probabilité"] },
          { id: "mc114", q: "Quel taux unitaire correspond au prix le plus bas ?", options: ["$3$ pour $10,50\\$$", "$5$ pour $17,00\\$$", "$2$ pour $7,20\\$$", "$10$ pour $35,00\\$$"], a: 1, tags: ["Raisonnement proportionnel", "Taux unitaires"] },
          { id: "mc115", q: "Exprimez $0,000042$ en notation scientifique.", options: ["$4,2 \\times 10^5$", "$4,2 \\times 10^{-5}$", "$42 \\times 10^{-6}$", "$0,42 \\times 10^{-4}$"], a: 1, tags: ["Sens du nombre", "Notation scientifique"] },
          { id: "mc116", q: "Un compte d'épargne rapporte un intérêt de $2\\%$ composé annuellement. Si $1000\\$$ sont investis, quel est le solde après $2$ ans ?", options: ["$1040,00\\$$", "$1040,40\\$$", "$1020,00\\$$", "$1200,00\\$$"], a: 1, tags: ["Littératie financière", "Intérêts composés"] },
          { id: "mc117", q: "Les angles d'un triangle sont dans le rapport $2:3:5$. Quelle est la mesure du plus grand angle ?", options: ["$36^\\circ$", "$54^\\circ$", "$90^\\circ$", "$100^\\circ$"], a: 2, tags: ["Géométrie", "Rapports"] },
          { id: "mc118", q: "Résolvez : $x/4 - 1 = 5$.", options: ["16", "24", "20", "25"], a: 1, tags: ["Algèbre", "Équations"] },
          { id: "mc119", q: "Un cube a une aire de surface de $150\\text{ cm}^2$. Quelle est la longueur d'un côté ?", options: ["$5\\text{ cm}$", "$25\\text{ cm}$", "$6\\text{ cm}$", "$10\\text{ cm}$"], a: 0, tags: ["Mesure", "Géométrie"] },
          { id: "mc120", q: "Quel est le résultat d'une augmentation de $80\\$$ de $15\\%$, suivie d'une diminution de ce résultat de $15\\%$ ?", options: ["$80,00\\$$", "$78,20\\$$", "$81,80\\$$", "$75,00\\$$"], a: 1, tags: ["Littératie financière", "Pourcentages"] },
          { id: "mc121", q: "Lequel représente une vitesse de $60\\text{ km/h}$ ?", options: ["$1\\text{ km/min}$", "$600\\text{ m/s}$", "$10\\text{ km/min}$", "$360\\text{ km/jour}$"], a: 0, tags: ["Raisonnement proportionnel", "Taux"] },
          { id: "mc122", q: "Simplifiez : $(2^3)^2 \\cdot 2^{-4}$.", options: ["$2^2$", "$2^1$", "$2^6$", "$2^0$"], a: 0, tags: ["Sens du nombre", "Exposants"] },
          { id: "mc123", q: "Un terrain est un trapèze dont les côtés parallèles mesurent $20\\text{ m}$ et $30\\text{ m}$, et la hauteur est de $15\\text{ m}$. Quelle est son aire ?", options: ["$375\\text{ m}^2$", "$750\\text{ m}^2$", "$450\\text{ m}^2$", "$300\\text{ m}^2$"], a: 0, tags: ["Mesure", "Aire"] }
        ]
      }
    ]
  }
  ,
 "mpt-mock-4": {
    id: "mpt-mock-4",
    title: "Test d'entraînement nº 4",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pédagogie",
        calc: false,
        questions: [
          { id: "p36", q: "Selon « Croissance et réussite », lequel des éléments suivants doit être l'objet principal de l'évaluation ?", options: ["L'effort et la participation de l'élève", "Les attentes du curriculum", "Le rendement de l'élève par rapport à ses pairs", "La réalisation de tous les devoirs"], a: 1, tags: ["Croissance et réussite", "Attentes"] },
          { id: "p37", q: "Quel est l'objectif principal de la Conception universelle de l'apprentissage (CUA) ?", options: ["Fournir un tutorat individuel à tous les élèves", "Créer un plan de leçon unique et standardisé pour le conseil scolaire", "Offrir une flexibilité suffisante en classe pour répondre aux besoins de tous les élèves", "Séparer les élèves en fonction de leurs scores d'intelligence"], a: 2, tags: ["L'apprentissage pour tous", "CUA"] },
          { id: "p38", q: "Dans le contexte du curriculum de mathématiques de l'Ontario, quel processus implique d'« élaborer un plan » et d'« exécuter le plan » ?", options: ["La résolution de problèmes", "Le choix d'outils", "La réflexion", "La représentation"], a: 0, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p39", q: "Quel type d'évaluation fournit aux élèves une « image claire de leurs progrès » et identifie les prochaines étapes spécifiques ?", options: ["Sommative", "Diagnostique", "Évaluation au service de l'apprentissage", "Évaluation par les pairs"], a: 2, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p40", q: "Selon « L'apprentissage pour tous », une intervention de « palier 3 » se caractérise par :", options: ["Un enseignement à l'ensemble de la classe", "Un soutien ciblé en petits groupes", "Un soutien individuel intensif", "Des rencontres parents-enseignants"], a: 2, tags: ["L'apprentissage pour tous", "Approche par paliers"] },
          { id: "p41", q: "Quel document fournit les « niveaux de rendement » spécifiques utilisés pour la communication des résultats sur le bulletin provincial ?", options: ["La Loi sur l'éducation", "Croissance et réussite", "L'apprentissage pour tous", "Le manuel du conseil scolaire"], a: 1, tags: ["Croissance et réussite", "Grille d'évaluation du rendement"] },
          { id: "p42", q: "Lorsqu'un élève ayant un PEI reçoit des « modifications », qu'est-ce qui est précisément changé ?", options: ["L'environnement de la classe", "La durée du test", "Les attentes relatives au niveau scolaire ou le nombre d'attentes", "La couleur du papier utilisé pour l'examen"], a: 2, tags: ["Croissance et réussite", "Éducation spécialisée"] },
          { id: "p43", q: "Le contexte du curriculum de mathématiques de 2020 décrit la « modélisation mathématique » comme :", options: ["Construire des modèles physiques avec des blocs", "Le processus de description d'une situation du monde réel à l'aide des mathématiques", "Une unité distincte enseignée à la fin de la 9e année", "L'utilisation d'une calculatrice pour chaque problème"], a: 1, tags: ["Curriculum", "Modélisation"] },
          { id: "p44", q: "Sous « Croissance et réussite », le « jugement professionnel » est défini comme un jugement qui est :", options: ["Basé sur les préférences personnelles de l'enseignant", "Éclairé par les connaissances professionnelles et les normes d'éthique", "Un calcul strictement mathématique des notes", "Dicté par la direction de l'école"], a: 1, tags: ["Croissance et réussite", "Jugement professionnel"] },
          { id: "p45", q: "Selon « L'apprentissage pour tous », lequel des éléments suivants est une composante d'un « profil de l'élève » ?", options: ["L'adresse du domicile de l'élève", "Les forces, les besoins et les intérêts de l'élève", "La note finale de l'élève en 3e année", "L'historique médical de l'élève uniquement"], a: 1, tags: ["L'apprentissage pour tous", "Profil de l'élève"] },
          { id: "p46", q: "Quel processus mathématique met l'accent sur l'utilisation de « matériel concret » et d'« images mentales » pour comprendre les concepts ?", options: ["La représentation", "Le raisonnement et la démonstration", "La communication", "L'établissement de liens"], a: 0, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p47", q: "Selon « Croissance et réussite », les enseignants doivent s'assurer que l'évaluation est :", options: ["Secrète jusqu'à l'émission du bulletin", "Basée sur la note la plus élevée obtenue pendant le semestre", "Transparente et partagée avec les élèves et les parents", "Basée sur une courbe de Gauss (cloche)"], a: 2, tags: ["Croissance et réussite", "Transparence"] },
          { id: "p48", q: "« L'apprentissage pour tous » stipule que « l'étayage » (scaffolding) implique de :", options: ["Construire une structure physique dans la classe", "Fournir un soutien temporaire pour aider un élève à atteindre un niveau de compréhension supérieur", "Assigner un travail plus difficile lorsqu'un élève échoue", "Grouper les élèves par âge uniquement"], a: 1, tags: ["L'apprentissage pour tous", "Étayage"] },
          { id: "p49", q: "Le curriculum de mathématiques de 9e année (2021) est « décloisonné ». Cela signifie que :", options: ["Les mathématiques ne sont plus obligatoires", "Les élèves sont séparés entre les filières théorique et appliquée", "Tous les élèves suivent le même programme d'études pour promouvoir l'équité", "Le cours est uniquement dispensé en ligne"], a: 2, tags: ["Curriculum", "Équité"] },
          { id: "p50", q: "Dans « Croissance et réussite », que représente la lettre « R » sur un bulletin scolaire pour les élèves de la 1re à la 8e année ?", options: ["L'élève est prêt (Ready) pour l'année suivante", "Le rendement est inférieur au niveau 1 ; un soutien supplémentaire est requis", "L'élève a été rare dans sa participation", "L'unité doit être répétée"], a: 1, tags: ["Croissance et réussite", "Communication du rendement"] },
          { id: "p51", q: "Selon « L'apprentissage pour tous », la « différenciation pédagogique » inclut la variation :", options: ["Du contenu, du processus, de la production ou de l'environnement d'apprentissage", "Du salaire et des avantages sociaux de l'enseignant", "Des heures de début d'école", "De la taille de la cour de récréation"], a: 0, tags: ["L'apprentissage pour tous", "Différenciation pédagogique"] },
          { id: "p52", q: "Quel domaine d'étude du nouveau curriculum inclut spécifiquement la « littératie financière » ?", options: ["Domaine A", "Domaine B", "Domaine C", "Domaine F"], a: 3, tags: ["Curriculum", "Domaines d'étude"] },
          { id: "p53", q: "« Croissance et réussite » stipule que la rétroaction doit être :", options: ["Uniquement donnée à la fin d'une unité", "Uniquement évaluative (ex. : « Bon travail »)", "Descriptive et opportune", "Limitée à un score numérique"], a: 2, tags: ["Croissance et réussite", "Rétroaction"] },
          { id: "p54", q: "Selon « L'apprentissage pour tous », une « rétroaction exploitable » est une rétroaction qui :", options: ["Est trop difficile à comprendre", "Peut être utilisée par l'élève pour améliorer son travail", "Est uniquement destinée aux parents", "Inclut une mesure disciplinaire"], a: 1, tags: ["L'apprentissage pour tous", "Rétroaction"] },
          { id: "p55", q: "Les « processus mathématiques » sont destinés à être :", options: ["Enseignés comme une unité séparée en septembre", "Intégrés dans tous les domaines d'étude du curriculum", "Évalués uniquement lors de l'OQRE", "Ignorés si le temps manque"], a: 1, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p56", q: "Selon « Croissance et réussite », « l'évaluation en tant qu'apprentissage » se concentre sur :", options: ["L'examen final", "L'autorégulation et la métacognition de l'élève", "Les cours magistraux de l'enseignant", "Les tests provinciaux standardisés"], a: 1, tags: ["Croissance et réussite", "Métacognition"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Mathématiques",
        calc: false,
        questions: [
          { id: "mnc6", q: "Calculez $12,5 \\times 4 + 7$.", options: ["57", "50", "63", "54,5"], a: 0, tags: ["Sens du nombre"] },
          { id: "mnc7", q: "Quelle est la racine carrée de $144$ moins $2^3$ ?", options: ["4", "116", "136", "6"], a: 0, tags: ["Sens du nombre"] },
          { id: "mnc8", q: "Quelle est la valeur la plus grande ?", options: ["$2/5$", "$0,38$", "$1/3$", "$0,41$"], a: 3, tags: ["Sens du nombre"] },
          { id: "mnc9", q: "Si une chemise coûte $20\\$$ et qu'elle est à $25\\%$ de rabais, quel est le montant du rabais ?", options: ["$5\\$$", "$15\\$$", "$4\\$$", "$10\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mnc10", q: "Résolvez : $3x = 12 + 6$.", options: ["2", "6", "18", "4"], a: 1, tags: ["Algèbre"] }
        ]
      },
      {
        id: "math-calc",
        title: "Mathématiques",
        calc: true,
        questions: [
          { id: "mc124", q: "Un compte bancaire contient $1\\,200\\$$. Il rapporte un intérêt simple de $1,5\\%$ par an. Quel montant y aura-t-il sur le compte après $3$ ans ?", options: ["$1\\,254\\$$", "$1\\,218\\$$", "$1\\,245\\$$", "$1\\,300\\$$"], a: 0, tags: ["Littératie financière", "Intérêt"] },
          { id: "mc125", q: "L'échelle d'une carte est $1\\text{ cm} : 20\\text{ km}$. Si deux villes sont à $4,5\\text{ cm}$ l'une de l'autre sur la carte, quelle est la distance réelle ?", options: ["$80\\text{ km}$", "$90\\text{ km}$", "$100\\text{ km}$", "$45\\text{ km}$"], a: 1, tags: ["Raisonnement proportionnel"] },
          { id: "mc126", q: "Résolvez pour $y$ : $5y - 10 = 2y + 8$.", options: ["$y=6$", "$y=2$", "$y=18$", "$y=9$"], a: 0, tags: ["Algèbre"] },
          { id: "mc127", q: "Trouvez l'aire de surface d'un cube dont le côté mesure $4\\text{ cm}$.", options: ["$64\\text{ cm}^2$", "$96\\text{ cm}^2$", "$16\\text{ cm}^2$", "$48\\text{ cm}^2$"], a: 1, tags: ["Mesure"] },
          { id: "mc128", q: "Une voiture consomme $8\\text{ L}$ de carburant par $100\\text{ km}$. Quelle quantité de carburant est nécessaire pour un voyage de $350\\text{ km}$ ?", options: ["$24\\text{ L}$", "$28\\text{ L}$", "$32\\text{ L}$", "$35\\text{ L}$"], a: 1, tags: ["Raisonnement proportionnel"] },
          { id: "mc129", q: "Quelle est la médiane de cet ensemble de données : $[2, 5, 8, 12, 15, 20]$ ?", options: ["8", "10", "12", "11"], a: 1, tags: ["Données"] },
          { id: "mc130", q: "Un ordinateur portable coûte $800\\$$. La taxe de vente est de $13\\%$. Quel est le coût total ?", options: ["$904\\$$", "$813\\$$", "$880\\$$", "$913\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc131", q: "Simplifiez : $(a^5)^2 \\div a^3$.", options: ["$a^4$", "$a^7$", "$a^{10}$", "$a^{13}$"], a: 1, tags: ["Sens du nombre"] },
          { id: "mc132", q: "Le rapport garçons/filles dans une classe est de $3:2$. S'il y a $30$ élèves au total, combien y a-t-il de filles ?", options: ["10", "12", "15", "18"], a: 1, tags: ["Raisonnement proportionnel"] },
          { id: "mc133", q: "Quelle est l'aire d'un cercle d'un diamètre de $10\\text{ cm}$ ? (Utilisez $\\pi \\approx 3,14$)", options: ["$314\\text{ cm}^2$", "$78,5\\text{ cm}^2$", "$15,7\\text{ cm}^2$", "$100\\text{ cm}^2$"], a: 1, tags: ["Mesure"] },
          { id: "mc134", q: "Un travailleur gagne $22\\$$ de l'heure et est payé à temps et demi pour les heures supplémentaires (au-delà de $40$ heures). S'il travaille $44$ heures, quel est son salaire brut ?", options: ["$968\\$$", "$1\\,012\\$$", "$880\\$$", "$1\\,100\\$$"], a: 1, tags: ["Littératie financière"] },
          { id: "mc135", q: "Quel point de coordonnées satisfait $y = 3x - 4$ ?", options: ["$(0, 4)$", "$(2, 2)$", "$(1, -1)$", "$(3, 6)$"], a: 1, tags: ["Algèbre"] },
          { id: "mc136", q: "Un sac contient $4$ billes rouges, $3$ bleues et $5$ vertes. Quelle est la probabilité de choisir une bille bleue ?", options: ["$1/3$", "$1/4$", "$3/12$", "$1/2$"], a: 2, tags: ["Données"] },
          { id: "mc137", q: "Convertissez $0,05\\text{ km}$ en mètres.", options: ["$5\\text{ m}$", "$50\\text{ m}$", "$500\\text{ m}$", "$0,5\\text{ m}$"], a: 1, tags: ["Mesure"] },
          { id: "mc138", q: "Quelle fraction est équivalente à $125\\%$ ?", options: ["$1/4$", "$5/4$", "$2/5$", "$8/10$"], a: 1, tags: ["Sens du nombre"] },
          { id: "mc139", q: "Un investissement de $2\\,000\\$$ double en $10$ ans. Quel est le montant total ?", options: ["$2\\,200\\$$", "$4\\,000\\$$", "$3\\,000\\$$", "$20\\,000\\$$"], a: 1, tags: ["Littératie financière"] },
          { id: "mc140", q: "Trouvez le volume d'un cylindre avec $r=2\\text{ m}$ et $h=10\\text{ m}$. (Utilisez $\\pi \\approx 3,14$)", options: ["$62,8\\text{ m}^3$", "$125,6\\text{ m}^3$", "$40\\text{ m}^3$", "$314\\text{ m}^3$"], a: 1, tags: ["Mesure"] },
          { id: "mc141", q: "Une recette utilise $3$ œufs pour $12$ crêpes. Combien d'œufs faut-il pour $20$ crêpes ?", options: ["4", "5", "6", "7"], a: 1, tags: ["Raisonnement proportionnel"] },
          { id: "mc142", q: "Calculez : $2 + 3 \\times (5 - 1)^2$.", options: ["80", "50", "20", "26"], a: 1, tags: ["Sens du nombre"] },
          { id: "mc143", q: "Une carte de crédit facture un intérêt annuel de $18\\%$. Quel est le taux d'intérêt mensuel ?", options: ["$1,5\\%$", "$1,8\\%$", "$0,18\\%$", "$15\\%$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc144", q: "Quelle relation est linéaire ?", options: ["$y = x^2$", "$y = 4/x$", "$y = 2x + 1$", "$y = \sqrt{x}$"], a: 2, tags: ["Algèbre"] },
          { id: "mc145", q: "La moyenne de $5$ nombres est $10$. Si quatre de ces nombres sont $8, 12, 7, 13$, quel est le cinquième ?", options: ["10", "15", "5", "20"], a: 0, tags: ["Données"] },
          { id: "mc146", q: "Un rectangle a un périmètre de $40\\text{ cm}$. Si sa longueur est de $12\\text{ cm}$, quelle est sa largeur ?", options: ["$28\\text{ cm}$", "$8\\text{ cm}$", "$14\\text{ cm}$", "$10\\text{ cm}$"], a: 1, tags: ["Mesure"] },
          { id: "mc147", q: "Simplifiez : $3(x - 4) + 2x$.", options: ["$5x - 4$", "$5x - 12$", "$x - 12$", "$-x - 12$"], a: 1, tags: ["Algèbre"] },
          { id: "mc148", q: "Combien font $0,4\\%$ de $5\\,000\\$$ ?", options: ["$20\\$$", "$200\\$$", "$2\\$$", "$2\\,000\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc149", q: "La probabilité d'un événement est de $0,05$. Quelle est la probabilité qu'il ne se produise PAS ?", options: ["$0,95$", "$0,5$", "$0,995$", "$0,05$"], a: 0, tags: ["Données"] },
          { id: "mc150", q: "Trouvez l'hypoténuse d'un triangle rectangle dont les côtés mesurent $6\\text{ cm}$ et $8\\text{ cm}$.", options: ["$14\\text{ cm}$", "$10\\text{ cm}$", "$12\\text{ cm}$", "$100\\text{ cm}$"], a: 1, tags: ["Mesure"] },
          { id: "mc151", q: "Un jean coûte $60\\$$. Il est en solde à $30\\%$ de rabais. Quel est le prix de vente ?", options: ["$18\\$$", "$42\\$$", "$30\\$$", "$50\\$$"], a: 1, tags: ["Littératie financière"] },
          { id: "mc152", q: "Résolvez pour $x$ : $x/2 + 5 = 11$.", options: ["3", "12", "6", "8"], a: 1, tags: ["Algèbre"] },
          { id: "mc153", q: "Quel est le mode de $[1, 2, 2, 3, 4, 4, 4, 5]$ ?", options: ["4", "2", "3", "5"], a: 0, tags: ["Données"] },
          { id: "mc154", q: "Une sphère a un rayon de $3\\text{ cm}$. Quel est son volume ? (Utilisez $V = 4/3 \\pi r^3$ et $\\pi \\approx 3,14$)", options: ["$113,04\\text{ cm}^3$", "$37,68\\text{ cm}^3$", "$28,26\\text{ cm}^3$", "$100\\text{ cm}^3$"], a: 0, tags: ["Mesure"] },
          { id: "mc155", q: "Une personne économise $50\\$$ par mois pendant $2$ ans. Combien a-t-elle économisé ?", options: ["$100\\$$", "$600\\$$", "$1\\,200\\$$", "$5\\,000\\$$"], a: 2, tags: ["Littératie financière"] },
          { id: "mc156", q: "Quel est le meilleur achat ?", options: ["$500\\text{ g}$ pour $4,00\\$$", "$1\\text{ kg}$ pour $7,50\\$$", "$200\\text{ g}$ pour $2,00\\$$", "$2\\text{ kg}$ pour $16,00\\$$"], a: 1, tags: ["Raisonnement proportionnel"] },
          { id: "mc157", q: "Trouvez la pente de la droite passant par $(0,0)$ et $(2,6)$.", options: ["3", "1/3", "6", "2"], a: 0, tags: ["Algèbre"] },
          { id: "mc158", q: "On lance une pièce $3$ fois. Quelle est la probabilité d'obtenir $3$ fois face ?", options: ["$1/2$", "$1/6$", "$1/8$", "$1/4$"], a: 2, tags: ["Données"] },
          { id: "mc159", q: "Quel pourcentage de $60,00\\$$ représente $15,00\\$$ ?", options: ["$20\\%$", "$25\\%$", "$30\\%$", "$15\\%$"], a: 1, tags: ["Sens du nombre"] },
          { id: "mc160", q: "Un triangle a une base de $10\\text{ cm}$ et une aire de $50\\text{ cm}^2$. Quelle est sa hauteur ?", options: ["$5\\text{ cm}$", "$10\\text{ cm}$", "$20\\text{ cm}$", "$50\\text{ cm}$"], a: 1, tags: ["Mesure"] },
          { id: "mc161", q: "Résolvez pour $x$ : $2(x + 1) = 10$.", options: ["4", "5", "9", "3"], a: 0, tags: ["Algèbre"] },
          { id: "mc162", q: "Quel est le coût de $5$ articles si $2$ articles coûtent $1,50\\$$ ?", options: ["$3,75\\$$", "$3,00\\$$", "$4,00\\$$", "$7,50\\$$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc163", q: "Le salaire annuel d'un employé est de $48\\,000\\$$. Quel est son salaire mensuel brut ?", options: ["$4\\,000\\$$", "$2\\,000\\$$", "$4\\,800\\$$", "$1\\,000\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc164", q: "L'étendue d'un ensemble de données est de $20$. Si le nombre le plus bas est $5$, quel est le plus élevé ?", options: ["15", "25", "20", "10"], a: 1, tags: ["Données"] },
          { id: "mc165", q: "Convertissez $2,5\\text{ L}$ en millilitres.", options: ["$25\\text{ mL}$", "$250\\text{ mL}$", "$2\\,500\\text{ mL}$", "$25\\,000\\text{ mL}$"], a: 2, tags: ["Mesure"] },
          { id: "mc166", q: "Combien font $150\\%$ de $80$ ?", options: ["120", "100", "150", "180"], a: 0, tags: ["Sens du nombre"] },
          { id: "mc167", q: "Un forfait de téléphone coûte $45\\$$ plus $0,10\\$$ par message texte. Si $100$ messages sont envoyés, quel est le coût ?", options: ["$45,10\\$$", "$55\\$$", "$145\\$$", "$46\\$$"], a: 1, tags: ["Littératie financière"] },
          { id: "mc168", q: "Trouvez l'aire d'un trapèze : côtés parallèles de $8$ et $12$, hauteur de $5$.", options: ["$50$", "$100$", "$20$", "$40$"], a: 0, tags: ["Mesure"] }
        ]
      }
    ]
  }, 
  "mpt-mock-5": {
    id: "mpt-mock-5",
    title: "Test d'entraînement nº 5",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pédagogie",
        calc: false,
        questions: [
          { id: "p57", q: "Selon « Croissance et réussite », lequel des exemples suivants illustre « l'évaluation en tant qu'apprentissage » ?", options: ["Un examen final", "Une auto-réflexion de l'élève sur une tâche d'écriture", "Un test d'unité dirigé par l'enseignant", "Un test provincial standardisé"], a: 1, tags: ["Croissance et réussite", "Métacognition"] },
          { id: "p58", q: "« L'apprentissage pour tous » définit la « Conception universelle de l'apprentissage » (CUA) comme une approche qui :", options: ["Cible uniquement les élèves ayant un PEI", "Est nécessaire pour certains, mais bénéfique pour tous", "Exige un enseignement identique pour tout le monde", "Élimine le besoin d'évaluation"], a: 1, tags: ["L'apprentissage pour tous", "CUA"] },
          { id: "p59", q: "Dans le curriculum de mathématiques de l'Ontario de 2020, quel domaine d'étude met l'accent sur la « gestion financière » et la « sensibilisation des consommateurs » ?", options: ["Domaine B : Nombres", "Domaine C : Algèbre", "Domaine F : Littératie financière", "Domaine D : Données"], a: 2, tags: ["Curriculum", "Domaines d'étude"] },
          { id: "p60", q: "Selon « Croissance et réussite », la rétroaction descriptive doit se concentrer sur :", options: ["La personnalité de l'élève", "L'objectif d'apprentissage et les critères de réussite", "La comparaison de l'élève avec ses camarades de classe", "Les problèmes de comportement antérieurs"], a: 1, tags: ["Croissance et réussite", "Rétroaction"] },
          { id: "p61", q: "Quel « palier » de l'approche par paliers pour l'enseignement implique le soutien le plus intensif et individualisé ?", options: ["Palier 1", "Palier 2", "Palier 3", "Palier 4"], a: 2, tags: ["L'apprentissage pour tous", "Approche par paliers"] },
          { id: "p62", q: "Selon le contexte du curriculum de mathématiques, les « habiletés d'apprentissage socioémotionnel (ASE) » aident les élèves à :", options: ["Éviter complètement les mathématiques", "Développer une identité positive en tant qu'apprenant des mathématiques et persévérer face aux défis", "Travailler uniquement en groupe", "Mémoriser les formules plus rapidement"], a: 1, tags: ["Curriculum", "ASE"] },
          { id: "p63", q: "« Croissance et réussite » définit « l'évaluation » (Evaluation/Sommative) comme :", options: ["Le processus de collecte d'informations", "Le processus consistant à juger la qualité du travail de l'élève et à attribuer une note", "L'observation quotidienne du comportement de l'élève", "Les conversations avec les parents"], a: 1, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p64", q: "« L'apprentissage pour tous » définit la « différenciation pédagogique » comme une approche qui est :", options: ["Réactive", "Proactive", "Standardisée", "Exclusive"], a: 1, tags: ["L'apprentissage pour tous", "Différenciation pédagogique"] },
          { id: "p65", q: "Quel processus mathématique implique d'« expliquer » et de « justifier » des idées mathématiques ?", options: ["La communication", "Le choix d'outils", "La réflexion", "La résolution de problèmes"], a: 0, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p66", q: "Selon « Croissance et réussite », la grille d'évaluation du rendement est utilisée pour :", options: ["Classer les élèves de 1 à 30", "Fournir un cadre commun pour une évaluation cohérente dans toute la province", "Calculer les primes des enseignants", "Concevoir le programme sportif de l'école"], a: 1, tags: ["Croissance et réussite", "Grille d'évaluation"] },
          { id: "p67", q: "Qu'est-ce qu'un « profil de la classe » dans le contexte de « L'apprentissage pour tous » ?", options: ["Une liste des numéros de téléphone des élèves", "Un outil utilisé pour planifier l'enseignement basé sur les forces et les besoins de tous les élèves de la classe", "Une exposition des meilleures œuvres d'art des élèves", "Un rapport envoyé au conseil scolaire concernant l'assiduité"], a: 1, tags: ["L'apprentissage pour tous", "Profil de la classe"] },
          { id: "p68", q: "Dans le curriculum de mathématiques de l'Ontario, la « modélisation mathématique » est plus étroitement associée aux :", options: ["Calculs purement abstraits", "Situations et applications de la vie réelle", "Dessins de formes géométriques parfaites", "Calculs mentaux uniquement"], a: 1, tags: ["Curriculum", "Modélisation"] },
          { id: "p69", q: "Selon « Croissance et réussite », « l'évaluation au service de l'apprentissage » a lieu :", options: ["Uniquement à la fin du semestre", "Pendant l'enseignement pour fournir une rétroaction et ajuster l'enseignement", "Avant que l'élève n'entre à l'école", "Exclusivement lors de la soirée des bulletins"], a: 1, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p70", q: "« L'apprentissage pour tous » indique que les « communautés d'apprentissage professionnel » (CAP) se concentrent sur :", options: ["La paperasse administrative", "La recherche collaborative entre enseignants pour améliorer l'apprentissage des élèves", "Les événements sociaux du personnel", "L'organisation de sorties scolaires"], a: 1, tags: ["L'apprentissage pour tous", "CAP"] },
          { id: "p71", q: "Selon le curriculum de mathématiques de 9e année (2021), les élèves doivent utiliser le « codage » pour :", options: ["Créer uniquement des jeux vidéo", "Automatiser des processus mathématiques et explorer des concepts mathématiques", "Remplacer le besoin d'apprendre l'algèbre", "Augmenter le temps passé devant les écrans"], a: 1, tags: ["Curriculum", "Codage"] },
          { id: "p72", q: "« Croissance et réussite » stipule que « l'évaluation de l'apprentissage » est :", options: ["Formative", "Sommative", "Métacognitive", "Diagnostique"], a: 1, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p73", q: "« L'apprentissage pour tous » souligne que « l'évaluation au service de l'apprentissage » est utilisée pour :", options: ["Déterminer les notes finales", "Concevoir et ajuster l'enseignement pour répondre aux besoins des élèves", "Faire rapport au ministère de l'Éducation", "Punir les élèves en retard"], a: 1, tags: ["L'apprentissage pour tous", "Évaluation"] },
          { id: "p74", q: "Lequel des éléments suivants est un « processus mathématique » dans le curriculum de l'Ontario ?", options: ["La mémorisation", "Le raisonnement et la démonstration", "Le cours magistral", "Le coloriage"], a: 1, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p75", q: "Selon « Croissance et réussite », une « adaptation » ne doit PAS :", options: ["Modifier les attentes du curriculum provincial", "Changer la façon dont un élève accède à l'apprentissage", "Fournir du temps supplémentaire pour une tâche", "Permettre l'utilisation d'un outil technologique"], a: 0, tags: ["Croissance et réussite", "Éducation spécialisée"] },
          { id: "p76", q: "« L'apprentissage pour tous » décrit « l'étayage » comme une stratégie qui :", options: ["Supprime tous les défis pour l'élève", "Fournit un soutien temporaire qui est retiré progressivement", "Est réservée uniquement aux élèves les plus performants", "Implique la construction d'échafaudages réels dans le gymnase"], a: 1, tags: ["L'apprentissage pour tous", "Étayage"] },
          { id: "p77", q: "L'objectif principal de la communication des « habiletés d'apprentissage et habitudes de travail » dans « Croissance et réussite » est de :", options: ["Les intégrer dans la note de pourcentage de la matière", "Fournir des informations distinctes sur le développement d'habiletés de vie importantes chez l'élève", "Décider quels élèves peuvent joindre l'orchestre", "Mesurer le QI de l'élève"], a: 1, tags: ["Croissance et réussite", "Communication des résultats"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Mathématiques",
        calc: false,
        questions: [
          { id: "mnc11", q: "Combien font $1/4 + 1/2$ ?", options: ["$2/6$", "$3/4$", "$2/4$", "$1/6$"], a: 1, tags: ["Sens du nombre"] },
          { id: "mnc12", q: "Calculez $100 \\div (2 + 3) \\times 4$.", options: ["8", "80", "10", "20"], a: 1, tags: ["Sens du nombre"] },
          { id: "mnc13", q: "Si $2x = 50$, quelle est la valeur de $x$ ?", options: ["25", "100", "48", "52"], a: 0, tags: ["Algèbre"] },
          { id: "mnc14", q: "Combien font $10\\%$ de $45,00\\$$ ?", options: ["$0,45\\$$", "$4,50\\$$", "$45,00\\$$", "$1,00\\$$"], a: 1, tags: ["Littératie financière"] },
          { id: "mnc15", q: "Arrondissez $12,678$ au dixième près.", options: ["12,6", "12,7", "13", "12,68"], a: 1, tags: ["Sens du nombre"] }
        ]
      },
      {
        id: "math-calc",
        title: "Mathématiques",
        calc: true,
        questions: [
          { id: "mc169", q: "Un travailleur gagne $25\\$$ de l'heure. S'il travaille $40$ heures, quel est son salaire brut ?", options: ["$1\\,000\\$$", "$800\\$$", "$1\\,200\\$$", "$2\\,500\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc170", q: "Une voiture parcourt $150\\text{ km}$ en $2$ heures. Quelle est sa vitesse moyenne ?", options: ["$60\\text{ km/h}$", "$75\\text{ km/h}$", "$100\\text{ km/h}$", "$150\\text{ km/h}$"], a: 1, tags: ["Raisonnement proportionnel"] },
          { id: "mc171", q: "Résolvez pour $x$ : $x/4 = 12$.", options: ["3", "48", "16", "8"], a: 1, tags: ["Algèbre"] },
          { id: "mc172", q: "Trouvez l'aire d'un rectangle de longueur $8\\text{ cm}$ et de largeur $12\\text{ cm}$.", options: ["$20\\text{ cm}^2$", "$96\\text{ cm}^2$", "$40\\text{ cm}^2$", "$100\\text{ cm}^2$"], a: 1, tags: ["Mesure"] },
          { id: "mc173", q: "Combien font $15\\%$ de $80,00\\$$ ?", options: ["$12\\$$", "$15\\$$", "$10\\$$", "$20\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc174", q: "Simplifiez : $2(x + 3) - 4$.", options: ["$2x + 2$", "$2x + 6$", "$2x - 1$", "$2x + 10$"], a: 0, tags: ["Algèbre"] },
          { id: "mc175", q: "Un sac contient $5$ billes rouges et $15$ billes bleues. Quel est le rapport entre les billes rouges et le total des billes ?", options: ["$1:3$", "$1:4$", "$3:1$", "$4:1$"], a: 1, tags: ["Raisonnement proportionnel"] },
          { id: "mc176", q: "Quel est le périmètre d'un carré ayant une aire de $64\\text{ cm}^2$ ?", options: ["$16\\text{ cm}$", "$32\\text{ cm}$", "$64\\text{ cm}$", "$8\\text{ cm}$"], a: 1, tags: ["Mesure"] },
          { id: "mc177", q: "Convertissez $1,5\\text{ kg}$ en grammes.", options: ["$150\\text{ g}$", "$1\\,500\\text{ g}$", "$15\\,000\\text{ g}$", "$15\\text{ g}$"], a: 1, tags: ["Mesure"] },
          { id: "mc178", q: "Calculez la moyenne de $[10, 20, 30, 40, 50]$.", options: ["25", "30", "35", "40"], a: 1, tags: ["Données"] },
          { id: "mc179", q: "Un magasin offre un rabais de $20\\%$. Une chemise coûte $40,00\\$$. Quel est le prix soldé ?", options: ["$8,00\\$$", "$32,00\\$$", "$48,00\\$$", "$20,00\\$$"], a: 1, tags: ["Littératie financière"] },
          { id: "mc180", q: "Résolvez pour $y$ : $2y + 5 = 15$.", options: ["5", "10", "15", "20"], a: 0, tags: ["Algèbre"] },
          { id: "mc181", q: "Quel est le volume d'un cube de côté $3\\text{ m}$ ?", options: ["$9\\text{ m}^3$", "$27\\text{ m}^3$", "$6\\text{ m}^3$", "$12\\text{ m}^3$"], a: 1, tags: ["Mesure"] },
          { id: "mc182", q: "Une personne gagne $3\\,000\\$$ par mois et dépense $1\\,200\\$$ pour son loyer. Quel pourcentage du salaire représente le loyer ?", options: ["$30\\%$", "$40\\%$", "$50\\%$", "$60\\%$"], a: 1, tags: ["Littératie financière"] },
          { id: "mc183", q: "Si $y = 3x - 2$ et $x = 4$, quelle est la valeur de $y$ ?", options: ["10", "14", "12", "6"], a: 0, tags: ["Algèbre"] },
          { id: "mc184", q: "Une recette utilise $2$ tasses de farine pour $10$ biscuits. Combien de tasses faut-il pour $25$ biscuits ?", options: ["4", "5", "6", "10"], a: 1, tags: ["Raisonnement proportionnel"] },
          { id: "mc185", q: "Quelle est la médiane de $[1, 3, 5, 7, 9]$ ?", options: ["3", "5", "7", "4"], a: 1, tags: ["Données"] },
          { id: "mc186", q: "Trouvez la circonférence d'un cercle avec $r=7\\text{ cm}$. (Utilisez $\\pi \\approx 22/7$)", options: ["$22\\text{ cm}$", "$44\\text{ cm}$", "$88\\text{ cm}$", "$154\\text{ cm}$"], a: 1, tags: ["Mesure"] },
          { id: "mc187", q: "Une personne investit $1\\,000\\$$ à un intérêt simple annuel de $5\\%$. Quel est l'intérêt après $2$ ans ?", options: ["$50\\$$", "$100\\$$", "$150\\$$", "$200\\$$"], a: 1, tags: ["Littératie financière"] },
          { id: "mc188", q: "Quelle fraction est la plus petite ?", options: ["$1/2$", "$1/3$", "$1/4$", "$1/5$"], a: 3, tags: ["Sens du nombre"] },
          { id: "mc189", q: "Résolvez : $2(x - 1) = 8$.", options: ["3", "4", "5", "6"], a: 2, tags: ["Algèbre"] },
          { id: "mc190", q: "Un triangle a des angles de $40^\\circ$ et $60^\\circ$. Quel est le troisième angle ?", options: ["$80^\\circ$", "$100^\\circ$", "$120^\\circ$", "$180^\\circ$"], a: 0, tags: ["Mesure"] },
          { id: "mc191", q: "Quel est le mode de $[5, 5, 10, 10, 10, 15]$ ?", options: ["5", "10", "15", "10,5"], a: 1, tags: ["Données"] },
          { id: "mc192", q: "Une personne épargne $20\\%$ de son chèque de paie de $400\\$$. Combien a-t-elle épargné ?", options: ["$20\\$$", "$40\\$$", "$80\\$$", "$100\\$$"], a: 2, tags: ["Littératie financière"] },
          { id: "mc193", q: "Si $x/5 + 2 = 10$, quelle est la valeur de $x$ ?", options: ["40", "50", "30", "60"], a: 0, tags: ["Algèbre"] },
          { id: "mc194", q: "Quelle est l'aire d'un triangle de base $12\\text{ cm}$ et de hauteur $5\\text{ cm}$ ?", options: ["$60\\text{ cm}^2$", "$30\\text{ cm}^2$", "$15\\text{ cm}^2$", "$20\\text{ cm}^2$"], a: 1, tags: ["Mesure"] },
          { id: "mc195", q: "Trouvez $20\\%$ de $150$.", options: ["20", "30", "40", "50"], a: 1, tags: ["Sens du nombre"] },
          { id: "mc196", q: "Une voiture parcourt $300\\text{ km}$ avec $30\\text{ L}$ d'essence. Quel est le rendement en km/L ?", options: ["$10\\text{ km/L}$", "$100\\text{ km/L}$", "$1\\text{ km/L}$", "$3\\text{ km/L}$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc197", q: "Quelle est l'aire de surface d'un prisme rectangulaire de côtés $2, 3, 4$ ?", options: ["$24$", "$52$", "$26$", "$48$"], a: 1, tags: ["Mesure"] },
          { id: "mc198", q: "Un article coûte $50,00\\$$ plus $13\\%$ de taxe. Quel est le total ?", options: ["$56,50\\$$", "$51,30\\$$", "$63,00\\$$", "$50,13\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc199", q: "Résolvez pour $x$ : $3x + 4 = 19$.", options: ["5", "15", "6", "4"], a: 0, tags: ["Algèbre"] },
          { id: "mc200", q: "L'échelle d'une carte est $1:1\\,000$. Que représentent $5\\text{ cm}$ sur la carte ?", options: ["$50\\text{ m}$", "$5\\text{ m}$", "$500\\text{ m}$", "$5\\text{ km}$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc201", q: "Quelle est la racine carrée de $100$ ?", options: ["10", "20", "50", "5"], a: 0, tags: ["Sens du nombre"] },
          { id: "mc202", q: "Une personne gagne $15\\$/\\text{h}$ et travaille $20$ heures par semaine. Quel est son salaire annuel ($52$ semaines) ?", options: ["$15\\,600\\$$", "$300\\$$", "$1\\,560\\$$", "$3\\,000\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc203", q: "Trouvez le volume d'une sphère avec $r=3$. (Utilisez $\\pi \\approx 3,14$)", options: ["$113,04$", "$37,68$", "$28,26$", "$100$"], a: 0, tags: ["Mesure"] },
          { id: "mc204", q: "Si $y = -2x + 10$ et $y=0$, quelle est la valeur de $x$ ?", options: ["5", "-5", "10", "0"], a: 0, tags: ["Algèbre"] },
          { id: "mc205", q: "Un sac contient $2$ billes rouges et $3$ billes bleues. Quelle est la probabilité de tirer une rouge ?", options: ["$2/3$", "$2/5$", "$3/5$", "$1/2$"], a: 1, tags: ["Données"] },
          { id: "mc206", q: "Convertissez $5\\,000\\text{ mL}$ en litres.", options: ["$0,5\\text{ L}$", "$5\\text{ L}$", "$50\\text{ L}$", "$500\\text{ L}$"], a: 1, tags: ["Mesure"] },
          { id: "mc207", q: "Combien font $200\\%$ de $40$ ?", options: ["40", "80", "120", "160"], a: 1, tags: ["Sens du nombre"] },
          { id: "mc208", q: "Un investissement de $500\\$$ rapporte $2\\%$ d'intérêt. Quel est le montant après $1$ an ?", options: ["$510\\$$", "$502\\$$", "$520\\$$", "$600\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc209", q: "Trouvez l'hypoténuse : côtés de $3$ et $4$.", options: ["5", "7", "12", "25"], a: 0, tags: ["Mesure"] },
          { id: "mc210", q: "Résolvez $x - 7 = 10$.", options: ["3", "17", "70", "0"], a: 1, tags: ["Algèbre"] },
          { id: "mc211", q: "Quelle est l'étendue de $[1, 5, 10, 15, 20]$ ?", options: ["19", "20", "15", "10"], a: 0, tags: ["Données"] },
          { id: "mc212", q: "Une recette utilise $1$ tasse de sucre pour $4$ tasses d'eau. Combien de sucre pour $10$ tasses d'eau ?", options: ["$2,5$", "$2$", "$4$", "$10$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc213", q: "Quelle est l'aire d'un cercle avec $r=10$ ? (Utilisez $\\pi \\approx 3,14$)", options: ["$31,4$", "$314$", "$100$", "$62,8$"], a: 1, tags: ["Mesure"] }
        ]
      }
    ]
  },
  "mpt-mock-6": {
    id: "mpt-mock-6",
    title: "Test d'entraînement nº 6",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pédagogie",
        calc: false,
        questions: [
          { id: "p78", q: "Selon « Croissance et réussite », lequel des éléments suivants n'est PAS un but de l'évaluation ?", options: ["Soutenir l'apprentissage de l'élève", "Évaluer le rendement de l'élève", "Classer les élèves par ordre de mérite", "Fournir des informations pour la communication des résultats"], a: 2, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p79", q: "« L'apprentissage pour tous » décrit la « Conception universelle de l'apprentissage » (CUA) comme un moyen de :", options: ["Éliminer le besoin de différenciation pédagogique", "Assurer l'accessibilité pour tous les élèves dès le départ", "Aider uniquement les élèves ayant un handicap physique", "Abaisser les normes de réussite des élèves"], a: 1, tags: ["L'apprentissage pour tous", "CUA"] },
          { id: "p80", q: "Dans le curriculum de mathématiques de l'Ontario de 2020, le domaine d'étude A porte sur :", options: ["Le sens du nombre", "L'algèbre", "Les habiletés d'apprentissage socioémotionnel (ASE) et les processus mathématiques", "La littératie financière"], a: 2, tags: ["Curriculum", "Domaines d'étude"] },
          { id: "p81", q: "Selon « Croissance et réussite », « l'évaluation en tant qu'apprentissage » implique :", options: ["Que les enseignants donnent des notes finales", "Que les élèves surveillent leur propre apprentissage et utilisent la rétroaction pour s'ajuster", "Des tests diagnostiques au début de l'année", "Des tests provinciaux standardisés"], a: 1, tags: ["Croissance et réussite", "Métacognition"] },
          { id: "p82", q: "Quel document définit « l'approche par paliers » pour soutenir les élèves ayant des besoins particuliers ?", options: ["Croissance et réussite", "L'apprentissage pour tous", "Le curriculum de mathématiques de l'Ontario", "La Loi sur l'éducation"], a: 1, tags: ["L'apprentissage pour tous", "Approche par paliers"] },
          { id: "p83", q: "Les « processus mathématiques » dans le curriculum de l'Ontario incluent lequel des éléments suivants ?", options: ["Mémoriser et répéter", "Raisonner et démontrer", "Donner des cours magistraux et prendre des notes", "Entrer en compétition et gagner"], a: 1, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p84", q: "« Croissance et réussite » stipule que « l'évaluation » (sommative) doit être basée sur :", options: ["L'effort et l'attitude", "Les preuves de la réussite des attentes du curriculum par l'élève", "Uniquement les devoirs complétés", "Le registre d'assiduité"], a: 1, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p85", q: "Selon « L'apprentissage pour tous », un « profil de l'élève » est :", options: ["Un document statique créé une fois par an", "Un document dynamique qui évolue au fur et à mesure que l'élève apprend", "Un dossier disciplinaire", "Un dossier médical"], a: 1, tags: ["L'apprentissage pour tous", "Profil de l'élève"] },
          { id: "p86", q: "Dans le curriculum de mathématiques de 9e année de 2021, quel concept est mis en avant pour préparer les élèves au monde numérique ?", options: ["L'utilisation de l'abaque", "Le codage et la pensée computationnelle", "La calligraphie", "La dactylographie"], a: 1, tags: ["Curriculum", "Codage"] },
          { id: "p87", q: "Selon « Croissance et réussite », la rétroaction descriptive doit être :", options: ["Ciblée uniquement sur les erreurs", "Généralisée (ex. : « Fais mieux la prochaine fois »)", "Précise et liée aux objectifs d'apprentissage", "Donnée uniquement par écrit"], a: 2, tags: ["Croissance et réussite", "Rétroaction"] },
          { id: "p88", q: "« L'apprentissage pour tous » indique que la « différenciation pédagogique » se concentre sur :", options: ["La réduction de la difficulté du travail pour tout le monde", "L'offre de multiples façons pour les élèves d'apprendre et de démontrer ce qu'ils savent", "Le regroupement des élèves par genre", "L'élimination de tous les tests standardisés"], a: 1, tags: ["L'apprentissage pour tous", "Différenciation pédagogique"] },
          { id: "p89", q: "Selon le contexte du curriculum de mathématiques, la « modélisation mathématique » est un processus :", options: ["Linéaire", "Cyclique et itératif", "De calcul en une seule étape", "Utilisé uniquement à l'université"], a: 1, tags: ["Curriculum", "Modélisation"] },
          { id: "p90", q: "« Croissance et réussite » stipule que « l'évaluation au service de l'apprentissage » fournit des informations aux :", options: ["Enseignants et élèves pour améliorer l'apprentissage", "Médias", "Agents immobiliers", "Entraîneurs sportifs"], a: 0, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p91", q: "« L'apprentissage pour tous » définit les « communautés d'apprentissage professionnel » (CAP) comme étant :", options: ["Compétitives", "Collaboratives", "Secrètes", "Optionnelles pour tous les enseignants"], a: 1, tags: ["L'apprentissage pour tous", "CAP"] },
          { id: "p92", q: "La grille d'évaluation du rendement dans « Croissance et réussite » comprend quelles quatre compétences (catégories) ?", options: ["Effort, Participation, Comportement, Assiduité", "Connaissance et compréhension, Pensée, Communication, Mise en application", "Lecture, Écriture, Mathématiques, Sciences", "Vitesse, Précision, Soin, Conformité"], a: 1, tags: ["Croissance et réussite", "Grille d'évaluation"] },
          { id: "p93", q: "Selon « L'apprentissage pour tous », la « Conception universelle de l'apprentissage » (CUA) est basée sur :", options: ["La recherche sur le cerveau et les neurosciences", "Un tirage au sort", "Les dernières tendances politiques", "La taille et le poids de l'élève"], a: 0, tags: ["L'apprentissage pour tous", "CUA"] },
          { id: "p94", q: "Dans le curriculum de mathématiques de l'Ontario, le processus mathématique de « l'établissement de liens » implique :", options: ["D'utiliser une calculatrice", "De lier des idées mathématiques à des contextes du monde réel et à d'autres matières", "D'appeler un ami pour obtenir de l'aide", "De relier des points sur un graphique uniquement"], a: 1, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p95", q: "« Croissance et réussite » stipule que « l'évaluation de l'apprentissage » se traduit par :", options: ["Aucune note", "Un résumé du rendement de l'élève à un moment précis", "Une rétroaction continue pour l'amélioration", "Un rapport diagnostique"], a: 1, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p96", q: "« L'apprentissage pour tous » définit « l'étayage » comme l'offre :", options: ["D'une assistance permanente", "D'un soutien temporaire pour aider l'élève à progresser vers l'apprentissage autonome", "De devoirs supplémentaires", "D'une échelle physique"], a: 1, tags: ["L'apprentissage pour tous", "Étayage"] },
          { id: "p97", q: "Selon le curriculum de mathématiques de 9e année, la « littératie financière » inclut la compréhension de :", options: ["Comment devenir millionnaire du jour au lendemain", "L'appréciation et la dépréciation des actifs", "Comment imprimer de l'argent", "Uniquement l'addition simple"], a: 1, tags: ["Curriculum", "Littératie financière"] },
          { id: "p98", q: "« Croissance et réussite » souligne que les évaluations doivent être :", options: ["Biaisées en faveur de certains élèves", "Justes, transparentes et équitables", "Cachées aux parents", "Basées sur un seul test"], a: 1, tags: ["Croissance et réussite", "Éthique"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Mathématiques",
        calc: false,
        questions: [
          { id: "mnc16", q: "Combien font $3/4 \\times 1/2$ ?", options: ["$3/8$", "$4/6$", "$2/4$", "$3/6$"], a: 0, tags: ["Sens du nombre"] },
          { id: "mnc17", q: "Calculez $50 - (2 + 3)^2$.", options: ["45", "25", "0", "15"], a: 1, tags: ["Sens du nombre"] },
          { id: "mnc18", q: "Si $x/3 = 10$, quelle est la valeur de $x$ ?", options: ["30", "3,33", "13", "7"], a: 0, tags: ["Algèbre"] },
          { id: "mnc19", q: "Combien font $25\\%$ de $200,00\\$$ ?", options: ["$25\\$$", "$50\\$$", "$100\\$$", "$75\\$$"], a: 1, tags: ["Littératie financière"] },
          { id: "mnc20", q: "Quelle est la plus petite valeur ?", options: ["$-5$", "$-10$", "$0$", "$2$"], a: 1, tags: ["Sens du nombre"] }
        ]
      },
      {
        id: "math-calc",
        title: "Mathématiques",
        calc: true,
        questions: [
          { id: "mc214", q: "Un travailleur gagne $30\\$$ de l'heure. S'il travaille $35$ heures, quel est son salaire brut ?", options: ["$1\\,050\\$$", "$900\\$$", "$1\\,200\\$$", "$1\\,500\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc215", q: "Une voiture parcourt $200\\text{ km}$ en $2,5$ heures. Quelle est sa vitesse ?", options: ["$80\\text{ km/h}$", "$100\\text{ km/h}$", "$75\\text{ km/h}$", "$50\\text{ km/h}$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc216", q: "Résolvez pour $x$ : $3x - 5 = 10$.", options: ["5", "15", "3", "2"], a: 0, tags: ["Algèbre"] },
          { id: "mc217", q: "Trouvez l'aire d'un carré ayant un périmètre de $20\\text{ cm}$.", options: ["$25\\text{ cm}^2$", "$20\\text{ cm}^2$", "$100\\text{ cm}^2$", "$5\\text{ cm}^2$"], a: 0, tags: ["Mesure"] },
          { id: "mc218", q: "Combien font $12\\%$ de $150,00\\$$ ?", options: ["$18\\$$", "$12\\$$", "$15\\$$", "$20\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc219", q: "Simplifiez : $4(x - 2) + 5$.", options: ["$4x - 3$", "$4x + 3$", "$4x - 8$", "$4x + 13$"], a: 0, tags: ["Algèbre"] },
          { id: "mc220", q: "Un sac contient $10$ billes rouges et $40$ billes bleues. Quel est le rapport rouges:bleues ?", options: ["$1:4$", "$1:5$", "$4:1$", "$5:1$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc221", q: "Quel est le volume d'un prisme rectangulaire de côtés $2, 5, 10$ ?", options: ["$100$", "$17$", "$50$", "$70$"], a: 0, tags: ["Mesure"] },
          { id: "mc222", q: "Convertissez $2,5\\text{ km}$ en mètres.", options: ["$2\\,500\\text{ m}$", "$250\\text{ m}$", "$25\\text{ m}$", "$25\\,000\\text{ m}$"], a: 0, tags: ["Mesure"] },
          { id: "mc223", q: "Calculez la médiane de $[10, 15, 20, 25, 30, 35]$.", options: ["22,5", "20", "25", "15"], a: 0, tags: ["Données"] },
          { id: "mc224", q: "Un magasin offre un rabais de $30\\%$. Un article coûte $100,00\\$$. Quel est le prix soldé ?", options: ["$70,00\\$$", "$30,00\\$$", "$130,00\\$$", "$100,00\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc225", q: "Résolvez pour $y$ : $y/2 + 4 = 10$.", options: ["12", "6", "14", "8"], a: 0, tags: ["Algèbre"] },
          { id: "mc226", q: "Quelle est l'aire d'un cercle de diamètre $d=20$ ? (Utilisez $\\pi \\approx 3,14$)", options: ["$314$", "$1\\,256$", "$62,8$", "$100$"], a: 0, tags: ["Mesure"] },
          { id: "mc227", q: "Une personne gagne $4\\,000\\$$ par mois et en épargne $800\\$$. Quel pourcentage est épargné ?", options: ["$20\\%$", "$25\\%$", "$10\\%$", "$30\\%$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc228", q: "Si $y = x^2 + 1$ et $x = 3$, quelle est la valeur de $y$ ?", options: ["10", "7", "9", "4"], a: 0, tags: ["Algèbre"] },
          { id: "mc229", q: "Une recette utilise $1$ tasse de sucre pour $5$ tasses d'eau. Combien de sucre pour $12,5$ tasses d'eau ?", options: ["$2,5$", "$2$", "$5$", "$1$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc230", q: "Quelle est la moyenne de $[1, 2, 3, 4, 5]$ ?", options: ["3", "2,5", "4", "5"], a: 0, tags: ["Données"] },
          { id: "mc231", q: "Trouvez la circonférence d'un cercle de diamètre $d=14$. (Utilisez $\\pi \\approx 22/7$)", options: ["$44$", "$88$", "$154$", "$22$"], a: 0, tags: ["Mesure"] },
          { id: "mc232", q: "Une personne investit $2\\,000\\$$ à un intérêt simple annuel de $3\\%$. Quel est l'intérêt après $5$ ans ?", options: ["$300\\$$", "$60\\$$", "$100\\$$", "$1\\,000\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc233", q: "Quelle fraction est la plus grande ?", options: ["$3/4$", "$1/2$", "$2/3$", "$5/8$"], a: 0, tags: ["Sens du nombre"] },
          { id: "mc234", q: "Résolvez : $5(x + 2) = 25$.", options: ["3", "5", "7", "10"], a: 0, tags: ["Algèbre"] },
          { id: "mc235", q: "Un triangle a des angles de $90^\\circ$ et $45^\\circ$. Quel est le troisième angle ?", options: ["$45^\\circ$", "$90^\\circ$", "$60^\\circ$", "$180^\\circ$"], a: 0, tags: ["Mesure"] },
          { id: "mc236", q: "Quel est le mode de $[1, 1, 2, 2, 2, 3]$ ?", options: ["2", "1", "3", "1,5"], a: 0, tags: ["Données"] },
          { id: "mc237", q: "Une personne épargne $15\\%$ de son chèque de paie de $600\\$$. Combien a-t-elle épargné ?", options: ["$90\\$$", "$15\\$$", "$60\\$$", "$100\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc238", q: "Si $2x + 10 = 20$, quelle est la valeur de $x$ ?", options: ["5", "10", "15", "20"], a: 0, tags: ["Algèbre"] },
          { id: "mc239", q: "Quelle est l'aire d'un triangle de base $10$ et de hauteur $4$ ?", options: ["$20$", "$40$", "$14$", "$10$"], a: 0, tags: ["Mesure"] },
          { id: "mc240", q: "Trouvez $10\\%$ de $250$.", options: ["25", "10", "50", "100"], a: 0, tags: ["Sens du nombre"] },
          { id: "mc241", q: "Une voiture parcourt $400\\text{ km}$ avec $40\\text{ L}$ d'essence. Quel est le taux en km/L ?", options: ["$10$", "$100$", "$1$", "$40$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc242", q: "Quelle est l'aire de surface d'un cube de côté $2$ ?", options: ["$24$", "$8$", "$12$", "$16$"], a: 0, tags: ["Mesure"] },
          { id: "mc243", q: "Un article coûte $100,00\\$$ plus $13\\%$ de taxe. Quel est le total ?", options: ["$113,00\\$$", "$100,13\\$$", "$130,00\\$$", "$100$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc244", q: "Résolvez pour $x$ : $4x - 2 = 10$.", options: ["3", "4", "2", "8"], a: 0, tags: ["Algèbre"] },
          { id: "mc245", q: "Échelle de carte $1:5\\,000$. Que représentent $2\\text{ cm}$ ?", options: ["$100\\text{ m}$", "$10\\text{ m}$", "$1\\,000\\text{ m}$", "$10\\text{ km}$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc246", q: "Quelle est la racine carrée de $64$ ?", options: ["8", "16", "32", "4"], a: 0, tags: ["Sens du nombre"] },
          { id: "mc247", q: "Une personne gagne $20\\$/\\text{h}$ et travaille $40$ heures par semaine. Quel est son salaire annuel ($52$ semaines) ?", options: ["$41\\,600\\$$", "$800\\$$", "$4\\,160\\$$", "$50\\,000\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc248", q: "Quel est le volume d'une sphère avec $r=2$. (Utilisez $\\pi \\approx 3,14$)", options: ["$33,49$", "$12,56$", "$25,12$", "$100$"], a: 0, tags: ["Mesure"] },
          { id: "mc249", q: "Si $y = 3x - 5$ et $y=10$, quelle est la valeur de $x$ ?", options: ["5", "15", "3", "0"], a: 0, tags: ["Algèbre"] },
          { id: "mc250", q: "Un sac contient $1$ bille rouge et $4$ billes bleues. Quelle est la probabilité de tirer une rouge ?", options: ["$1/5$", "$1/4$", "$4/5$", "$1/2$"], a: 0, tags: ["Données"] },
          { id: "mc251", q: "Convertissez $10\\,000\\text{ mL}$ en litres.", options: ["$10\\text{ L}$", "$1\\text{ L}$", "$100\\text{ L}$", "$1\\,000\\text{ L}$"], a: 0, tags: ["Mesure"] },
          { id: "mc252", q: "Combien font $300\\%$ de $20$ ?", options: ["60", "20", "40", "100"], a: 0, tags: ["Sens du nombre"] },
          { id: "mc253", q: "Un investissement de $1\\,000\\$$ rapporte $4\\%$ d'intérêt. Quel est le montant total après $1$ an ?", options: ["$1\\,040\\$$", "$1\\,004\\$$", "$1\\,044\\$$", "$1\\,400\\$$"], a: 0, tags: ["Littératie financière"] },
          { id: "mc254", q: "Trouvez l'hypoténuse : côtés de $5$ et $12$.", options: ["13", "17", "60", "25"], a: 0, tags: ["Mesure"] },
          { id: "mc255", q: "Résolvez $x + 5 = 15$.", options: ["10", "20", "5", "0"], a: 0, tags: ["Algèbre"] },
          { id: "mc256", q: "Quelle est l'étendue de $[5, 10, 15, 20, 25]$ ?", options: ["20", "25", "15", "10"], a: 0, tags: ["Données"] },
          { id: "mc257", q: "Une recette utilise $2$ tasses de sucre pour $6$ tasses d'eau. Combien de sucre pour $15$ tasses d'eau ?", options: ["$5$", "$3$", "$4$", "$10$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc258", q: "Quelle est l'aire d'un cercle avec $r=5$ ? (Utilisez $\\pi \\approx 3,14$)", options: ["$78,5$", "$31,4$", "$25$", "$100$"], a: 0, tags: ["Mesure"] }
        ]
      }
    ]
  },
  "mpt-mock-7": {
    id: "mpt-mock-7",
    title: "Test d'entraînement nº 7 (Difficile)",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pédagogie",
        calc: false,
        questions: [
          { id: "p99", q: "Selon « Croissance et réussite », lorsqu'un enseignant utilise son « jugement professionnel » pour déterminer une note finale, il doit :", options: ["Accorder plus de poids aux preuves de réussite les plus récentes", "Calculer une moyenne mathématique stricte de toutes les notes", "Se concentrer principalement sur la meilleure performance unique de l'élève", "Baser la note sur le potentiel perçu de l'élève"], a: 0, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p100", q: "« L'apprentissage pour tous » stipule que la conception universelle de l'apprentissage (CUA) diffère de la différenciation pédagogique (DP) parce que la CUA est :", options: ["Réactive aux besoins spécifiques des élèves", "Proactive et destinée à l'ensemble de la classe dès le départ", "Exclusivement réservée aux élèves ayant un PEI", "Axée uniquement sur l'aménagement physique de la salle de classe"], a: 1, tags: ["L'apprentissage pour tous", "CUA vs DP"] },
          { id: "p101", q: "En vertu de « Croissance et réussite », si un élève ne remet pas un travail « majeur », l'enseignant doit d'abord :", options: ["Attribuer immédiatement la note zéro", "Utiliser une variété de stratégies pour aider l'élève à soumettre le travail", "Baisser uniquement la note des habiletés d'apprentissage", "Contacter la direction pour retirer l'élève du cours"], a: 1, tags: ["Croissance et réussite", "Communication des résultats"] },
          { id: "p102", q: "L'« approche par paliers » dans « L'apprentissage pour tous » suggère que les soutiens du palier 2 sont caractérisés par :", options: ["Des soutiens universels pour chaque élève de la province", "Une intervention ciblée en petits groupes pour les élèves ne progressant pas au palier 1", "Une intervention clinique intensive et individuelle", "Des attentes de programme alternatif"], a: 1, tags: ["L'apprentissage pour tous", "Approche par paliers"] },
          { id: "p103", q: "Dans le curriculum de mathématiques de 2020, le processus de « modélisation mathématique » est décrit par quelle caractéristique unique ?", options: ["C'est un processus linéaire en 4 étapes avec un point final fixe", "C'est un processus itératif qui peut impliquer un retour aux étapes précédentes", "Il n'est applicable qu'au domaine de la littératie financière", "Il doit être réalisé sans l'aide de la technologie"], a: 1, tags: ["Curriculum", "Modélisation"] },
          { id: "p104", q: "Selon « Croissance et réussite », pour un élève ayant un PEI, les « attentes alternatives » sont celles qui :", options: ["Sont des versions légèrement modifiées des attentes du niveau de l'année d'études", "Ne sont pas tirées des attentes du curriculum de l'Ontario", "Ne s'appliquent qu'aux élèves du secondaire", "Permettent à l'élève d'ignorer complètement les mathématiques"], a: 1, tags: ["Croissance et réussite", "Éducation spécialisée"] },
          { id: "p105", q: "Quel document souligne que « l'équité » en évaluation ne signifie pas « l'uniformité » ?", options: ["La Loi sur l'éducation", "Croissance et réussite", "L'apprentissage pour tous", "À la fois Croissance et réussite et L'apprentissage pour tous"], a: 3, tags: ["Documents fondamentaux", "Équité"] },
          { id: "p106", q: "Selon le contexte du curriculum de mathématiques, les « pratiques pédagogiques à impact élevé » incluent « l'enseignement direct ». Quand celui-ci est-il le plus efficace ?", options: ["Lorsque les élèves explorent un concept pour la première fois sans orientation", "Lorsqu'il est utilisé intentionnellement pour dissiper des idées fausses ou introduire des compétences complexes", "Comme seule méthode d'enseignement pour toute l'année scolaire", "Uniquement pour les élèves en situation d'échec"], a: 1, tags: ["Curriculum", "Enseignement"] },
          { id: "p107", q: "« Croissance et réussite » stipule que les catégories de la grille d'évaluation du rendement doivent être considérées :", options: ["Comme quatre cases distinctes et sans lien", "De manière isolée, où la Connaissance vaut 50 %", "Comme étant interdépendantes et reflétant le caractère global de l'apprentissage", "Uniquement lors de l'examen final"], a: 2, tags: ["Croissance et réussite", "Grille d'évaluation"] },
          { id: "p108", q: "Quelle approche pour recueillir des preuves d'apprentissage est spécifiquement mentionnée dans « Croissance et réussite » pour assurer une « triangulation » ?", options: ["Observations, conversations et productions de l'élève", "Tests, quiz et examens", "Commentaires des parents, des pairs et auto-réflexion", "Assiduité, comportement et effort"], a: 0, tags: ["Croissance et réussite", "Triangulation"] },
          { id: "p109", q: "Selon « L'apprentissage pour tous », un « profil de la classe » doit être mis à jour :", options: ["Une fois au début de l'année", "Tous les deux ans", "Continuellement, au fur et à mesure que l'enseignant recueille des informations sur les élèves", "Uniquement lorsqu'un nouvel élève arrive dans la classe"], a: 2, tags: ["L'apprentissage pour tous", "Profil de la classe"] },
          { id: "p110", q: "Dans le contexte de « l'évaluation en tant qu'apprentissage », le rôle de l'enseignant est de :", options: ["Noter l'auto-réflexion de l'élève", "Modéliser et offrir des occasions aux élèves de pratiquer la métacognition", "Assigner l'évaluation par les pairs pour gagner du temps", "S'assurer que tous les élèves atteignent le niveau 4"], a: 1, tags: ["Croissance et réussite", "Métacognition"] },
          { id: "p111", q: "Le curriculum de mathématiques de 2020 inclut « l'apprentissage socioémotionnel » pour aider les élèves à développer « la confiance et l'adaptation ». Cela est mesuré :", options: ["Par une note de pourcentage distincte sur le bulletin", "Dans le contexte de l'apprentissage de l'élève dans tous les domaines des mathématiques", "Uniquement par un conseiller en orientation", "Par un test de personnalité standardisé"], a: 1, tags: ["Curriculum", "ASE"] },
          { id: "p112", q: "Selon « Croissance et réussite », lequel des énoncés suivants est vrai concernant les « travaux en retard ou non remis » ?", options: ["La note zéro ne peut être qu'un dernier recours après avoir épuisé d'autres stratégies", "Les zéros sont encouragés pour enseigner la responsabilité aux élèves", "Les notes pour retard doivent être une déduction fixe de 10 % par jour", "Le Ministère interdit totalement l'utilisation des zéros"], a: 0, tags: ["Croissance et réussite", "Communication des résultats"] },
          { id: "p113", q: "Quel est le « but premier » du bulletin scolaire provincial de l'Ontario selon « Croissance et réussite » ?", options: ["Classer les écoles pour l'Institut Fraser", "Communiquer le rendement de l'élève aux élèves et aux parents", "Fournir des données pour le financement gouvernemental", "Déterminer quels élèves doivent être suspendus"], a: 1, tags: ["Croissance et réussite", "Communication des résultats"] },
          { id: "p114", q: "« L'apprentissage pour tous » définit la « différenciation pédagogique » comme une réponse aux :", options: ["Niveau de préparation, intérêts et profil d'apprentissage de l'élève", "Style d'enseignement préféré de l'enseignant", "Disponibilité des manuels scolaires", "Moment de la journée où les mathématiques sont enseignées"], a: 0, tags: ["L'apprentissage pour tous", "DP"] },
          { id: "p115", q: "Quel processus mathématique est utilisé lorsqu'un élève explique pourquoi sa réponse « a du sens » dans le contexte du problème ?", options: ["Réflexion", "Sélection d'outils", "Représentation", "Établissement de liens"], a: 0, tags: ["Curriculum", "Processus mathématiques"] },
          { id: "p116", q: "Selon « Croissance et réussite », « l'évaluation critériée » signifie que les élèves sont évalués par rapport à :", options: ["La performance de leurs pairs", "Des normes préétablies basées sur les attentes du curriculum", "Leur propre meilleure performance précédente", "Une moyenne nationale"], a: 1, tags: ["Croissance et réussite", "Évaluation"] },
          { id: "p117", q: "Dans le curriculum décloisonné de 9e année, le « codage » est utilisé pour démontrer la compréhension dans :", options: ["Les domaines de l'algèbre et du nombre uniquement", "Tous les domaines du curriculum", "Un laboratoire d'informatique distinct", "Uniquement le domaine des données"], a: 1, tags: ["Curriculum", "Codage"] },
          { id: "p118", q: "« L'apprentissage pour tous » stipule que « l'enseignement efficace » commence par :", options: ["Un test difficile", "La compréhension de l'élève par l'évaluation", "La lecture à haute voix de tout le manuel", "L'attribution de devoirs le premier jour"], a: 1, tags: ["L'apprentissage pour tous", "Évaluation"] },
          { id: "p119", q: "Selon « Croissance et réussite », les « habiletés d'apprentissage et habitudes de travail » incluent :", options: ["La connaissance et la pensée", "L'organisation, la collaboration et l'autorégulation", "La lecture, l'écriture et l'arithmétique", "La vitesse et la précision"], a: 1, tags: ["Croissance et réussite", "Communication des résultats"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Mathématiques",
        calc: false,
        questions: [
          { id: "mnc21", q: "Évaluez : $2,5 \\times 10^3 + 4,2 \\times 10^2$.", options: ["$2920$", "$6700$", "$29200$", "$2542$"], a: 0, tags: ["Sens du nombre", "Notation scientifique"] },
          { id: "mnc22", q: "Lequel des éléments suivants est équivalent à $\\frac{3}{8} \\div \\frac{3}{4}$ ?", options: ["$1/2$", "$9/32$", "$2$", "$1/4$"], a: 0, tags: ["Sens du nombre", "Fractions"] },
          { id: "mnc23", q: "Résolvez pour $x$ : $0,5x - 4 = 11$.", options: ["30", "14", "7,5", "15"], a: 0, tags: ["Algèbre", "Équations linéaires"] },
          { id: "mnc24", q: "Évaluez : $\\sqrt{0,49} + (0,1)^2$.", options: ["$0,71$", "$0,8$", "$0,5$", "$0,51$"], a: 0, tags: ["Sens du nombre", "Racines/Décimaux"] },
          { id: "mnc25", q: "Si le rapport $A:B$ est de $2:3$ et que $B:C$ est de $4:5$, quel est le rapport $A:C$ ?", options: ["$8:15$", "$2:5$", "$6:8$", "$1:2$"], a: 0, tags: ["Raisonnement proportionnel", "Rapports"] }
        ]
      },
      {
        id: "math-calc",
        title: "Mathématiques",
        calc: true,
        questions: [
          { id: "mc259", q: "Un capital de $5\\,000\\$$ est investi à un taux de $4\\%$ composé semi-annuellement. Quelle est la valeur totale après $2$ ans ?", options: ["$5\\,412,16\\$$", "$5\\,408,00\\$$", "$5\\,416,32\\$$", "$5\\,849,29\\$$"], a: 0, tags: ["Littératie financière", "Intérêts composés"] },
          { id: "mc260", q: "Un prisme à base triangulaire rectangle a une base dont les côtés mesurent $5\\text{ cm}$ et $12\\text{ cm}$. Si la hauteur du prisme est de $20\\text{ cm}$, quelle est son aire de surface totale ?", options: ["$660\\text{ cm}^2$", "$600\\text{ cm}^2$", "$720\\text{ cm}^2$", "$750\\text{ cm}^2$"], a: 0, tags: ["Mesure", "Aire de surface"] },
          { id: "mc261", q: "Résolvez le système : $3x + 2y = 12$ et $y = 2x - 1$. Trouvez $x$.", options: ["2", "3", "1", "4"], a: 0, tags: ["Algèbre", "Systèmes linéaires"] },
          { id: "mc262", q: "Une voiture se déprécie de $15\\%$ de sa valeur actuelle chaque année. Si une voiture vaut $30\\,000\\$$ maintenant, combien vaudra-t-elle dans $3$ ans (à l'unité près) ?", options: ["$18\\,424\\$$", "$16\\,500\\$$", "$21\\,675\\$$", "$19\\,500\\$$"], a: 0, tags: ["Littératie financière", "Dépréciation"] },
          { id: "mc263", q: "La moyenne de sept nombres est $15$. Si on ajoute un huitième nombre, la nouvelle moyenne est $17$. Quel est ce huitième nombre ?", options: ["31", "17", "25", "19"], a: 0, tags: ["Données", "Moyenne"] },
          { id: "mc264", q: "Une maquette d'un bâtiment est à l'échelle $1:250$. Si le volume de la maquette est de $0,5\\text{ m}^3$, quel est le volume du bâtiment réel ?", options: ["$7\\,812\\,500\\text{ m}^3$", "$125\\,000\\text{ m}^3$", "$31\\,250\\text{ m}^3$", "$1\\,250\\text{ m}^3$"], a: 0, tags: ["Raisonnement proportionnel", "Échelle/Volume"] },
          { id: "mc265", q: "Déterminez la longueur de la diagonale d'un prisme rectangulaire de dimensions $3\\text{ cm} \\times 4\\text{ cm} \\times 12\\text{ cm}$.", options: ["$13\\text{ cm}$", "$19\\text{ cm}$", "$15\\text{ cm}$", "$17\\text{ cm}$"], a: 0, tags: ["Géométrie", "Pythagore 3D"] },
          { id: "mc266", q: "Un employé gagne $22\\$/\\text{h}$ pour les $35$ premières heures et $1,5\\times$ pour les heures supplémentaires. Si son salaire brut était de $1\\,034\\$$, combien d'heures a-t-il travaillées au total ?", options: ["43", "40", "45", "42"], a: 0, tags: ["Littératie financière", "Modélisation algébrique"] },
          { id: "mc267", q: "Un sac contient $5$ billes rouges, $3$ bleues et $2$ vertes. Si deux billes sont tirées sans remise, quelle est la probabilité qu'elles soient toutes deux rouges ?", options: ["$2/9$", "$1/4$", "$1/5$", "$5/18$"], a: 0, tags: ["Données", "Probabilité"] },
          { id: "mc268", q: "Simplifiez : $\\frac{(x^2 y^3)^2}{x^{-2} y^4}$.", options: ["$x^6 y^2$", "$x^2 y^2$", "$x^6 y^{10}$", "$x^0 y^2$"], a: 0, tags: ["Sens du nombre", "Exposants"] },
          { id: "mc269", q: "Un cylindre a un volume de $500\\text{ cm}^3$. Si le rayon est doublé et la hauteur est réduite de moitié, quel est le nouveau volume ?", options: ["$1\\,000\\text{ cm}^3$", "$500\\text{ cm}^3$", "$250\\text{ cm}^3$", "$2\\,000\\text{ cm}^3$"], a: 0, tags: ["Mesure", "Relations de volume"] },
          { id: "mc270", q: "Un manteau coûte $150\\$$. On applique un rabais de $20\\%$, puis une autre réduction de $10\\%$ sur le prix soldé. Quel est le prix final avant taxes ?", options: ["$108\\$$", "$105\\$$", "$115\\$$", "$120\\$$"], a: 0, tags: ["Littératie financière", "Pourcentages"] },
          { id: "mc271", q: "Quelle est l'équation de la droite passant par $(-2, 5)$ et $(4, -7)$ ?", options: ["$y = -2x + 1$", "$y = 2x + 9$", "$y = -2x - 1$", "$y = -0,5x + 4$"], a: 0, tags: ["Algèbre", "Relations linéaires"] },
          { id: "mc272", q: "Si $15\\%$ d'un nombre est $45$, quel est $120\\%$ de ce même nombre ?", options: ["360", "300", "400", "450"], a: 0, tags: ["Sens du nombre", "Proportions"] },
          { id: "mc273", q: "Une carte a une échelle de $1:500\\,000$. Une forêt occupe $4\\text{ cm}^2$ sur la carte. Quelle est l'aire réelle de la forêt en kilomètres carrés ?", options: ["$100\\text{ km}^2$", "$20\\text{ km}^2$", "$10\\text{ km}^2$", "$250\\text{ km}^2$"], a: 0, tags: ["Mesure", "Échelle d'aire"] },
          { id: "mc274", q: "L'impôt sur le revenu d'une personne est de $15\\%$ sur les premiers $50\\,000\\$$ et de $25\\%$ sur tout montant excédant $50\\,000\\$$. Si elle gagne $75\\,000\\$$, quel est son impôt total ?", options: ["$13\\,750\\$$", "$11\\,250\\$$", "$18\\,750\\$$", "$15\\,000\\$$"], a: 0, tags: ["Littératie financière", "Imposition"] },
          { id: "mc275", q: "Résolvez pour $x$ : $\\frac{2x - 3}{5} = \\frac{x + 4}{2}$.", options: ["-26", "26", "-11", "11"], a: 0, tags: ["Algèbre", "Équations"] },
          { id: "mc276", q: "Une sphère s'insère exactement dans un cube de $10\\text{ cm}$ de côté. Quel est le volume de l'espace à l'intérieur du cube NON occupé par la sphère ?", options: ["$476,7\\text{ cm}^3$", "$523,3\\text{ cm}^3$", "$333,3\\text{ cm}^3$", "$1\\,000\\text{ cm}^3$"], a: 0, tags: ["Mesure", "Volume composé"] },
          { id: "mc277", q: "Un sondage auprès de $200$ personnes révèle que $120$ aiment le café, $80$ aiment le thé et $40$ aiment les deux. Quelle est la probabilité qu'une personne choisie au hasard n'aime ni l'un ni l'autre ?", options: ["$0,2$", "$0,4$", "$0,3$", "$0,1$"], a: 0, tags: ["Données", "Ensembles/Probabilité"] },
          { id: "mc278", q: "Exprimez $0,000000045$ en notation scientifique.", options: ["$4,5 \\times 10^{-8}$", "$4,5 \\times 10^{-7}$", "$45 \\times 10^{-9}$", "$0,45 \\times 10^{-7}$"], a: 0, tags: ["Sens du nombre", "Notation scientifique"] },
          { id: "mc279", q: "Le rapport des angles d'un quadrilatère est $2:3:4:6$. Quelle est la mesure du plus petit angle ?", options: ["$48^\\circ$", "$24^\\circ$", "$36^\\circ$", "$60^\\circ$"], a: 0, tags: ["Géométrie", "Rapports"] },
          { id: "mc280", q: "Une carte de crédit a un taux d'intérêt annuel de $21\\%$. Si un solde de $1\\,000\\$$ reste impayé pendant un mois, quel est l'intérêt facturé pour ce mois ?", options: ["$17,50\\$$", "$21,00\\$$", "$1,75\\$$", "$175,00\\$$"], a: 0, tags: ["Littératie financière", "Intérêt"] },
          { id: "mc281", q: "Trouvez le point d'intersection de $y = 4x + 10$ et $y = -2x - 2$.", options: ["$(-2, 2)$", "$(2, 18)$", "$(-2, -6)$", "$(0, 10)$"], a: 0, tags: ["Algèbre", "Systèmes linéaires"] },
          { id: "mc282", q: "Un cône et un cylindre ont le même rayon et la même hauteur. Quel est le rapport du volume du cône au volume du cylindre ?", options: ["$1:3$", "$3:1$", "$1:2$", "$2:3$"], a: 0, tags: ["Mesure", "Théorie des volumes"] },
          { id: "mc283", q: "Un investissement rapporte $5\\%$ par an. En utilisant la « règle de 72 », environ combien de temps faudra-t-il pour que l'investissement double ?", options: ["14,4 ans", "10 ans", "7,2 ans", "20 ans"], a: 0, tags: ["Littératie financière", "Estimation"] },
          { id: "mc284", q: "Calculez l'écart type de l'ensemble $[10, 10, 10, 10]$.", options: ["0", "1", "10", "Indéfini"], a: 0, tags: ["Données", "Étendue"] },
          { id: "mc285", q: "Lequel des éléments suivants décrit une relation « non linéaire » ?", options: ["L'aire d'un carré en fonction de son côté", "Le périmètre d'un carré en fonction de son côté", "Le coût de l'essence à un prix fixe par litre", "La distance parcourue à une vitesse constante en fonction du temps"], a: 0, tags: ["Algèbre", "Linéaire vs Non linéaire"] },
          { id: "mc286", q: "Si $f(x) = 2x^2 - 3x + 1$, trouvez $f(-2)$.", options: ["15", "3", "7", "11"], a: 0, tags: ["Algèbre", "Fonctions"] },
          { id: "mc287", q: "Une recette utilise $250\\text{ mL}$ de lait pour $12$ muffins. Quelle quantité de lait est nécessaire pour $30$ muffins ?", options: ["$625\\text{ mL}$", "$500\\text{ mL}$", "$750\\text{ mL}$", "$600\\text{ mL}$"], a: 0, tags: ["Raisonnement proportionnel"] },
          { id: "mc288", q: "Quelle est l'aire de surface totale d'un cylindre avec $r = 3\\text{ cm}$ et $h = 7\\text{ cm}$ ? (Utilisez $\\pi \\approx 3,14$)", options: ["$188,4\\text{ cm}^2$", "$131,88\\text{ cm}^2$", "$28,26\\text{ cm}^2$", "$150,72\\text{ cm}^2$"], a: 0, tags: ["Mesure", "Aire de surface"] },
          { id: "mc289", q: "Une personne achète une action pour $20\\$$ et la vend pour $25\\$$. Quel est le pourcentage de profit ?", options: ["$25\\%$", "$20\\%$", "$5\\%$", "$50\\%$"], a: 0, tags: ["Littératie financière", "Pourcentages"] },
          { id: "mc290", q: "Trouvez la médiane des données : $15, 22, 12, 19, 31, 18, 25$.", options: ["19", "18", "22", "18,5"], a: 0, tags: ["Données", "Médiane"] },
          { id: "mc291", q: "Simplifiez : $\\sqrt{72}$ sous sa forme de radical mixte la plus simple.", options: ["$6\\sqrt{2}$", "$2\\sqrt{6}$", "$3\\sqrt{8}$", "$36\\sqrt{2}$"], a: 0, tags: ["Sens du nombre", "Radicaux"] },
          { id: "mc292", q: "Un terrain rectangulaire mesure $100\\text{ m}$ par $50\\text{ m}$. Si un sentier de $2\\text{ m}$ de large est construit à l'intérieur du périmètre, quelle est l'aire du sentier ?", options: ["$584\\text{ m}^2$", "$600\\text{ m}^2$", "$384\\text{ m}^2$", "$400\\text{ m}^2$"], a: 0, tags: ["Mesure", "Aire composée"] },
          { id: "mc293", q: "Une entreprise de location de voitures facture $50\\$$ plus $0,20\\$/\\text{km}$. Une autre facture $30\\$$ plus $0,30\\$/\\text{km}$. À quelle distance le coût est-il le même ?", options: ["$200\\text{ km}$", "$100\\text{ km}$", "$150\\text{ km}$", "$250\\text{ km}$"], a: 0, tags: ["Algèbre", "Systèmes linéaires"] },
          { id: "mc294", q: "Quelle est la somme des angles intérieurs d'un hexagone ?", options: ["$720^\\circ$", "$540^\\circ$", "$900^\\circ$", "$360^\\circ$"], a: 0, tags: ["Géométrie", "Polygones"] },
          { id: "mc295", q: "Une population augmente de $2\\%$ par an. Si elle est de $10\\,000$ maintenant, quelle sera-t-elle dans $5$ ans ?", options: ["$11\\,041$", "$11\\,000$", "$10\\,200$", "$12\\,000$"], a: 0, tags: ["Algèbre", "Croissance exponentielle"] },
          { id: "mc296", q: "Convertissez $100$ centimètres cubes en millimètres cubes.", options: ["$100\\,000\\text{ mm}^3$", "$1\\,000\\text{ mm}^3$", "$10\\,000\\text{ mm}^3$", "$1\\,000\\,000\\text{ mm}^3$"], a: 0, tags: ["Mesure", "Conversion d'unités"] },
          { id: "mc297", q: "Si $a^2 + b^2 = c^2$, et $a=7, c=25$, trouvez $b$.", options: ["24", "18", "20", "23"], a: 0, tags: ["Géométrie", "Pythagore"] },
          { id: "mc298", q: "Un ensemble de données a une moyenne de $10$ et une variance de $4$. Quel est l'écart type ?", options: ["2", "4", "16", "5"], a: 0, tags: ["Données", "Étendue"] },
          { id: "mc299", q: "Si le taux de change est de $1\\text{ CAD} = 0,75\\text{ USD}$, combien coûte en CAD un article de $120\\text{ USD}$ ?", options: ["$160\\$$", "$90\\$$", "$150\\$$", "$130\\$$"], a: 0, tags: ["Littératie financière", "Devises"] },
          { id: "mc300", q: "Résolvez : $2^{x+1} = 32$.", options: ["4", "5", "3", "6"], a: 0, tags: ["Algèbre", "Exposants"] },
          { id: "mc301", q: "Un triangle a des côtés de $8, 15, 17$. De quel type de triangle s'agit-il ?", options: ["Rectangle", "Isocèle", "Équilatéral", "Obtus"], a: 0, tags: ["Géométrie", "Classification"] },
          { id: "mc302", q: "La probabilité de pluie est de $3/10$. Quelle est la cote (odds) CONTRE la pluie ?", options: ["$7:3$", "$3:7$", "$7:10$", "$3:10$"], a: 0, tags: ["Données", "Cotes"] },
          { id: "mc303", q: "Calculez le volume d'une pyramide à base carrée avec un côté de base de $6$ et une hauteur de $10$.", options: ["120", "360", "60", "180"], a: 0, tags: ["Mesure", "Volume"] }
        ]
      }
    ]
  }
};
