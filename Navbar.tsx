import React from 'react';
import { BookOpen, Home, LineChart, Newspaper, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <GraduationCap className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">SAT Master Prep</span>
          </Link>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink to="/" icon={<Home className="h-4 w-4" />}>Home</NavLink>
              <NavLink to="/resources" icon={<BookOpen className="h-4 w-4" />}>Resources</NavLink>
              <NavLink to="/practice" icon={<LineChart className="h-4 w-4" />}>Practice Tests</NavLink>
              <NavLink to="/blog" icon={<Newspaper className="h-4 w-4" />}>Blog</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, children }: { to: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
}