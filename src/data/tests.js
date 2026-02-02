

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
  {
    id: "mc48",
    q: "Which of the following are the dimensions of the rectangle with the smallest perimeter?",
    options: ["$10\\text{ m} \\times 1230\\text{ m}$", "$30\\text{ m} \\times 40\\text{ m}$", "$50\\text{ m} \\times 24\\text{ m}$", "$60\\text{ m} \\times 40\\text{ m}$"],
    a: 1,
    tags: ["Measurement", "Optimization"]
  },
  {
    id: "mc49",
    q: "A $530\\text{ mL}$ bottle of shampoo costs $\\$7.95$. Which bottle has the same cost per milliliter?",
    options: ["$265\\text{ mL}$ for $\\$4.25$", "$600\\text{ mL}$ for $\\$8.65$", "$1160\\text{ mL}$ for $\\$15.90$", "$1280\\text{ mL}$ for $\\$19.20$"],
    a: 3,
    tags: ["Proportional Reasoning", "Unit Rates"]
  },
  {
    id: "mc50",
    q: "Which power is equivalent to $3^{-6} \\times 3^2$?",
    options: ["$3^{-4}$", "$3^{-12}$", "$9^{-4}$", "$9^{-12}$"],
    a: 0,
    tags: ["Number Sense", "Exponents"]
  },
  {
    id: "mc51",
    q: "Onyee is putting up a fence for a garden. She needs two sections of fence that are each $6.2\\text{ metres}$ long and two more sections that are each $3.1\\text{ metres}$ long. If the price of the fence is $\\$4.17\\text{ per metre}$, how much will she spend in total?",
    options: ["$\\$38.78$", "$\\$64.64$", "$\\$77.56$", "$\\$80.15$"],
    a: 2,
    tags: ["Measurement", "Arithmetic"]
  },
  {
    id: "mc52",
    q: "The cost of $12$ cookies is $\\$7.56$. Each cookie costs the same amount. How much do $14$ cookies cost?",
    options: ["$\\$1.00$", "$\\$8.19$", "$\\$8.82$", "$\\$9.56$"],
    a: 2,
    tags: ["Proportional Reasoning", "Unit Rates"]
  },
  {
    id: "mc53",
    q: "Two associates sell an item for $\\$175$. Christopher’s share is $80\\%$ of the selling price. How much does Christopher get from the sale?",
    options: ["$\\$141$", "$\\$351$", "$\\$140$", "$\\$155$"],
    a: 2,
    tags: ["Number Sense", "Percentages"]
  },
  {
    id: "mc54",
    q: "What is the value of the expression $48 + 23 \\times 9 - (65 - 3)$?",
    options: ["$87$", "$193$", "$317$", "$571$"],
    a: 1,
    tags: ["Arithmetic", "Order of Operations"]
  },
  {
    id: "mc55",
    q: "Which of the following are side lengths of a right-angle triangle?",
    options: ["$a = 2\\text{ cm}, b = 3\\text{ cm}, c = 13\\text{ cm}$", "$a = 9\\text{ cm}, b = 12\\text{ cm}, c = 15\\text{ cm}$", "$a = 30\\text{ cm}, b = 60\\text{ cm}, c = 90\\text{ cm}$", "$a = 64\\text{ cm}, b = 225\\text{ cm}, c = 289\\text{ cm}$"],
    a: 1,
    tags: ["Geometry", "Pythagorean Theorem"]
  },
  {
    id: "mc56",
    q: "Which value of $x$ would make this equation true? $\\frac{(a^{12})(a^x)}{a^4} = a^2$",
    options: ["$x = -14$", "$x = -6$", "$x = 6$", "$x = 14$"],
    a: 1,
    tags: ["Algebra", "Exponents"]
  },
  {
    id: "mc57",
    q: "The price, including tax, for a $25\\text{ kg}$ bag of fertilizer is $\\$62.25$. Each hectare of a field requires $67\\text{ kg}$ of fertilizer. How much would a farmer spend on full bags of fertilizer for an $8$-hectare field?",
    options: ["$\\$1,307.25$", "$\\$1,334.64$", "$\\$1,369.50$", "$\\$1,494.00$"],
    a: 2,
    tags: ["Measurement", "Arithmetic"]
  },
  {
    id: "mc58",
    q: "Last year, Diana sold $800$ necklaces. This year, she sells $1080$ necklaces. What is the percent increase in the number of necklaces sold?",
    options: ["$26\\%$", "$35\\%$", "$57\\%$", "$74\\%$"],
    a: 1,
    tags: ["Number Sense", "Percentages"]
  },
  {
    id: "mc59",
    q: "A farmer’s vegetable stand contains only red and green peppers. The ratio of red peppers to green peppers is $2:3$. If there are $30$ peppers in total, how many are green?",
    options: ["$20$", "$18$", "$12$", "$5$"],
    a: 1,
    tags: ["Proportional Reasoning", "Ratios"]
  },
  {
    id: "mc60",
    q: "Which fraction is equivalent to $1.875$?",
    options: ["$\\frac{1875}{100}$", "$\\frac{8}{15}$", "$\\frac{1}{875}$", "$\\frac{15}{8}$"],
    a: 3,
    tags: ["Number Sense", "Fractions"]
  },
  {
    id: "mc61",
    q: "François reads $96$ pages in $2$ hours. There are $216$ pages remaining in the book. If he continues at the same rate, how much more time will it take him to finish?",
    options: ["$135$ minutes", "$195$ minutes", "$270$ minutes", "$390$ minutes"],
    a: 2,
    tags: ["Proportional Reasoning", "Rates"]
  },
  {
    id: "mc62",
    q: "What number is equal to $19$ thousands $+ 7$ tens?",
    options: ["$190070$", "$19070$", "$19000.7$", "$0.000197$"],
    a: 1,
    tags: ["Number Sense", "Place Value"]
  },
  {
    id: "mc63",
    q: "Tickets at a movie theatre are $\\$14.25$ each. Which coordinate pair is not on the graph of Revenue vs. Number of Tickets Sold?",
    options: ["$(0,0)$", "$(13, 185)$", "$(44, 637)$", "$(56, 798)$"],
    a: 1,
    tags: ["Algebra", "Linear Relations"]
  },
  {
    id: "mc64",
    q: "A box contains $125$ red, $201$ blue and $174$ yellow paper clips. If Carla selects one randomly, which value is closest to the probability of selecting yellow?",
    options: ["$0.17$", "$0.35$", "$0.53$", "$0.65$"],
    a: 1,
    tags: ["Data", "Probability"]
  },
  {
    id: "mc65",
    q: "A video game has $15$ levels. Brom has completed $6$ levels. What percentage of the levels has Brom completed?",
    options: ["$6\\%$", "$9\\%$", "$40\\%$", "$60\\%$"],
    a: 2,
    tags: ["Number Sense", "Percentages"]
  },
  {
    id: "mc66",
    q: "What is the value of $\\frac{3}{4} + 6 - \\frac{1}{4}$?",
    options: ["$\\frac{4}{8}$", "$\\frac{10}{8}$", "$\\frac{8}{4}$", "$\\frac{26}{4}$"],
    a: 3,
    tags: ["Arithmetic", "Fractions"]
  },
  {
    id: "mc67",
    q: "Omar is training for a marathon. Over the last three weeks, he has run $35.3\\text{ km}$ twice, $37.8\\text{ km}$ twice and $17.6\\text{ km}$ once. How many total kilometres has he run?",
    options: ["$181.4\\text{ km}$", "$163.8\\text{ km}$", "$94.7\\text{ km}$", "$90.7\\text{ km}$"],
    a: 1,
    tags: ["Arithmetic", "Decimals"]
  },
  {
    id: "mc68",
    q: "A package of seeds costs $\\$1.35$. How much would $42$ packages of seeds cost?",
    options: ["$\\$5.67$", "$\\$56.70$", "$\\$567$", "$\\$5,670$"],
    a: 1,
    tags: ["Arithmetic", "Decimals"]
  },
  {
    id: "mc69",
    q: "A box contains orange and green marbles. The probability of selecting orange is $0.46$. What is the probability of selecting green?",
    options: ["$0.46$", "$0.5$", "$0.54$", "$0.64$"],
    a: 2,
    tags: ["Data", "Probability"]
  },
  {
    id: "mc70",
    q: "Which set of numbers is ordered from least to greatest?",
    options: ["$1/4, 2/3, 3/8, 4/5, 7/16$", "$2/3, 1/4, 4/5, 3/8, 7/16$", "$1/4, 3/8, 7/16, 2/3, 4/5$", "$1/4, 3/8, 2/3, 4/5, 7/16$"],
    a: 2,
    tags: ["Number Sense", "Fractions"]
  },
  {
    id: "mc71",
    q: "A case of $12$ bottles of water costs $\\$6.48$. What is the cost per bottle?",
    options: ["$\\$0.50$", "$\\$0.54$", "$\\$1.85$", "$\\$5.52$"],
    a: 1,
    tags: ["Proportional Reasoning", "Unit Rates"]
  },
  {
    id: "mc72",
    q: "What is the median of $[6.09, 6.15, 6.28, 6.86, 7.04, 7.18, 7.18, 7.45]$?",
    options: ["$6.78$", "$6.86$", "$6.95$", "$7.18$"],
    a: 2,
    tags: ["Data", "Median"]
  },
  {
    id: "mc73",
    q: "Amale converts $1000$ euros to CAD ($1\\text{ CAD} = 0.6169\\text{ EUR}$). Kumar converts $1100$ SGD to CAD ($1\\text{ CAD} = 0.9288\\text{ SGD}$). Which is true?",
    options: ["Amale has $\\$436.68$ more than Kumar.", "Amale has $\\$599.33$ more than Kumar.", "Kumar has $\\$404.78$ more than Amale.", "Kumar has $\\$567.42$ more than Amale."],
    a: 0,
    tags: ["Proportional Reasoning", "Conversions"]
  },
  {
    id: "mc74",
    q: "What is the solution to this equation? $\\frac{t}{3} - 4 = 14$",
    options: ["$26$", "$30$", "$46$", "$54$"],
    a: 3,
    tags: ["Algebra", "Equations"]
  },
  {
    id: "mc75",
    q: "Max drives $60\\text{ km}$ in $50\\text{ minutes}$. He has $90\\text{ km}$ left. At the same rate, how much longer will it take him?",
    options: ["$75$ minutes", "$80$ minutes", "$108$ minutes", "$125$ minutes"],
    a: 0,
    tags: ["Proportional Reasoning", "Rates"]
  },
  {
    id: "mc76",
    q: "What is the solution to this equation? $3(7 - x) = 27$",
    options: ["$-2$", "$-6$", "$-17$", "$-74$"],
    a: 0,
    tags: ["Algebra", "Equations"]
  },
  {
    id: "mc77",
    q: "A loyalty program provides $2500$ points per purchase, plus a bonus of $7500$ points. How many purchases result in $70,000$ points?",
    options: ["$7$", "$9$", "$25$", "$31$"],
    a: 2,
    tags: ["Algebra", "Linear Relations"]
  },
  {
    id: "mc78",
    q: "What number is represented by this expanded form? $(7 \\times 10^6) + (3 \\times 10^4) + (6 \\times 10^3) + (2 \\times 10) + (9 \\times 1)$?",
    options: ["$736,291$", "$7,036,029$", "$7,030,629$", "$7,003,629$"],
    a: 1,
    tags: ["Number Sense", "Place Value"]
  }
]
      }
    ]
  },
  
  "mpt-mock-3": {
    id: "mpt-mock-3",
    title: "Practice Test #3",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pedagogy",
        calc: false,
        questions: [
          { id: "p15", q: "According to Growing Success, which type of assessment is used to provide feedback to students and teachers to adjust ongoing instruction?", options: ["Assessment of learning", "Assessment for learning", "Assessment as learning", "Summative assessment"], a: 1, tags: ["Growing Success", "Assessment"] },
          { id: "p16", q: "Which document emphasizes the 'tiered approach' to prevention and intervention to support all learners?", options: ["Growing Success", "Learning for All", "The Ontario Math Curriculum", "The Education Act"], a: 1, tags: ["Learning for All", "Special Education"] },
          { id: "p17", q: "What are the three levels of 'universal design for learning' according to Learning for All?", options: ["Accommodation, Modification, Alternative", "Differentiated instruction, Tiered approach, Professional learning communities", "Representation, Expression, Engagement", "Diagnostic, Formative, Summative"], a: 2, tags: ["Learning for All", "UDL"] },
          { id: "p18", q: "In the Ontario Mathematics curriculum, which 'mathematical process' involves making connections between mathematical concepts and real-world contexts?", options: ["Problem Solving", "Reasoning and Proving", "Connecting", "Communicating"], a: 2, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p19", q: "According to Growing Success, what is the primary purpose of 'assessment as learning'?", options: ["To assign a grade", "To monitor student progress", "To develop students' capacity for self-assessment and metacognition", "To provide data for school board reports"], a: 2, tags: ["Growing Success", "Metacognition"] },
          { id: "p20", q: "Which of the following is an 'accommodation' rather than a 'modification'?", options: ["Changing the grade level of the curriculum expectations", "Reducing the number of expectations a student must meet", "Providing extra time or a quiet space for testing", "Using a different set of achievement criteria for evaluation"], a: 2, tags: ["Growing Success", "Accommodations"] },
          { id: "p21", q: "According to Learning for All, what is a 'Class Profile' primarily used for?", options: ["Recording attendance and behavior issues", "Sorting students into permanent ability groups", "Planning instruction that addresses the diverse needs of the whole class", "Summarizing final grades for the principal"], a: 2, tags: ["Learning for All", "Class Profile"] },
          { id: "p22", q: "The 2020 Ontario Math Curriculum introduces 'Social-Emotional Learning (SEL) Skills.' Where are these skills integrated?", options: ["As a separate stand-alone unit", "Across all strands of the curriculum", "Only in the Number Sense strand", "Only for students with IEPs"], a: 1, tags: ["Math Curriculum Context", "SEL"] },
          { id: "p23", q: "Under Growing Success, 'Learning Skills and Work Habits' should be reported...", options: ["Separately from academic achievement", "As part of the percentage grade", "Only if the student is failing", "Only at the end of the year"], a: 0, tags: ["Growing Success", "Reporting"] },
          { id: "p24", q: "What is the purpose of 'Differentiated Instruction' as described in Learning for All?", options: ["Teaching the same lesson to everyone at once", "Providing different learning experiences based on student readiness and interests", "Grouping students by gender", "Eliminating all assessments"], a: 1, tags: ["Learning for All", "DI"] },
          { id: "p25", q: "Which mathematical process involves 'justifying a solution' and 'making conjectures'?", options: ["Reflecting", "Selecting Tools and Computational Strategies", "Reasoning and Proving", "Representing"], a: 2, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p26", q: "According to Growing Success, what defines a 'criterion-referenced' assessment?", options: ["Comparing a student's performance to other students", "Evaluating performance against fixed, pre-determined standards", "Grading based on a 'curve'", "Only assessing effort and participation"], a: 1, tags: ["Growing Success", "Evaluation"] },
          { id: "p27", q: "Learning for All identifies 'Professional Learning Communities' (PLCs) as a way to...", options: ["Discipline teachers", "Improve student achievement through collaborative teacher inquiry", "Collect money for school supplies", "Organize school assemblies"], a: 1, tags: ["Learning for All", "PLC"] },
          { id: "p28", q: "The Ontario Math Curriculum's vision includes helping students develop a 'positive identity as a math learner.' This is closely linked to:", options: ["Memorizing all math facts", "Competitive math contests", "Social-Emotional Learning and Equity", "Standardized testing performance"], a: 2, tags: ["Math Curriculum Context", "Curriculum Vision"] },
          { id: "p29", q: "What does Growing Success say about 'late and missed assignments' in Grades 7 to 12?", options: ["They must always result in a mark of zero", "Teachers should use professional judgment and consider individual circumstances", "They can only be accepted if a parent provides a doctor's note", "They have no impact on the final grade"], a: 1, tags: ["Growing Success", "Reporting"] },
          { id: "p30", q: "Which approach in Learning for All uses assessment data to decide which students need more intensive support?", options: ["The Tiered Approach", "Universal Design", "The Achievement Chart", "Diagnostic Testing"], a: 0, tags: ["Learning for All", "Tiered Approach"] },
          { id: "p31", q: "According to the Math Curriculum Context, what is 'high-impact instructional practice'?", options: ["Using a single textbook for the whole year", "Evidence-based strategies like direct instruction, problem-solving, and math conversations", "Lecturing for the entire period", "Assigning 50 problems for homework daily"], a: 1, tags: ["Math Curriculum Context", "Instruction"] },
          { id: "p32", q: "Growing Success states that 'Evaluation' is the process of:", options: ["Gathering information to support learning", "Judging the quality of student learning based on established criteria and assigning a value", "Predicting future success in university", "Ranking students from highest to lowest"], a: 1, tags: ["Growing Success", "Evaluation"] },
          { id: "p33", q: "How should English Language Learners (ELLs) be assessed according to Growing Success?", options: ["Using the same criteria as native speakers immediately", "With modifications to expectations if they are in the early stages of English acquisition", "They should be exempt from all assessments", "By translating every test into their first language"], a: 1, tags: ["Growing Success", "ELL"] },
          { id: "p34", q: "What is 'triangulation' in the context of gathering assessment evidence?", options: ["Using three different teachers to grade one test", "Collecting evidence from observations, conversations, and student products", "Ensuring all math questions involve triangles", "Assessing students exactly three times per unit"], a: 1, tags: ["Growing Success", "Triangulation"] },
          { id: "p35", q: "In the 2021 Grade 9 Math curriculum, 'coding' is included to help students:", options: ["Become computer scientists only", "Develop computational thinking and deepen their understanding of math concepts", "Replace the need for learning basic arithmetic", "Increase their screen time"], a: 1, tags: ["Math Curriculum Context", "Coding"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Math",
        calc: false,
        questions: [
          { id: "mnc1", q: "Evaluate: $15 - (4 + 2)^2 \\div 4$", options: ["6", "12", "6.5", "5"], a: 0, tags: ["Number Sense", "Order of Operations"] },
          { id: "mnc2", q: "Which of the following is equal to $0.075$?", options: ["$3/40$", "$75/100$", "$7/50$", "$3/4$"], a: 0, tags: ["Number Sense", "Fractions/Decimals"] },
          { id: "mnc3", q: "A rectangular garden has a length of $12.5\\text{ m}$ and a width of $4\\text{ m}$. What is its area?", options: ["$48\\text{ m}^2$", "$50\\text{ m}^2$", "$62.5\\text{ m}^2$", "$500\\text{ m}^2$"], a: 1, tags: ["Measurement", "Area"] },
          { id: "mnc4", q: "What is the value of $2^5 - \\sqrt{81}$?", options: ["1", "11", "23", "25"], a: 2, tags: ["Number Sense", "Exponents"] },
          { id: "mnc5", q: "Order the following from least to greatest: $-0.6, -1/2, -0.75, 0$.", options: ["$-0.75, -0.6, -1/2, 0$", "$0, -1/2, -0.6, -0.75$", "$-1/2, -0.6, -0.75, 0$", "$-0.75, -1/2, -0.6, 0$"], a: 0, tags: ["Number Sense", "Integers"] }
        ]
      },
      {
        id: "math-calc",
        title: "Math",
        calc: true,
        questions: [
          { id: "mc79", q: "A store offers a $15\\%$ discount on a jacket originally priced at $\\$120$. After the discount, a $13\\%$ sales tax is applied. What is the final price?", options: ["$\\$102.00$", "$\\$115.26$", "$\\$113.10$", "$\\$122.40$"], a: 1, tags: ["Financial Literacy", "Percentages"] },
          { id: "mc80", q: "The ratio of blue marbles to red marbles in a bag is $4:7$. If there are $36$ blue marbles, how many red marbles are there?", options: ["28", "49", "63", "84"], a: 2, tags: ["Proportional Reasoning", "Ratios"] },
          { id: "mc81", q: "Solve for $x$: $4(x - 3) = 2x + 10$.", options: ["1", "4", "7", "11"], a: 3, tags: ["Algebra", "Equations"] },
          { id: "mc82", q: "A cylindrical tank has a radius of $3\\text{ m}$ and a height of $5\\text{ m}$. What is its volume? (Use $\\pi \\approx 3.14$)", options: ["$47.1\\text{ m}^3$", "$94.2\\text{ m}^3$", "$141.3\\text{ m}^3$", "$282.6\\text{ m}^3$"], a: 2, tags: ["Measurement", "Volume"] },
          { id: "mc83", q: "A car travels $240\\text{ km}$ in $3$ hours. At this same constant rate, how far will it travel in $7$ hours?", options: ["$480\\text{ km}$", "$560\\text{ km}$", "$600\\text{ km}$", "$720\\text{ km}$"], a: 1, tags: ["Proportional Reasoning", "Rates"] },
          { id: "mc84", q: "Determine the mean of the data set: $[12, 15, 18, 22, 22, 31]$.", options: ["20", "22", "18.5", "21"], a: 0, tags: ["Data", "Mean"] },
          { id: "mc85", q: "Which expression is equivalent to $(x^4 \\cdot x^3) \\div x^2$?", options: ["$x^5$", "$x^9$", "$x^6$", "$x^{10}$"], a: 0, tags: ["Number Sense", "Exponents"] },
          { id: "mc86", q: "A investment of $\\$5000$ earns $3\\%$ simple interest per year. How much interest is earned after $4$ years?", options: ["$\\$150$", "$\\$450$", "$\\$600$", "$\\$6000$"], a: 2, tags: ["Financial Literacy", "Interest"] },
          { id: "mc87", q: "The hypotenuse of a right triangle is $13\\text{ cm}$ and one leg is $5\\text{ cm}$. What is the length of the other leg?", options: ["$8\\text{ cm}$", "$10\\text{ cm}$", "$12\\text{ cm}$", "$18\\text{ cm}$"], a: 2, tags: ["Geometry", "Pythagorean Theorem"] },
          { id: "mc88", q: "Represent the linear relation $y = -2x + 5$ numerically. Which set of $(x, y)$ pairs is correct?", options: ["$(0,5), (1,3), (2,1)$", "$(0,5), (1,7), (2,9)$", "$(1,3), (2,5), (3,7)$", "$(0,-2), (1,3), (2,8)$"], a: 0, tags: ["Algebra", "Linear Relations"] },
          { id: "mc89", q: "A person earns $\\$18.50$ per hour. If they work $37.5$ hours a week, what is their gross weekly pay?", options: ["$\\$693.75$", "$\\$712.50$", "$\\$685.00$", "$\\$740.00$"], a: 0, tags: ["Financial Literacy", "Rates"] },
          { id: "mc90", q: "What is the probability of rolling a sum of $7$ with two standard six-sided dice?", options: ["$1/6$", "$1/12$", "$5/36$", "$1/7$"], a: 0, tags: ["Data", "Probability"] },
          { id: "mc91", q: "Convert $4500\\text{ millilitres}$ to litres.", options: ["$0.45\\text{ L}$", "$4.5\\text{ L}$", "$45\\text{ L}$", "$450\\text{ L}$"], a: 1, tags: ["Measurement", "Conversions"] },
          { id: "mc92", q: "A recipe requires $2/3$ cup of sugar for every $2$ cups of flour. How much sugar is needed for $5$ cups of flour?", options: ["$1.5\\text{ cups}$", "$1.67\\text{ cups}$", "$1\\text{ cup}$", "$1.33\\text{ cups}$"], a: 1, tags: ["Proportional Reasoning", "Ratios"] },
          { id: "mc93", q: "Which of the following represents a non-linear relationship?", options: ["$y = 3x - 1$", "$y = x^2 + 4$", "$x + y = 10$", "$y = 0.5x$"], a: 1, tags: ["Algebra", "Linear vs Non-linear"] },
          { id: "mc94", q: "Evaluate $3^0 + 3^{-1}$ as a fraction.", options: ["$1/3$", "$4/3$", "$0$", "$1$"], a: 1, tags: ["Number Sense", "Exponents"] },
          { id: "mc95", q: "A rectangular prism has dimensions $4\\text{ cm} \\times 5\\text{ cm} \\times 10\\text{ cm}$. What is its surface area?", options: ["$200\\text{ cm}^2$", "$110\\text{ cm}^2$", "$220\\text{ cm}^2$", "$180\\text{ cm}^2$"], a: 2, tags: ["Measurement", "Surface Area"] },
          { id: "mc96", q: "A salesperson receives a base salary of $\\$400$ per week plus $5\\%$ commission on sales. If they sell $\\$8000$ worth of goods, what is their total pay?", options: ["$\\$400$", "$\\$800$", "$\\$1200$", "$\\$4400$"], a: 1, tags: ["Financial Literacy", "Algebraic Modeling"] },
          { id: "mc97", q: "Which value of $x$ makes the proportion $x/15 = 8/12$ true?", options: ["6", "10", "11", "12"], a: 1, tags: ["Proportional Reasoning", "Proportions"] },
          { id: "mc98", q: "What is the value of $\\sqrt{0.64}$?", options: ["0.08", "0.8", "8", "0.32"], a: 1, tags: ["Number Sense", "Roots"] },
          { id: "mc99", q: "A budget allocates $30\\%$ for rent, $20\\%$ for food, and $15\\%$ for transportation. If the total budget is $\\$3200$, how much is left for other expenses?", options: ["$\\$1120$", "$\\$2080$", "$\\$1000$", "$\\$1200$"], a: 0, tags: ["Financial Literacy", "Budgeting"] },
          { id: "mc100", q: "Find the median of: $14, 12, 19, 22, 14, 16$.", options: ["14", "15", "16", "17"], a: 1, tags: ["Data", "Median"] },
          { id: "mc101", q: "A map scale is $1:50,000$. If two cities are $8\\text{ cm}$ apart on the map, what is the actual distance in kilometres?", options: ["$4\\text{ km}$", "$40\\text{ km}$", "$400\\text{ km}$", "$0.4\\text{ km}$"], a: 0, tags: ["Proportional Reasoning", "Scale"] },
          { id: "mc102", q: "Solve the linear system graphically: $y = x + 1$ and $y = -x + 5$. What is the point of intersection?", options: ["$(1,2)$", "$(2,3)$", "$(3,2)$", "$(4,1)$"], a: 1, tags: ["Algebra", "Linear Systems"] },
          { id: "mc103", q: "What is $45\\%$ of $\\$150.00$?", options: ["$\\$67.50$", "$\\$60.00$", "$\\$75.00$", "$\\$55.50$"], a: 0, tags: ["Financial Literacy", "Percentages"] },
          { id: "mc104", q: "The area of a circle is $78.5\\text{ cm}^2$. What is its approximate radius? (Use $\\pi \\approx 3.14$)", options: ["$5\\text{ cm}$", "$10\\text{ cm}$", "$25\\text{ cm}$", "$12.5\\text{ cm}$"], a: 0, tags: ["Measurement", "Area of Circles"] },
          { id: "mc105", q: "A worker's pay is increased from $\\$20/\\text{hr}$ to $\\$23/\\text{hr}$. What is the percent increase?", options: ["$3\\%$", "$15\\%$", "$13\\%$", "$20\\%$"], a: 1, tags: ["Financial Literacy", "Percent Change"] },
          { id: "mc106", q: "Which fraction is between $1/2$ and $3/4$?", options: ["$2/5$", "$5/8$", "$7/8$", "$1/3$"], a: 1, tags: ["Number Sense", "Fractions"] },
          { id: "mc107", q: "A rental car costs $\\$40$ per day plus $\\$0.15$ per kilometre. If the car is driven $200\\text{ km}$ in one day, what is the total cost?", options: ["$\\$70$", "$\\$60$", "$\\$30$", "$\\$55$"], a: 0, tags: ["Financial Literacy", "Algebraic Modeling"] },
          { id: "mc108", q: "Simplify: $5(2x - 3) - 3(x + 4)$.", options: ["$7x - 27$", "$7x - 3$", "$10x - 15$", "$13x - 3$"], a: 0, tags: ["Algebra", "Polynomials"] },
          { id: "mc109", q: "What is the mode of the data set: $[5, 8, 5, 12, 10, 8, 5]$?", options: ["5", "8", "10", "12"], a: 0, tags: ["Data", "Mode"] },
          { id: "mc110", q: "A pair of shoes is on sale for $\\$64$, which is $80\\%$ of the original price. What was the original price?", options: ["$\\$80$", "$\\$75$", "$\\$100$", "$\\$120$"], a: 0, tags: ["Financial Literacy", "Percentages"] },
          { id: "mc111", q: "Find the perimeter of a semi-circle with a radius of $10\\text{ cm}$. (Use $\\pi \\approx 3.14$)", options: ["$31.4\\text{ cm}$", "$51.4\\text{ cm}$", "$41.4\\text{ cm}$", "$62.8\\text{ cm}$"], a: 1, tags: ["Measurement", "Perimeter"] },
          { id: "mc112", q: "If $x = -3$, what is the value of $2x^2 - 5x + 1$?", options: ["2", "34", "4", "22"], a: 1, tags: ["Algebra", "Substitution"] },
          { id: "mc113", q: "A bag has $3$ red, $5$ green, and $2$ blue balls. What is the probability of NOT picking a green ball?", options: ["$1/2$", "$1/5$", "$3/10$", "$7/10$"], a: 0, tags: ["Data", "Probability"] },
          { id: "mc114", q: "Which unit rate is the lowest price per unit?", options: ["$3$ for $\\$10.50$", "$5$ for $\\$17.00$", "$2$ for $\\$7.20$", "$10$ for $\\$35.00$"], a: 1, tags: ["Proportional Reasoning", "Unit Rates"] },
          { id: "mc115", q: "Express $0.000042$ in scientific notation.", options: ["$4.2 \\times 10^5$", "$4.2 \\times 10^{-5}$", "$42 \\times 10^{-6}$", "$0.42 \\times 10^{-4}$"], a: 1, tags: ["Number Sense", "Scientific Notation"] },
          { id: "mc116", q: "A savings account pays $2\\%$ interest compounded annually. If $\\$1000$ is invested, what is the balance after $2$ years?", options: ["$\\$1040.00$", "$\\$1040.40$", "$\\$1020.00$", "$\\$1200.00$"], a: 1, tags: ["Financial Literacy", "Compound Interest"] },
          { id: "mc117", q: "The angles in a triangle are in the ratio $2:3:5$. What is the measure of the largest angle?", options: ["$36^\\circ$", "$54^\\circ$", "$90^\\circ$", "$100^\\circ$"], a: 2, tags: ["Geometry", "Ratios"] },
          { id: "mc118", q: "Solve: $x/4 - 1 = 5$.", options: ["16", "24", "20", "25"], a: 1, tags: ["Algebra", "Equations"] },
          { id: "mc119", q: "A cube has a surface area of $150\\text{ cm}^2$. What is the length of one side?", options: ["$5\\text{ cm}$", "$25\\text{ cm}$", "$6\\text{ cm}$", "$10\\text{ cm}$"], a: 0, tags: ["Measurement", "Geometry"] },
          { id: "mc120", q: "What is the result of increasing $\\$80$ by $15\\%$, then decreasing that result by $15\\%$?", options: ["$\\$80.00$", "$\\$78.20$", "$\\$81.80$", "$\\$75.00$"], a: 1, tags: ["Financial Literacy", "Percentages"] },
          { id: "mc121", q: "Which represents a rate of $60\\text{ km/h}$?", options: ["$1\\text{ km/min}$", "$600\\text{ m/s}$", "$10\\text{ km/min}$", "$360\\text{ km/day}$"], a: 0, tags: ["Proportional Reasoning", "Rates"] },
          { id: "mc122", q: "Simplify: $(2^3)^2 \\cdot 2^{-4}$.", options: ["$2^2$", "$2^1$", "$2^6$", "$2^0$"], a: 0, tags: ["Number Sense", "Exponents"] },
          { id: "mc123", q: "A field is a trapezoid with parallel sides of $20\\text{ m}$ and $30\\text{ m}$, and a height of $15\\text{ m}$. What is its area?", options: ["$375\\text{ m}^2$", "$750\\text{ m}^2$", "$450\\text{ m}^2$", "$300\\text{ m}^2$"], a: 0, tags: ["Measurement", "Area"] }
        ]
      }
    ]
  },
  "mpt-mock-4": {
    id: "mpt-mock-4",
    title: "Practice Test #4",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pedagogy",
        calc: false,
        questions: [
          { id: "p36", q: "According to Growing Success, which of the following must be the primary focus of assessment and evaluation?", options: ["The student's effort and participation", "The curriculum expectations", "The student's performance relative to peers", "The completion of all homework assignments"], a: 1, tags: ["Growing Success", "Expectations"] },
          { id: "p37", q: "What is the primary goal of Universal Design for Learning (UDL)?", options: ["To provide one-on-one tutoring for all students", "To create a single, standardized lesson plan for the school board", "To provide sufficient flexibility in the classroom to meet the needs of all students", "To separate students based on their intelligence scores"], a: 2, tags: ["Learning for All", "UDL"] },
          { id: "p38", q: "In the context of the Ontario Math Curriculum, which process involves 'making a plan' and 'carrying out the plan'?", options: ["Problem Solving", "Selecting Tools", "Reflecting", "Representing"], a: 0, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p39", q: "Which type of assessment provides students with a 'clear picture of their progress' and identifies specific next steps?", options: ["Summative", "Diagnostic", "Assessment for learning", "Peer assessment"], a: 2, tags: ["Growing Success", "Assessment"] },
          { id: "p40", q: "According to Learning for All, a 'Tier 3' intervention is characterized by:", options: ["Whole-class instruction", "Small-group, targeted support", "Intensive, individual support", "Parent-teacher interviews"], a: 2, tags: ["Learning for All", "Tiered Approach"] },
          { id: "p41", q: "Which document provides the specific 'Levels of Achievement' used for reporting on the provincial report card?", options: ["The Education Act", "Growing Success", "Learning for All", "The School Board Handbook"], a: 1, tags: ["Growing Success", "Achievement Chart"] },
          { id: "p42", q: "When a student with an IEP receives 'Modifications', what specifically is being changed?", options: ["The classroom environment", "The timing of the test", "The grade-level expectations or number of expectations", "The color of the paper used for the exam"], a: 2, tags: ["Growing Success", "Special Education"] },
          { id: "p43", q: "The 2020 Math Curriculum Context describes 'mathematical modeling' as:", options: ["Building physical models with blocks", "The process of describing a real-world situation using mathematics", "A separate unit taught at the end of Grade 9", "Using a calculator for every problem"], a: 1, tags: ["Math Curriculum Context", "Modeling"] },
          { id: "p44", q: "Under Growing Success, 'Professional Judgment' is defined as judgment that is:", options: ["Based on the teacher's personal preference", "Informed by professional knowledge and ethical standards", "Strictly mathematical calculation of grades", "Dictated by the school principal"], a: 1, tags: ["Growing Success", "Professional Judgment"] },
          { id: "p45", q: "According to Learning for All, which of the following is a component of a 'Student Profile'?", options: ["The student's home address", "The student's strengths, needs, and interests", "The student's final grade in Grade 3", "The student's medical history only"], a: 1, tags: ["Learning for All", "Student Profile"] },
          { id: "p46", q: "Which mathematical process emphasizes using 'concrete materials' and 'mental images' to understand concepts?", options: ["Representing", "Reasoning and Proving", "Communicating", "Connecting"], a: 0, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p47", q: "According to Growing Success, teachers should ensure that evaluation is:", options: ["Secretive until the report card is issued", "Based on the highest mark achieved during the term", "Transparent and shared with students and parents", "Based on a bell curve"], a: 2, tags: ["Growing Success", "Transparency"] },
          { id: "p48", q: "Learning for All states that 'Scaffolding' involves:", options: ["Building a physical structure in the classroom", "Providing temporary support to help a student reach a higher level of understanding", "Assigning more difficult work when a student fails", "Grouping students by age only"], a: 1, tags: ["Learning for All", "Scaffolding"] },
          { id: "p49", q: "The Grade 9 Math curriculum (2021) is 'de-streamed.' This means:", options: ["Math is no longer mandatory", "Students are separated into Academic and Applied streams", "All students follow the same course of study to promote equity", "The course is only taught online"], a: 2, tags: ["Math Curriculum Context", "Equity"] },
          { id: "p50", q: "In Growing Success, what does the 'R' on a report card represent for Grades 1–8?", options: ["The student is Ready for the next grade", "Achievement falls below Level 1; additional support is required", "The student was Rare in their participation", "Repeat the unit"], a: 1, tags: ["Growing Success", "Reporting"] },
          { id: "p51", q: "According to Learning for All, 'Differentiated Instruction' includes varying the:", options: ["Content, Process, Product, or Learning Environment", "Teacher salary and benefits", "School start times", "Size of the playground"], a: 0, tags: ["Learning for All", "DI"] },
          { id: "p52", q: "Which strand in the new curriculum specifically includes 'Financial Literacy'?", options: ["Strand A", "Strand B", "Strand C", "Strand F"], a: 3, tags: ["Math Curriculum Context", "Strands"] },
          { id: "p53", q: "Growing Success states that feedback should be:", options: ["Only given at the end of a unit", "Evaluative only (e.g., 'Good job')", "Descriptive and timely", "Limited to a numerical score"], a: 2, tags: ["Growing Success", "Feedback"] },
          { id: "p54", q: "According to Learning for All, 'Actionable Feedback' is feedback that:", options: ["Is too difficult to understand", "Can be used by the student to improve their work", "Is only for the parents", "Includes a disciplinary action"], a: 1, tags: ["Learning for All", "Feedback"] },
          { id: "p55", q: "The 'Mathematical Processes' are intended to be:", options: ["Taught as a separate unit in September", "Integrated throughout all strands of the curriculum", "Assessed only during EQAO", "Ignored if time runs out"], a: 1, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p56", q: "According to Growing Success, 'Assessment AS Learning' focuses on:", options: ["The final exam", "Student self-regulation and metacognition", "Teacher-led lectures", "Standardized provincial testing"], a: 1, tags: ["Growing Success", "Metacognition"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Math",
        calc: false,
        questions: [
          { id: "mnc6", q: "Calculate $12.5 \\times 4 + 7$.", options: ["57", "50", "63", "54.5"], a: 0, tags: ["Number Sense"] },
          { id: "mnc7", q: "What is the square root of $144$ minus $2^3$?", options: ["4", "116", "136", "6"], a: 0, tags: ["Number Sense"] },
          { id: "mnc8", q: "Which is the largest value?", options: ["$2/5$", "$0.38$", "$1/3$", "$0.41$"], a: 3, tags: ["Number Sense"] },
          { id: "mnc9", q: "If a shirt costs $\\$20$ and is $25\\%$ off, what is the discount?", options: ["$\\$5$", "$\\$15$", "$\\$4$", "$\\$10$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mnc10", q: "Solve: $3x = 12 + 6$.", options: ["2", "6", "18", "4"], a: 1, tags: ["Algebra"] }
        ]
      },
      {
        id: "math-calc",
        title: "Math",
        calc: true,
        questions: [
          { id: "mc124", q: "A bank account has $\\$1,200$. It earns $1.5\\%$ simple interest annually. How much is in the account after $3$ years?", options: ["$\\$1,254$", "$\\$1,218$", "$\\$1,245$", "$\\$1,300$"], a: 0, tags: ["Financial Literacy", "Interest"] },
          { id: "mc125", q: "A map scale is $1\\text{ cm} : 20\\text{ km}$. If two towns are $4.5\\text{ cm}$ apart on the map, what is the actual distance?", options: ["$80\\text{ km}$", "$90\\text{ km}$", "$100\\text{ km}$", "$45\\text{ km}$"], a: 1, tags: ["Proportional Reasoning"] },
          { id: "mc126", q: "Solve for $y$: $5y - 10 = 2y + 8$.", options: ["$y=6$", "$y=2$", "$y=18$", "$y=9$"], a: 0, tags: ["Algebra"] },
          { id: "mc127", q: "Find the surface area of a cube with a side length of $4\\text{ cm}$.", options: ["$64\\text{ cm}^2$", "$96\\text{ cm}^2$", "$16\\text{ cm}^2$", "$48\\text{ cm}^2$"], a: 1, tags: ["Measurement"] },
          { id: "mc128", q: "A car uses $8\\text{ L}$ of fuel per $100\\text{ km}$. How much fuel is needed for a $350\\text{ km}$ trip?", options: ["$24\\text{ L}$", "$28\\text{ L}$", "$32\\text{ L}$", "$35\\text{ L}$"], a: 1, tags: ["Proportional Reasoning"] },
          { id: "mc129", q: "What is the median of this data set: $[2, 5, 8, 12, 15, 20]$?", options: ["8", "10", "12", "11"], a: 1, tags: ["Data"] },
          { id: "mc130", q: "A laptop costs $\\$800$. Sales tax is $13\\%$. What is the total cost?", options: ["$\\$904$", "$\\$813$", "$\\$880$", "$\\$913$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc131", q: "Simplify: $(a^5)^2 \\div a^3$.", options: ["$a^4$", "$a^7$", "$a^{10}$", "$a^{13}$"], a: 1, tags: ["Number Sense"] },
          { id: "mc132", q: "The ratio of boys to girls in a class is $3:2$. If there are $30$ students total, how many are girls?", options: ["10", "12", "15", "18"], a: 1, tags: ["Proportional Reasoning"] },
          { id: "mc133", q: "What is the area of a circle with a diameter of $10\\text{ cm}$? (Use $\\pi \\approx 3.14$)", options: ["$314\\text{ cm}^2$", "$78.5\\text{ cm}^2$", "$15.7\\text{ cm}^2$", "$100\\text{ cm}^2$"], a: 1, tags: ["Measurement"] },
          { id: "mc134", q: "A worker makes $\\$22$ per hour and gets time-and-a-half for overtime (over $40$ hours). If they work $44$ hours, what is their gross pay?", options: ["$\\$968$", "$\\$1,012$", "$\\$880$", "$\\$1,100$"], a: 1, tags: ["Financial Literacy"] },
          { id: "mc135", q: "Which coordinate point satisfies $y = 3x - 4$?", options: ["$(0, 4)$", "$(2, 2)$", "$(1, -1)$", "$(3, 6)$"], a: 1, tags: ["Algebra"] },
          { id: "mc136", q: "A bag contains $4$ red, $3$ blue, and $5$ green marbles. What is the probability of picking a blue marble?", options: ["$1/3$", "$1/4$", "$3/12$", "$1/2$"], a: 2, tags: ["Data"] },
          { id: "mc137", q: "Convert $0.05\\text{ km}$ to metres.", options: ["$5\\text{ m}$", "$50\\text{ m}$", "$500\\text{ m}$", "$0.5\\text{ m}$"], a: 1, tags: ["Measurement"] },
          { id: "mc138", q: "Which fraction is equivalent to $125\\%$?", options: ["$1/4$", "$5/4$", "$2/5$", "$8/10$"], a: 1, tags: ["Number Sense"] },
          { id: "mc139", q: "An investment of $\\$2,000$ doubles in $10$ years. What is the total amount?", options: ["$\\$2,200$", "$\\$4,000$", "$\\$3,000$", "$\\$20,000$"], a: 1, tags: ["Financial Literacy"] },
          { id: "mc140", q: "Find the volume of a cylinder with $r=2\\text{ m}$ and $h=10\\text{ m}$. (Use $\\pi \\approx 3.14$)", options: ["$62.8\\text{ m}^3$", "$125.6\\text{ m}^3$", "$40\\text{ m}^3$", "$314\\text{ m}^3$"], a: 1, tags: ["Measurement"] },
          { id: "mc141", q: "A recipe uses $3$ eggs for $12$ pancakes. How many eggs for $20$ pancakes?", options: ["4", "5", "6", "7"], a: 1, tags: ["Proportional Reasoning"] },
          { id: "mc142", q: "Evaluate: $2 + 3 \\times (5 - 1)^2$.", options: ["80", "50", "20", "26"], a: 1, tags: ["Number Sense"] },
          { id: "mc143", q: "A credit card charges $18\\%$ annual interest. What is the monthly interest rate?", options: ["$1.5\\%$", "$1.8\\%$", "$0.18\\%$", "$15\\%$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc144", q: "Which relationship is linear?", options: ["$y = x^2$", "$y = 4/x$", "$y = 2x + 1$", "$y = \sqrt{x}$"], a: 2, tags: ["Algebra"] },
          { id: "mc145", q: "The mean of $5$ numbers is $10$. If four of the numbers are $8, 12, 7, 13$, what is the fifth?", options: ["10", "15", "5", "20"], a: 0, tags: ["Data"] },
          { id: "mc146", q: "A rectangle has a perimeter of $40\\text{ cm}$. If the length is $12\\text{ cm}$, what is the width?", options: ["$28\\text{ cm}$", "$8\\text{ cm}$", "$14\\text{ cm}$", "$10\\text{ cm}$"], a: 1, tags: ["Measurement"] },
          { id: "mc147", q: "Simplify: $3(x - 4) + 2x$.", options: ["$5x - 4$", "$5x - 12$", "$x - 12$", "$-x - 12$"], a: 1, tags: ["Algebra"] },
          { id: "mc148", q: "What is $0.4\\%$ of $\\$5,000$?", options: ["$\\$20$", "$\\$200$", "$\\$2$", "$\\$2,000$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc149", q: "The probability of an event is $0.05$. What is the probability it will NOT happen?", options: ["$0.95$", "$0.5$", "$0.995$", "$0.05$"], a: 0, tags: ["Data"] },
          { id: "mc150", q: "Find the hypotenuse of a right triangle with legs $6\\text{ cm}$ and $8\\text{ cm}$.", options: ["$14\\text{ cm}$", "$10\\text{ cm}$", "$12\\text{ cm}$", "$100\\text{ cm}$"], a: 1, tags: ["Measurement"] },
          { id: "mc151", q: "A pair of jeans is $\\$60$. It is on sale for $30\\%$ off. What is the sale price?", options: ["$\\$18$", "$\\$42$", "$\\$30$", "$\\$50$"], a: 1, tags: ["Financial Literacy"] },
          { id: "mc152", q: "Solve for $x$: $x/2 + 5 = 11$.", options: ["3", "12", "6", "8"], a: 1, tags: ["Algebra"] },
          { id: "mc153", q: "What is the mode of $[1, 2, 2, 3, 4, 4, 4, 5]$?", options: ["4", "2", "3", "5"], a: 0, tags: ["Data"] },
          { id: "mc154", q: "A sphere has a radius of $3\\text{ cm}$. What is its volume? (Use $V = 4/3 \\pi r^3$ and $\\pi \\approx 3.14$)", options: ["$113.04\\text{ cm}^3$", "$37.68\\text{ cm}^3$", "$28.26\\text{ cm}^3$", "$100\\text{ cm}^3$"], a: 0, tags: ["Measurement"] },
          { id: "mc155", q: "A person saves $\\$50$ a month for $2$ years. How much have they saved?", options: ["$\\$100$", "$\\$600$", "$\\$1,200$", "$\\$5,000$"], a: 2, tags: ["Financial Literacy"] },
          { id: "mc156", q: "Which is the better buy?", options: ["$500\\text{ g}$ for $\\$4.00$", "$1\\text{ kg}$ for $\\$7.50$", "$200\\text{ g}$ for $\\$2.00$", "$2\\text{ kg}$ for $\\$16.00$"], a: 1, tags: ["Proportional Reasoning"] },
          { id: "mc157", q: "Find the slope of the line passing through $(0,0)$ and $(2,6)$.", options: ["3", "1/3", "6", "2"], a: 0, tags: ["Algebra"] },
          { id: "mc158", q: "A coin is tossed $3$ times. What is the probability of getting $3$ heads?", options: ["$1/2$", "$1/6$", "$1/8$", "$1/4$"], a: 2, tags: ["Data"] },
          { id: "mc159", q: "What is $\\$15.00$ as a percentage of $\\$60.00$?", options: ["$20\\%$", "$25\\%$", "$30\\%$", "$15\\%$"], a: 1, tags: ["Number Sense"] },
          { id: "mc160", q: "A triangle has a base of $10\\text{ cm}$ and an area of $50\\text{ cm}^2$. What is its height?", options: ["$5\\text{ cm}$", "$10\\text{ cm}$", "$20\\text{ cm}$", "$50\\text{ cm}$"], a: 1, tags: ["Measurement"] },
          { id: "mc161", q: "Solve for $x$: $2(x + 1) = 10$.", options: ["4", "5", "9", "3"], a: 0, tags: ["Algebra"] },
          { id: "mc162", q: "What is the cost of $5$ items if $2$ items cost $\\$1.50$?", options: ["$\\$3.75$", "$\\$3.00$", "$\\$4.00$", "$\\$7.50$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc163", q: "An employee's annual salary is $\\$48,000$. What is their monthly gross pay?", options: ["$\\$4,000$", "$\\$2,000$", "$\\$4,800$", "$\\$1,000$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc164", q: "The range of a data set is $20$. If the lowest number is $5$, what is the highest?", options: ["15", "25", "20", "10"], a: 1, tags: ["Data"] },
          { id: "mc165", q: "Convert $2.5\\text{ L}$ to millilitres.", options: ["$25\\text{ mL}$", "$250\\text{ mL}$", "$2,500\\text{ mL}$", "$25,000\\text{ mL}$"], a: 2, tags: ["Measurement"] },
          { id: "mc166", q: "What is $150\\%$ of $80$?", options: ["120", "100", "150", "180"], a: 0, tags: ["Number Sense"] },
          { id: "mc167", q: "A cell phone plan is $\\$45$ plus $\\$0.10$ per text. If $100$ texts are sent, what is the cost?", options: ["$\\$45.10$", "$\\$55$", "$\\$145$", "$\\$46$"], a: 1, tags: ["Financial Literacy"] },
          { id: "mc168", q: "Find the area of a trapezoid: parallel sides $8$ and $12$, height $5$.", options: ["$50$", "$100$", "$20$", "$40$"], a: 0, tags: ["Measurement"] }
        ]
      }
    ]
  }, 
  "mpt-mock-5": {
    id: "mpt-mock-5",
    title: "Practice Test #5",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pedagogy",
        calc: false,
        questions: [
          { id: "p57", q: "According to Growing Success, which of the following is an example of 'Assessment AS Learning'?", options: ["A final exam", "Student self-reflection on a writing task", "A teacher-led unit test", "A provincial standardized test"], a: 1, tags: ["Growing Success", "Metacognition"] },
          { id: "p58", q: "Learning for All identifies 'Universal Design for Learning' (UDL) as an approach that:", options: ["Targets only students with IEPs", "Is necessary for some, but good for all", "Requires identical instruction for everyone", "Eliminates the need for assessment"], a: 1, tags: ["Learning for All", "UDL"] },
          { id: "p59", q: "In the 2020 Ontario Math Curriculum, which strand focus involves 'financial management' and 'consumer awareness'?", options: ["Strand B: Number", "Strand C: Algebra", "Strand F: Financial Literacy", "Strand D: Data"], a: 2, tags: ["Math Curriculum Context", "Strands"] },
          { id: "p60", q: "According to Growing Success, descriptive feedback should focus on:", options: ["The student's personality", "The learning goal and success criteria", "How the student compares to their classmates", "Previous behavioral issues"], a: 1, tags: ["Growing Success", "Feedback"] },
          { id: "p61", q: "Which 'tier' in the tiered approach to instruction involves the most intensive, individualized support?", options: ["Tier 1", "Tier 2", "Tier 3", "Tier 4"], a: 2, tags: ["Learning for All", "Tiered Approach"] },
          { id: "p62", q: "According to the Math Curriculum Context, 'Social-Emotional Learning (SEL) Skills' help students:", options: ["Avoid math altogether", "Develop a positive identity as a math learner and persevere through challenges", "Only work in groups", "Memorize formulas more quickly"], a: 1, tags: ["Math Curriculum Context", "SEL"] },
          { id: "p63", q: "Growing Success defines 'Evaluation' as:", options: ["The process of gathering information", "The process of judging the quality of student work and assigning a grade", "Daily observation of student behavior", "Conversations with parents"], a: 1, tags: ["Growing Success", "Evaluation"] },
          { id: "p64", q: "Learning for All defines 'Differentiated Instruction' as an approach that is:", options: ["Reactive", "Proactive", "Standardized", "Exclusive"], a: 1, tags: ["Learning for All", "DI"] },
          { id: "p65", q: "Which mathematical process involves 'explaining' and 'justifying' mathematical ideas?", options: ["Communicating", "Selecting Tools", "Reflecting", "Problem Solving"], a: 0, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p66", q: "According to Growing Success, the Achievement Chart is used to:", options: ["Rank students from 1 to 30", "Provide a common framework for consistent assessment across the province", "Calculate teacher bonuses", "Design the school's sports program"], a: 1, tags: ["Growing Success", "Achievement Chart"] },
          { id: "p67", q: "What is a 'Class Profile' in the context of Learning for All?", options: ["A list of students' home phone numbers", "A tool used to plan instruction based on the strengths and needs of all students in the class", "A display of students' best artwork", "A report sent to the school board about attendance"], a: 1, tags: ["Learning for All", "Class Profile"] },
          { id: "p68", q: "In the Ontario Math curriculum, 'Mathematical Modeling' is most closely associated with:", options: ["Purely abstract calculations", "Real-life situations and applications", "Drawing perfect geometric shapes", "Using only mental math"], a: 1, tags: ["Math Curriculum Context", "Modeling"] },
          { id: "p69", q: "According to Growing Success, 'Assessment FOR Learning' occurs:", options: ["Only at the end of the semester", "During instruction to provide feedback and adjust teaching", "Before the student enters the school", "Exclusively on report card night"], a: 1, tags: ["Growing Success", "Assessment"] },
          { id: "p70", q: "Learning for All identifies 'Professional Learning Communities' (PLCs) as being focused on:", options: ["Administrative paperwork", "Collaborative teacher inquiry to improve student learning", "Staff social events", "Organizing field trips"], a: 1, tags: ["Learning for All", "PLC"] },
          { id: "p71", q: "According to the Grade 9 Math Curriculum (2021), students should use 'coding' to:", options: ["Build video games only", "Automate mathematical processes and explore math concepts", "Replace the need for learning algebra", "Increase the amount of time spent on screens"], a: 1, tags: ["Math Curriculum Context", "Coding"] },
          { id: "p72", q: "Growing Success states that 'Assessment OF Learning' is:", options: ["Formative", "Summative", "Metacognitive", "Diagnostic"], a: 1, tags: ["Growing Success", "Assessment"] },
          { id: "p73", q: "Learning for All emphasizes that 'Assessment for Learning' is used to:", options: ["Determine final grades", "Design and adjust instruction to meet student needs", "Report to the Ministry of Education", "Punish students for being late"], a: 1, tags: ["Learning for All", "Assessment"] },
          { id: "p74", q: "Which of the following is a 'Mathematical Process' in the Ontario curriculum?", options: ["Memorizing", "Reasoning and Proving", "Lecturing", "Coloring"], a: 1, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p75", q: "According to Growing Success, an 'Accommodation' does NOT:", options: ["Alter the provincial curriculum expectations", "Change the way a student accesses learning", "Provide extra time for a task", "Allow the use of a digital device"], a: 0, tags: ["Growing Success", "Special Education"] },
          { id: "p76", q: "Learning for All describes 'Scaffolding' as a strategy that:", options: ["Removes all challenges for the student", "Provides temporary support that is gradually removed", "Is only for the highest-achieving students", "Involves building actual scaffolds in the gym"], a: 1, tags: ["Learning for All", "Scaffolding"] },
          { id: "p77", q: "The primary purpose of reporting 'Learning Skills and Work Habits' in Growing Success is to:", options: ["Incorporate them into the subject percentage grade", "Provide separate information on a student's development of important life skills", "Decide which students can join the band", "Measure the student's IQ"], a: 1, tags: ["Growing Success", "Reporting"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Math",
        calc: false,
        questions: [
          { id: "mnc11", q: "What is $1/4 + 1/2$?", options: ["$2/6$", "$3/4$", "$2/4$", "$1/6$"], a: 1, tags: ["Number Sense"] },
          { id: "mnc12", q: "Calculate $100 \\div (2 + 3) \\times 4$.", options: ["8", "80", "10", "20"], a: 1, tags: ["Number Sense"] },
          { id: "mnc13", q: "If $2x = 50$, what is $x$?", options: ["25", "100", "48", "52"], a: 0, tags: ["Algebra"] },
          { id: "mnc14", q: "What is $10\\%$ of $\\$45.00$?", options: ["$\\$0.45$", "$\\$4.50$", "$\\$45.00$", "$\\$1.00$"], a: 1, tags: ["Financial Literacy"] },
          { id: "mnc15", q: "Round $12.678$ to the nearest tenth.", options: ["12.6", "12.7", "13", "12.68"], a: 1, tags: ["Number Sense"] }
        ]
      },
      {
        id: "math-calc",
        title: "Math",
        calc: true,
        questions: [
          { id: "mc169", q: "A worker earns $\\$25$ per hour. If they work $40$ hours, what is their gross pay?", options: ["$\\$1,000$", "$\\$800$", "$\\$1,200$", "$\\$2,500$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc170", q: "A car travels $150\\text{ km}$ in $2$ hours. What is its average speed?", options: ["$60\\text{ km/h}$", "$75\\text{ km/h}$", "$100\\text{ km/h}$", "$150\\text{ km/h}$"], a: 1, tags: ["Proportional Reasoning"] },
          { id: "mc171", q: "Solve for $x$: $x/4 = 12$.", options: ["3", "48", "16", "8"], a: 1, tags: ["Algebra"] },
          { id: "mc172", q: "Find the area of a rectangle with length $8\\text{ cm}$ and width $12\\text{ cm}$.", options: ["$20\\text{ cm}^2$", "$96\\text{ cm}^2$", "$40\\text{ cm}^2$", "$100\\text{ cm}^2$"], a: 1, tags: ["Measurement"] },
          { id: "mc173", q: "What is $15\\%$ of $\\$80.00$?", options: ["$\\$12$", "$\\$15$", "$\\$10$", "$\\$20$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc174", q: "Simplify: $2(x + 3) - 4$.", options: ["$2x + 2$", "$2x + 6$", "$2x - 1$", "$2x + 10$"], a: 0, tags: ["Algebra"] },
          { id: "mc175", q: "A bag has $5$ red and $15$ blue balls. What is the ratio of red to total balls?", options: ["$1:3$", "$1:4$", "$3:1$", "$4:1$"], a: 1, tags: ["Proportional Reasoning"] },
          { id: "mc176", q: "What is the perimeter of a square with an area of $64\\text{ cm}^2$?", options: ["$16\\text{ cm}$", "$32\\text{ cm}$", "$64\\text{ cm}$", "$8\\text{ cm}$"], a: 1, tags: ["Measurement"] },
          { id: "mc177", q: "Convert $1.5\\text{ kg}$ to grams.", options: ["$150\\text{ g}$", "$1,500\\text{ g}$", "$15,000\\text{ g}$", "$15\\text{ g}$"], a: 1, tags: ["Measurement"] },
          { id: "mc178", q: "Calculate the mean of $[10, 20, 30, 40, 50]$.", options: ["25", "30", "35", "40"], a: 1, tags: ["Data"] },
          { id: "mc179", q: "A store has a $20\\%$ off sale. A shirt costs $\\$40.00$. What is the sale price?", options: ["$\\$8.00$", "$\\$32.00$", "$\\$48.00$", "$\\$20.00$"], a: 1, tags: ["Financial Literacy"] },
          { id: "mc180", q: "Solve for $y$: $2y + 5 = 15$.", options: ["5", "10", "15", "20"], a: 0, tags: ["Algebra"] },
          { id: "mc181", q: "What is the volume of a cube with side $3\\text{ m}$?", options: ["$9\\text{ m}^3$", "$27\\text{ m}^3$", "$6\\text{ m}^3$", "$12\\text{ m}^3$"], a: 1, tags: ["Measurement"] },
          { id: "mc182", q: "A person earns $\\$3,000$ a month and spends $\\$1,200$ on rent. What percentage is rent?", options: ["$30\\%$", "$40\\%$", "$50\\%$", "$60\\%$"], a: 1, tags: ["Financial Literacy"] },
          { id: "mc183", q: "If $y = 3x - 2$ and $x = 4$, what is $y$?", options: ["10", "14", "12", "6"], a: 0, tags: ["Algebra"] },
          { id: "mc184", q: "A recipe uses $2$ cups of flour for $10$ cookies. How many cups for $25$ cookies?", options: ["4", "5", "6", "10"], a: 1, tags: ["Proportional Reasoning"] },
          { id: "mc185", q: "What is the median of $[1, 3, 5, 7, 9]$?", options: ["3", "5", "7", "4"], a: 1, tags: ["Data"] },
          { id: "mc186", q: "Find the circumference of a circle with $r=7\\text{ cm}$. (Use $\\pi \\approx 22/7$)", options: ["$22\\text{ cm}$", "$44\\text{ cm}$", "$88\\text{ cm}$", "$154\\text{ cm}$"], a: 1, tags: ["Measurement"] },
          { id: "mc187", q: "A person invests $\\$1,000$ at $5\\%$ annual simple interest. What is the interest after $2$ years?", options: ["$\\$50$", "$\\$100$", "$\\$150$", "$\\$200$"], a: 1, tags: ["Financial Literacy"] },
          { id: "mc188", q: "Which fraction is the smallest?", options: ["$1/2$", "$1/3$", "$1/4$", "$1/5$"], a: 3, tags: ["Number Sense"] },
          { id: "mc189", q: "Solve: $2(x - 1) = 8$.", options: ["3", "4", "5", "6"], a: 2, tags: ["Algebra"] },
          { id: "mc190", q: "A triangle has angles $40^\\circ$ and $60^\\circ$. what is the third angle?", options: ["$80^\\circ$", "$100^\\circ$", "$120^\\circ$", "$180^\\circ$"], a: 0, tags: ["Measurement"] },
          { id: "mc191", q: "What is the mode of $[5, 5, 10, 10, 10, 15]$?", options: ["5", "10", "15", "10.5"], a: 1, tags: ["Data"] },
          { id: "mc192", q: "A person saves $20\\%$ of their $\\$400$ paycheck. How much is saved?", options: ["$\\$20$", "$\\$40$", "$\\$80$", "$\\$100$"], a: 2, tags: ["Financial Literacy"] },
          { id: "mc193", q: "If $x/5 + 2 = 10$, what is $x$?", options: ["40", "50", "30", "60"], a: 0, tags: ["Algebra"] },
          { id: "mc194", q: "What is the area of a triangle with base $12\\text{ cm}$ and height $5\\text{ cm}$?", options: ["$60\\text{ cm}^2$", "$30\\text{ cm}^2$", "$15\\text{ cm}^2$", "$20\\text{ cm}^2$"], a: 1, tags: ["Measurement"] },
          { id: "mc195", q: "Find $20\\%$ of $150$.", options: ["20", "30", "40", "50"], a: 1, tags: ["Number Sense"] },
          { id: "mc196", q: "A car travels $300\\text{ km}$ on $30\\text{ L}$ of gas. What is the rate in km/L?", options: ["$10\\text{ km/L}$", "$100\\text{ km/L}$", "$1\\text{ km/L}$", "$3\\text{ km/L}$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc197", q: "What is the surface area of a rectangular prism with sides $2, 3, 4$?", options: ["$24$", "$52$", "$26$", "$48$"], a: 1, tags: ["Measurement"] },
          { id: "mc198", q: "An item costs $\\$50.00$ plus $13\\%$ tax. What is the total?", options: ["$\\$56.50$", "$\\$51.30$", "$\\$63.00$", "$\\$50.13$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc199", q: "Solve for $x$: $3x + 4 = 19$.", options: ["5", "15", "6", "4"], a: 0, tags: ["Algebra"] },
          { id: "mc200", q: "A map scale is $1:1,000$. What does $5\\text{ cm}$ on the map represent?", options: ["$50\\text{ m}$", "$5\\text{ m}$", "$500\\text{ m}$", "$5\\text{ km}$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc201", q: "What is the square root of $100$?", options: ["10", "20", "50", "5"], a: 0, tags: ["Number Sense"] },
          { id: "mc202", q: "A person earns $\\$15/\\text{hr}$ and works $20$ hours a week. What is their annual pay ($52$ weeks)?", options: ["$\\$15,600$", "$\\$300$", "$\\$1,560$", "$\\$3,000$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc203", q: "Find the volume of a sphere with $r=3$. (Use $\\pi \\approx 3.14$)", options: ["$113.04$", "$37.68$", "$28.26$", "$100$"], a: 0, tags: ["Measurement"] },
          { id: "mc204", q: "If $y = -2x + 10$ and $y=0$, what is $x$?", options: ["5", "-5", "10", "0"], a: 0, tags: ["Algebra"] },
          { id: "mc205", q: "A bag has $2$ red and $3$ blue marbles. Probability of red?", options: ["$2/3$", "$2/5$", "$3/5$", "$1/2$"], a: 1, tags: ["Data"] },
          { id: "mc206", q: "Convert $5,000\\text{ mL}$ to litres.", options: ["$0.5\\text{ L}$", "$5\\text{ L}$", "$50\\text{ L}$", "$500\\text{ L}$"], a: 1, tags: ["Measurement"] },
          { id: "mc207", q: "What is $200\\%$ of $40$?", options: ["40", "80", "120", "160"], a: 1, tags: ["Number Sense"] },
          { id: "mc208", q: "An investment of $\\$500$ earns $2\\%$ interest. What is the amount after $1$ year?", options: ["$\\$510$", "$\\$502$", "$\\$520$", "$\\$600$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc209", q: "Find the hypotenuse: legs $3$ and $4$.", options: ["5", "7", "12", "25"], a: 0, tags: ["Measurement"] },
          { id: "mc210", q: "Solve $x - 7 = 10$.", options: ["3", "17", "70", "0"], a: 1, tags: ["Algebra"] },
          { id: "mc211", q: "What is the range of $[1, 5, 10, 15, 20]$?", options: ["19", "20", "15", "10"], a: 0, tags: ["Data"] },
          { id: "mc212", q: "A recipe uses $1$ cup sugar for $4$ cups water. How much sugar for $10$ cups water?", options: ["$2.5$", "$2$", "$4$", "$10$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc213", q: "What is the area of a circle with $r=10$? (Use $\\pi \\approx 3.14$)", options: ["$31.4$", "$314$", "$100$", "$62.8$"], a: 1, tags: ["Measurement"] }
        ]
      }
    ]
  },
  "mpt-mock-6": {
    id: "mpt-mock-6",
    title: "Practice Test #6",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pedagogy",
        calc: false,
        questions: [
          { id: "p78", q: "According to Growing Success, which of the following is NOT a purpose of assessment?", options: ["To support student learning", "To evaluate student achievement", "To rank students in order of merit", "To provide information for reporting"], a: 2, tags: ["Growing Success", "Assessment"] },
          { id: "p79", q: "Learning for All describes 'Universal Design for Learning' as a way to:", options: ["Eliminate the need for differentiated instruction", "Provide accessibility for all students from the outset", "Only help students with physical disabilities", "Lower the standards for student achievement"], a: 1, tags: ["Learning for All", "UDL"] },
          { id: "p80", q: "In the 2020 Ontario Math curriculum, Strand A focuses on:", options: ["Number Sense", "Algebra", "Social-Emotional Learning (SEL) Skills and the Mathematical Processes", "Financial Literacy"], a: 2, tags: ["Math Curriculum Context", "Strands"] },
          { id: "p81", q: "According to Growing Success, 'Assessment AS Learning' involves:", options: ["Teachers giving final grades", "Students monitoring their own learning and using feedback for adjustment", "Diagnostic testing at the start of the year", "Provincial standardized tests"], a: 1, tags: ["Growing Success", "Metacognition"] },
          { id: "p82", q: "Which document defines the 'tiered approach' to support students with special education needs?", options: ["Growing Success", "Learning for All", "The Ontario Math Curriculum", "The Education Act"], a: 1, tags: ["Learning for All", "Tiered Approach"] },
          { id: "p83", q: "The 'Mathematical Processes' in the Ontario curriculum include which of the following?", options: ["Memorizing and Repeating", "Reasoning and Proving", "Lecturing and Notetaking", "Competing and Winning"], a: 1, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p84", q: "Growing Success states that 'Evaluation' should be based on:", options: ["Effort and attitude", "Evidence of student achievement of the curriculum expectations", "Homework completion only", "Attendance records"], a: 1, tags: ["Growing Success", "Evaluation"] },
          { id: "p85", q: "According to Learning for All, a 'Student Profile' is:", options: ["A static document created once per year", "A dynamic document that evolves as the student learns", "A disciplinary record", "A medical file"], a: 1, tags: ["Learning for All", "Student Profile"] },
          { id: "p86", q: "In the 2021 Grade 9 Math curriculum, which concept is emphasized to prepare students for the digital world?", options: ["Abacus use", "Coding and computational thinking", "Calligraphy", "Typewriting"], a: 1, tags: ["Math Curriculum Context", "Coding"] },
          { id: "p87", q: "According to Growing Success, descriptive feedback should be:", options: ["Focused only on errors", "Generalized (e.g., 'Do better next time')", "Specific and related to the learning goals", "Only given in writing"], a: 2, tags: ["Growing Success", "Feedback"] },
          { id: "p88", q: "Learning for All identifies 'Differentiated Instruction' as focusing on:", options: ["Lowering the difficulty of work for everyone", "Providing multiple ways for students to learn and show what they know", "Grouping students by gender", "Eliminating all standardized testing"], a: 1, tags: ["Learning for All", "DI"] },
          { id: "p89", q: "According to the Math Curriculum Context, 'Mathematical Modeling' is a:", options: ["Linear process", "Cyclical and iterative process", "One-step calculation", "Method used only in university"], a: 1, tags: ["Math Curriculum Context", "Modeling"] },
          { id: "p90", q: "Growing Success states that 'Assessment FOR Learning' provides information to:", options: ["Teachers and students to improve learning", "The media", "Real estate agents", "Sports coaches"], a: 0, tags: ["Growing Success", "Assessment"] },
          { id: "p91", q: "Learning for All defines 'Professional Learning Communities' (PLCs) as being:", options: ["Competitive", "Collaborative", "Secretive", "Optional for all teachers"], a: 1, tags: ["Learning for All", "PLC"] },
          { id: "p92", q: "The Achievement Chart in Growing Success includes which four categories?", options: ["Effort, Participation, Behavior, Attendance", "Knowledge and Understanding, Thinking, Communication, Application", "Reading, Writing, Math, Science", "Speed, Accuracy, Neatness, Compliance"], a: 1, tags: ["Growing Success", "Achievement Chart"] },
          { id: "p93", q: "According to Learning for All, 'Universal Design for Learning' (UDL) is based on:", options: ["Brain research and neuroscience", "A coin toss", "The latest political trends", "Student height and weight"], a: 0, tags: ["Learning for All", "UDL"] },
          { id: "p94", q: "In the Ontario Math curriculum, the 'Mathematical Process' of 'Connecting' involves:", options: ["Using a calculator", "Linking mathematical ideas to real-world contexts and other subjects", "Calling a friend for help", "Connecting dots on a graph only"], a: 1, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p95", q: "Growing Success states that 'Assessment OF Learning' results in:", options: ["No grade", "A summary of student achievement at a specific point in time", "Ongoing feedback for improvement", "A diagnostic report"], a: 1, tags: ["Growing Success", "Assessment"] },
          { id: "p96", q: "Learning for All defines 'Scaffolding' as providing:", options: ["Permanent assistance", "Temporary support to help a student move toward independent learning", "Extra homework", "A physical ladder"], a: 1, tags: ["Learning for All", "Scaffolding"] },
          { id: "p97", q: "According to the Grade 9 Math curriculum, 'Financial Literacy' includes understanding:", options: ["How to become a millionaire overnight", "Appreciation and depreciation of assets", "How to print money", "Only simple addition"], a: 1, tags: ["Math Curriculum Context", "Financial Literacy"] },
          { id: "p98", q: "Growing Success emphasizes that evaluations must be:", options: ["Biased toward certain students", "Fair, transparent, and equitable", "Kept from parents", "Based on only one test"], a: 1, tags: ["Growing Success", "Ethics"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Math",
        calc: false,
        questions: [
          { id: "mnc16", q: "What is $3/4 \\times 1/2$?", options: ["$3/8$", "$4/6$", "$2/4$", "$3/6$"], a: 0, tags: ["Number Sense"] },
          { id: "mnc17", q: "Calculate $50 - (2 + 3)^2$.", options: ["45", "25", "0", "15"], a: 1, tags: ["Number Sense"] },
          { id: "mnc18", q: "If $x/3 = 10$, what is $x$?", options: ["30", "3.33", "13", "7"], a: 0, tags: ["Algebra"] },
          { id: "mnc19", q: "What is $25\\%$ of $\\$200.00$?", options: ["$\\$25$", "$\\$50$", "$\\$100$", "$\\$75$"], a: 1, tags: ["Financial Literacy"] },
          { id: "mnc20", q: "Which is the smallest value?", options: ["$-5$", "$-10$", "$0$", "$2$"], a: 1, tags: ["Number Sense"] }
        ]
      },
      {
        id: "math-calc",
        title: "Math",
        calc: true,
        questions: [
          { id: "mc214", q: "A worker earns $\\$30$ per hour. If they work $35$ hours, what is their gross pay?", options: ["$\\$1,050$", "$\\$900$", "$\\$1,200$", "$\\$1,500$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc215", q: "A car travels $200\\text{ km}$ in $2.5$ hours. What is its speed?", options: ["$80\\text{ km/h}$", "$100\\text{ km/h}$", "$75\\text{ km/h}$", "$50\\text{ km/h}$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc216", q: "Solve for $x$: $3x - 5 = 10$.", options: ["5", "15", "3", "2"], a: 0, tags: ["Algebra"] },
          { id: "mc217", q: "Find the area of a square with perimeter $20\\text{ cm}$.", options: ["$25\\text{ cm}^2$", "$20\\text{ cm}^2$", "$100\\text{ cm}^2$", "$5\\text{ cm}^2$"], a: 0, tags: ["Measurement"] },
          { id: "mc218", q: "What is $12\\%$ of $\\$150.00$?", options: ["$\\$18$", "$\\$12$", "$\\$15$", "$\\$20$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc219", q: "Simplify: $4(x - 2) + 5$.", options: ["$4x - 3$", "$4x + 3$", "$4x - 8$", "$4x + 13$"], a: 0, tags: ["Algebra"] },
          { id: "mc220", q: "A bag has $10$ red and $40$ blue marbles. Ratio of red to blue?", options: ["$1:4$", "$1:5$", "$4:1$", "$5:1$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc221", q: "What is the volume of a rectangular prism with sides $2, 5, 10$?", options: ["$100$", "$17$", "$50$", "$70$"], a: 0, tags: ["Measurement"] },
          { id: "mc222", q: "Convert $2.5\\text{ km}$ to metres.", options: ["$2,500\\text{ m}$", "$250\\text{ m}$", "$25\\text{ m}$", "$25,000\\text{ m}$"], a: 0, tags: ["Measurement"] },
          { id: "mc223", q: "Calculate the median of $[10, 15, 20, 25, 30, 35]$.", options: ["22.5", "20", "25", "15"], a: 0, tags: ["Data"] },
          { id: "mc224", q: "A store has a $30\\%$ off sale. An item costs $\\$100.00$. What is the sale price?", options: ["$\\$70.00$", "$\\$30.00$", "$\\$130.00$", "$\\$100.00$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc225", q: "Solve for $y$: $y/2 + 4 = 10$.", options: ["12", "6", "14", "8"], a: 0, tags: ["Algebra"] },
          { id: "mc226", q: "What is the area of a circle with $d=20$? (Use $\\pi \\approx 3.14$)", options: ["$314$", "$1,256$", "$62.8$", "$100$"], a: 0, tags: ["Measurement"] },
          { id: "mc227", q: "A person earns $\\$4,000$ a month and saves $\\$800$. What percentage is saved?", options: ["$20\\%$", "$25\\%$", "$10\\%$", "$30\\%$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc228", q: "If $y = x^2 + 1$ and $x = 3$, what is $y$?", options: ["10", "7", "9", "4"], a: 0, tags: ["Algebra"] },
          { id: "mc229", q: "A recipe uses $1$ cup sugar for $5$ cups water. How much sugar for $12.5$ cups water?", options: ["$2.5$", "$2$", "$5$", "$1$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc230", q: "What is the mean of $[1, 2, 3, 4, 5]$?", options: ["3", "2.5", "4", "5"], a: 0, tags: ["Data"] },
          { id: "mc231", q: "Find the circumference of a circle with $d=14$. (Use $\\pi \\approx 22/7$)", options: ["$44$", "$88$", "$154$", "$22$"], a: 0, tags: ["Measurement"] },
          { id: "mc232", q: "A person invests $\\$2,000$ at $3\\%$ annual simple interest. Interest after $5$ years?", options: ["$\\$300$", "$\\$60$", "$\\$100$", "$\\$1,000$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc233", q: "Which fraction is the largest?", options: ["$3/4$", "$1/2$", "$2/3$", "$5/8$"], a: 0, tags: ["Number Sense"] },
          { id: "mc234", q: "Solve: $5(x + 2) = 25$.", options: ["3", "5", "7", "10"], a: 0, tags: ["Algebra"] },
          { id: "mc235", q: "A triangle has angles $90^\\circ$ and $45^\\circ$. What is the third angle?", options: ["$45^\\circ$", "$90^\\circ$", "$60^\\circ$", "$180^\\circ$"], a: 0, tags: ["Measurement"] },
          { id: "mc236", q: "What is the mode of $[1, 1, 2, 2, 2, 3]$?", options: ["2", "1", "3", "1.5"], a: 0, tags: ["Data"] },
          { id: "mc237", q: "A person saves $15\\%$ of their $\\$600$ paycheck. How much is saved?", options: ["$\\$90$", "$\\$15$", "$\\$60$", "$\\$100$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc238", q: "If $2x + 10 = 20$, what is $x$?", options: ["5", "10", "15", "20"], a: 0, tags: ["Algebra"] },
          { id: "mc239", q: "What is the area of a triangle with base $10$ and height $4$?", options: ["$20$", "$40$", "$14$", "$10$"], a: 0, tags: ["Measurement"] },
          { id: "mc240", q: "Find $10\\%$ of $250$.", options: ["25", "10", "50", "100"], a: 0, tags: ["Number Sense"] },
          { id: "mc241", q: "A car travels $400\\text{ km}$ on $40\\text{ L}$ of gas. Rate in km/L?", options: ["$10$", "$100$", "$1$", "$40$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc242", q: "Surface area of a cube with side $2$?", options: ["$24$", "$8$", "$12$", "$16$"], a: 0, tags: ["Measurement"] },
          { id: "mc243", q: "An item costs $\\$100.00$ plus $13\\%$ tax. Total?", options: ["$\\$113.00$", "$\\$100.13$", "$\\$130.00$", "$\\$100$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc244", q: "Solve for $x$: $4x - 2 = 10$.", options: ["3", "4", "2", "8"], a: 0, tags: ["Algebra"] },
          { id: "mc245", q: "Map scale $1:5,000$. What does $2\\text{ cm}$ represent?", options: ["$100\\text{ m}$", "$10\\text{ m}$", "$1,000\\text{ m}$", "$10\\text{ km}$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc246", q: "Square root of $64$?", options: ["8", "16", "32", "4"], a: 0, tags: ["Number Sense"] },
          { id: "mc247", q: "A person earns $\\$20/\\text{hr}$ and works $40$ hours a week. Annual pay ($52$ weeks)?", options: ["$\\$41,600$", "$\\$800$", "$\\$4,160$", "$\\$50,000$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc248", q: "Volume of a sphere with $r=2$. (Use $\\pi \\approx 3.14$)", options: ["$33.49$", "$12.56$", "$25.12$", "$100$"], a: 0, tags: ["Measurement"] },
          { id: "mc249", q: "If $y = 3x - 5$ and $y=10$, what is $x$?", options: ["5", "15", "3", "0"], a: 0, tags: ["Algebra"] },
          { id: "mc250", q: "Bag has $1$ red and $4$ blue marbles. Probability of red?", options: ["$1/5$", "$1/4$", "$4/5$", "$1/2$"], a: 0, tags: ["Data"] },
          { id: "mc251", q: "Convert $10,000\\text{ mL}$ to litres.", options: ["$10\\text{ L}$", "$1\\text{ L}$", "$100\\text{ L}$", "$1,000\\text{ L}$"], a: 0, tags: ["Measurement"] },
          { id: "mc252", q: "What is $300\\%$ of $20$?", options: ["60", "20", "40", "100"], a: 0, tags: ["Number Sense"] },
          { id: "mc253", q: "Investment of $\\$1,000$ earns $4\\%$ interest. Amount after $1$ year?", options: ["$\\$1,040$", "$\\$1,004$", "$\\$1,044$", "$\\$1,400$"], a: 0, tags: ["Financial Literacy"] },
          { id: "mc254", q: "Hypotenuse: legs $5$ and $12$.", options: ["13", "17", "60", "25"], a: 0, tags: ["Measurement"] },
          { id: "mc255", q: "Solve $x + 5 = 15$.", options: ["10", "20", "5", "0"], a: 0, tags: ["Algebra"] },
          { id: "mc256", q: "Range of $[5, 10, 15, 20, 25]$?", options: ["20", "25", "15", "10"], a: 0, tags: ["Data"] },
          { id: "mc257", q: "Recipe uses $2$ cups sugar for $6$ cups water. How much sugar for $15$ cups water?", options: ["$5$", "$3$", "$4$", "$10$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc258", q: "Area of a circle with $r=5$? (Use $\\pi \\approx 3.14$)", options: ["$78.5$", "$31.4$", "$25$", "$100$"], a: 0, tags: ["Measurement"] }
        ]
      }
    ]
  },
  "mpt-mock-7": {
    id: "mpt-mock-7",
    title: "Practice Test #7 (Hard)",
    requiresBriefing: true,
    isOfficial: false,
    sections: [
      {
        id: "pedagogy",
        title: "Pedagogy",
        calc: false,
        questions: [
          { id: "p99", q: "According to Growing Success, when a teacher uses 'Professional Judgment' to determine a final grade, they should: ", options: ["Give more weight to the most recent evidence of achievement", "Calculate a strict mathematical average of all marks", "Focus primarily on the student's highest single performance", "Base the grade on the student’s perceived potential"], a: 0, tags: ["Growing Success", "Evaluation"] },
          { id: "p100", q: "Learning for All states that Universal Design for Learning (UDL) differs from Differentiated Instruction (DI) because UDL is:", options: ["Reactive to specific student needs", "Proactive and intended for the whole class from the outset", "Exclusively for students with IEPs", "Focused only on the physical classroom layout"], a: 1, tags: ["Learning for All", "UDL vs DI"] },
          { id: "p101", q: "Under Growing Success, if a student fails to submit a 'major' assignment, the teacher should first:", options: ["Assign a mark of zero immediately", "Use a variety of strategies to help the student submit the work", "Lower the student's learning skills grade only", "Contact the principal to remove the student from the course"], a: 1, tags: ["Growing Success", "Reporting"] },
          { id: "p102", q: "The 'Tiered Approach' in Learning for All suggests that Tier 2 supports are characterized by:", options: ["Universal supports for every student in the province", "Targeted, small-group instruction for students not making progress in Tier 1", "Intensive, one-on-one clinical intervention", "Alternative curriculum expectations"], a: 1, tags: ["Learning for All", "Tiered Approach"] },
          { id: "p103", q: "In the 2020 Math Curriculum, the 'Mathematical Modeling' process is described as having which unique characteristic?", options: ["It is a linear 4-step process with a fixed end point", "It is an iterative process that may involve returning to previous steps", "It is only applicable to the Financial Literacy strand", "It must be done without the use of technology"], a: 1, tags: ["Math Curriculum Context", "Modeling"] },
          { id: "p104", q: "According to Growing Success, for a student with an IEP, 'Alternative Expectations' are those that:", options: ["Are slightly modified versions of the grade-level expectations", "Are not derived from the Ontario curriculum expectations", "Only apply to students in secondary school", "Allow the student to skip math entirely"], a: 1, tags: ["Growing Success", "Special Education"] },
          { id: "p105", q: "Which document emphasizes that 'fairness' in assessment does not mean 'sameness'?", options: ["The Education Act", "Growing Success", "Learning for All", "Both Growing Success and Learning for All"], a: 3, tags: ["Foundational Documents", "Equity"] },
          { id: "p106", q: "According to the Math Curriculum Context, 'High-Impact Instructional Practices' include 'Direct Instruction.' When is this most effective?", options: ["When students are exploring a concept for the first time without guidance", "When used intentionally to clear up misconceptions or introduce complex skills", "As the only method of instruction for the entire school year", "Only for students who are failing"], a: 1, tags: ["Math Curriculum Context", "Instruction"] },
          { id: "p107", q: "Growing Success states that the Achievement Chart categories should be considered:", options: ["As four separate, unrelated boxes", "In isolation, where Knowledge is worth 50%", "Interrelated and reflecting the wholeness of learning", "Only during the final examination"], a: 2, tags: ["Growing Success", "Achievement Chart"] },
          { id: "p108", q: "Which approach to gathering evidence of learning is specifically mentioned in Growing Success to ensure a 'triangulated' view?", options: ["Observations, Conversations, and Student Products", "Tests, Quizzes, and Exams", "Parent feedback, Peer feedback, and Self-reflection", "Attendance, Behavior, and Effort"], a: 0, tags: ["Growing Success", "Triangulation"] },
          { id: "p109", q: "According to Learning for All, a 'Class Profile' should be updated:", options: ["Once at the beginning of the year", "Every two years", "Continually as the teacher gathers more information about the students", "Only when a new student joins the class"], a: 2, tags: ["Learning for All", "Class Profile"] },
          { id: "p110", q: "In the context of 'Assessment AS Learning', the teacher's role is to:", options: ["Grade the student's self-reflection", "Model and provide opportunities for students to practice metacognition", "Assign peer-marking to save time", "Ensure all students reach Level 4"], a: 1, tags: ["Growing Success", "Metacognition"] },
          { id: "p111", q: "The 2020 Math Curriculum includes 'Social-Emotional Learning' to help students develop 'Confidence and Coping.' This is measured:", options: ["By a separate percentage grade on the report card", "In the context of the student’s learning across all math strands", "Only by a guidance counselor", "By a standardized personality test"], a: 1, tags: ["Math Curriculum Context", "SEL"] },
          { id: "p112", q: "According to Growing Success, which of the following is true regarding 'Late and Missed Assignments'?", options: ["A mark of zero can only be a last resort after other strategies are exhausted", "Zeros are encouraged to teach students responsibility", "Late marks must be a flat 10% deduction per day", "The Ministry prohibits the use of zeros entirely"], a: 0, tags: ["Growing Success", "Reporting"] },
          { id: "p113", q: "What is the 'Primary Purpose' of the Ontario Provincial Report Card according to Growing Success?", options: ["To rank schools for the Fraser Institute", "To communicate student achievement to students and parents", "To provide data for government funding", "To determine which students should be suspended"], a: 1, tags: ["Growing Success", "Reporting"] },
          { id: "p114", q: "Learning for All identifies 'Differentiated Instruction' as occurring in response to:", options: ["A student’s readiness, interests, and learning profile", "The teacher’s favorite teaching style", "The availability of textbooks", "The time of day math is taught"], a: 0, tags: ["Learning for All", "DI"] },
          { id: "p115", q: "Which mathematical process is being used when a student explains why their answer 'makes sense' in the context of the problem?", options: ["Reflecting", "Selecting Tools", "Representing", "Connecting"], a: 0, tags: ["Math Curriculum Context", "Processes"] },
          { id: "p116", q: "According to Growing Success, 'Criterion-Referenced' means students are evaluated against:", options: ["The performance of their peers", "Pre-determined standards based on curriculum expectations", "Their own previous best performance", "A national average"], a: 1, tags: ["Growing Success", "Evaluation"] },
          { id: "p117", q: "In the Grade 9 De-streamed Curriculum, 'Coding' is used to demonstrate understanding in:", options: ["Algebra and Number strands only", "All strands of the curriculum", "A separate computer science lab", "Only the Data strand"], a: 1, tags: ["Math Curriculum Context", "Coding"] },
          { id: "p118", q: "Learning for All states that 'Effective Instruction' begins with:", options: ["A difficult test", "Understanding the student through assessment", "Reading the entire textbook out loud", "Assigning homework on the first day"], a: 1, tags: ["Learning for All", "Assessment"] },
          { id: "p119", q: "According to Growing Success, 'Learning Skills and Work Habits' include:", options: ["Knowledge and Thinking", "Organization, Collaboration, and Self-Regulation", "Reading, Writing, and Arithmetic", "Speed and Accuracy"], a: 1, tags: ["Growing Success", "Reporting"] }
        ]
      },
      {
        id: "math-no-calc",
        title: "Math",
        calc: false,
        questions: [
          { id: "mnc21", q: "Evaluate: $2.5 \\times 10^3 + 4.2 \\times 10^2$.", options: ["$2920$", "$6700$", "$29200$", "$2542$"], a: 0, tags: ["Number Sense", "Scientific Notation"] },
          { id: "mnc22", q: "Which of the following is equivalent to $\\frac{3}{8} \\div \\frac{3}{4}$?", options: ["$1/2$", "$9/32$", "$2$", "$1/4$"], a: 0, tags: ["Number Sense", "Fractions"] },
          { id: "mnc23", q: "Solve for $x$: $0.5x - 4 = 11$.", options: ["30", "14", "7.5", "15"], a: 0, tags: ["Algebra", "Linear Equations"] },
          { id: "mnc24", q: "Evaluate: $\\sqrt{0.49} + (0.1)^2$.", options: ["$0.71$", "$0.8$", "$0.5$", "$0.51$"], a: 0, tags: ["Number Sense", "Roots/Decimals"] },
          { id: "mnc25", q: "If the ratio of $A:B$ is $2:3$ and $B:C$ is $4:5$, what is $A:C$?", options: ["$8:15$", "$2:5$", "$6:8$", "$1:2$"], a: 0, tags: ["Proportional Reasoning", "Ratios"] }
        ]
      },
      {
        id: "math-calc",
        title: "Math",
        calc: true,
        questions: [
          { id: "mc259", q: "A principal of $\\$5000$ is invested at $4\\%$ interest compounded semi-annually. What is the total value after $2$ years?", options: ["$\\$5412.16$", "$\\$5408.00$", "$\\$5416.32$", "$\\$5849.29$"], a: 0, tags: ["Financial Literacy", "Compound Interest"] },
          { id: "mc260", q: "A right-triangular prism has a base with legs $5\\text{ cm}$ and $12\\text{ cm}$. If the prism's height is $20\\text{ cm}$, what is its total surface area?", options: ["$660\\text{ cm}^2$", "$600\\text{ cm}^2$", "$720\\text{ cm}^2$", "$750\\text{ cm}^2$"], a: 0, tags: ["Measurement", "Surface Area"] },
          { id: "mc261", q: "Solve the system: $3x + 2y = 12$ and $y = 2x - 1$. Find $x$.", options: ["2", "3", "1", "4"], a: 0, tags: ["Algebra", "Linear Systems"] },
          { id: "mc262", q: "A car depreciates by $15\\%$ of its current value each year. If a car is worth $\\$30,000$ now, what will it be worth in $3$ years (to the nearest dollar)?", options: ["$\\$18,424$", "$\\$16,500$", "$\\$21,675$", "$\\$19,500$"], a: 0, tags: ["Financial Literacy", "Depreciation"] },
          { id: "mc263", q: "The mean of seven numbers is $15$. If a eighth number is added, the new mean is $17$. What is the eighth number?", options: ["31", "17", "25", "19"], a: 0, tags: ["Data", "Mean"] },
          { id: "mc264", q: "A scale model of a building is $1:250$. If the volume of the model is $0.5\\text{ m}^3$, what is the volume of the actual building?", options: ["$7,812,500\\text{ m}^3$", "$125,000\\text{ m}^3$", "$31,250\\text{ m}^3$", "$1,250\\text{ m}^3$"], a: 0, tags: ["Proportional Reasoning", "Scale/Volume"] },
          { id: "mc265", q: "Determine the length of the diagonal of a rectangular prism with dimensions $3\\text{ cm} \\times 4\\text{ cm} \\times 12\\text{ cm}$.", options: ["$13\\text{ cm}$", "$19\\text{ cm}$", "$15\\text{ cm}$", "$17\\text{ cm}$"], a: 0, tags: ["Geometry", "3D Pythagorean Theorem"] },
          { id: "mc266", q: "An employee earns $\\$22/\\text{hr}$ for the first $35$ hours and $1.5\\times$ for any hours above that. If their gross pay was $\\$1034$, how many total hours did they work?", options: ["43", "40", "45", "42"], a: 0, tags: ["Financial Literacy", "Algebraic Modeling"] },
          { id: "mc267", q: "A bag contains $5$ red, $3$ blue, and $2$ green marbles. If two marbles are drawn without replacement, what is the probability they are both red?", options: ["$2/9$", "$1/4$", "$1/5$", "$5/18$"], a: 0, tags: ["Data", "Probability"] },
          { id: "mc268", q: "Simplify: $\\frac{(x^2 y^3)^2}{x^{-2} y^4}$.", options: ["$x^6 y^2$", "$x^2 y^2$", "$x^6 y^{10}$", "$x^0 y^2$"], a: 0, tags: ["Number Sense", "Exponents"] },
          { id: "mc269", q: "A cylinder has a volume of $500\\text{ cm}^3$. If the radius is doubled and the height is halved, what is the new volume?", options: ["$1000\\text{ cm}^3$", "$500\\text{ cm}^3$", "$250\\text{ cm}^3$", "$2000\\text{ cm}^3$"], a: 0, tags: ["Measurement", "Volume Relations"] },
          { id: "mc270", q: "A jacket costs $\\$150$. It is discounted by $20\\%$, then another $10\\%$ is taken off the sale price. What is the final price before tax?", options: ["$\\$108$", "$\\$105$", "$\\$115$", "$\\$120$"], a: 0, tags: ["Financial Literacy", "Percentages"] },
          { id: "mc271", q: "What is the equation of the line passing through $(-2, 5)$ and $(4, -7)$?", options: ["$y = -2x + 1$", "$y = 2x + 9$", "$y = -2x - 1$", "$y = -0.5x + 4$"], a: 0, tags: ["Algebra", "Linear Relations"] },
          { id: "mc272", q: "If $15\\%$ of a number is $45$, what is $120\\%$ of that same number?", options: ["360", "300", "400", "450"], a: 0, tags: ["Number Sense", "Proportions"] },
          { id: "mc273", q: "A map has a scale of $1:500,000$. A forest covers $4\\text{ cm}^2$ on the map. What is the actual area of the forest in square kilometres?", options: ["$100\\text{ km}^2$", "$20\\text{ km}^2$", "$10\\text{ km}^2$", "$250\\text{ km}^2$"], a: 0, tags: ["Measurement", "Area Scale"] },
          { id: "mc274", q: "A person's income tax is $15\\%$ on the first $\\$50,000$ and $25\\%$ on any amount over $\\$50,000$. If they earn $\\$75,000$, what is their total tax?", options: ["$\\$13,750$", "$\\$11,250$", "$\\$18,750$", "$\\$15,000$"], a: 0, tags: ["Financial Literacy", "Taxation"] },
          { id: "mc275", q: "Solve for $x$: $\\frac{2x - 3}{5} = \\frac{x + 4}{2}$.", options: ["-26", "26", "-11", "11"], a: 0, tags: ["Algebra", "Equations"] },
          { id: "mc276", q: "A sphere just fits inside a cube with side length $10\\text{ cm}$. What is the volume of the space inside the cube NOT occupied by the sphere?", options: ["$476.7\\text{ cm}^3$", "$523.3\\text{ cm}^3$", "$333.3\\text{ cm}^3$", "$1000\\text{ cm}^3$"], a: 0, tags: ["Measurement", "Composite Volume"] },
          { id: "mc277", q: "A survey of $200$ people found $120$ like coffee, $80$ like tea, and $40$ like both. What is the probability a randomly selected person likes neither?", options: ["$0.2$", "$0.4$", "$0.3$", "$0.1$"], a: 0, tags: ["Data", "Sets/Probability"] },
          { id: "mc278", q: "Express $0.000000045$ in scientific notation.", options: ["$4.5 \\times 10^{-8}$", "$4.5 \\times 10^{-7}$", "$45 \\times 10^{-9}$", "$0.45 \\times 10^{-7}$"], a: 0, tags: ["Number Sense", "Scientific Notation"] },
          { id: "mc279", q: "The ratio of angles in a quadrilateral is $2:3:4:6$. What is the measure of the smallest angle?", options: ["$48^\\circ$", "$24^\\circ$", "$36^\\circ$", "$60^\\circ$"], a: 0, tags: ["Geometry", "Ratios"] },
          { id: "mc280", q: "A credit card has a $21\\%$ annual interest rate. If a balance of $\\$1000$ is left unpaid for one month, what is the interest charged that month?", options: ["$\\$17.50$", "$\\$21.00$", "$\\$1.75$", "$\\$175.00$"], a: 0, tags: ["Financial Literacy", "Interest"] },
          { id: "mc281", q: "Find the point of intersection of $y = 4x + 10$ and $y = -2x - 2$.", options: ["$(-2, 2)$", "$(2, 18)$", "$(-2, -6)$", "$(0, 10)$"], a: 0, tags: ["Algebra", "Linear Systems"] },
          { id: "mc282", q: "A cone and a cylinder have the same radius and height. What is the ratio of the volume of the cone to the volume of the cylinder?", options: ["$1:3$", "$3:1$", "$1:2$", "$2:3$"], a: 0, tags: ["Measurement", "Volume Theory"] },
          { id: "mc283", q: "A investment earns $5\\%$ per year. Using the 'Rule of 72', approximately how long will it take for the investment to double?", options: ["14.4 years", "10 years", "7.2 years", "20 years"], a: 0, tags: ["Financial Literacy", "Estimation"] },
          { id: "mc284", q: "Calculate the standard deviation of the set $[10, 10, 10, 10]$.", options: ["0", "1", "10", "Undefined"], a: 0, tags: ["Data", "Spread"] },
          { id: "mc285", q: "Which of the following describes a 'non-linear' relationship?", options: ["The area of a square as a function of its side length", "The perimeter of a square as a function of its side length", "The cost of gas at a fixed price per litre", "The distance traveled at a constant speed over time"], a: 0, tags: ["Algebra", "Linear vs Non-linear"] },
          { id: "mc286", q: "If $f(x) = 2x^2 - 3x + 1$, find $f(-2)$.", options: ["15", "3", "7", "11"], a: 0, tags: ["Algebra", "Functions"] },
          { id: "mc287", q: "A recipe uses $250\\text{ mL}$ of milk for $12$ muffins. How much milk is needed for $30$ muffins?", options: ["$625\\text{ mL}$", "$500\\text{ mL}$", "$750\\text{ mL}$", "$600\\text{ mL}$"], a: 0, tags: ["Proportional Reasoning"] },
          { id: "mc288", q: "What is the total surface area of a cylinder with $r = 3\\text{ cm}$ and $h = 7\\text{ cm}$? (Use $\\pi \\approx 3.14$)", options: ["$188.4\\text{ cm}^2$", "$131.88\\text{ cm}^2$", "$28.26\\text{ cm}^2$", "$150.72\\text{ cm}^2$"], a: 0, tags: ["Measurement", "Surface Area"] },
          { id: "mc289", q: "A person buys a stock for $\\$20$ and sells it for $\\$25$. What is the percentage profit?", options: ["$25\\%$", "$20\\%$", "$5\\%$", "$50\\%$"], a: 0, tags: ["Financial Literacy", "Percentages"] },
          { id: "mc290", q: "Find the median of the data: $15, 22, 12, 19, 31, 18, 25$.", options: ["19", "18", "22", "18.5"], a: 0, tags: ["Data", "Median"] },
          { id: "mc291", q: "Simplify: $\\sqrt{72}$ to its simplest mixed radical form.", options: ["$6\\sqrt{2}$", "$2\\sqrt{6}$", "$3\\sqrt{8}$", "$36\\sqrt{2}$"], a: 0, tags: ["Number Sense", "Radicals"] },
          { id: "mc292", q: "A rectangular field is $100\\text{ m}$ by $50\\text{ m}$. If a path $2\\text{ m}$ wide is built inside the perimeter, what is the area of the path?", options: ["$584\\text{ m}^2$", "$600\\text{ m}^2$", "$384\\text{ m}^2$", "$400\\text{ m}^2$"], a: 0, tags: ["Measurement", "Composite Area"] },
          { id: "mc293", q: "A car rental company charges $\\$50$ plus $\\$0.20/\\text{km}$. Another charges $\\$30$ plus $\\$0.30/\\text{km}$. At what distance is the cost the same?", options: ["$200\\text{ km}$", "$100\\text{ km}$", "$150\\text{ km}$", "$250\\text{ km}$"], a: 0, tags: ["Algebra", "Linear Systems"] },
          { id: "mc294", q: "What is the sum of the interior angles of a hexagon?", options: ["$720^\\circ$", "$540^\\circ$", "$900^\\circ$", "$360^\\circ$"], a: 0, tags: ["Geometry", "Polygons"] },
          { id: "mc295", q: "A population increases by $2\\%$ per year. If it is $10,000$ now, what will it be in $5$ years?", options: ["$11,041$", "$11,000$", "$10,200$", "$12,000$"], a: 0, tags: ["Algebra", "Exponential Growth"] },
          { id: "mc296", q: "Convert $100\\text{ cubic centimetres}$ to cubic millimetres.", options: ["$100,000\\text{ mm}^3$", "$1,000\\text{ mm}^3$", "$10,000\\text{ mm}^3$", "$1,000,000\\text{ mm}^3$"], a: 0, tags: ["Measurement", "Unit Conversions"] },
          { id: "mc297", q: "If $a^2 + b^2 = c^2$, and $a=7, c=25$, find $b$.", options: ["24", "18", "20", "23"], a: 0, tags: ["Geometry", "Pythagorean Theorem"] },
          { id: "mc298", q: "A data set has a mean of $10$ and a variance of $4$. What is the standard deviation?", options: ["2", "4", "16", "5"], a: 0, tags: ["Data", "Spread"] },
          { id: "mc299", q: "If the exchange rate is $1\\text{ CAD} = 0.75\\text{ USD}$, how much in CAD is a $\\$120\\text{ USD}$ item?", options: ["$\\$160$", "$\\$90$", "$\\$150$", "$\\$130$"], a: 0, tags: ["Financial Literacy", "Currency"] },
          { id: "mc300", q: "Solve: $2^{x+1} = 32$.", options: ["4", "5", "3", "6"], a: 0, tags: ["Algebra", "Exponents"] },
          { id: "mc301", q: "A triangle has sides $8, 15, 17$. What kind of triangle is it?", options: ["Right", "Isosceles", "Equilateral", "Obtuse"], a: 0, tags: ["Geometry", "Classification"] },
          { id: "mc302", q: "The probability of rain is $3/10$. What are the odds AGAINST rain?", options: ["$7:3$", "$3:7$", "$7:10$", "$3:10$"], a: 0, tags: ["Data", "Odds"] },
          { id: "mc303", q: "Calculate the volume of a square-based pyramid with base side $6$ and height $10$.", options: ["120", "360", "60", "180"], a: 0, tags: ["Measurement", "Volume"] }
        ]
      }
  ]
  }
};
