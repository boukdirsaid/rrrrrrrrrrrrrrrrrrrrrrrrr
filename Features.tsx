import React from 'react';
import { BookOpen, Brain, Clock, Target } from 'lucide-react';

export function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive resources designed for maximum score improvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
              title: "Study Materials",
              description: "Access comprehensive guides and practice materials"
            },
            {
              icon: <Target className="h-8 w-8 text-indigo-600" />,
              title: "Practice Tests",
              description: "Full-length tests with detailed explanations"
            },
            {
              icon: <Brain className="h-8 w-8 text-indigo-600" />,
              title: "Strategy Guides",
              description: "Expert tips and proven techniques"
            },
            {
              icon: <Clock className="h-8 w-8 text-indigo-600" />,
              title: "Study Plans",
              description: "Personalized schedules for optimal preparation"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}