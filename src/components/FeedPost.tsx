import React from 'react';
import { MessageSquare, Heart, Share2 } from 'lucide-react';

interface FeedPostProps {
  avatar: string;
  name: string;
  role: string;
  time: string;
  content: string;
  skills: string[];
  likes: number;
  comments: number;
}

export default function FeedPost({ avatar, name, role, time, content, skills, likes, comments }: FeedPostProps) {
  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-4">
        <div className="flex items-center">
          <img className="h-12 w-12 rounded-full" src={avatar} alt="" />
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">{role}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-500">{time}</span>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600">{content}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="border-t px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Heart className="h-5 w-5" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <MessageSquare className="h-5 w-5" />
              <span>{comments}</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}