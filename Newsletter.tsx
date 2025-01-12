import React from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <div className="bg-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Free SAT Practice Questions
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Sign up to receive daily practice questions and study tips
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-800 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}