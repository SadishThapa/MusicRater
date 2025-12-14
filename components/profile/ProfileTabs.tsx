// components/profile/ProfileTabs.tsx
'use client';

import { useState } from 'react';

interface ProfileTabsProps {
  children: React.ReactNode[];
  tabNames: string[];
}

export default function ProfileTabs({ children, tabNames }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-700/50 mb-8">
        {tabNames.map((name, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              px-6 py-3 text-lg font-semibold transition-colors duration-200 
              ${
                activeTab === index
                  ? 'text-[#8D8CE7] border-b-2 border-[#8D8CE7]'
                  : 'text-gray-400 hover:text-white'
              }
            `}
          >
            {name}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div>
        {children[activeTab]}
      </div>
    </div>
  );
}