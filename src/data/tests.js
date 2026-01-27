

export const MOCK_TESTS = {
  "mpt-mock-1": {
    id: "mpt-mock-1",
    title: "Practice Test #1",
	requiresBriefing: true,
	isOfficial:true,
    sections: [
      {
        id: "pedagogy",
        title: "Pedagogy",
        calc: false,
        questions: [
  { 
    id: "p1", 
    q: "According to Growing Success, where can teachers find the accommodations required by a student with special education needs for assessment and evaluation?", 
    options: ["The student’s Annual Learning Plan", "The student’s Individual Education Plan", "The student’s Achievement Plan", "The student’s Learning Preferences Plan"], 
    a: 1, 
    tags: ["Growing Success", "Special Education", "Assessment"] 
  },
  { 
    id: "p2", 
    q: "According to Learning for All, which practice will be most helpful when differentiating instruction?", 
    options: ["Meeting with the next grade’s teachers", "Discussing proposed strategies with the school principal", "Creating flexible student groupings based on learning styles", "Using identical resources for all students"], 
    a: 2, 
    tags: ["Learning for All", "Differentiated Instruction"] 
  },
  { 
    id: "p3", 
    q: "What does not change for students receiving accommodations?", 
    options: ["Teaching strategies", "Time allotted for tests", "Classroom environment", "Curriculum expectations"], 
    a: 3, 
    tags: ["Growing Success", "Special Education", "Curriculum"] 
  },
  { 
    id: "p4", 
    q: "Which option is not listed in Learning for All as an example of a formative assessment tool or measure?", 
    options: ["Provision of timely descriptive feedback to students", "Use of assessment results to guide further instruction", "Inventory of student interests to guide further instruction", "Use of the moderated marking process to support ongoing assessment"], 
    a: 3, 
    tags: ["Learning for All", "Formative Assessment"] 
  },
  { 
    id: "p5", 
    q: "According to Learning for All, what does the combination of Universal Design for Learning and differentiated instruction enable educators to do?", 
    options: ["Respond effectively to the strengths and needs of all students", "Promote positive communication between the school and parents", "Accurately predict a student’s report card marks", "Prepare Individual Education Plans more quickly"], 
    a: 0, 
    tags: ["Learning for All", "UDL"] 
  },
  { 
    id: "p6", 
    q: "According to Growing Success, which of the following is not a purpose of the achievement chart?", 
    options: ["To guide the development of high-quality assessment tasks", "To help teachers to plan instruction for learning", "To ensure all students are prepared for provincial assessments", "To establish categories and criteria for assessing learning"], 
    a: 2, 
    tags: ["Growing Success", "Achievement Chart"] 
  },
  { 
    id: "p7", 
    q: "Which assessment strategy is not recommended by Growing Success to elicit evidence of student achievement for evaluation?", 
    options: ["Observation", "Conversation", "Student product", "Peer assessment"], 
    a: 3, 
    tags: ["Growing Success", "Evaluation"] 
  },
  { 
    id: "p8", 
    q: "According to Growing Success, which principle is one of the seven fundamental principles that ensure assessment, evaluation and reporting are valid and reliable?", 
    options: ["Developing students’ peer-assessment skills", "Eliminating all curriculum gaps experienced by students", "Providing identical assessment opportunities to all students", "Supporting all students, including those with special education needs"], 
    a: 3, 
    tags: ["Growing Success", "Assessment Principles"] 
  },
  { 
    id: "p9", 
    q: "Which option is not listed under 'The Mathematical Processes' in the Ontario Curriculum, Grades 1-8: Mathematics?", 
    options: ["Communicating", "Representing", "Multiplying", "Connecting"], 
    a: 2, 
    tags: ["Curriculum", "Math Processes"] 
  },
  { 
    id: "p10", 
    q: "According to Learning for All, which strategy facilitates learning through a variety of different opportunities focused on a particular topic or theme?", 
    options: ["Co-operative learning", "Project-based approach", "Problem-based approach", "Explicit instruction"], 
    a: 1, 
    tags: ["Learning for All", "Instructional Strategies"] 
  },
  { 
    id: "p11", 
    q: "According to Growing Success, which qualifier is used to describe student performance at Level 2?", 
    options: ["Some", "Limited", "High degree", "Considerable"], 
    a: 0, 
    tags: ["Growing Success", "Achievement Levels"] 
  },
  { 
    id: "p12", 
    q: "Dilshad invites students to measure objects related to a cultural celebration and facilitates justifying thinking. Which high-impact practice is she demonstrating?", 
    options: ["Flexible groupings", "Deliberate practice", "Math conversations", "Teaching about problem solving"], 
    a: 2, 
    tags: ["Curriculum", "Math Conversations", "High-Impact Practices"] 
  },
  { 
    id: "p13", 
    q: "According to Learning for All, assessment as learning helps develop and support students in which regulatory process?", 
    options: ["Self-esteem", "Precognition", "Self-confidence", "Metacognition"], 
    a: 3, 
    tags: ["Learning for All", "Assessment as Learning"] 
  },
  { 
    id: "p14", 
    q: "How does Ontario’s criterion-referenced assessment approach require teachers to evaluate students’ work?", 
    options: ["By ranking student performance", "By comparing work done by other students", "By referencing performance standards developed by teachers", "By referencing the established criteria for four levels of achievement"], 
    a: 3, 
    tags: ["Growing Success", "Criterion-Referenced"] 
  },
  { 
    id: "p15", 
    q: "According to Learning for All, which strategy is an example of differentiated instruction?", 
    options: ["Encouraging undisciplined activity", "Isolating struggling students", "Using a variety of groupings to meet student needs", "Providing identical assessment opportunities"], 
    a: 2, 
    tags: ["Learning for All", "Differentiated Instruction"] 
  },
  { 
    id: "p16", 
    q: "According to Growing Success, what is the learning skill shown by a student who 'looks for and acts on new ideas and opportunities'?", 
    options: ["Initiative", "Organization", "Responsibility", "Independent work"], 
    a: 0, 
    tags: ["Growing Success", "Learning Skills"] 
  },
  { 
    id: "p17", 
    q: "Which category of knowledge and skills requires students to make connections within and between various contexts?", 
    options: ["Thinking", "Application", "Communication", "Knowledge and Understanding"], 
    a: 1, 
    tags: ["Curriculum", "Achievement Chart"] 
  },
  { 
    id: "p18", 
    q: "According to Learning for All, what kind of assessment identifies where the learner is, where they need to go, and how best to get there?", 
    options: ["Assessment of learning", "Assessment as learning", "Assessment for learning", "Assessment of learning skills"], 
    a: 2, 
    tags: ["Learning for All", "Assessment for Learning"] 
  },
  { 
    id: "p19", 
    q: "Patrick encourages students to monitor their thought process and consider the reasonableness of answers. Which mathematical process is this?", 
    options: ["Reflecting", "Connecting", "Representing", "Communicating"], 
    a: 0, 
    tags: ["Curriculum", "Math Processes"] 
  },
  { 
    id: "p20", 
    q: "According to Growing Success, what does a Level 1 identify?", 
    options: ["Achievement that surpasses the provincial standard", "Achievement that represents the provincial standard", "Achievement that approaches the provincial standard", "Achievement that falls much below the provincial standard"], 
    a: 3, 
    tags: ["Growing Success", "Achievement Levels"] 
  },
  { 
    id: "p21", 
    q: "Based on Learning for All, which is a shared goal of differentiated instruction and Universal Design for Learning?", 
    options: ["Using the same textbooks", "Using only whole-class instruction", "Meeting the different needs of the students in a class", "Meeting the requirements for curriculum expectations"], 
    a: 2, 
    tags: ["Learning for All", "UDL"] 
  },
  { 
    id: "p22", 
    q: "According to Growing Success, how often should communication with parents about student achievement take place?", 
    options: ["Only when report cards are issued", "At the beginning of the year", "Only when the student is experiencing challenges", "Continuously throughout the year"], 
    a: 3, 
    tags: ["Growing Success", "Communication"] 
  },
  { 
    id: "p23", 
    q: "As outlined in Growing Success, when does diagnostic assessment take place?", 
    options: ["Before instruction begins", "At the end of a period of learning", "Frequently and in an ongoing manner", "After recommendations from parents"], 
    a: 0, 
    tags: ["Growing Success", "Diagnostic Assessment"] 
  }
]
      },
      {
        id: "math-no-calc",
        title: "Math",
        calc: false,
questions: [
  { 
    id: "m1", 
    q: "Calculate: $11 + (-2) - (-3) - 4$", 
    options: ["2", "6", "8", "12"], 
    a: 2, 
    tags: ["Arithmetic", "Integers"] 
  },
  { 
    id: "m2", 
    q: "What is the value of $3^4 \\div 3$?", 
    options: ["3", "9", "27", "81"], 
    a: 2, 
    tags: ["Arithmetic", "Exponents"] 
  },
  { 
    id: "m3", 
    q: "What is the value of the $2$ in the number $425,380$?", 
    options: ["20", "2,000", "20,000", "200,000"], 
    a: 2, 
    tags: ["Number Sense", "Place Value"] 
  },
  { 
    id: "m4", 
    q: "Calculate: $24 \\div \\frac{2}{3}$", 
    options: ["4", "8", "16", "36"], 
    a: 3, 
    tags: ["Arithmetic", "Fractions"] 
  },
  { 
    id: "m5", 
    q: "What is the minimum number of times Amal needs to add $\\$15$ to his savings to increase them by at least $\\$100$?", 
    options: ["4 times", "5 times", "6 times", "7 times"], 
    a: 3, 
    tags: ["Number Sense", "Word Problems"] 
  }
]
      },
      {
        id: "math-calc",
        title: "Math",
        calc: true,
questions: [
  { 
    id: "mc1", 
    q: "Calculate: $\\frac{5}{3} - 1 + \\frac{2}{3}$", 
    options: ["$\\frac{6}{3}$", "$\\frac{10}{6}$", "$\\frac{4}{3}$", "$\\frac{6}{6}$"], 
    a: 2, 
    tags: ["Arithmetic", "Fractions"] 
  },
  { 
    id: "mc2", 
    q: "The length of a classroom is $7.5$ m. What is the length of the classroom in millimetres?", 
    options: ["0.0075 mm", "0.075 mm", "750 mm", "7500 mm"], 
    a: 3, 
    tags: ["Measurement", "Conversions"] 
  },
  { 
    id: "mc3", 
    q: "Salim chooses a cellphone plan that charges a flat fee of $\\$40$ per month and $\\$10$ per gigabyte of data. Which equation represents the cost $C$, where $n$ is the number of gigabytes used?", 
    options: ["$C = 50n$", "$C = 40(10n)$", "$C = 40n + 10$", "$C = 10n + 40$"], 
    a: 3, 
    tags: ["Algebra", "Linear Relations"] 
  },
  { 
    id: "mc4", 
    q: "Sam earns $\\$306$ for working $15$ hours. Miko earns $\\$189$ for working $10$ hours. Which statement correctly compares their pay?", 
    options: ["Sam earns $\\$19.80$ more per hour than Miko.", "Sam earns $\\$23.40$ more per hour than Miko.", "If they each work 5 hours, Sam earns $\\$117$ more than Miko.", "If they each work 30 hours, Sam earns $\\$45$ more than Miko."], 
    a: 3, 
    tags: ["Proportional Reasoning", "Rates"] 
  },
  { 
    id: "mc6", 
    q: "Calculate: $2 + 2 \\times 4 + 2$", 
    options: ["12", "14", "18", "24"], 
    a: 0, 
    tags: ["Arithmetic", "Order of Operations"] 
  },
  { 
    id: "mc8", 
    q: "Four runners run a relay. Times: $58.409$s, $59.685$s, $59.438$s, $58.127$s. How much lower is the total time than the previous record of $240.201$ seconds?", 
    options: ["4.542 seconds", "5.552 seconds", "15.458 seconds", "235.659 seconds"], 
    a: 0, 
    tags: ["Arithmetic", "Decimals"] 
  },
  { 
    id: "mc11", 
    q: "A club has $30$ members, and $\\frac{4}{5}$ of them attend an event. The cost is $\\$10$ per member. What is the total cost paid by all attending members?", 
    options: ["$\\$300$", "$\\$240$", "$\\$60$", "$\\$24$"], 
    a: 1, 
    tags: ["Number Sense", "Fractions"] 
  },
  { 
    id: "mc12", 
    q: "What is the value of $b$ in the equation: $\\frac{b}{4} = b - 12$?", 
    options: ["3", "8", "16", "48"], 
    a: 2, 
    tags: ["Algebra", "Equations"] 
  },
  { 
    id: "mc13", 
    q: "A right triangle has a hypotenuse of $73$ cm and a base of $55$ cm. What is the height of the triangle?", 
    options: ["18 cm", "36 cm", "48 cm", "91 cm"], 
    a: 2, 
    tags: ["Geometry", "Pythagorean Theorem"] 
  },
  { 
    id: "mc14", 
    q: "Which decimal number is equivalent to $\\frac{2}{5}$?", 
    options: ["0.25", "0.4", "2.5", "5"], 
    a: 1, 
    tags: ["Number Sense", "Decimals"] 
  },
  { 
    id: "mc15", 
    q: "Pattern A: $36\\,864, 9216, 2304, 576, \\ldots$ Pattern B: $26\\,244, 8748, 2916, 972, \\ldots$. Which number is in both patterns?", 
    options: ["324", "144", "36", "12"], 
    a: 2, 
    tags: ["Algebra", "Patterns"] 
  },
  { 
    id: "mc19", 
    q: "A team raises $\\$1650$ by selling $550$ pucks. If Harjot collects $\\$24$, how many hockey pucks has she sold?", 
    options: ["3", "8", "45", "72"], 
    a: 1, 
    tags: ["Proportional Reasoning", "Rates"] 
  },
  { 
    id: "mc23", 
    q: "A bag contains 3 blue, 9 green, 6 red, and 12 yellow marbles. What is the probability of NOT pulling a yellow marble?", 
    options: ["0.2", "0.3", "0.4", "0.6"], 
    a: 3, 
    tags: ["Data", "Probability"] 
  },
  { 
    id: "mc26", 
    q: "Which list of fractions is in order from least to greatest?", 
    options: ["$\\frac{5}{3}, \\frac{5}{8}, \\frac{5}{10}, \\frac{5}{15}$", "$\\frac{5}{3}, \\frac{5}{10}, \\frac{5}{8}, \\frac{5}{15}$", "$\\frac{5}{15}, \\frac{5}{10}, \\frac{5}{8}, \\frac{5}{3}$", "$\\frac{5}{15}, \\frac{5}{8}, \\frac{5}{10}, \\frac{5}{3}$"], 
    a: 2, 
    tags: ["Number Sense", "Fractions"] 
  },
  { 
    id: "mc28", 
    q: "Which toothpaste has the lowest cost per mL?", 
    options: ["$\\$1.35$ for 100 mL", "$\\$1.94$ for 150 mL", "$\\$2.40$ for 200 mL", "$\\$3.25$ for 250 mL"], 
    a: 2, 
    tags: ["Proportional Reasoning", "Unit Rates"] 
  },
  { 
    id: "mc30", 
    q: "What is the value of $m$ in the equation: $48 = 2(12 + m)$?", 
    options: ["12", "18", "24", "34"], 
    a: 0, 
    tags: ["Algebra", "Equations"] 
  },
  { 
    id: "mc32", 
    q: "Which represents the number $4937$ in expanded form?", 
    options: ["$4\\times100 + 9\\times10 + 3\\times10 + 7\\times1$", "$4\\times1000 + 9\\times100 + 3\\times10 + 7\\times1$", "$4\\times1 + 9\\times10 + 3\\times100 + 7\\times1000$", "$4\\times10 + 9\\times100 + 3\\times1000 + 7\\times1$"], 
    a: 1, 
    tags: ["Number Sense", "Place Value"] 
  },
  { 
    id: "mc33", 
    q: "In Jan, a bicycle costs $\\$300$. In June, it costs $\\$426$. What percentage represents the increase?", 
    options: ["14%", "30%", "42%", "70%"], 
    a: 2, 
    tags: ["Number Sense", "Percentages"] 
  },
  { 
    id: "mc34", 
    q: "A cake is cut into thirds. Each third is cut into three equal slices. What fraction of the cake is one slice?", 
    options: ["$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{1}{9}$", "$\\frac{1}{18}$"], 
    a: 2, 
    tags: ["Number Sense", "Fractions"] 
  },
  { 
    id: "mc36", 
    q: "Which equation is true?", 
    options: ["$3 + 4 \\times 7 = 49$", "$17 - 3 \\times 4 = 56$", "$3 \\times 2 + 4 \\div 4 = 7$", "$3 + 3 \\div 3 \\times 2 = 4$"], 
    a: 2, 
    tags: ["Arithmetic", "Order of Operations"] 
  },
  { 
    id: "mc37", 
    q: "What number is represented by: $(3 \\times 1\\,000\\,000) + (2 \\times 10\\,000) + (7 \\times 1000) + (9 \\times 100) + (6 \\times 10) + (8 \\times 1)$?", 
    options: ["327 968", "3 027 968", "3 207 968", "3 270 968"], 
    a: 1, 
    tags: ["Number Sense", "Place Value"] 
  },
  { 
    id: "mc38", 
    q: "Felix has 3 mangoes and 4 papayas. Which ratio is equivalent?", 
    options: ["3:8", "4:3", "8:6", "9:12"], 
    a: 3, 
    tags: ["Proportional Reasoning", "Ratios"] 
  },
  { 
    id: "mc39", 
    q: "Calculate: $3^{11} \\times 3^2$", 
    options: ["$3^{13}$", "$3^{22}$", "$9^{13}$", "$9^{22}$"], 
    a: 0, 
    tags: ["Arithmetic", "Exponents"] 
  },
  { 
    id: "mc40", 
    q: "The cost of 5 avocados is $\\$3.70$. What is the cost per avocado?", 
    options: ["$\\$0.74$", "$\\$1.35$", "$\\$3.65$", "$\\$18.50$"], 
    a: 0, 
    tags: ["Proportional Reasoning", "Unit Rates"] 
  },
  { 
    id: "mc41", 
    q: "Merrick writes 8 tests, and the mean score is 72. What is the total of the scores for the 8 tests?", 
    options: ["64", "80", "576", "648"], 
    a: 2, 
    tags: ["Data", "Mean"] 
  },
  { 
    id: "mc43", 
    q: "Pattern: $1683, 1598, 1513, 1428, \\ldots$ What is the 9th term?", 
    options: ["918", "1003", "1088", "1173"], 
    a: 1, 
    tags: ["Algebra", "Patterns"] 
  },
  { 
    id: "mc44", 
    q: "Calculate: $6905 \\div 34$", 
    options: ["23.3", "23 R3", "203 R3", "203.3"], 
    a: 2, 
    tags: ["Arithmetic", "Division"] 
  },
  { 
    id: "mc45", 
    q: "Which equation has $x = 12$ as a solution?", 
    options: ["$3(x - 17) = 19$", "$8x + 4 = 12$", "$\\frac{2}{3}x + 3 = -5$", "$\\frac{7}{3}x - 6 = 22$"], 
    a: 3, 
    tags: ["Algebra", "Equations"] 
  },
  { 
    id: "mc46", 
    q: "Which describes the sum of $\\frac{11}{5} + \\frac{1}{7}$?", 
    options: ["Exactly 2", "Between 1 and 2", "Between 2 and 3", "Exactly 3"], 
    a: 2, 
    tags: ["Number Sense", "Estimation"] 
  },
  { 
    id: "mc47", 
    q: "Which fraction is equivalent to 8%?", 
    options: ["$\\frac{2}{25}$", "$\\frac{2}{20}$", "$\\frac{1}{8}$", "$\\frac{8}{10}$"], 
    a: 0, 
    tags: ["Number Sense", "Percentages"] 
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
        title: "Pedagogy",
        calc: false,
        
questions: [
  {
    id: "p24",
    q: "Which of the following is NOT an example of an alternative program?",
    options: ["Social skills", "Speech remediation", "Co-operative education", "Orientation or mobility training"],
    a: 0,
    tags: ["Special Education", "Alternative Programs"]
  },
  {
    id: "p25",
    q: "Differentiated instruction encourages teachers to:",
    options: ["Provide every student with a different worksheet or task.", "Create long-term ability groups to maintain a stable routine.", "Use a variety of whole class instructional approaches to keep students engaged.", "Adapt instruction to reflect student strengths, interests, learning styles and readiness to learn."],
    a: 3,
    tags: ["Learning for All", "Differentiated Instruction"]
  },
  {
    id: "p26",
    q: "Teachers working with students with special education needs use assessment and evaluation strategies for all the following reasons EXCEPT:",
    options: ["Supporting accurate decisions about the student’s program.", "Helping to sort and group students with special educational needs.", "Determining interventions necessary to enable the student to demonstrate achievement.", "Supporting decisions relating to referrals, screening, and instructional planning."],
    a: 1,
    tags: ["Special Education", "Growing Success"]
  },
  {
    id: "p27",
    q: "A Grade 6 teacher uses manipulatives, connects to Indigenous art, and values different strategies. Which principle is best reflected here?",
    options: ["A curriculum is most effective when taught in the order strands appear.", "A curriculum is most effective when it values and celebrates diversity among students.", "A curriculum is most effective when it focuses on memorization and repetition.", "A curriculum is most effective when all students use the same manipulatives."],
    a: 1,
    tags: ["Curriculum", "Diversity", "Indigenous Perspectives"]
  },
  {
    id: "p28",
    q: "What is an example of an accommodation?",
    options: ["Using expectations at a different grade level", "Decreasing the complexity of the expectations", "Allowing the student to take a written test orally", "Decreasing the number of expectations assessed"],
    a: 2,
    tags: ["Special Education", "Accommodations"]
  },
  {
    id: "p29",
    q: "What is a key benefit of involving students as partners in their learning?",
    options: ["It leads to greater student engagement and improved achievement.", "It ensures students follow a set path to achieve expectations.", "It reduces the frequency of differentiated instruction.", "It decreases the amount of time teachers spend on lesson planning."],
    a: 0,
    tags: ["Learning for All", "Student Agency"]
  },
  {
    id: "p30",
    q: "Which of the following is NOT one of Growing Success’ seven fundamental principles?",
    options: ["They should be fair, transparent and equitable for all students.", "They should be ongoing, varied in nature and administered over time.", "They should maintain objectivity by basing evaluation on product-based tasks.", "They should enable ongoing descriptive feedback that is clear and timely."],
    a: 2,
    tags: ["Growing Success", "Assessment Principles"]
  },
  {
    id: "p31",
    q: "According to The Ontario Curriculum, what is a responsibility of a mathematics teacher?",
    options: ["To provide ongoing feedback to students about their learning.", "To teach concepts and learning skills independently of each other.", "To prioritize financial literacy over other strands.", "To use a textbook as the primary planning resource."],
    a: 0,
    tags: ["Curriculum", "Teacher Roles"]
  },
  {
    id: "p32",
    q: "Adina understands math well but fails to submit work on time. How should this be reflected on her report card?",
    options: ["Meets provincial standards; 'Good' in Responsibility.", "Meets provincial standards; 'Needs Improvement' in Responsibility.", "Approaches provincial standards; 'Good' in Responsibility.", "Approaches provincial standards; 'Needs Improvement' in Responsibility."],
    a: 1,
    tags: ["Growing Success", "Report Card", "Learning Skills"]
  },
  {
    id: "p33",
    q: "What is a key purpose of 'Assessment for Learning'?",
    options: ["To determine where students are, where they need to go and how to get there.", "To allow students to become familiar with tests used for 'Assessment as Learning'.", "To allow teachers to streamline planning by grouping by performance.", "To provide teachers with summative data to report achievement."],
    a: 0,
    tags: ["Growing Success", "Assessment for Learning"]
  },
  {
    id: "p34",
    q: "Which is a sample behavior for the skill of 'Organization'?",
    options: ["Developing plans to address issues and solve problems.", "Identifying personal goals and monitoring progress.", "Using personal and classroom experiences as opportunities for learning.", "Gathering, evaluating and using technology and resources to complete tasks."],
    a: 3,
    tags: ["Growing Success", "Learning Skills"]
  },
  {
    id: "p35",
    q: "Which category of the achievement chart assesses the ability to make connections within and between various contexts?",
    options: ["Thinking", "Application", "Communication", "Knowledge and Understanding"],
    a: 1,
    tags: ["Curriculum", "Achievement Chart"]
  },
  {
    id: "p36",
    q: "Which of the following best describes Universal Design for Learning (UDL)?",
    options: ["One-size-fits-most approach to teaching", "Strategies that are necessary for some and good for all", "An approach that creates unique lessons for each student", "A grouping strategy that remains consistent throughout a course"],
    a: 1,
    tags: ["Learning for All", "UDL"]
  },
  {
    id: "p37",
    q: "Which of the following is an example of a modification found in an IEP?",
    options: ["Allowing extra time to complete an assessment", "Providing visual supports to clarify verbal instructions", "Decreasing the complexity of grade expectations", "Providing an alternative setting for learning"],
    a: 2,
    tags: ["Special Education", "Modifications"]
  },
  {
    id: "p38",
    q: "Reliability of assessment for learning primarily depends on:",
    options: ["Consistent use of scoring rubrics and common tests.", "Clear learning goals, success criteria, and descriptive feedback.", "Frequent summative assessments and teacher observations.", "The student’s ability to recall information for quizzes."],
    a: 1,
    tags: ["Learning for All", "Assessment for Learning"]
  },
  {
    id: "p39",
    q: "Which is a behavior for the learning skill of 'Self-Regulation'?",
    options: ["Avoiding difficult tasks to reduce stress.", "Completing tasks only when reminded.", "Seeking clarification or assistance when needed.", "Managing emotions in the classroom."],
    a: 3,
    tags: ["Growing Success", "Learning Skills"]
  },
  {
    id: "p40",
    q: "Which mathematical process is supported through models and manipulatives?",
    options: ["Reflecting", "Representing", "Communicating", "Problem solving"],
    a: 1,
    tags: ["Curriculum", "Math Processes"]
  },
  {
    id: "p41",
    q: "According to Growing Success, what is the primary purpose of providing feedback?",
    options: ["To have concrete evidence to share with parents.", "To ensure sufficient data for report cards.", "To satisfy variety requirements in assessment.", "To reduce the gap between a student's current level and learning goals."],
    a: 3,
    tags: ["Growing Success", "Descriptive Feedback"]
  },
  {
    id: "p42",
    q: "How does a project-based approach support both UDL and differentiated instruction?",
    options: ["By creating homogeneous groups of similar ability.", "By reducing teacher involvement.", "By providing templates that help students work independently.", "By facilitating learning through a variety of topics or themes."],
    a: 3,
    tags: ["Learning for All", "UDL", "Differentiated Instruction"]
  },
  {
    id: "p43",
    q: "What practice recognizes that learning is linked to background, language, and social identity?",
    options: ["Critical thinking", "A tiered approach", "Direct instruction", "Culturally responsive and relevant pedagogy (CRRP)"],
    a: 3,
    tags: ["Curriculum", "Diversity", "CRRP"]
  },
  {
    id: "p44",
    q: "What type of assessment helps understand where learners are, where they need to go, and how best to get there?",
    options: ["Assessment for learning", "Large-scale assessment", "Summative assessment", "Assessment of learning"],
    a: 0,
    tags: ["Growing Success", "Assessment for Learning"]
  },
  {
    id: "p45",
    q: "Kothai uses tools, small groups, and math conversations based on student needs. Which principle is best demonstrated?",
    options: ["A curriculum taught in strand order.", "High-impact practices used one at a time.", "All high-impact practices used in every lesson.", "Strategically choosing and combining high-impact instructional practices."],
    a: 3,
    tags: ["Curriculum", "High-Impact Practices"]
  },
  {
    id: "p46",
    q: "According to Learning For All, what is meant by the term 'achievement gaps'?",
    options: ["A disparity in achievement between groups of students", "Measure of success based on ability and study habits", "Gap between actual achievement and potential achievement", "Grouping students by demonstrated achievement"],
    a: 0,
    tags: ["Learning for All", "Equity"]
  }
]
      },
      {
        id: "math-no-calc",
        title: "Math",
        calc: false,
    
questions: [
  { 
    id: "m6", 
    q: "What is the value of this expression? $9.05 + 6.5 + 8.05 + 5 + 1.5$", 
    options: ["30.01", "30.1", "30.11", "31"], 
    a: 1, 
    tags: ["Arithmetic", "Decimals"] 
  },
  { 
    id: "m7", 
    q: "What is the value of: $(3 \\times 10^6) + (2 \\times 10^4) + (5 \\times 10^3) + (4 \\times 10^2) + (7 \\times 10^1) + (1 \\times 10^0)$?", 
    options: ["325,471", "3,025,470", "3,025,471", "30,254,710"], 
    a: 2, 
    tags: ["Number Sense", "Place Value", "Exponents"] 
  },
  { 
    id: "m8", 
    q: "Calculate: $(7 + 2.3) + 61 \\times 10^3$", 
    options: ["7,030", "70,300", "61,009.3", "61,093"], 
    a: 3, 
    tags: ["Arithmetic", "Order of Operations", "Scientific Notation"] 
  },
  { 
    id: "m9", 
    q: "What is the value of: $17.86 \\div 0.19$?", 
    options: ["0.94", "9.4", "94", "940"], 
    a: 2, 
    tags: ["Arithmetic", "Decimals", "Division"] 
  },
  { 
    id: "m10", 
    q: "What is the value of the digit $9$ in the number $3,590,672$?", 
    options: ["$90$", "$9,000$", "$90,000$", "$900,000$"], 
    a: 2, 
    tags: ["Number Sense", "Place Value"] 
  }
]
      },
      {
        id: "math-calc",
        title: "Math",
        calc: true,
        questions: [
          { id: "mc1", q: "If $y = 2.5x + 10$, find $y$ when $x = 14.2$.", options: ["45.5", "35.5", "48.2", "42.5"], a: 0, tags: ["Algebra"] }
        ]
      }
    ]
  },
  "mpt-mock-3": {
    id: "mpt-mock-3",
    title: "Practice Test #3",
	requiresBriefing: true,
	isOfficial:false,
    sections: [
      {
        id: "pedagogy",
        title: "Pedagogy",
        calc: false,
        questions: [
          { id: "p1", q: "Which is a 'Formative' assessment?", options: ["Unit Test", "Final Exam", "Exit Ticket", "EQAO"], a: 2, tags: ["Assessment", "Growing Success"] },
          { id: "p2", q: "What does the 'A' in IRAC stand for?", options: ["Action", "Analysis", "Assessment", "Algebra"], a: 1, tags: ["Legal Framework", "Growing Success"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Math",
        calc: false,
        questions: [
          { id: "m1", q: "Solve: $12 + 15 \\div 3$", options: ["9", "17", "27", "12"], a: 1, tags: ["Arithmetic"] },
          { id: "m2", q: "What is $25\\%$ of 80?", options: ["20", "25", "40", "15"], a: 0, tags: ["Percentages"] }
        ]
      },
      {
        id: "math-calc",
        title: "Math",
        calc: true,
        questions: [
          { id: "mc1", q: "If $y = 2.5x + 10$, find $y$ when $x = 14.2$.", options: ["45.5", "35.5", "48.2", "42.5"], a: 0, tags: ["Algebra"] }
        ]
      }
    ]
  }
  
};