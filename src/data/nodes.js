export const nodes = [
  {
    id: 'A1',
    title: 'Whole Numbers & Place Value',
    lesson: 'Learn to read, write, compare whole numbers, and understand place value up to millions.',
    questions: [
      { question: 'What is the value of the 7 in 372,496?', options: ['70,000','7,000','700','7,000,000'], answer: '70,000' },
      { question: 'Which number is greater: 450,321 or 452,312?', options: ['450,321','452,312','They are equal','Cannot determine'], answer: '452,312' },
      { question: 'Round 236,478 to the nearest thousand.', options: ['236,000','237,000','236,500','240,000'], answer: '236,000' },
      { question: 'What is the digit in the hundred-thousands place in 689,234?', options: ['6','8','9','2'], answer: '6' },
      { question: 'Write 402,019 in words.', options: ['Four hundred two thousand nineteen','Four hundred twenty thousand nineteen','Four hundred two thousand ninety','Four hundred thousand nineteen'], answer: 'Four hundred two thousand nineteen' },
      { question: 'Which number comes next: 399,999, 400,000, ?', options: ['400,001','400,010','400,100','401,000'], answer: '400,001' },
      { question: 'Compare: 78,345 ___ 78,354', options: ['<','>','=', 'Cannot determine'], answer: '<' },
      { question: 'What is the value of the digit 3 in 63,287?', options: ['30,000','3,000','300','3'], answer: '3,000' },
      { question: 'Round 589,741 to the nearest hundred.', options: ['589,700','589,740','589,750','590,000'], answer: '589,700' },
      { question: 'Which of these numbers is the smallest?', options: ['452,312','452,132','452,321','452,231'], answer: '452,132' }
    ],
    mastery: 0,
    unlocked: true,
    children: ['A2']
  },
  {
    id: 'A2',
    title: 'Operations with Whole Numbers',
    lesson: 'Learn addition, subtraction, multiplication, and division of whole numbers.',
    questions: [
      { question: 'What is 345 + 678?', options: ['1,023','1,013','1,033','1,025'], answer: '1,023' },
      { question: 'What is 2,345 - 1,678?', options: ['667','657','677','687'], answer: '667' },
      { question: 'Multiply: 123 × 12', options: ['1,476','1,452','1,482','1,488'], answer: '1,476' },
      { question: 'Divide 1,560 ÷ 12', options: ['130','120','140','150'], answer: '130' },
      { question: 'Which is correct: 234 × 0 = ?', options: ['0','234','1','Cannot determine'], answer: '0' },
      { question: 'Find the product of 25 × 36', options: ['900','860','950','925'], answer: '900' },
      { question: 'What is 1,000 - 478?', options: ['522','512','532','502'], answer: '522' },
      { question: 'Add: 1,234 + 5,678', options: ['6,912','6,812','6,902','6,922'], answer: '6,912' },
      { question: 'Divide 840 ÷ 7', options: ['120','110','130','100'], answer: '120' },
      { question: 'Subtract 3,210 - 2,145', options: ['1,065','1,055','1,075','1,095'], answer: '1,065' }
    ],
    mastery: 0,
    unlocked: false,
    children: ['A3']
  },
  {
    id: 'A3',
    title: 'Integers',
    lesson: 'Learn to add, subtract, multiply, and divide integers.',
    questions: [
      { question: 'What is -5 + 8?', options: ['3','-13','13','-3'], answer: '3' },
      { question: 'Subtract: -7 - 3', options: ['-10','10','4','-4'], answer: '-10' },
      { question: 'Multiply: -6 × 7', options: ['-42','42','13','-13'], answer: '-42' },
      { question: 'Divide: -48 ÷ 6', options: ['-8','8','-6','6'], answer: '-8' },
      { question: 'Which is greater: -3 or -7?', options: ['-3','-7','Equal','Cannot determine'], answer: '-3' },
      { question: 'Add: -12 + -5', options: ['-17','17','7','-7'], answer: '-17' },
      { question: 'Subtract: 10 - (-4)', options: ['14','6','-6','-14'], answer: '14' },
      { question: 'Multiply: -9 × -2', options: ['18','-18','11','-11'], answer: '18' },
      { question: 'Divide: 36 ÷ -4', options: ['-9','9','-8','8'], answer: '-9' },
      { question: 'Which is smaller: -15 or -12?', options: ['-15','-12','Equal','Cannot determine'], answer: '-15' }
    ],
    mastery: 0,
    unlocked: false,
    children: ['A4']
  },
  {
    id: 'A4',
    title: 'Fractions — Concepts',
    lesson: 'Learn to identify, compare, and simplify fractions.',
    questions: [
      { question: 'Which fraction is larger: 3/4 or 5/8?', options: ['3/4','5/8','Equal','Cannot determine'], answer: '3/4' },
      { question: 'Simplify 12/16', options: ['3/4','6/8','2/3','3/5'], answer: '3/4' },
      { question: 'Convert 5/10 to lowest terms', options: ['1/2','5/10','2/5','1/5'], answer: '1/2' },
      { question: 'Which fraction is equivalent to 2/3?', options: ['4/6','3/4','2/5','1/3'], answer: '4/6' },
      { question: 'Compare 7/8 and 13/16', options: ['7/8','13/16','Equal','Cannot determine'], answer: '7/8' },
      { question: 'Is 9/12 greater than 3/4?', options: ['Equal','9/12 is greater','3/4 is greater','Cannot determine'], answer: 'Equal' },
      { question: 'Simplify 18/24', options: ['3/4','6/8','3/5','2/3'], answer: '3/4' },
      { question: 'Which is smaller: 5/6 or 4/5?', options: ['4/5','5/6','Equal','Cannot determine'], answer: '4/5' },
      { question: 'Convert 7/14 to lowest terms', options: ['1/2','1/4','1/7','2/7'], answer: '1/2' },
      { question: 'Which fraction is largest: 2/3, 3/5, 5/8?', options: ['2/3','3/5','5/8','Equal'], answer: '2/3' }
    ],
    mastery: 0,
    unlocked: false,
    children: ['A5']
  },
  {
    id: 'A5',
    title: 'Fractions — Operations',
    lesson: 'Learn to add, subtract, multiply, and divide fractions.',
    questions: [
      { question: 'Add: 1/4 + 2/4', options: ['3/4','1/2','2/3','1/1'], answer: '3/4' },
      { question: 'Subtract: 5/6 - 1/3', options: ['1/2','2/3','1/3','3/4'], answer: '1/2' },
      { question: 'Multiply: 2/3 × 3/4', options: ['1/2','1/3','1/4','2/3'], answer: '1/2' },
      { question: 'Divide: 3/5 ÷ 6/10', options: ['1','1/2','2','3/4'], answer: '1' },
      { question: 'Add: 7/8 + 1/8', options: ['1','7/16','3/4','1/2'], answer: '1' },
      { question: 'Subtract: 9/10 - 3/5', options: ['3/10','6/10','1/2','2/5'], answer: '3/10' },
      { question: 'Multiply: 5/6 × 3/5', options: ['1/2','1/3','1/6','1'], answer: '1/2' },
      { question: 'Divide: 4/7 ÷ 2/7', options: ['2','1/2','1','3/2'], answer: '2' },
      { question: 'Add: 2/5 + 3/10', options: ['7/10','1/2','3/5','5/10'], answer: '7/10' },
      { question: 'Subtract: 3/4 - 1/2', options: ['1/4','1/2','1/3','1/8'], answer: '1/4' }
    ],
    mastery: 0,
    unlocked: false,
    children: []
  }
];