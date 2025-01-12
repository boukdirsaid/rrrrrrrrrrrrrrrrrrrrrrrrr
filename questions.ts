interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    question: "The author's primary purpose in the passage is to...",
    options: [
      "argue against a popular misconception",
      "explain a historical development",
      "analyze a literary technique",
      "compare competing theories"
    ],
    correctAnswer: "explain a historical development",
    explanation: "The passage focuses on tracing the development of a historical event or process."
  },
  {
    question: "Which choice best describes the overall structure of the passage?",
    options: [
      "chronological narrative",
      "compare and contrast",
      "problem and solution",
      "cause and effect analysis"
    ],
    correctAnswer: "chronological narrative",
    explanation: "The passage presents events in the order they occurred over time."
  },
  {
    question: "The author suggests that the primary reason for...",
    options: [
      "economic factors",
      "social pressure",
      "technological advancement",
      "political ideology"
    ],
    correctAnswer: "technological advancement",
    explanation: "The passage emphasizes how technological changes drove the described developments."
  },
  {
    question: "Based on the passage, which statement best describes...",
    options: [
      "It led to immediate changes",
      "It had unintended consequences",
      "It was widely misunderstood",
      "It faced significant opposition"
    ],
    correctAnswer: "It had unintended consequences",
    explanation: "The passage discusses several unexpected outcomes that resulted from the initial changes."
  },
  {
    question: "The author's tone in the passage can best be described as...",
    options: [
      "objective and analytical",
      "critical and skeptical",
      "enthusiastic and optimistic",
      "concerned and cautionary"
    ],
    correctAnswer: "objective and analytical",
    explanation: "The author maintains a neutral, fact-based approach throughout the passage."
  }
];