import React from 'react';
import { BookOpen, Star, Trophy } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master the SAT with Proven Methods
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Join thousands of students who improved their SAT scores by 200+ points
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Get the eBook
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Try Free Resources
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Star className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p className="text-indigo-100">Average score improvement of 200+ points</p>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Guide</h3>
            <p className="text-indigo-100">Step-by-step strategies for every section</p>
          </div>
          <div className="flex flex-col items-center">
            <Trophy className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student Success</h3>
            <p className="text-indigo-100">Thousands of satisfied students</p>
          </div>
        </div>
      </div>
    </div>
  );
}