import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function RightPanel() {
  return (
    <div className="w-80 hidden xl:block">
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Trending Skills</h2>
        <div className="space-y-4">
          {[
            { skill: 'Machine Learning', growth: '+25%' },
            { skill: 'Blockchain', growth: '+18%' },
            { skill: 'UI/UX Design', growth: '+15%' },
          ].map((item) => (
            <div key={item.skill} className="flex items-center justify-between">
              <span className="text-gray-600">{item.skill}</span>
              <div className="flex items-center text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                {item.growth}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Suggested Connections</h2>
        <div className="space-y-4">
          {[
            {
              name: 'Alex Thompson',
              role: 'Product Manager',
              avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              name: 'Emma Wilson',
              role: 'UX Designer',
              avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          ].map((person) => (
            <div key={person.name} className="flex items-center space-x-4">
              <img src={person.avatar} alt="" className="w-10 h-10 rounded-full" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                <p className="text-sm text-gray-500 truncate">{person.role}</p>
              </div>
              <button className="inline-flex items-center px-3 py-1 border border-blue-600 rounded-full text-sm font-medium text-blue-600 hover:bg-blue-50">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}