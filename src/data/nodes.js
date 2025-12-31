export const nodes = [
  // --- SECTION 1: NUMBER SENSE (Foundational) ---
  {
    id: 1,
    title: "1. The Number Line",
    unlocked: true,
    mastery: 0,
	category: "math",
    lesson: "Integers and decimals. Moving left on the number line is smaller, right is larger.",
    children: [2, 4], // Branches into Powers and Proportions
    questions: [
      { question: "Which is the smallest?", options: ["-12", "-8", "0", "2"], answer: "-12" },
      { question: "Order least to greatest: 0.05, 0.5, 0.005", options: ["0.005, 0.05, 0.5", "0.5, 0.05, 0.005", "0.05, 0.005, 0.5", "0.005, 0.5, 0.05"], answer: "0.005, 0.05, 0.5" },
      { question: "Which integer is > -4 and < 1?", options: ["-5", "2", "-2", "-4"], answer: "-2" },
      { question: "Value of 8 in 12.085?", options: ["8 ones", "8 tenths", "8 hundredths", "8 thousandths"], answer: "8 hundredths" },
      { question: "What is -15 + 7?", options: ["-22", "-8", "8", "22"], answer: "-8" },
      { question: "Which is greater: -0.5 or -0.05?", options: ["-0.5", "-0.05", "Equal", "Cannot tell"], answer: "-0.05" },
      { question: "What is 100 times 0.007?", options: ["0.07", "0.7", "7", "70"], answer: "0.7" },
      { question: "The temperature was -5°C and dropped 10°. What is it now?", options: ["5°C", "-15°C", "15°C", "-5°C"], answer: "-15°C" },
      { question: "Which fraction is equal to 0.4?", options: ["1/4", "2/5", "4/100", "1/40"], answer: "2/5" },
      { question: "Value of 3 in 3,456,000?", options: ["3 million", "300 thousand", "30 thousand", "3 millionths"], answer: "3 million" }
    ]
  },
  {
    id: 2,
    title: "2. Powers & Parts",
    unlocked: false,
    mastery: 0,
	category: "math",
    lesson: "Exponents are repeated multiplication. Square roots find the original factor.",
    children: [3],
    questions: [
      { question: "Value of $5^3$?", options: ["15", "25", "125", "75"], answer: "125" },
      { question: "Evaluate: $\\sqrt{81} + \\sqrt{16}$", options: ["13", "97", "12", "$\\sqrt{97}$"], answer: "13" },
      { question: "Value of $2^4 - \\sqrt{25}$?", options: ["11", "3", "16", "21"], answer: "11" },
      { question: "What is $10^0$?", options: ["0", "1", "10", "100"], answer: "1" },
      { question: "Evaluate: $\\sqrt{100} - 2^3$", options: ["8", "2", "4", "0"], answer: "2" },
      { question: "Which is larger: $3^2$ or $2^3$?", options: ["$3^2$", "$2^3$", "Equal", "Cannot tell"], answer: "$3^2$" },
      { question: "Calculate: $\\frac{\\sqrt{144}}{3}$", options: ["4", "12", "3", "36"], answer: "4" },
      { question: "Value of $\\left(\\frac{1}{2}\\right)^2$?", options: ["1", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "0.5"], answer: "$\\frac{1}{4}$" },
      { question: "Evaluate: $4^2 + 3^2$", options: ["14", "25", "49", "7"], answer: "25" },
      { question: "If $x^2 = 49$, what is $x$?", options: ["7", "14", "24.5", "9"], answer: "7" }
    ]
  },
  {
    id: 3,
    title: "3. The Math Toolbox",
    unlocked: false,
	category: "math",
    mastery: 0,
    lesson: "BEDMAS: Brackets, Exponents, Division/Multiplication, Addition/Subtraction.",
    children: [7], // Leads into Algebra
    questions: [
      { question: "Evaluate: 10 + 2 * (5 - 3)^2", options: ["48", "18", "24", "14"], answer: "18" },
      { question: "Expanded form of 304.5?", options: ["(3x100)+(4x1)+(5x0.1)", "(3x100)+(4x10)+(5x1)", "(3x10)+(4x1)+(5x0.1)", "(3x100)+(4x1)+(5x0.01)"], answer: "(3x100)+(4x1)+(5x0.1)" },
      { question: "Evaluate: 4 + 3 * (2 + 1)", options: ["21", "13", "10", "9"], answer: "13" },
      { question: "Expanded form of 50.02?", options: ["5x10 + 2x0.01", "5x10 + 2x0.1", "5x1 + 2x0.01", "50 + 2"], answer: "5x10 + 2x0.01" },
      { question: "Evaluate: (12 / 3) + (4 * 2)", options: ["12", "16", "8", "20"], answer: "12" },
      { question: "What is 100 - 5^2 * 3?", options: ["225", "75", "25", "10"], answer: "25" },
      { question: "Evaluate: 5 + 15 / 5", options: ["4", "8", "10", "15"], answer: "8" },
      { question: "Which comes first in BEDMAS?", options: ["Brackets", "Exponents", "Addition", "Division"], answer: "Brackets" },
      { question: "Evaluate: 2 * (3 + 4)^2", options: ["98", "28", "50", "100"], answer: "98" },
      { question: "Expanded form of 7,003?", options: ["7x1000+3x1", "7x100+3x1", "7x1000+3x10", "7000+30"], answer: "7x1000+3x1" }
    ]
  },
  // --- SECTION 2: RELATIONSHIPS ---
  {
    id: 4,
    title: "4. Proportions",
    unlocked: false,
	category: "math",
    mastery: 0,
    lesson: "Unit rates compare a quantity to 1. Ratios compare parts.",
    children: [5],
    questions: [
      { question: "Car travels 300km in 4h. Unit rate?", options: ["60km/h", "75km/h", "80km/h", "120km/h"], answer: "75km/h" },
      { question: "Solve for x: 2/5 = x/20", options: ["4", "8", "10", "12"], answer: "8" },
      { question: "3 apples cost $2.10. How much for 5?", options: ["$3.00", "$3.50", "$4.00", "$4.20"], answer: "$3.50" },
      { question: "Ratio of 3:4. Total parts?", options: ["3", "4", "7", "12"], answer: "7" },
      { question: "Map scale 1cm = 50km. 3cm is?", options: ["150km", "50km", "100km", "300km"], answer: "150km" },
      { question: "5 people share $200 equally. Each gets?", options: ["$20", "$40", "$50", "$100"], answer: "$40" },
      { question: "Solve for y: y/10 = 7/2", options: ["35", "14", "20", "5"], answer: "35" },
      { question: "Which is a unit rate?", options: ["2 for $5", "3 bikes", "$15 per hour", "10:2"], answer: "$15 per hour" },
      { question: "If x:10 = 3:5, x is?", options: ["3", "5", "6", "10"], answer: "6" },
      { question: "Mix 1L juice with 3L water. Total volume?", options: ["3L", "4L", "1L", "2L"], answer: "4L" }
    ]
  },
  {
    id: 5,
    title: "5. The Percent Lab",
    unlocked: false,
	category: "math",
    mastery: 0,
    lesson: "Percent means 'per 100'. Divide by 100 to get the decimal.",
    children: [6],
    questions: [
      { question: "Write 15% as a decimal.", options: ["1.5", "0.015", "0.15", "15.0"], answer: "0.15" },
      { question: "Find 20% of 80.", options: ["16", "8", "20", "24"], answer: "16" },
      { question: "Shirt is $40, 25% off. Price?", options: ["$10", "$30", "$35", "$25"], answer: "$30" },
      { question: "Express 0.08 as a percent.", options: ["0.8%", "8%", "80%", "0.08%"], answer: "8%" },
      { question: "Tip on $50 at 15%?", options: ["$5", "$7.50", "$10", "$6.50"], answer: "$7.50" },
      { question: "What is 100% of 1,200?", options: ["12", "120", "1200", "2400"], answer: "1200" },
      { question: "Tax is 13%. On $100, the total is?", options: ["$113", "$100", "$13", "$87"], answer: "$113" },
      { question: "4 out of 5 is what percent?", options: ["40%", "80%", "75%", "90%"], answer: "80%" },
      { question: "If price rises 10% from $200, it is?", options: ["$210", "$220", "$300", "$202"], answer: "$220" },
      { question: "What is 0% of 500?", options: ["500", "50", "5", "0"], answer: "0" }
    ]
  },
  {
    id: 6,
    title: "6. Chance & Data",
    unlocked: false,
	category: "math",
    mastery: 0,
    lesson: "Mean is average. Median is middle. Probability is 'want' over 'total'.",
    children: [9], // Leads into Measurement
    questions: [
      { question: "Mean of 2, 4, 6, 8?", options: ["4", "5", "6", "10"], answer: "5" },
      { question: "Median of 1, 3, 3, 6, 7?", options: ["3", "6", "5", "4"], answer: "3" },
      { question: "Probability of rolling a 4 on a 6-sided die?", options: ["1/6", "4/6", "1/2", "1/4"], answer: "1/6" },
      { question: "Mode of 2, 2, 3, 4, 5?", options: ["2", "3", "4", "5"], answer: "2" },
      { question: "Range of 10, 20, 30?", options: ["10", "20", "30", "60"], answer: "20" },
      { question: "Probability of heads on a coin?", options: ["0", "0.5", "1", "0.25"], answer: "0.5" },
      { question: "Mean of 10 and 20?", options: ["10", "15", "20", "30"], answer: "15" },
      { question: "A bag has 3 red, 2 blue. Prob of red?", options: ["3/2", "2/5", "3/5", "1/2"], answer: "3/5" },
      { question: "Median of 10, 2, 8?", options: ["10", "2", "8", "20"], answer: "8" },
      { question: "If prob is 1, the event is:", options: ["Impossible", "Unlikely", "Certain", "Possible"], answer: "Certain" }
    ]
  },
  // --- SECTION 3: ALGEBRA ---
  {
    id: 7,
    title: "7. Finding X",
    unlocked: false,
	category: "math",
    mastery: 0,
    lesson: "Isolate x. If it is x + 5, subtract 5 from both sides.",
    children: [8],
    questions: [
      { question: "Solve: x + 7 = 15", options: ["7", "8", "22", "-8"], answer: "8" },
      { question: "Solve: 3x = 12", options: ["3", "4", "9", "36"], answer: "4" },
      { question: "Solve: 2x - 4 = 10", options: ["3", "5", "7", "14"], answer: "7" },
      { question: "Solve: x/4 = 3", options: ["7", "12", "1", "0.75"], answer: "12" },
      { question: "If x = 2, evaluate 3x + 1.", options: ["6", "7", "5", "4"], answer: "7" },
      { question: "Solve: 10 - x = 4", options: ["14", "-6", "6", "4"], answer: "6" },
      { question: "Solve: 5x = 0", options: ["5", "0", "1", "None"], answer: "0" },
      { question: "Solve: 2x + 2 = 12", options: ["5", "10", "7", "4"], answer: "5" },
      { question: "If y = x - 5 and x = 10, y is?", options: ["15", "5", "-5", "50"], answer: "5" },
      { question: "Solve: 3x + 3 = 3", options: ["3", "1", "0", "-3"], answer: "0" }
    ]
  },
  {
    id: 8,
    title: "8. Linear Life",
    unlocked: false,
	category: "math",
    mastery: 0,
    lesson: "y = mx + b. m is slope, b is y-intercept.",
    children: [9],
    questions: [
      { question: "Slope in y = 2x + 3?", options: ["2", "3", "x", "y"], answer: "2" },
      { question: "Y-intercept in y = 5x - 7?", options: ["5", "7", "-7", "x"], answer: "-7" },
      { question: "Which point fits y = x + 5?", options: ["(0,0)", "(1,6)", "(5,0)", "(2,10)"], answer: "(1,6)" },
      { question: "Slope of a horizontal line?", options: ["1", "Undefined", "0", "10"], answer: "0" },
      { question: "In y = mx + b, 'm' is?", options: ["Intercept", "Variable", "Slope", "Total"], answer: "Slope" },
      { question: "If m=2 and b=1, equation is?", options: ["y=2x+1", "y=1x+2", "y=2+1", "y=x"], answer: "y=2x+1" },
      { question: "Where does y=x+2 cross the y-axis?", options: ["0", "1", "2", "-2"], answer: "2" },
      { question: "Is y = x^2 linear?", options: ["Yes", "No", "Sometimes", "Maybe"], answer: "No" },
      { question: "Find y if y=3x and x=4.", options: ["7", "1", "12", "34"], answer: "12" },
      { question: "Does (0,0) fit y=2x?", options: ["Yes", "No", "Cannot tell", "Only if x=1"], answer: "Yes" }
    ]
  },
  // --- SECTION 4: MEASUREMENT ---
  {
    id: 9,
    title: "9. Flat Shapes",
    unlocked: false,
	category: "math",
    mastery: 0,
    lesson: "Area of circle = πr². Rectangle = L * W. Triangle = (B * H) / 2.",
    children: [10],
    questions: [
      { question: "Area: Length 8, Width 3.", options: ["11", "22", "24", "32"], answer: "24" },
      { question: "Pythagorean: a=6, b=8, c=?", options: ["10", "14", "48", "100"], answer: "10" },
      { question: "Perimeter of square with side 5?", options: ["10", "20", "25", "15"], answer: "20" },
      { question: "Area of triangle: Base 10, Height 5.", options: ["50", "25", "15", "20"], answer: "25" },
      { question: "Sum of angles in triangle?", options: ["90", "180", "270", "360"], answer: "180" },
      { question: "Radius is 5. Diameter is?", options: ["2.5", "10", "25", "3.14"], answer: "10" },
      { question: "Area of circle radius 1 (use π=3.14)?", options: ["3.14", "6.28", "1", "0"], answer: "3.14" },
      { question: "Perimeter of rectangle 2x4?", options: ["6", "8", "12", "16"], answer: "12" },
      { question: "Convert 1.2m to cm.", options: ["12", "120", "1200", "0.12"], answer: "120" },
      { question: "A right triangle has a ___ degree angle.", options: ["45", "90", "180", "360"], answer: "90" }
    ]
  },
  {
    id: 10,
    title: "10. 3D Space",
    unlocked: false,
	category: "math",
    mastery: 0,
    lesson: "Volume is the space inside. Surface Area is the 'skin' of the shape.",
    children: [],
    questions: [
      { question: "Volume of cube with side 2?", options: ["4", "6", "8", "12"], answer: "8" },
      { question: "Volume of prism: 2x3x4.", options: ["9", "12", "24", "48"], answer: "24" },
      { question: "Convert 2.5L to ml.", options: ["25", "250", "2500", "25000"], answer: "2500" },
      { question: "Surface area of cube side 1?", options: ["1", "4", "6", "12"], answer: "6" },
      { question: "Volume of cylinder: Area of base * ___.", options: ["Radius", "Height", "Pi", "2"], answer: "Height" },
      { question: "Capacity of 1000cm^3 is?", options: ["1L", "10L", "100L", "0.1L"], answer: "1L" },
      { question: "Volume: L=10, W=10, H=1.", options: ["21", "100", "1000", "10"], answer: "100" },
      { question: "How many faces on a cube?", options: ["4", "6", "8", "12"], answer: "6" },
      { question: "Volume of base 20, height 5?", options: ["4", "100", "25", "15"], answer: "100" },
      { question: "SA stands for:", options: ["Side Area", "Surface Area", "Square Area", "Small Area"], answer: "Surface Area" }
    ]
  },
  {
    id: 101,
    title: "P1. Knowing Your Learners",
    category: "pedagogy",
    unlocked: true,
    mastery: 0,
	children: [102],
    lesson: "Focus on Growing Success (Special Ed/ELL) and Learning for All (DI/UDL). Key: Accommodations (how) vs Modifications (what).",
    questions: [
      { question: "A student works on Grade 7 expectations in a Grade 9 class. This is a:", options: ["Accommodation", "Modification", "Alternative Program", "Learning Skill"], answer: "Modification" },
      { question: "Providing a quiet space or extra time for a test is an example of:", options: ["Accommodation", "Modification", "Socio-economic support", "Tier 3 intervention"], answer: "Accommodation" },
      { question: "Which document introduces the 'Tiered Approach' to intervention?", options: ["Growing Success", "Learning for All", "The Math Curriculum", "The Education Act"], answer: "Learning for All" },
      { question: "Universal Design for Learning (UDL) focuses on:", options: ["Fixing the student", "Planning for the 'average' student", "Removing barriers during design", "Remedial help only"], answer: "Removing barriers during design" },
      { question: "Differentiated Instruction (DI) allows students to show learning through:", options: ["Choice in product", "Varying content", "Varying process", "All of the above"], answer: "All of the above" },
      { question: "In the Tiered Approach, Tier 1 refers to:", options: ["Specialized testing", "Small group withdrawal", "High-quality classroom instruction", "One-on-one support"], answer: "High-quality classroom instruction" },
      { question: "An 'Individual Education Plan' (IEP) must be updated:", options: ["Every week", "Once a year", "Regularly/Every reporting period", "Only in Grade 9"], answer: "Regularly/Every reporting period" },
      { question: "Which is a characteristic of 'Learning for All'?", options: ["Standardized speed", "Tailored to unique strengths", "Fixed curriculum", "Teacher-centered only"], answer: "Tailored to unique strengths" },
      { question: "For an ELL student, using a dual-language glossary is an:", options: ["Accommodation", "Modification", "Exemption", "Evaluation"], answer: "Accommodation" },
      { question: "The goal of equity in the math classroom is to ensure:", options: ["Everyone gets the same", "Everyone gets what they need", "Lowering standards", "Increasing homework"], answer: "Everyone gets what they need" }
    ]
  },
  {
    id: 102,
    title: "P2. Planning & Principles",
    category: "pedagogy",
    unlocked: false,
    mastery: 0,
	children: [103],
    lesson: "Principles of the Ontario Math Curriculum and professional responsibilities.",
    questions: [
      { question: "Which is a core principle of the Ontario Math Curriculum?", options: ["Math is for some students", "Technology should be avoided", "All students can succeed", "Focus only on formulas"], answer: "All students can succeed" },
      { question: "The 'Mathematical Processes' are found in which document?", options: ["Growing Success", "Learning for All", "Math Curriculum Context", "Report Card Guide"], answer: "Math Curriculum Context" },
      { question: "Who is responsible for student safety during math activities?", options: ["Principal", "Custodian", "Teacher", "Trustee"], answer: "Teacher" },
      { question: "Planning should start with the 'End in Mind.' This is called:", options: ["Forward Planning", "Backward Design", "Lateral Thinking", "Unit Scheduling"], answer: "Backward Design" },
      { question: "High-impact instructional practices in math include:", options: ["Only lecturing", "Problem-solving and direct instruction", "Silent reading", "Copying definitions"], answer: "Problem-solving and direct instruction" },
      { question: "Cross-curricular planning involves:", options: ["Math and Science together", "Math only", "Separate subjects", "No planning"], answer: "Math and Science together" },
      { question: "What is a 'Social-Emotional Learning' (SEL) goal in math?", options: ["Memorizing Pi", "Managing stress and staying positive", "Writing faster", "Using a calculator"], answer: "Managing stress and staying positive" },
      { question: "UDL stands for:", options: ["Universal Design for Learning", "Unit Design Level", "Universal Data Link", "Underdeveloped Learning"], answer: "Universal Design for Learning" },
      { question: "A 'Spiral' curriculum means:", options: ["Topics are never repeated", "Topics are revisited and built upon", "The course is a circle", "Learning is random"], answer: "Topics are revisited and built upon" },
      { question: "Teachers must communicate with parents about:", options: ["Nothing", "Only failing grades", "Student progress and growth", "Other students' grades"], answer: "Student progress and growth" }
    ]
  },
  {
    id: 103,
    title: "P3. Instructional Approaches",
    category: "pedagogy",
    unlocked: false,
    mastery: 0,
	children: [104],
    lesson: "Focus on the 7 Mathematical Processes and classroom environment.",
    questions: [
      { question: "A student uses a graph to show a trend. This is which process?", options: ["Connecting", "Representing", "Reflecting", "Selecting Tools"], answer: "Representing" },
      { question: "When a student checks if their answer 'makes sense,' they are:", options: ["Problem Solving", "Reflecting", "Reasoning", "Connecting"], answer: "Reflecting" },
      { question: "Relating math to real-world situations is called:", options: ["Connecting", "Representing", "Communicating", "Proving"], answer: "Connecting" },
      { question: "Which process involves 'making conjectures'?", options: ["Selecting Tools", "Reasoning and Proving", "Communicating", "Reflecting"], answer: "Reasoning and Proving" },
      { question: "Scaffolding in math instruction means:", options: ["Building a physical tower", "Providing temporary support", "Giving the answer", "Ignoring the student"], answer: "Providing temporary support" },
      { question: "A 'Three-Part Lesson' usually starts with:", options: ["Minds On", "Action", "Consolidation", "Quiz"], answer: "Minds On" },
      { question: "The process of 'Communicating' involves:", options: ["Talking to friends", "Using math notation and clarity", "Drawing pictures only", "Silence"], answer: "Using math notation and clarity" },
      { question: "Using a calculator appropriately falls under:", options: ["Representing", "Selecting Tools", "Reasoning", "Connecting"], answer: "Selecting Tools" },
      { question: "Which is a high-impact strategy?", options: ["Word Walls", "Math Conversations", "Explicit Instruction", "All of the above"], answer: "All of the above" },
      { question: "The 'Consolidation' phase of a lesson is for:", options: ["Cleaning up", "Summarizing key learning", "Starting homework", "Introducing new topics"], answer: "Summarizing key learning" }
    ]
  },
  {
    id: 104,
    title: "P4. Assessment & Evaluation",
    category: "pedagogy",
    unlocked: false,
    mastery: 0,
    lesson: "Growing Success: Assessment for/as/of, Achievement Chart, and Evaluation.",
    questions: [
      { question: "Assessment 'AS' learning involves:", options: ["Final exams", "Peer and self-assessment", "Diagnostic tests", "Report card marks"], answer: "Peer and self-assessment" },
      { question: "Assessment 'FOR' learning is used to:", options: ["Rank students", "Provide descriptive feedback", "Determine a final grade", "Give a zero"], answer: "Provide descriptive feedback" },
      { question: "The Achievement Chart has how many categories?", options: ["2", "3", "4", "5"], answer: "4" },
      { question: "Evaluation (Assessment 'OF') usually happens:", options: ["At the start", "During learning", "At the end of a unit", "Never"], answer: "At the end of a unit" },
      { question: "A 'Level 3' on the Achievement Chart is:", options: ["The provincial standard", "Failure", "Perfect", "Above standard"], answer: "The provincial standard" },
      { question: "'Thinking' in the achievement chart refers to:", options: ["Memorizing facts", "Critical and creative thinking", "Writing neatly", "Solving basic math"], answer: "Critical and creative thinking" },
      { question: "Report cards must include grades for:", options: ["Subject only", "Subject and Learning Skills", "Teacher performance", "Parent attendance"], answer: "Subject and Learning Skills" },
      { question: "Which is a 'Fundamental Principle' of assessment?", options: ["It must be fair", "It must be hidden", "It must be difficult", "It must be fast"], answer: "It must be fair" },
      { question: "A rubric is used to:", options: ["Calculate percentages", "Show criteria and levels", "Mark attendance", "Punish students"], answer: "Show criteria and levels" },
      { question: "Should behavior be included in the math grade?", options: ["Yes", "No (Growing Success policy)", "Only if they talk", "Always"], answer: "No (Growing Success policy)" }
    ]
  }
];