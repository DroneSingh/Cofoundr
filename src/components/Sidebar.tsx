import React from 'react';
import { Home, Users, Briefcase, TrendingUp, Calendar, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 hidden lg:block">
      <div className="bg-white rounded-lg shadow p-4">
        <nav className="space-y-2">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
            <Home className="h-5 w-5 mr-3" />
            <span className="font-medium">Home</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Users className="h-5 w-5 mr-3" />
            <span>Network</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Briefcase className="h-5 w-5 mr-3" />
            <span>Projects</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <TrendingUp className="h-5 w-5 mr-3" />
            <span>Trending</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Calendar className="h-5 w-5 mr-3" />
            <span>Events</span>
          </a>
        </nav>

        <div className="mt-8">
          <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Your Interests
          </h3>
          <div className="mt-2 flex flex-wrap gap-2 px-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              AI/ML
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              SaaS
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              FinTech
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}