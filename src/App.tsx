import React from 'react';
import { Users, Rocket, MessageSquare, Search, BriefcaseIcon, TrendingUp, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import FeedPost from './components/FeedPost';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <Sidebar />
          <main className="flex-grow max-w-2xl">
            <div className="bg-white rounded-lg shadow mb-6 p-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-grow bg-gray-50 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-100">
                  <p className="text-gray-500">Share what you're working on...</p>
                </div>
              </div>
              <div className="flex gap-4 mt-4 pt-4 border-t">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Rocket size={20} />
                  <span>Project</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <BriefcaseIcon size={20} />
                  <span>Looking for</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Star size={20} />
                  <span>Skills</span>
                </button>
              </div>
            </div>

            <FeedPost
              avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Sarah Chen"
              role="Technical Co-Founder"
              time="2h"
              content="Looking for a business co-founder for my AI-powered EdTech startup. We're building a platform that personalizes learning paths using ML. Already have an MVP and early traction. Ideal co-founder would have experience in B2B SaaS sales and edu market."
              skills={['B2B Sales', 'EdTech', 'Business Development']}
              likes={42}
              comments={12}
            />

            <FeedPost
              avatar="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Michael Roberts"
              role="Business Developer"
              time="5h"
              content="Serial entrepreneur with 2 successful exits in FinTech. Looking for a technical co-founder who's passionate about blockchain and DeFi. I have the network and business plan, need someone who can lead the technical execution."
              skills={['FinTech', 'Blockchain', 'DeFi']}
              likes={89}
              comments={24}
            />
          </main>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;