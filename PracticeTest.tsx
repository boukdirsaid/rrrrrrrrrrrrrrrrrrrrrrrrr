import React, { useState, useEffect, useCallback } from 'react';
import { Clock, ChevronLeft, ChevronRight, Flag, Check, AlertCircle } from 'lucide-react';
import { questions } from './questions';

export function PracticeTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [flagged, setFlagged] = useState<boolean[]>(Array(questions.length).fill(false));
  const [timeLeft, setTimeLeft] = useState(65 * 60); // 65 minutes in seconds
  const [isFinished, setIsFinished] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleFinish = useCallback(() => {
    setIsFinished(true);
    setIsPaused(true);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft, handleFinish]);

  useEffect(() => {
    let timer: number;
    if (timeLeft > 0 && !isFinished && !isPaused) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isFinished, isPaused]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer: string) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = answer;
      return newAnswers;
    });
  };

  const toggleFlag = () => {
    setFlagged(prev => {
      const newFlagged = [...prev];
      newFlagged[currentQuestion] = !newFlagged[currentQuestion];
      return newFlagged;
    });
  };

  const calculateScore = () => {
    return answers.reduce((count, answer, index) => 
      answer === questions[index].correctAnswer ? count + 1 : count, 0);
  };

  const QuestionNavigation = () => (
    <div className="flex flex-wrap gap-2 mb-6">
      {questions.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentQuestion(index)}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-medium
            ${currentQuestion === index ? 'bg-indigo-600 text-white' : 
              answers[index] ? 'bg-green-100 text-green-800' : 
              'bg-gray-100 text-gray-600'}
            ${flagged[index] ? 'ring-2 ring-red-500' : ''}
          `}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {!isFinished ? (
          <>
            {/* Timer and Controls */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center text-lg font-semibold">
                  <Clock className="mr-2 h-5 w-5 text-indigo-600" />
                  {formatTime(timeLeft)}
                </div>
                <button
                  onClick={() => setIsPaused(prev => !prev)}
                  className={`px-4 py-2 rounded-md ${
                    isPaused ? 'bg-green-600' : 'bg-yellow-600'
                  } text-white`}
                >
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
              </div>
            </div>

            <QuestionNavigation />

            {/* Question */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">
                  {questions[currentQuestion].question}
                </h2>
                <button
                  onClick={toggleFlag}
                  className={`p-2 rounded-full ${
                    flagged[currentQuestion]
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Flag className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      answers[currentQuestion] === option
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="flex items-center px-4 py-2 rounded-lg bg-white shadow-md disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous
              </button>

              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleFinish}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
                >
                  Finish Test
                </button>
              ) : (
                <button
                  onClick={() =>
                    setCurrentQuestion((prev) =>
                      Math.min(questions.length - 1, prev + 1)
                    )
                  }
                  className="flex items-center px-4 py-2 rounded-lg bg-white shadow-md"
                >
                  Next
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              )}
            </div>
          </>
        ) : (
          // Results View
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Test Results</h2>
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {calculateScore()} / {questions.length}
              </div>
              <p className="text-gray-600">
                Score: {Math.round((calculateScore() / questions.length) * 800)}
              </p>
            </div>

            <div className="space-y-6">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    answers[index] === question.correctAnswer
                      ? 'bg-green-50'
                      : 'bg-red-50'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="mr-3">
                      {answers[index] === question.correctAnswer ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium mb-2">{question.question}</p>
                      <p className="text-sm text-gray-600">
                        Your answer: {answers[index] || 'Not answered'}
                      </p>
                      <p className="text-sm text-gray-600">
                        Correct answer: {question.correctAnswer}
                      </p>
                      {answers[index] !== question.correctAnswer && (
                        <p className="text-sm text-red-600 mt-2">
                          {question.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}