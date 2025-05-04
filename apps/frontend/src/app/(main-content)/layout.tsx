import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar'; 
import PathNavigator from '@/components/ui/PathNavigator';

interface MainContentLayoutProps {
  children: React.ReactNode;
}

export default function MainContentLayout({ children }: MainContentLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Left sidebar - fixed */}
      <div className="">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col">
        {/* Top navigation path bar */}
        <div className="">
          <PathNavigator />
        </div>
        
        {/* Main content area - changes based on route */}
        <div className="flex-1 p-6 overflow-auto bg-[#fdfdfd]">
          {children}
        </div>
      </div>
    </div>
  );
}
