export const studyData = [
  {
    id: "universal-design",
    term: "Universal Design for Learning (UDL)",
    category: "Pedagogy",
    keywords: ["UDL", "inclusion", "access", "barriers"],
    definition: "A framework to improve and optimize teaching and learning for all people based on scientific insights into how humans learn.",
    rigorousNote: "Consists of three pillars: **Multiple Means of Engagement**, **Representation**, and **Action/Expression**. It aims to remove barriers *before* they affect the student.",
    source: "@Learning_for_All",
    exampleQuestion: "Providing both a written text and an audio version of a math problem is an example of which UDL pillar?",
    sampleAnswer: "Multiple Means of **Representation**."
  },
  {
    id: "differentiated-instruction",
    term: "Differentiated Instruction (DI)",
    category: "Pedagogy",
    keywords: ["DI", "readiness", "interest", "profile"],
    definition: "Effective instruction that is responsive to students' readiness, interests, and learning preferences.",
    rigorousNote: "Teachers can differentiate four elements: **Content**, **Process**, **Product**, or **Learning Environment**.",
    source: "@Learning_for_All",
    exampleQuestion: "Giving students a choice between a poster, a speech, or a video to explain a math concept is differentiating what?",
    sampleAnswer: "The **Product**."
  },
  {
    id: "diagnostic-assessment",
    term: "Assessment FOR Learning",
    category: "Pedagogy",
    keywords: ["diagnostic", "formative", "feedback", "loops"],
    definition: "Assessment designed to give teachers information to modify subsequent teaching and learning activities.",
    rigorousNote: "Often referred to as **Diagnostic** (before) or **Formative** (during) assessment. Its primary goal is providing descriptive feedback.",
    source: "@Growing_Success",
    exampleQuestion: "A 'ticket-out-the-door' at the end of a lesson is primarily which type of assessment?",
    sampleAnswer: "Assessment **for** learning."
  },
  {
    id: "metacognition",
    term: "Assessment AS Learning",
    category: "Pedagogy",
    keywords: ["metacognition", "self-assessment", "reflection"],
    definition: "The process of developing and supporting student metacognition.",
    rigorousNote: "Students are the 'critical connectors' between assessment and learning. Includes **Self-assessment** and **Peer-assessment**.",
    source: "@Growing_Success",
    exampleQuestion: "When a student uses a rubric to check their own work, they are engaging in what?",
    sampleAnswer: "Assessment **as** learning."
  },
  {
    id: "summative-assessment",
    term: "Assessment OF Learning",
    category: "Pedagogy",
    keywords: ["summative", "evaluation", "reporting", "grades"],
    definition: "The process of summarizing learning at a given point in time.",
    rigorousNote: "Commonly called **Evaluation**. It is used to make judgments about the quality of student learning based on established criteria for the purpose of grading.",
    source: "@Growing_Success",
    exampleQuestion: "A final unit exam is an example of what?",
    sampleAnswer: "Assessment **of** learning."
  },

  {
    id: "prime-composite",
    term: "Prime vs. Composite Numbers",
    category: "Number Sense",
    keywords: ["factors", "division", "integers"],
    definition: "**Prime numbers** have exactly two factors (1 and itself). **Composite numbers** have more than two factors.",
    rigorousNote: "Note: The number **1** is neither prime nor composite. The number **2** is the only even prime number.",
    source: "Grades 4-6 Curriculum",
    exampleQuestion: "Is 91 a prime number?",
    sampleAnswer: "No, it is **composite** ($7 \\times 13 = 91$)."
  },
  {
    id: "integers-addition",
    term: "Adding Integers",
    category: "Number Sense",
    keywords: ["negative numbers", "zero pairs", "number line"],
    definition: "Combining positive and negative whole numbers.",
    rigorousNote: "When signs are different, find the difference between absolute values and keep the sign of the larger absolute value. Use **Zero Pairs** as a concrete model.",
    source: "Grade 7 Curriculum",
    exampleQuestion: "Solve: $-8 + 5$",
    sampleAnswer: "**-3**"
  },
  
  {
    id: "integers-subtraction",
    term: "Subtracting Integers",
    category: "Number Sense",
    keywords: ["additive inverse", "negative numbers"],
    definition: "Subtracting an integer is the same as adding its opposite.",
    rigorousNote: "Formula: $a - b = a + (-b)$. For example, $5 - (-3) = 5 + 3 = 8$.",
    source: "Grade 7 Curriculum",
    exampleQuestion: "Solve: $-10 - (-4)$",
    sampleAnswer: "$-10 + 4 = **-6**$"
  },
  {
    id: "rational-numbers",
    term: "Rational Numbers",
    category: "Number Sense",
    keywords: ["fractions", "decimals", "repeating", "terminating"],
    definition: "Any number that can be expressed as a quotient or fraction $\\frac{p}{q}$ of two integers.",
    rigorousNote: "Includes terminating decimals ($0.5$) and repeating decimals ($0.333...$). Irrational numbers (like $\\pi$) cannot be written this way.",
    source: "Grade 8 Curriculum",
    exampleQuestion: "Is $\\sqrt{2}$ a rational number?",
    sampleAnswer: "No, it is **irrational** because its decimal expansion never ends or repeats."
  },

  {
    id: "ratios",
    term: "Ratios (Part-to-Part vs. Part-to-Whole)",
    category: "Number Sense",
    keywords: ["comparison", "colon", "fraction"],
    definition: "A comparison of two quantities.",
    rigorousNote: "A **part-to-part** ratio (2 red: 3 blue) cannot be directly written as a fraction of the total. A **part-to-whole** ratio (2 red: 5 total) can be written as $\\frac{2}{5}$.",
    source: "Grade 6 Curriculum",
    exampleQuestion: "In a class of 10 boys and 15 girls, what is the part-to-whole ratio of boys?",
    sampleAnswer: "$10:25$ or simplified to **$2:5$**."
  },
  {
    id: "percents-to-fractions",
    term: "Percent Conversions",
    category: "Number Sense",
    keywords: ["decimal", "hundredth", "ratio"],
    definition: "Percent means 'per hundred'. To convert a percent to a decimal, divide by 100.",
    rigorousNote: "$x\\% = \\frac{x}{100}$. To find $15\\%$ of $80$, calculate $0.15 \\times 80$.",
    source: "Grade 7 Curriculum",
    exampleQuestion: "What is $2/5$ as a percentage?",
    sampleAnswer: "$\\frac{2}{5} = \\frac{40}{100} = **40\\%**$."
  },

  {
    id: "variable",
    term: "Variable",
    category: "Algebra",
    keywords: ["unknown", "placeholder", "expression"],
    definition: "A symbol (usually a letter) used to represent an unknown numerical value.",
    rigorousNote: "In the expression $3x + 5$, $x$ is the variable, $3$ is the **coefficient**, and $5$ is the **constant**.",
    source: "Grade 6 Curriculum",
    exampleQuestion: "Identify the coefficient in the term $-7y$.",
    sampleAnswer: "**-7**"
  },
  {
    id: "slope",
    term: "Slope (Rate of Change)",
    category: "Algebra",
    keywords: ["rise over run", "gradient", "m"],
    definition: "The measure of the steepness of a line.",
    rigorousNote: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$ or $\\frac{rise}{run}$. A horizontal line has a slope of **0**. A vertical line has an **undefined** slope.",
    source: "Grade 9 Curriculum",
    exampleQuestion: "Find the slope between $(1, 2)$ and $(3, 10)$.",
    sampleAnswer: "$\\frac{10 - 2}{3 - 1} = \\frac{8}{2} = **4**$."
  },
  

  {
    id: "polygon-angles",
    term: "Sum of Interior Angles",
    category: "Geometry",
    keywords: ["triangles", "quadrilaterals", "pentagons", "degrees"],
    definition: "The total sum of all angles inside a polygon.",
    rigorousNote: "Formula: $(n - 2) \\times 180^\\circ$, where $n$ is the number of sides. A triangle ($n=3$) is $180^\\circ$. A quadrilateral ($n=4$) is $360^\\circ$.",
    source: "Grade 7 Curriculum",
    exampleQuestion: "What is the sum of interior angles in a hexagon?",
    sampleAnswer: "$(6 - 2) \\times 180 = 4 \\times 180 = **720^\\circ**$."
  },
  {
    id: "complementary-supplementary",
    term: "Complementary vs. Supplementary",
    category: "Geometry",
    keywords: ["90 degrees", "180 degrees", "angles"],
    definition: "**Complementary** angles sum to $90^\\circ$. **Supplementary** angles sum to $180^\\circ$.",
    rigorousNote: "Mnemonic: 'C' is for Corner ($90^\\circ$), 'S' is for Straight ($180^\\circ$).",
    source: "Grade 7 Curriculum",
    exampleQuestion: "Angle A is $35^\\circ$. What is its supplement?",
    sampleAnswer: "$180 - 35 = **145^\\circ**$."
  },
  {
    id: "volume-rectangular-prism",
    term: "Volume of a Rectangular Prism",
    category: "Measurement",
    keywords: ["3D", "capacity", "area of base"],
    definition: "The amount of space inside a 3D box.",
    rigorousNote: "$V = l \\times w \\times h$ or $V = Base\\ Area \\times h$.",
    source: "Grade 6 Curriculum",
    exampleQuestion: "Find the volume if $l=5, w=2, h=10$.",
    sampleAnswer: "$5 \\times 2 \\times 10 = **100$ units$^3$**."
  },

  {
    id: "mean-median-mode-range",
    term: "The Four Averages",
    category: "Data Literacy",
    keywords: ["statistics", "outliers", "data sets"],
    definition: "**Mean** (Average), **Median** (Middle), **Mode** (Most Frequent), **Range** (Spread).",
    rigorousNote: "The **Range** is the difference between the highest and lowest values ($Max - Min$).",
    source: "Grades 4-8 Curriculum",
    exampleQuestion: "Find the range of $\{3, 10, 2, 8, 15\}$.",
    sampleAnswer: "$15 - 2 = **13**$."
  },
  {
    id: "independent-probability",
    term: "Independent vs. Dependent Events",
    category: "Data Literacy",
    keywords: ["probability", "replacement", "chance"],
    definition: "**Independent**: The outcome of one doesn't affect the other. **Dependent**: The outcome of the first affects the second.",
    rigorousNote: "Example of Dependent: Drawing a card from a deck and **not** replacing it before drawing the second.",
    source: "Grade 8 Curriculum",
    exampleQuestion: "Rolling a die and flipping a coin are what type of events?",
    sampleAnswer: "**Independent**."
  },

  {
    id: "scaffolding",
    term: "Scaffolding",
    category: "Pedagogy",
    keywords: ["support", "ZPD", "temporary"],
    definition: "Temporary support that is tailored to a learner's needs and is gradually removed as they gain competence.",
    rigorousNote: "Connects to Vygotsky and the **Zone of Proximal Development**. Examples include word walls, graphic organizers, and sentence starters.",
    source: "@Learning_for_All",
    exampleQuestion: "Providing a multiplication table to a student while they learn long division is an example of what?",
    sampleAnswer: "**Scaffolding**."
  },
  {
    id: "three-part-lesson",
    term: "The Three-Part Lesson",
    category: "Pedagogy",
    keywords: ["Minds On", "Action", "Consolidation"],
    definition: "An instructional framework used to facilitate problem-based learning in mathematics.",
    rigorousNote: "1. **Minds On** (activate prior knowledge), 2. **Action** (students solve a problem), 3. **Consolidation** (teacher-led discussion to synthesize learning).",
    source: "Ontario Ministry of Education",
    exampleQuestion: "In which phase of the lesson do students share their strategies at the chalkboard?",
    sampleAnswer: "**Consolidation** (often through 'Bansho' or 'Gallery Walks')."
  },
  {
    id: "bansho",
    term: "Bansho",
    category: "Pedagogy",
    keywords: ["chalkboard", "visual", "comparison", "strategies"],
    definition: "A Japanese board-writing technique used during the consolidation phase of a lesson.",
    rigorousNote: "It allows students to see and compare multiple solutions to the same problem side-by-side to notice mathematical relationships.",
    source: "Capacity Building Series",
    exampleQuestion: "What is the primary purpose of **Bansho**?",
    sampleAnswer: "To **visually organize** and **compare** different student strategies."
  },
  {
    id: "accommodations-vs-modifications",
    term: "Accommodations vs. Modifications",
    category: "Policy",
    keywords: ["IEP", "special education", "standards", "assessment"],
    definition: "**Accommodations** change *how* a student learns (e.g., extra time). **Modifications** change *what* a student is expected to learn (e.g., different grade level expectations).",
    rigorousNote: "This is a critical distinction in Growing_Success. Accommodations do not change the curriculum expectations; Modifications do.",
    source: "@Ministry_of_Education",
    exampleQuestion: "A Grade 6 student is working on Grade 4 math expectations. Is this an accommodation or a modification?",
    sampleAnswer: "It is a **Modification**."
  },
  {
    id: "ell-instruction",
    term: "English Language Learners (ELL)",
    category: "Pedagogy",
    keywords: ["ESL", "ELD", "language acquisition", "vocabulary"],
    definition: "Students whose first language is other than English or is a variety of English that is significantly different from that used for instruction in Ontario schools.",
    rigorousNote: "Instruction should focus on **Dual Language** strategies and scaffolding mathematical vocabulary alongside concepts.",
    source: "Supporting ELLs in Mathematics",
    exampleQuestion: "Which strategy helps ELL students understand word problems without lowering math rigour?",
    sampleAnswer: "Using **visual scaffolds**, **graphic organizers**, and **mathematical word walls**."
  },
  {
    id: "equity-vs-equality",
    term: "Equity vs. Equality",
    category: "Policy",
    keywords: ["fairness", "social justice", "barriers", "inclusion"],
    definition: "**Equality** is providing everyone with the same thing. **Equity** is providing everyone with what they need to be successful.",
    rigorousNote: "In an equitable math classroom, the teacher recognizes that some students require different supports to reach the same high standards.",
    source: "Ontario's Equity and Inclusive Education Strategy",
    exampleQuestion: "A teacher provides a calculator only to students whose IEPs permit it. Is this an example of equality or equity?",
    sampleAnswer: "This is **Equity**."
  },
  
  {
    id: "big-ideas",
    term: "Big Ideas",
    category: "Pedagogy",
    keywords: ["conceptual clusters", "curriculum", "depth over breadth"],
    definition: "Broad mathematical concepts that interconnect various smaller skills and expectations.",
    rigorousNote: "Focusing on **Big Ideas** (like Proportional Reasoning) helps students see math as a connected whole rather than a list of isolated procedures.",
    source: "Marian Small, Making_Math_Meaningful",
    exampleQuestion: "Which approach is more effective for long-term retention: teaching 50 isolated rules or focusing on 5 'Big Ideas'?",
    sampleAnswer: "Focusing on **Big Ideas**."
  },
  {
    id: "parallel-tasks",
    term: "Parallel Tasks",
    category: "Pedagogy",
    keywords: ["differentiation", "inclusion", "tiered", "choice"],
    definition: "Two or more related tasks that are designed to be at different levels of difficulty but focus on the same **Big Idea**.",
    rigorousNote: "This allows all students to participate in the same **Consolidation** discussion regardless of which task they completed.",
    source: "Marian Small, @Learning_for_All",
    exampleQuestion: "A teacher offers two problems about area: one with whole numbers and one with decimals. What is this called?",
    sampleAnswer: "A **Parallel Task**."
  },
  {
    id: "open-questions",
    term: "Open-Ended Questions",
    category: "Pedagogy",
    keywords: ["critical thinking", "multiple entries", "low floor high ceiling"],
    definition: "A question that has more than one acceptable answer or can be approached in several ways.",
    rigorousNote: "Referred to as **'Low Floor, High Ceiling'** tasks. They allow for different entry points for diverse learners.",
    source: "@Growing_Success",
    exampleQuestion: "Which is an open question: 'What is 2+2?' or 'How many ways can you make the number 4?'",
    sampleAnswer: "'How many ways can you make the number 4?'"
  },
  {
    id: "zone-of-proximal-development",
    term: "Zone of Proximal Development (ZPD)",
    category: "Pedagogy",
    keywords: ["Vygotsky", "scaffolding", "learning gap", "challenge"],
    definition: "The distance between what a learner can do without help and what they can do with support.",
    rigorousNote: "Instruction is most effective when it targets this 'sweet spot'—just beyond the student's independent reach but accessible with **scaffolding**.",
    source: "Vygotsky",
    exampleQuestion: "If a task is too easy for a student, are they in their **ZPD**?",
    sampleAnswer: "No, they are in their **Independent Level**."
  },
  
  {
    id: "culturally-responsive-pedagogy",
    term: "Culturally Relevant & Responsive Pedagogy (CRRP)",
    category: "Pedagogy",
    keywords: ["equity", "lived experience", "identity", "social justice"],
    definition: "A student-centered approach to teaching in which the students' unique cultural strengths are identified and nurtured.",
    rigorousNote: "In math, this means using real-world contexts that reflect the **lived experiences** and identities of the students in the room.",
    source: "Capacity Building Series: Culturally Responsive Pedagogy",
    exampleQuestion: "Using local community maps for a geometry lesson instead of generic textbook examples is an example of what?",
    sampleAnswer: "**Culturally Relevant & Responsive Pedagogy**."
  },
  {
    id: "minds-on",
    term: "Minds On (The 3-Part Lesson)",
    category: "Pedagogy",
    keywords: ["activation", "prior knowledge", "engagement", "hook"],
    definition: "The first 10-15 minutes of a lesson designed to activate prior knowledge and 'hook' student interest.",
    rigorousNote: "This should not be a lecture; it should be an activity or question that prepares students for the **Action** phase.",
    source: "Ontario Ministry of Education",
    exampleQuestion: "A teacher starts a lesson with a 'Would You Rather' math prompt. Which phase is this?",
    sampleAnswer: "The **Minds On** phase."
  },
  {
    id: "action-phase",
    term: "The Action Phase (The 3-Part Lesson)",
    category: "Pedagogy",
    keywords: ["problem solving", "facilitation", "active learning"],
    definition: "The 'heart' of the lesson where students work on a problem, often in pairs or small groups.",
    rigorousNote: "The teacher's role here is to **facilitate** and observe, not to 'show' students how to solve the problem.",
    source: "Ontario Ministry of Education",
    exampleQuestion: "Students are using manipulatives to explore a new concept while the teacher circulates. Which phase is this?",
    sampleAnswer: "The **Action** phase."
  },
  {
    id: "consolidation",
    term: "Consolidation (The 3-Part Lesson)",
    category: "Pedagogy",
    keywords: ["debrief", "synthesis", "reflection", "naming the math"],
    definition: "The phase where the teacher brings the class together to share strategies and 'name the learning'.",
    rigorousNote: "This is where the mathematical concepts are explicitly connected to the curriculum expectations.",
    source: "Ontario Ministry of Education",
    exampleQuestion: "When does a teacher use a **Bansho** or **Gallery Walk** to show student work?",
    sampleAnswer: "During **Consolidation**."
  },
  {
    id: "descriptive-feedback",
    term: "Descriptive Feedback",
    category: "Policy",
    keywords: ["assessment", "improvement", "growth", "specific"],
    definition: "Specific, clear, and actionable information provided to students to help them improve their learning.",
    rigorousNote: "According to **Growing Success**, feedback should tell students: Where they are going, Where they are now, and How to get there.",
    source: "@Growing_Success",
    exampleQuestion: "Is 'Good job, 8/10' an example of descriptive feedback?",
    sampleAnswer: "No, that is a **grade**. Descriptive feedback would explain *why* it was 8/10 and how to improve."
  },
  {
    id: "learning-goals",
    term: "Learning Goals",
    category: "Policy",
    keywords: ["intent", "transparency", "expectations"],
    definition: "Brief statements that describe, in student-friendly language, what students should know and be able to do by the end of a period of instruction.",
    rigorousNote: "Should be posted clearly in the classroom and shared with students at the start of the lesson.",
    source: "@Growing_Success",
    exampleQuestion: "'We are learning to calculate the area of a triangle' is an example of what?",
    sampleAnswer: "A **Learning Goal**."
  },
  {
    id: "success-criteria",
    term: "Success Criteria",
    category: "Policy",
    keywords: ["rubric", "checklists", "co-creation", "transparency"],
    definition: "Standards or 'look-fors' that help the teacher and student decide if the learning goal has been met.",
    rigorousNote: "Effective teachers often **co-create** these with students so they understand exactly what 'success' looks like.",
    source: "@Growing_Success",
    exampleQuestion: "A list of 'look-fors' for a math project is called what?",
    sampleAnswer: "**Success Criteria**."
  },
  {
    id: "triangulation-of-data",
    term: "Triangulation of Evidence",
    category: "Policy",
    keywords: ["observation", "conversation", "product", "assessment"],
    definition: "The practice of collecting evidence of student learning from three different sources: **Observations, Conversations, and Products**.",
    rigorousNote: "This ensures that a student's grade is not based solely on written tests (Products).",
    source: "@Growing_Success",
    exampleQuestion: "A teacher listens to a student explain their thinking during a group activity. Which part of triangulation is this?",
    sampleAnswer: "A **Conversation**."
  },
  
  {
    id: "spiral-curriculum",
    term: "Spiral Curriculum",
    category: "Pedagogy",
    keywords: ["revisiting", "depth", "Bruner", "scaffolded complexity"],
    definition: "An approach where concepts are revisited multiple times throughout the year with increasing levels of complexity.",
    rigorousNote: "Based on the work of Bruner. It prevents students from 'learning and forgetting' a unit.",
    source: "@Bruner",
    exampleQuestion: "Revisiting 'Fractions' in October, January, and May is an example of what?",
    sampleAnswer: "A **Spiral Curriculum**."
  },
  {
    id: "manipulatives-concrete",
    term: "Concrete Materials (Manipulatives)",
    category: "Pedagogy",
    keywords: ["hands-on", "blocks", "tiles", "representational"],
    definition: "Physical objects that students can touch and move to represent mathematical ideas.",
    rigorousNote: "Crucial for the first stage of the **CRA** (Concrete-Representational-Abstract) model.",
    source: "Ontario Ministry of Education",
    exampleQuestion: "A student uses **Algebra Tiles** to solve an equation. What stage of learning is this?",
    sampleAnswer: "The **Concrete** stage."
  },
  {
    id: "spatial-reasoning-math",
    term: "Spatial Reasoning",
    category: "Pedagogy",
    keywords: ["visualization", "geometry", "mental rotation"],
    definition: "The ability to visualize and manipulate objects and shapes in space.",
    rigorousNote: "Research indicates that **Spatial Reasoning** is highly correlated with overall mathematical success and can be improved with practice.",
    source: "Taking Shape: Spatial Reasoning",
    exampleQuestion: "Identifying which 2D net will fold into a specific 3D cube is testing what?",
    sampleAnswer: "**Spatial Reasoning**."
  },
  {
    id: "computational-thinking",
    term: "Computational Thinking",
    category: "Pedagogy",
    keywords: ["coding", "logic", "algorithms", "decomposition"],
    definition: "A problem-solving process that includes decomposition, pattern recognition, abstraction, and algorithm design.",
    rigorousNote: "Now a major part of the **Ontario 2020 Math Curriculum**, often linked with the coding expectations.",
    source: "Ontario Grade 1-8 Math Curriculum (2020)",
    exampleQuestion: "Breaking a big math problem into smaller, manageable parts is which part of **Computational Thinking**?",
    sampleAnswer: "**Decomposition**."
  },
  {
    id: "growth-mindset-math",
    term: "Growth Mindset",
    category: "Pedagogy",
    keywords: ["Dweck", "effort", "persistence", "brain plasticity"],
    definition: "The belief that mathematical ability is not 'fixed' but can be developed through effort and strategy.",
    rigorousNote: "Coined by Dweck. Teachers foster this by praising **process** rather than **intelligence**.",
    source: "Dweck",
    exampleQuestion: "A teacher tells a student, 'I like the strategy you used to solve that.' What are they encouraging?",
    sampleAnswer: "A **Growth Mindset**."
  },
  {
    id: "parallel-line-angles",
    term: "Angles in Parallel Lines",
    category: "Geometry",
    keywords: ["transversal", "alternate", "corresponding", "interior"],
    definition: "Relationships created when a **transversal** line intersects two parallel lines.",
    rigorousNote: "**Alternate Interior** angles (Z-pattern) are equal. **Corresponding** angles (F-pattern) are equal. **Co-interior** angles (C-pattern) sum to $180^\\circ$.",
    source: "Ontario Grade 8 Curriculum",
    exampleQuestion: "If two lines are parallel and an interior angle is $70^\\circ$, what is its co-interior partner?",
    sampleAnswer: "$180 - 70 = **110^\\circ**$."
  },
  
  {
    id: "triangle-classification",
    term: "Triangle Classification",
    category: "Geometry",
    keywords: ["isosceles", "scalene", "equilateral", "acute", "obtuse"],
    definition: "Classifying triangles by **side lengths** or **internal angles**.",
    rigorousNote: "**Equilateral**: 3 equal sides/angles. **Isosceles**: 2 equal sides/angles. **Scalene**: No equal sides/angles. **Obtuse**: One angle $> 90^\\circ$.",
    source: "Ontario Grades 4-6 Curriculum",
    exampleQuestion: "A triangle has angles $90^\\circ, 45^\\circ, 45^\\circ$. What are its two names?",
    sampleAnswer: "**Right** and **Isosceles**."
  },
  {
    id: "quadrilateral-hierarchy",
    term: "Quadrilateral Hierarchy",
    category: "Geometry",
    keywords: ["parallelogram", "rhombus", "trapezoid", "square", "rectangle"],
    definition: "The nesting relationship between 4-sided polygons.",
    rigorousNote: "A **Square** is a special type of **Rectangle**, and a Rectangle is a special type of **Parallelogram**. Not all Parallelograms are Rectangles.",
    source: "Ontario Grade 6 Curriculum",
    exampleQuestion: "True or False: A rhombus is always a square.",
    sampleAnswer: "**False**. A square is a rhombus with four $90^\\circ$ angles, but a rhombus can have other angles."
  },
  
  
  {
    id: "area-trapezoid",
    term: "Area of a Trapezoid",
    category: "Measurement",
    keywords: ["formula", "geometry", "parallel sides"],
    definition: "The space inside a 4-sided figure with at least one pair of parallel sides.",
    rigorousNote: "Formula: $A = \\frac{(a + b)h}{2}$, where $a$ and $b$ are the lengths of the parallel sides and $h$ is the perpendicular height.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "A trapezoid has parallel sides of $6cm$ and $10cm$, and a height of $4cm$. Find the area.",
    sampleAnswer: "$\\frac{(6 + 10) \\times 4}{2} = \\frac{16 \\times 4}{2} = **32cm^2**$."
  },
  
  {
    id: "circumference-circle",
    term: "Circumference of a Circle",
    category: "Measurement",
    keywords: ["pi", "diameter", "radius", "perimeter"],
    definition: "The distance around the outside of a circle.",
    rigorousNote: "$C = \\pi d$ or $C = 2\\pi r$. $\\pi$ is approximately $3.14159$.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "If a circle has a radius of $5cm$, what is its circumference?",
    sampleAnswer: "$2 \\times \\pi \\times 5 = **10\\pi \\approx 31.4cm**$."
  },
  {
    id: "area-circle",
    term: "Area of a Circle",
    category: "Measurement",
    keywords: ["pi", "radius squared", "surface"],
    definition: "The total surface space inside a circle.",
    rigorousNote: "$A = \\pi r^2$. Note: Always square the radius *before* multiplying by $\\pi$.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "What is the area of a circle with a diameter of $8m$?",
    sampleAnswer: "Radius is $4$. $A = \\pi \\times 4^2 = **16\\pi \\approx 50.27m^2**$."
  },
  {
    id: "volume-pyramid",
    term: "Volume of a Pyramid",
    category: "Measurement",
    keywords: ["3D", "apex", "one-third", "base"],
    definition: "The space occupied by a pyramid with a polygonal base and an apex.",
    rigorousNote: "Formula: $V = \\frac{1}{3} \\times Base\\ Area \\times h$. A pyramid has exactly **one-third** the volume of a prism with the same base and height.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "A square pyramid has a base area of $30cm^2$ and a height of $10cm$. What is its volume?",
    sampleAnswer: "$\\frac{1}{3} \\times 30 \\times 10 = **100cm^3**$."
  },

  {
    id: "discrete-vs-continuous",
    term: "Discrete vs. Continuous Data",
    category: "Data Literacy",
    keywords: ["graphing", "counting", "measuring"],
    definition: "**Discrete** data consists of distinct values (e.g., number of people). **Continuous** data can take any value within a range (e.g., height).",
    rigorousNote: "Discrete data is usually graphed with dots or bars; continuous data is graphed with lines or curves.",
    source: "Ontario Grade 8 Curriculum",
    exampleQuestion: "Is 'the time it takes to run a race' discrete or continuous?",
    sampleAnswer: "**Continuous** (time can be measured in infinitely small increments)."
  },
  {
    id: "primary-vs-secondary",
    term: "Primary vs. Secondary Data",
    category: "Data Literacy",
    keywords: ["research", "survey", "source", "census"],
    definition: "**Primary** data is collected by the researcher (e.g., your own survey). **Secondary** data is collected by someone else (e.g., Statistics Canada).",
    rigorousNote: "Secondary data is often more efficient for large samples, but primary data is more specific to your unique question.",
    source: "Ontario Grade 6 Curriculum",
    exampleQuestion: "Using a weather app to find the temperature for a project is using what kind of data?",
    sampleAnswer: "**Secondary Data**."
  },
  {
    id: "sampling-bias",
    term: "Sampling Bias",
    category: "Data Literacy",
    keywords: ["fairness", "statistics", "random", "population"],
    definition: "When a sample does not accurately represent the population being studied.",
    rigorousNote: "To avoid bias, researchers use **Random Sampling**. If you only survey your friends about school food, your sample is biased.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "A surveyor stands outside a gym to ask people their favorite hobby. Why is this biased?",
    sampleAnswer: "The sample is over-representing people who value fitness, rather than the general population."
  },

  {
    id: "coding-loops",
    term: "Loops (Coding)",
    category: "Algebra",
    keywords: ["repetition", "iteration", "efficiency"],
    definition: "A programming structure that repeats a sequence of instructions until a specific condition is met.",
    rigorousNote: "Loops reduce the need for repetitive code. In the 2020 curriculum, students use loops to draw regular polygons (e.g., repeat 4 times to draw a square).",
    source: "Ontario 2020 Math Curriculum",
    exampleQuestion: "What coding structure would you use to draw a 100-sided polygon efficiently?",
    sampleAnswer: "A **Loop** (or 'Repeat' block)."
  },
  {
    id: "coding-conditionals",
    term: "Conditionals (Coding)",
    category: "Algebra",
    keywords: ["if-then", "else", "decision", "logic"],
    definition: "Statements that perform different actions depending on whether a boolean condition is true or false.",
    rigorousNote: "Commonly written as **If-Then-Else**. Example: If $x > 10$ then print 'Large', else print 'Small'.",
    source: "Ontario 2020 Math Curriculum",
    exampleQuestion: "A program checks if a student's mark is $\\ge 50$ to output 'Pass'. What is this called?",
    sampleAnswer: "A **Conditional Statement**."
  },
  {
    id: "simple-interest",
    term: "Simple Interest",
    category: "Financial Literacy",
    keywords: ["finance", "interest", "principal", "loans"],
    definition: "Interest calculated only on the initial amount of money (the principal) invested or borrowed.",
    rigorousNote: "Formula: $I = Prt$, where $P$ is principal, $r$ is annual interest rate, and $t$ is time in years.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "Calculate the interest on $\$500$ at $5\\%$ for $2$ years.",
    sampleAnswer: "$500 \\times 0.05 \\times 2 = **\\$50**$."
  },
  {
    id: "compound-interest",
    term: "Compound Interest",
    category: "Financial Literacy",
    keywords: ["finance", "savings", "exponential", "growth"],
    definition: "Interest calculated on the initial principal and also on the accumulated interest of previous periods.",
    rigorousNote: "Known as 'interest on interest.' In the Ontario curriculum, students compare the growth of simple vs. compound interest to see the effect of time.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "Why does compound interest grow faster than simple interest?",
    sampleAnswer: "Because the interest earned in one period is added to the principal, so you earn interest on a **larger amount** in the next period."
  },
  
  {
    id: "unit-price-comparison",
    term: "Unit Price Comparison",
    category: "Financial Literacy",
    keywords: ["shopping", "best buy", "rate", "consumer"],
    definition: "Comparing the cost of different sized items by finding the cost per standard unit (e.g., $\$ per 100g$).",
    rigorousNote: "To find the unit price, divide the total cost by the quantity. This is a real-world application of **proportional reasoning**.",
    source: "Ontario Grade 6 Curriculum",
    exampleQuestion: "Brand A is $500g$ for $\$4.00$. Brand B is $1kg$ for $\$7.50$. Which is the better buy?",
    sampleAnswer: "Brand A is $\$0.80/100g$. Brand B is $\$0.75/100g$. **Brand B** is cheaper."
  },
  {
    id: "budgeting",
    term: "Budgeting (Balanced Budget)",
    category: "Financial Literacy",
    keywords: ["income", "expenses", "savings", "fixed", "variable"],
    definition: "A plan where total **Income** equals total **Expenses** plus **Savings**.",
    rigorousNote: "Differentiates between **Fixed Expenses** (rent) and **Variable Expenses** (groceries). A 'surplus' occurs when income exceeds expenses; a 'deficit' occurs when expenses exceed income.",
    source: "Ontario Grade 7/8 Curriculum",
    exampleQuestion: "If your monthly income is $\$2000$ and your expenses are $\$2200$, what is your budget status?",
    sampleAnswer: "You have a **Deficit of $\$200$**."
  },

  {
    id: "theoretical-probability",
    term: "Theoretical Probability",
    category: "Data Literacy",
    keywords: ["prediction", "fraction", "possibility"],
    definition: "The likelihood of an event happening based on mathematical reasoning.",
    rigorousNote: "$P(E) = \\frac{favorable\\ outcomes}{total\\ possible\\ outcomes}$. This is what 'should' happen in a perfect world.",
    source: "Ontario Grade 6 Curriculum",
    exampleQuestion: "What is the theoretical probability of rolling an even number on a 6-sided die?",
    sampleAnswer: "Outcomes are $\{2, 4, 6\}$. $P = 3/6 = **1/2**$ or **50%**."
  },
  {
    id: "experimental-probability",
    term: "Experimental Probability",
    category: "Data Literacy",
    keywords: ["trials", "relative frequency", "experiments"],
    definition: "The likelihood of an event happening based on the results of an actual experiment or trials.",
    rigorousNote: "As the number of trials increases, the experimental probability usually gets closer to the theoretical probability (Law of Large Numbers).",
    source: "Ontario Grade 6 Curriculum",
    exampleQuestion: "You flip a coin 10 times and get 7 heads. What is the experimental probability of heads?",
    sampleAnswer: "**7/10** or **70%**."
  },
  {
    id: "tree-diagrams",
    term: "Tree Diagrams",
    category: "Data Literacy",
    keywords: ["sample space", "combinations", "outcomes"],
    definition: "A visual tool used to list all possible outcomes of a sequence of events.",
    rigorousNote: "The total number of 'leaves' at the end of the tree represents the total **sample space** size.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "If you have 2 shirts and 3 pants, how many total outfits are possible?",
    sampleAnswer: "$2 \\times 3 = **6**$ outfits."
  },
  

  {
    id: "powers-exponents",
    term: "Powers and Exponents",
    category: "Number Sense",
    keywords: ["base", "exponent", "repeated multiplication"],
    definition: "A mathematical notation representing repeated multiplication of a number by itself.",
    rigorousNote: "In $a^n$, $a$ is the **base** and $n$ is the **exponent**. Any non-zero number to the power of $0$ is $1$ ($a^0 = 1$).",
    source: "Ontario Grade 7/8 Curriculum",
    exampleQuestion: "Evaluate $2^4$.",
    sampleAnswer: "$2 \\times 2 \\times 2 \\times 2 = **16**$."
  },
  {
    id: "square-roots",
    term: "Perfect Squares and Square Roots",
    category: "Number Sense",
    keywords: ["inverse", "area", "radicals"],
    definition: "The square root of a number is a value that, when multiplied by itself, gives the original number.",
    rigorousNote: "The square root operation ($\\sqrt{x}$) is the inverse of squaring ($x^2$). Perfect squares (1, 4, 9, 16...) result in whole number roots.",
    source: "Ontario Grade 7/8 Curriculum",
    exampleQuestion: "Estimate the value of $\\sqrt{20}$ to the nearest whole number.",
    sampleAnswer: "Since $4^2=16$ and $5^2=25$, it is between 4 and 5. It is closer to **4**."
  },
  {
    id: "fraction-division",
    term: "Dividing Fractions",
    category: "Number Sense",
    keywords: ["reciprocal", "invert", "multiply"],
    definition: "To divide by a fraction, multiply by its **reciprocal**.",
    rigorousNote: "Formula: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$. This is often modeled concretely by asking 'how many of this part fit into that part?'",
    source: "Ontario Grade 7/8 Curriculum",
    exampleQuestion: "Solve: $1/2 \\div 1/4$",
    sampleAnswer: "$1/2 \\times 4/1 = 4/2 = **2**$."
  },
  {
    id: "prime-factorization",
    term: "Prime Factorization",
    category: "Number Sense",
    keywords: ["factor tree", "prime numbers", "product"],
    definition: "Breaking a composite number down into a product of prime numbers.",
    rigorousNote: "Every composite number has a unique prime factorization (Fundamental Theorem of Arithmetic). Useful for finding GCF and LCM.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "What is the prime factorization of 12?",
    sampleAnswer: "$2 \\times 2 \\times 3$ or **$2^2 \\times 3$**."
  },
  
  {
    id: "productive-struggle",
    term: "Productive Struggle",
    category: "Pedagogy",
    keywords: ["perseverance", "problem solving", "mindset"],
    definition: "The process of effortful learning that develops grit and creative problem-solving skills.",
    rigorousNote: "Teachers support this by not 'rescuing' students too quickly, instead asking probing questions that allow the student to find their own path.",
    source: "NCTM Principles to Actions",
    exampleQuestion: "Why is struggle considered 'productive' in mathematics?",
    sampleAnswer: "Because it helps students build **deeper conceptual understanding** and the ability to transfer skills to new problems."
  },
  {
    id: "low-floor-high-ceiling",
    term: "Low-Floor, High-Ceiling Tasks",
    category: "Pedagogy",
    keywords: ["accessibility", "challenge", "differentiation"],
    definition: "A mathematical task that is easy to start (low floor) but has the potential for complex exploration (high ceiling).",
    rigorousNote: "Allows for a wide range of abilities to work on the same problem simultaneously. Essential for **Differentiated Instruction**.",
    source: "@NRICH_Math",
    exampleQuestion: "How does a 'Low-Floor, High-Ceiling' task support equity?",
    sampleAnswer: "It ensures **all students** can access the math while still being challenged at their own level."
  },
  {
    id: "number-talks",
    term: "Number Talks",
    category: "Pedagogy",
    keywords: ["mental math", "efficiency", "flexibility", "communication"],
    definition: "A 5-15 minute daily routine where students solve a mental math problem and discuss their varied strategies.",
    rigorousNote: "Emphasis is on **efficiency, accuracy, and flexibility** rather than just getting the right answer.",
    source: "Parrish (2010)",
    exampleQuestion: "A teacher asks students to solve $18 \\times 5$ in their heads. One student does $(10 \\times 5) + (8 \\times 5)$. What is this an example of?",
    sampleAnswer: "A **Number Talk** (using the Distributive Property)."
  },
{
    id: "metric-stairs",
    term: "Metric Conversions (K-H-D-B-D-C-M)",
    category: "Measurement",
    keywords: ["units", "meters", "grams", "liters", "conversion"],
    definition: "The decimal-based system used in Canada. Units increase or decrease by powers of 10.",
    rigorousNote: "Mnemonic: **K**ing **H**enry **D**ied **B**y **D**rinking **C**hocolate **M**ilk (Kilo, Hecto, Deca, Base, Deci, Centi, Milli).",
    source: "Ontario Elementary Curriculum",
    exampleQuestion: "How many millimeters are in $2.5$ meters?",
    sampleAnswer: "$2.5 \\times 1000 = **2500mm**$."
  },
  
  {
    id: "capacity-vs-volume",
    term: "Capacity vs. Volume",
    category: "Measurement",
    keywords: ["liters", "cubic centimeters", "liquid", "space"],
    definition: "**Volume** is the amount of space an object occupies (measured in $cm^3$). **Capacity** is the amount a container can hold (measured in $mL$ or $L$).",
    rigorousNote: "Crucial conversion: $1 cm^3 = 1 mL$. Therefore, $1000 cm^3 = 1 Liter$.",
    source: "Ontario Grade 5-8 Curriculum",
    exampleQuestion: "A container has a volume of $250 cm^3$. How many milliliters of water can it hold?",
    sampleAnswer: "**250 mL**."
  },

  {
    id: "translating-expressions",
    term: "Translating Words to Algebra",
    category: "Algebra",
    keywords: ["expressions", "equations", "modeling"],
    definition: "Converting English phrases into mathematical symbols.",
    rigorousNote: "'Less than' usually reverses order (e.g., '5 less than x' is $x - 5$). 'Quotient' means division; 'Product' means multiplication.",
    source: "Ontario Grade 7/8 Curriculum",
    exampleQuestion: "Write an expression for: 'Triple a number increased by seven'.",
    sampleAnswer: "**$3n + 7$**"
  },
  {
    id: "solving-equations",
    term: "Inverse Operations (Solving for X)",
    category: "Algebra",
    keywords: ["isolate", "variable", "balance"],
    definition: "The process of isolating a variable by performing the opposite operation on both sides of the equation.",
    rigorousNote: "To solve $2x + 4 = 10$, you first subtract $4$ (inverse of addition), then divide by $2$ (inverse of multiplication).",
    source: "Ontario Grade 7-9 Curriculum",
    exampleQuestion: "Solve for $x$: $3x - 5 = 10$.",
    sampleAnswer: "$3x = 15 \\rightarrow x = **5**$."
  },

  {
    id: "nested-loops",
    term: "Nested Loops",
    category: "Algebra",
    keywords: ["coding", "iteration", "grid", "efficiency"],
    definition: "A loop placed inside another loop.",
    rigorousNote: "Used for multi-dimensional tasks, such as drawing a grid or a pattern of shapes. The inner loop completes all its iterations for every single iteration of the outer loop.",
    source: "Ontario 2020 Math Curriculum",
    exampleQuestion: "If an outer loop runs 3 times and an inner loop runs 4 times, how many total actions occur?",
    sampleAnswer: "$3 \\times 4 = **12**$ actions."
  },
  
  {
    id: "coding-variables",
    term: "Variables in Coding",
    category: "Algebra",
    keywords: ["data", "storage", "assignment", "coding"],
    definition: "A named 'container' in a program that stores a value which can be changed.",
    rigorousNote: "In coding, $x = x + 1$ is an 'assignment' (updating the value), whereas in math it would be an impossible equation.",
    source: "Ontario 2020 Math Curriculum",
    exampleQuestion: "In a game, what coding element is used to keep track of the 'Score'?",
    sampleAnswer: "A **Variable**."
  },

  {
    id: "tiered-instruction",
    term: "Tiered Instruction (RTI)",
    category: "Policy",
    keywords: ["intervention", "support", "Learning for All"],
    definition: "A model for providing different levels of intensity in support.",
    rigorousNote: "**Tier 1**: Whole class instruction. **Tier 2**: Small group intervention. **Tier 3**: Intensive, individual support.",
    source: "@Learning_for_All",
    exampleQuestion: "A teacher works with 4 students who are struggling with fractions while the rest of the class works independently. What 'Tier' is this?",
    sampleAnswer: "**Tier 2**."
  },
  
  {
    id: "universal-design-engagement",
    term: "Multiple Means of Engagement",
    category: "Pedagogy",
    keywords: ["UDL", "motivation", "interest"],
    definition: "The 'Why' of learning. Providing options to stimulate interest and motivation.",
    rigorousNote: "Part of **UDL**. Examples include giving choice in topics, varying levels of challenge, and using collaborative groups.",
    source: "@Learning_for_All",
    exampleQuestion: "Allowing a student to use a math app because they find it more engaging than a worksheet is an example of what?",
    sampleAnswer: "Multiple Means of **Engagement**."
  },
  {
    id: "scaffolding-sensory",
    term: "Sensory Scaffolds",
    category: "Pedagogy",
    keywords: ["visuals", "ELL", "accommodations"],
    definition: "Using physical or visual aids to help students understand abstract concepts.",
    rigorousNote: "Especially important for **ELLs**. Includes pictures, gestures, and realia (real-life objects like bringing in a real box to calculate volume).",
    source: "Supporting ELLs in Mathematics",
    exampleQuestion: "Using a clock face to teach fractions is what kind of scaffold?",
    sampleAnswer: "A **Sensory/Visual Scaffold**."
  },
  {
    id: "assessment-reliability",
    term: "Reliability vs. Validity",
    category: "Policy",
    keywords: ["assessment", "consistency", "accuracy"],
    definition: "**Reliability** is the consistency of the results. **Validity** is whether the test actually measures what it claims to measure.",
    rigorousNote: "If a math test has very difficult English vocabulary, it may have low **validity** because it's testing reading instead of math.",
    source: "@Growing_Success",
    exampleQuestion: "A student takes two different versions of the same test and gets a similar score. This test has high...?",
    sampleAnswer: "**Reliability**."
  },

  {
    id: "terminating-repeating",
    term: "Terminating vs. Repeating Decimals",
    category: "Number Sense",
    keywords: ["rational", "division", "decimals"],
    definition: "**Terminating** decimals end (e.g., $0.25$). **Repeating** decimals have a digit or pattern that repeats forever (e.g., $0.333...$).",
    rigorousNote: "Fractions with denominators that only have prime factors of 2 or 5 will always terminate.",
    source: "Ontario Grade 7/8 Curriculum",
    exampleQuestion: "Is $1/3$ a terminating or repeating decimal?",
    sampleAnswer: "**Repeating** ($0.3\\overline{3}$)."
  },
  {
    id: "density-property",
    term: "Density Property of Rational Numbers",
    category: "Number Sense",
    keywords: ["fractions", "decimals", "infinite"],
    definition: "The concept that between any two rational numbers, there is always another rational number.",
    rigorousNote: "You can always find a middle point by averaging the two numbers: $(a+b)/2$. This shows that the number line is infinite.",
    source: "Ontario Grade 8 Curriculum",
    exampleQuestion: "Name a fraction between $1/2$ and $3/4$.",
    sampleAnswer: "**$5/8$** (or $0.625$)."
  },

  {
    id: "credit-vs-debit",
    term: "Credit vs. Debit",
    category: "Financial Literacy",
    keywords: ["banking", "finance", "debt", "interest"],
    definition: "**Debit** uses money you already have. **Credit** is borrowing money you must pay back later, often with interest.",
    rigorousNote: "The Ontario curriculum emphasizes understanding the high cost of 'minimum payments' on credit cards.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "If you buy a $\$100$ jacket but only pay the minimum on your credit card, will the jacket end up costing more or less than $\$100$?",
    sampleAnswer: "**More** (due to interest)."
  },
  {
    id: "taxes-hst",
    term: "HST (Harmonized Sales Tax)",
    category: "Financial Literacy",
    keywords: ["finance", "percent", "consumer"],
    definition: "The $13\\%$ tax added to most goods and services in Ontario.",
    rigorousNote: "To calculate the total cost including tax: $Price \\times 1.13$. To find just the tax: $Price \\times 0.13$.",
    source: "Ontario Consumer Math",
    exampleQuestion: "A toy costs $\$20.00$. What is the total cost with $13\\%$ HST?",
    sampleAnswer: "$20 \\times 1.13 = **\\$22.60**$."
  },
{
    id: "area-basic",
    term: "Area",
    category: "Measurement",
    keywords: ["surface", "square units", "2D", "space"],
    definition: "The amount of **2D space** or surface that a shape covers.",
    rigorousNote: "Measured in **square units** (e.g., $cm^2, m^2$). While formulas vary by shape, the concept is always about the number of unit squares that fit inside.",
    source: "Ontario Grade 1-9 Curriculum",
    exampleQuestion: "If a rectangle is made of 3 rows of 4 squares, what is its area?",
    sampleAnswer: "$3 \\times 4 = **12$ square units**."
  },
  
  {
    id: "volume-basic",
    term: "Volume",
    category: "Measurement",
    keywords: ["3D", "capacity", "cubic units", "space"],
    definition: "The amount of **3D space** an object occupies.",
    rigorousNote: "Measured in **cubic units** (e.g., $cm^3, m^3$). It is often calculated as the area of the base multiplied by the height of the object.",
    source: "Ontario Grade 1-9 Curriculum",
    exampleQuestion: "Which has a larger volume: a flat sheet of paper or a box of tissues?",
    sampleAnswer: "The **box of tissues** (it occupies more 3D space)."
  },
  
  {
    id: "equation-of-a-line",
    term: "Equation of a Line (y = mx + b)",
    category: "Algebra",
    keywords: ["linear", "function", "graphing", "slope-intercept"],
    definition: "A mathematical way to represent a straight line on a coordinate plane.",
    rigorousNote: "In the form $y = mx + b$, **m** represents the slope (steepness) and **b** represents the y-intercept (where it hits the vertical axis).",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "Write the equation for a line with a slope of 3 and a y-intercept of -1.",
    sampleAnswer: "**$y = 3x - 1$**"
  },
  {
    id: "y-intercept",
    term: "y-intercept",
    category: "Algebra",
    keywords: ["initial value", "vertical axis", "graph", "b"],
    definition: "The point where a line crosses the **y-axis** ($x=0$).",
    rigorousNote: "In real-world contexts, this often represents the **initial value** or starting cost (e.g., the flat fee of a taxi before you drive any kilometers).",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "Find the y-intercept of the line $y = 5x + 12$.",
    sampleAnswer: "The y-intercept is **12**."
  },
  {
    id: "x-intercept",
    term: "x-intercept",
    category: "Algebra",
    keywords: ["horizontal axis", "root", "zero", "graph"],
    definition: "The point where a line crosses the **x-axis** ($y=0$).",
    rigorousNote: "To find the x-intercept from an equation, set $y$ to $0$ and solve for $x$. These are also known as the **roots** or **zeros** of a function.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "Where does the line $y = 2x - 6$ cross the x-axis?",
    sampleAnswer: "$0 = 2x - 6 \\rightarrow 6 = 2x \\rightarrow x = **3**$."
  },
  
  {
    id: "coordinate-plane",
    term: "Cartesian Coordinate Plane",
    category: "Geometry",
    keywords: ["quadrants", "ordered pairs", "x-axis", "y-axis", "origin"],
    definition: "A 2D plane formed by the intersection of a horizontal line (x-axis) and a vertical line (y-axis).",
    rigorousNote: "Divided into **four quadrants**. Points are written as $(x, y)$. The center point $(0, 0)$ is called the **origin**.",
    source: "Ontario Grade 6-9 Curriculum",
    exampleQuestion: "In which quadrant is the point $(-2, -5)$ located?",
    sampleAnswer: "**Quadrant III** (where both x and y are negative)."
  },
  {
    id: "pi-definition",
    term: "Pi (π)",
    category: "Measurement",
    keywords: ["circle", "ratio", "constant", "irrational"],
    definition: "An **irrational number** representing the ratio of a circle's circumference to its diameter.",
    rigorousNote: "$\\pi = \\frac{C}{d}$. It is approximately $3.14159...$ and its decimals never end or repeat. Because it is irrational, it cannot be written as a perfect fraction.",
    source: "Ontario Grade 7/8 Curriculum",
    exampleQuestion: "If you wrap the diameter of a circle around its edge, how many times will it fit?",
    sampleAnswer: "Exactly **$\\pi$ times** (a bit more than 3 times)."
  },
  
  {
    id: "exponent-laws",
    term: "Exponent Laws",
    category: "Number Sense",
    keywords: ["powers", "product rule", "quotient rule", "algebra"],
    definition: "Rules used to simplify expressions involving powers with the same base.",
    rigorousNote: "**Product Rule**: $x^a \\cdot x^b = x^{a+b}$. **Quotient Rule**: $x^a / x^b = x^{a-b}$. **Power of a Power**: $(x^a)^b = x^{ab}$.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "Simplify: $x^5 \\cdot x^3$.",
    sampleAnswer: "$x^{5+3} = **x^8**$."
  },

  {
    id: "polynomial",
    term: "Polynomial",
    category: "Algebra",
    keywords: ["monomial", "binomial", "trinomial", "expression"],
    definition: "A mathematical expression consisting of variables and coefficients, involving only addition, subtraction, and multiplication.",
    rigorousNote: "Classified by the number of terms: **Monomial** (1 term), **Binomial** (2 terms), **Trinomial** (3 terms). The 'degree' is the highest exponent of the variable.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "Is $2x^2 + 3x - 5$ a monomial, binomial, or trinomial?",
    sampleAnswer: "It is a **Trinomial** (it has 3 terms)."
  },
  {
    id: "like-terms",
    term: "Like Terms",
    category: "Algebra",
    keywords: ["simplifying", "variable", "exponent", "combine"],
    definition: "Terms that have the **exact same variables** raised to the **exact same exponents**.",
    rigorousNote: "Only like terms can be added or subtracted. For example, $3x^2$ and $5x^2$ are like terms, but $3x$ and $3x^2$ are **not**.",
    source: "Ontario Grade 8/9 Curriculum",
    exampleQuestion: "Simplify: $4x + 2y - x + 5y$.",
    sampleAnswer: "$(4x - x) + (2y + 5y) = **3x + 7y**$."
  },
  
  {
    id: "direct-variation",
    term: "Direct Variation",
    category: "Algebra",
    keywords: ["proportional", "origin", "constant of variation"],
    definition: "A relationship between two variables where one is a constant multiple of the other, passing through the **origin** $(0,0)$.",
    rigorousNote: "Represented by $y = kx$. The graph is a straight line that **must** go through the origin. The y-intercept is always $0$.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "You earn $\$15$ per hour. Is this direct or partial variation?",
    sampleAnswer: "**Direct Variation** (If you work 0 hours, you earn $\$0$)."
  },
  {
    id: "partial-variation",
    term: "Partial Variation",
    category: "Algebra",
    keywords: ["initial value", "y-intercept", "fixed cost"],
    definition: "A relationship where the dependent variable is the sum of a fixed part and a variable part.",
    rigorousNote: "Represented by $y = mx + b$ where $b \\neq 0$. The graph is a straight line that does **not** pass through $(0,0)$.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "A taxi charges $\$5$ just to get in, plus $\$2$ per km. What is the equation?",
    sampleAnswer: "**$y = 2x + 5$**."
  },
  
  {
    id: "outliers",
    term: "Outliers",
    category: "Data Literacy",
    keywords: ["data", "skew", "mean", "median", "statistics"],
    definition: "A data point that is significantly different from the other values in a data set.",
    rigorousNote: "Outliers have a massive impact on the **Mean**, but usually very little impact on the **Median** or **Mode**.",
    source: "Ontario Grade 7/8 Curriculum",
    exampleQuestion: "In the set $\{2, 3, 3, 4, 100\}$, which number is the outlier?",
    sampleAnswer: "**100**."
  },
  {
    id: "appreciation-depreciation",
    term: "Appreciation vs. Depreciation",
    category: "Financial Literacy",
    keywords: ["value", "increase", "decrease", "assets"],
    definition: "**Appreciation** is an increase in value over time (e.g., a house). **Depreciation** is a decrease in value over time (e.g., a car).",
    rigorousNote: "Used to teach students about assets and the 'cost of ownership'. In math, depreciation is often modeled as a percentage decrease.",
    source: "Ontario Grade 9 Financial Literacy",
    exampleQuestion: "A car loses $15\\%$ of its value every year. Is this appreciation or depreciation?",
    sampleAnswer: "**Depreciation**."
  },
  {
    id: "hexagon",
    term: "Hexagon",
    category: "Geometry",
    keywords: ["6 sides", "polygon", "interior angles"],
    definition: "A polygon with **six sides** and six angles.",
    rigorousNote: "In a **regular hexagon**, all sides are equal and each interior angle is $120^\circ$. The sum of the interior angles is $(6-2) \times 180 = 720^\circ$.",
    source: "Ontario Elementary Curriculum",
    exampleQuestion: "What is the sum of the interior angles of a hexagon?",
    sampleAnswer: "**$720^\circ$**"
  },
  
  {
    id: "pentagon",
    term: "Pentagon",
    category: "Geometry",
    keywords: ["5 sides", "polygon", "sum of angles"],
    definition: "A polygon with **five sides** and five angles.",
    rigorousNote: "The sum of the interior angles is $(5-2) \times 180 = 540^\circ$. A regular pentagon has interior angles of $108^\circ$.",
    source: "Ontario Elementary Curriculum",
    exampleQuestion: "How many diagonals can be drawn from one vertex of a pentagon?",
    sampleAnswer: "**2 diagonals** (forming 3 triangles)."
  },
  {
    id: "octagon",
    term: "Octagon",
    category: "Geometry",
    keywords: ["8 sides", "stop sign", "polygon"],
    definition: "A polygon with **eight sides** and eight angles.",
    rigorousNote: "The sum of interior angles is $1080^\circ$. A stop sign is a classic example of a regular octagon.",
    source: "Ontario Elementary Curriculum",
    exampleQuestion: "If an octagon is regular, what is the measure of each interior angle?",
    sampleAnswer: "$1080 / 8 = **135^\circ$**."
  },

  {
    id: "pythagorean-theorem",
    term: "Pythagorean Theorem",
    category: "Geometry",
    keywords: ["right triangle", "hypotenuse", "a2+b2=c2", "legs"],
    definition: "In a **right-angled triangle**, the square of the hypotenuse is equal to the sum of the squares of the other two sides.",
    rigorousNote: "Formula: $a^2 + b^2 = c^2$. The **hypotenuse** ($c$) is always the longest side and is opposite the $90^\circ$ angle.",
    source: "Ontario Grade 8 Curriculum",
    exampleQuestion: "A right triangle has legs of $6$ cm and $8$ cm. What is the length of the hypotenuse?",
    sampleAnswer: "$6^2 + 8^2 = 36 + 64 = 100$. $\sqrt{100} = **10$ cm**."
  },
  
  {
    id: "oat-theorem",
    term: "Opposite Angle Theorem (OAT)",
    category: "Geometry",
    keywords: ["intersecting lines", "vertically opposite", "angles"],
    definition: "When two lines intersect, the angles opposite each other are **equal**.",
    rigorousNote: "Also called **Vertically Opposite Angles**. They share a vertex but no sides.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "Two lines intersect. If one angle is $50^\circ$, what is the measure of the angle directly across from it?",
    sampleAnswer: "**$50^\circ$**."
  },
  
  {
    id: "sat-theorem",
    term: "Supplementary Angle Theorem (SAT)",
    category: "Geometry",
    keywords: ["straight line", "180 degrees", "adjacent"],
    definition: "Angles that lie on a straight line add up to **$180^\circ$**.",
    rigorousNote: "If two angles are supplementary and adjacent, they form a **linear pair**.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "Angle X and Angle Y are on a straight line. If Angle X is $120^\circ$, what is Angle Y?",
    sampleAnswer: "$180 - 120 = **60^\circ$**."
  },

 
  {
    id: "binomial-expansion",
    term: "FOIL Method / Binomial Expansion",
    category: "Algebra",
    keywords: ["expanding", "brackets", "first outside inside last"],
    definition: "A technique for multiplying two binomials.",
    rigorousNote: "FOIL stands for **First, Outside, Inside, Last**. $(a+b)(c+d) = ac + ad + bc + bd$.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "Expand: $(x + 2)(x + 3)$.",
    sampleAnswer: "$x^2 + 3x + 2x + 6 = **x^2 + 5x + 6$**."
  },
  {
    id: "factoring-simple",
    term: "Common Factoring",
    category: "Algebra",
    keywords: ["dividing", "simplifying", "GCF", "brackets"],
    definition: "The process of dividing out the **Greatest Common Factor (GCF)** from every term in a polynomial.",
    rigorousNote: "The inverse of the **Distributive Property**. Example: $3x + 9$ factors to $3(x + 3)$.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "Factor the expression: $5x^2 - 10x$.",
    sampleAnswer: "**$5x(x - 2)$**."
  },

  {
    id: "unit-rate",
    term: "Unit Rate",
    category: "Number Sense",
    keywords: ["ratio", "comparison", "per unit"],
    definition: "A comparison of two quantities where the second quantity is **one** (e.g., $\$5$ per hour).",
    rigorousNote: "Used extensively in **Proportional Reasoning** and financial literacy contexts.",
    source: "Ontario Grade 6 Curriculum",
    exampleQuestion: "If $5$ apples cost $\$2.50$, what is the unit rate?",
    sampleAnswer: "$2.50 / 5 = **\$0.50$ per apple**."
  },
  {
    id: "coefficient",
    term: "Coefficient",
    category: "Algebra",
    keywords: ["number", "variable", "multiplier"],
    definition: "The numerical factor that multiplies a variable in an algebraic term.",
    rigorousNote: "In the term $-7x^2$, the coefficient is **$-7$**. If no number is shown (like in $x$), the coefficient is an invisible **$1$**.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "What is the coefficient in the term $\frac{2}{3}y$?",
    sampleAnswer: "**$2/3$**."
  },
  {
    id: "translation",
    term: "Translation",
    category: "Geometry",
    keywords: ["slide", "move", "vector", "transformation"],
    definition: "Moving a shape from one location to another without changing its size, shape, or orientation.",
    rigorousNote: "Often described using a **translation vector** or coordinates (e.g., 'move 3 units right, 2 units down' or $(x+3, y-2)$).",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "If you translate point $(1, 1)$ by moving it 4 units right, what are the new coordinates?",
    sampleAnswer: "**$(5, 1)$**"
  },
  
  {
    id: "reflection",
    term: "Reflection",
    category: "Geometry",
    keywords: ["flip", "mirror", "axis of symmetry"],
    definition: "A transformation that 'flips' a shape over a **line of reflection**.",
    rigorousNote: "Every point in the original image is the same distance from the central line as the corresponding point in the reflected image.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "What happens to the point $(2, 3)$ if it is reflected over the y-axis?",
    sampleAnswer: "The x-coordinate flips sign: **$(-2, 3)$**."
  },
  
  {
    id: "rotation",
    term: "Rotation",
    category: "Geometry",
    keywords: ["turn", "center of rotation", "degrees", "clockwise"],
    definition: "Turning a shape around a fixed point called the **center of rotation**.",
    rigorousNote: "Described by the **direction** (clockwise/counter-clockwise) and the **angle** (e.g., $90^\circ, 180^\circ$).",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "If you rotate a shape $180^\circ$, does it matter if you go clockwise or counter-clockwise?",
    sampleAnswer: "**No**, $180^\circ$ in either direction results in the same position."
  },
  
  {
    id: "dilation",
    term: "Dilation",
    category: "Geometry",
    keywords: ["scale factor", "enlarge", "reduce", "similar shapes"],
    definition: "A transformation that changes the size of a figure but not its shape.",
    rigorousNote: "Uses a **scale factor** ($k$). If $k > 1$, the shape enlarges. If $0 < k < 1$, the shape reduces. The resulting shapes are **similar**, not congruent.",
    source: "Ontario Grade 9 Curriculum",
    exampleQuestion: "A square with side length 5 is dilated by a scale factor of 3. What is the new side length?",
    sampleAnswer: "$5 \times 3 = **15$ units**."
  },

 {
    id: "distributive-property",
    term: "Distributive Property",
    category: "Algebra",
    keywords: ["expanding", "brackets", "multiplication"],
    definition: "Multiplying a single term by two or more terms inside a set of parentheses.",
    rigorousNote: "Formula: $a(b + c) = ab + ac$. For example: $2(x + 3) = 2x + 6$.",
    source: "Grade 9 Curriculum",
    exampleQuestion: "Expand: $-3(x - 4)$",
    sampleAnswer: "**$-3x + 12$**"
  },
  
  {
    id: "greatest-common-factor",
    term: "Greatest Common Factor (GCF)",
    category: "Number Sense",
    keywords: ["factors", "dividing", "simplifying fractions"],
    definition: "The largest number that divides exactly into two or more numbers.",
    rigorousNote: "Essential for **simplifying fractions** to their lowest terms.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "What is the GCF of 12 and 18?",
    sampleAnswer: "Factors of 12: 1, 2, 3, 4, **6**, 12. Factors of 18: 1, 2, 3, **6**, 9, 18. GCF is **6**."
  },
  {
    id: "least-common-multiple",
    term: "Lowest Common Multiple (LCM)",
    category: "Number Sense",
    keywords: ["multiples", "common denominator", "skip counting"],
    definition: "The smallest number that is a multiple of two or more numbers.",
    rigorousNote: "Essential for finding a **common denominator** when adding or subtracting fractions.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "What is the LCM of 4 and 6?",
    sampleAnswer: "Multiples of 4: 4, 8, **12**, 16. Multiples of 6: 6, **12**, 18. LCM is **12**."
  },
  {
    id: "ratio",
    term: "Ratio",
    category: "Number Sense",
    keywords: ["comparison", "proportion", "colon"],
    definition: "A comparison of two or more quantities with the same units.",
    rigorousNote: "Can be written in three ways: **$a:b$**, **$a$ to $b$**, or as a fraction **$\frac{a}{b}$**.",
    source: "Ontario Grade 6 Curriculum",
    exampleQuestion: "In a bag of 3 red marbles and 5 blue marbles, what is the ratio of red to blue?",
    sampleAnswer: "**$3:5$**"
  },
  {
    id: "irrational-numbers",
    term: "Irrational Numbers",
    category: "Number Sense",
    keywords: ["decimals", "non-repeating", "non-terminating", "pi", "roots"],
    definition: "Numbers that cannot be expressed as a simple fraction $\frac{p}{q}$ where $p$ and $q$ are integers.",
    rigorousNote: "An irrational number has a decimal expansion that neither terminates nor becomes periodic (repeats). Rigorously, they are the set of real numbers $x \in \mathbb{R}$ such that $x \notin \mathbb{Q}$. Examples include $\pi$, $e$, and $\sqrt{2}$.",
    source: "Ontario Grade 9 Curriculum / Number Theory",
    exampleQuestion: "Is $0.121121112...$ (where the number of 1s increases) rational or irrational?",
    sampleAnswer: "**Irrational**, because the pattern is non-repeating and non-terminating."
  },
  
  {
    id: "real-numbers",
    term: "Real Numbers (R)",
    category: "Number Sense",
    keywords: ["number line", "rational", "irrational", "continuum"],
    definition: "The set of all possible values that can be represented on a continuous number line.",
    rigorousNote: "The set $R$ is the unique **complete ordered field**. Rigorously, it is the union of the set of rational numbers ($Q$) and the set of irrational numbers ($I$). Every point on a line corresponds to a unique real number.",
    source: "Secondary Mathematics",
    exampleQuestion: "True or False: Every integer is a real number.",
    sampleAnswer: "**True**. Integers are a subset of rational numbers, which are a subset of real numbers."
  },
  {
    id: "imaginary-numbers",
    term: "Imaginary Numbers",
    category: "Number Sense",
    keywords: ["i", "square root of negative", "complex"],
    definition: "Numbers that, when squared, result in a negative value.",
    rigorousNote: "Defined by the unit $i$, where $i = \sqrt{-1}$ (or more rigorously, $i^2 = -1$). They allow for solutions to equations like $x^2 + 1 = 0$, which have no real solutions.",
    source: "Advanced Functions / STEM",
    exampleQuestion: "Simplify $\sqrt{-25}$.",
    sampleAnswer: "$\sqrt{25} \times \sqrt{-1} = **5i**$."
  },
  {
    id: "complex-numbers",
    term: "Complex Numbers (C)",
    category: "Number Sense",
    keywords: ["real part", "imaginary part", "a+bi"],
    definition: "Numbers consisting of a real part and an imaginary part, written in the form $a + bi$.",
    rigorousNote: "The set $C$ is an algebraic closure of the real numbers. Rigorously, a complex number is an ordered pair $(a, b)$ of real numbers, satisfying specific laws of addition and multiplication where $(0, 1)^2 = (-1, 0)$.",
    source: "University Preparatory Math",
    exampleQuestion: "In the complex number $7 - 3i$, what is the real part?",
    sampleAnswer: "The real part is **7**."
  },
  
  {
    id: "quaternion-numbers",
    term: "Quaternions (H)",
    category: "Number Sense",
    keywords: ["Hamilton", "4D", "non-commutative", "rotation"],
    definition: "A number system that extends complex numbers into four dimensions.",
    rigorousNote: "Formulated by William Rowan Hamilton, written as $q = a + bi + cj + dk$, where $i^2 = j^2 = k^2 = ijk = -1$. Unlike real or complex numbers, quaternions are **non-commutative** ($ij \neq ji$), meaning the order of multiplication matters.",
    source: "Advanced Mathematics / Computer Graphics",
    exampleQuestion: "Why are quaternions used in 3D game programming instead of simple angles?",
    sampleAnswer: "They avoid 'Gimbal Lock' and provide smoother calculations for **3D rotations**."
  },
  {
    id: "natural-numbers",
    term: "Natural Numbers (N)",
    category: "Number Sense",
    keywords: ["counting numbers", "positive integers"],
    definition: "The set of numbers used for counting, starting from 1.",
    rigorousNote: "Defined by the **Peano Axioms**. In Ontario, $N = \{1, 2, 3, ...\}$. (Note: In some set theories, 0 is included, but usually 0 is reserved for 'Whole Numbers' in K-8).",
    source: "Ontario Elementary Curriculum",
    exampleQuestion: "Is 0 a natural number?",
    sampleAnswer: "**No** (in the context of the Ontario K-8 curriculum)."
  },
  {
    id: "whole-numbers",
    term: "Whole Numbers",
    category: "Number Sense",
    keywords: ["0", "counting", "positive"],
    definition: "All natural numbers plus the number zero.",
    rigorousNote: "The set $\{0, 1, 2, 3, ...\}$. It represents the set of non-negative integers.",
    source: "Ontario Elementary Curriculum",
    exampleQuestion: "What is the smallest whole number?",
    sampleAnswer: "**0**."
  },
  {
    id: "integers",
    term: "Integers (Z)",
    category: "Number Sense",
    keywords: ["negative numbers", "zero", "positives"],
    definition: "A set of whole numbers and their opposites (positives, negatives, and zero).",
    rigorousNote: "The set $Z = \{..., -2, -1, 0, 1, 2, ...\}$. It is a **ring** under addition and multiplication.",
    source: "Ontario Grade 7 Curriculum",
    exampleQuestion: "Is $-4.5$ an integer?",
    sampleAnswer: "**No**, integers must be whole values (no decimals or fractions)."
  },
  
  {
    id: "additive-identity",
    term: "Additive Identity",
    category: "Number Sense",
    keywords: ["zero", "neutral element", "property"],
    definition: "The number which, when added to any number, does not change the value of that number.",
    rigorousNote: "In any group or ring, it is the element $e$ (usually $0$) such that $a + e = a$ for all $a$.",
    source: "Ontario Grade 6 Curriculum",
    exampleQuestion: "What is the additive identity of $15$?",
    sampleAnswer: "**0** ($15 + 0 = 15$)."
  },

  {
    id: "group-theory",
    term: "Group",
    category: "Abstract Algebra",
    keywords: ["symmetry", "set", "binary operation", "associative"],
    definition: "A set equipped with an operation that combines any two elements to form a third element while satisfying four specific axioms.",
    rigorousNote: "A set $G$ and operation $\cdot$ must satisfy: **Closure, Associativity, Identity**, and **Invertibility**. Groups are the mathematical language of symmetry.",
    source: "Modern Algebra",
    exampleQuestion: "Is the set of integers under addition a group?",
    sampleAnswer: "**Yes**. It has an identity (0), every element has an inverse (its negative), and it is associative."
  },
  {
    id: "ring-theory",
    term: "Ring",
    category: "Abstract Algebra",
    keywords: ["addition", "multiplication", "algebraic structure"],
    definition: "An algebraic structure that generalizes the arithmetic of integers.",
    rigorousNote: "A set $R$ with two binary operations (usually $+$ and $\times$). It is an abelian group under $+$, and a monoid under $\times$, where multiplication distributes over addition.",
    source: "Modern Algebra",
    exampleQuestion: "What is the main difference between a group and a ring?",
    sampleAnswer: "A **Group** has one operation; a **Ring** has two (addition and multiplication)."
  },
  {
    id: "finite-fields",
    term: "Finite Field",
    category: "Abstract Algebra",
    keywords: ["cryptography", "coding theory", "prime power"],
    definition: "A field that contains a finite number of elements.",
    rigorousNote: "A field $F$ where the number of elements (order) is always a **prime power** $p^n$. They are fundamental in computer science, specifically in **cryptography** (AES) and error-correction codes.",
    source: "Galois Theory",
    exampleQuestion: "Why are finite fields important in technology?",
    sampleAnswer: "They allow for secure **encryption** and data transmission."
  },
  {
    id: "galois-theory",
    term: "Galois Theory",
    category: "Abstract Algebra",
    keywords: ["polynomials", "roots", "solvability", "field extensions"],
    definition: "A connection between field theory and group theory used to understand the roots of polynomials.",
    rigorousNote: "It proves that there is no general 'quintic formula' (for degree 5) because the **Galois Group** of such polynomials is not solvable. It links field extensions to symmetry groups.",
    source: "Galois Theory",
    exampleQuestion: "What famous problem did Galois solve?",
    sampleAnswer: "He proved why there is **no general algebraic formula** for finding roots of 5th-degree polynomials."
  },
  {
    id: "category-theory",
    term: "Category Theory",
    category: "Abstract Algebra",
    keywords: ["objects", "morphisms", "functors", "abstraction"],
    definition: "The 'Mathematics of Mathematics'; it studies the relationships between different mathematical structures.",
    rigorousNote: "A Category consists of **Objects** and **Morphisms** (arrows between objects). It focuses on the mapping between structures (Functors) rather than the contents of the sets themselves.",
    source: "Advanced Mathematics / Haskell",
    exampleQuestion: "What is the focus of Category Theory?",
    sampleAnswer: "It focuses on the **relationships (morphisms)** between structures rather than the structures themselves."
  },
  {
    id: "scheme-theory",
    term: "Scheme",
    category: "Algebraic Geometry",
    keywords: ["Grothendieck", "spectrum", "locally ringed space", "variety"],
    definition: "A mathematical structure that generalizes algebraic varieties to include infinitesimal and non-reduced behaviors.",
    rigorousNote: "A **Scheme** is a locally ringed space $(X, O_X)$ that is locally isomorphic to the **spectrum** $Spec(R)$ of some commutative ring $R$. It bridges the gap between abstract algebra and geometry by allowing any ring to be viewed as the ring of functions on a geometric space.",
    source: "Ravi Vakil, \"The Rising Sea\"",
    exampleQuestion: "How does a Scheme differ from a classical algebraic variety?",
    sampleAnswer: "A Scheme can handle **nilpotent elements** (infinitesimals) and can be defined over any commutative ring, not just algebraically closed fields."
  },
  {
    id: "mean",
    term: "Arithmetic Mean",
    category: "Data Literacy",
    keywords: ["Data Sets"],
    definition: "The sum of a set of values divided by the number of values.",
    rigorousNote: "The arithmetic mean of a sample is always between the largest and smallest values in that sample.",
    source: "Grades 4-8 Curriculum",
    exampleQuestion: "What is the mean of the following set of numbers? $[1,6,17,19,100]$",
    sampleAnswer: "$\\frac{1+6+17+19+100}{5}=28.6$"
  },
  {
    id: "median",
    term: "Median",
    category: "Data Literacy",
    keywords: ["Data Sets"],
    definition: "The midpoint of a set of numbers. In a sorted list of numbers, the median is the number which appears in the cetral position (or is the mean of the centre two values.",
    rigorousNote: "The basic feature of the median in describing data compared to the mean is that it is not skewed by a small proportion of extreme values, and therefore provides a better representation of the center.",
    source: "Grades 4-8 Curriculum",
    exampleQuestion: "What is the median of the following dataset? $[45, 19, 56, 123, 7, 24]$",
    sampleAnswer: "Sort the set to $[7,19,24,45,26,123]$. The middle two values are $[24,45]$, so the median is $\\frac{24+45}{2}=\\frac{69}{2}=34.5$ "
  },
  {
    id: "mode",
    term: "Mode",
    category: "Data Literacy",
    keywords: ["Data Sets"],
    definition: "The value (or values) that appear(s) most frequently in a data set.",
    rigorousNote: "A data set can have multiple modes if two or more values appear the maximum number of times.",
    source: "Grades 4-8 Curriculum",
    exampleQuestion: "What is the mode of the following data set? $[3, 1, 2, 3, 4, 2, 17, 2, 19]$",
    sampleAnswer: "2"
  },
  {
    id: "range-average",
    term: "Range (Data)",
    category: "Data Literacy",
    keywords: ["Data Sets"],
    definition: "The difference between the largest and smallest values in a data set.",
    rigorousNote: "The range provides an indication of statistical dispersion. Closely related alternative measures are the Interdecile range and the Interquartile range. ",
    source: "Grades 4-8 Curriculum",
    exampleQuestion: "What is the range of the following dataset? $[45, 19, 56, 123, 7, 24]$",
    sampleAnswer: "$123-7=116$"
  }
];



const answerDropdownStyle = (darkMode) => ({
  backgroundColor: darkMode ? '#333' : '#f9f9f9',
  padding: '15px',
  borderRadius: '8px',
  marginTop: '20px',
  border: `1px solid ${darkMode ? '#444' : '#ddd'}`
});