import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See how our resources helped students achieve their dream scores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              score: "1550",
              improvement: "+320",
              quote: "The study strategies completely changed how I approached the SAT."
            },
            {
              name: "Michael Chen",
              score: "1500",
              improvement: "+250",
              quote: "Clear explanations and plenty of practice materials made all the difference."
            },
            {
              name: "Emily Rodriguez",
              score: "1480",
              improvement: "+200",
              quote: "The personalized study schedule helped me stay on track and focused."
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-indigo-600">
                  Final Score: {testimonial.score} ({testimonial.improvement} points)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}