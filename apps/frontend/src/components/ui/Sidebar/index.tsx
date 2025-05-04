"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '~/images/uai/uai-logo.svg'
import GridEdit from '~/icons/grid-edit.svg'
import Grid6 from '~/icons/grid-6.svg'
import Calendar2 from '~/icons/calendar-2.svg'
import Setting from '~/icons/setting.svg'
import Logout from '~/icons/logout.svg'

// Define type for navigation items
interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

// Define sidebar navigation items
const navigationItems: NavItem[] = [
  { name: 'База даних', href: '/database', icon: <GridEdit /> },
  { name: 'Контент план', href: '#', icon: <Grid6 /> },
  { name: 'Календар', href: '#', icon: <Calendar2 /> },
  // Add more navigation items as needed
];

// Define footer navigation items
const footerNavItems: NavItem[] = [
  { name: 'Налаштування', href: '#', icon: <Setting /> },
  { name: 'Вихід', href: '#', icon: <Logout /> },
];

export function Sidebar() {
  const pathname = usePathname();

  // Function to render navigation links with consistent styling
  const renderNavLink = (item: NavItem) => {
    const isActive = pathname === item.href;
    return (
      <Link
        key={item.name}
        href={item.href}
        className={`group relative flex items-center h-[24px] px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? 'text-white' 
            : 'text-white/50 hover:text-white'
        }`}
      >
        {/* Active indicator */}
        {isActive ? (
          <span className="w-[5px] h-[15px] bg-white rounded-tr-[3px] rounded-br-[3px] absolute -left-[40px]"></span>
        ) : (
          <span className="w-[5px] h-[15px] bg-white/0 group-hover:bg-white rounded-tr-[3px] rounded-br-[3px] absolute -left-[40px] transition-colors"></span>
        )}
        <span className={`mr-[20px] ${
          isActive 
            ? 'opacity-100' 
            : 'opacity-50 group-hover:opacity-100'
        }`}>
          {item.icon}
        </span>
        {item.name}
      </Link>
    );
  };

  return (
    <div className="h-full py-[27px] pl-[40px] pr-[20px] flex flex-col w-[229px] bg-cBlack shadow-sidebar">
      <div className="mb-8 px-3">
        <Logo className="text-white fill-white opacity-100 [&>*]:fill-white [&>*]:opacity-100 [&_path]:fill-white [&_svg]:fill-white" style={{ filter: 'brightness(0) invert(1)', opacity: 1 }} />
      </div>
      
      <nav className="space-y-[40px] flex-1">
        {navigationItems.map(renderNavLink)}
      </nav>
      
      <div className="space-y-[40px] mt-auto">
        {footerNavItems.map(renderNavLink)}
      </div>
    </div>
  );
} 