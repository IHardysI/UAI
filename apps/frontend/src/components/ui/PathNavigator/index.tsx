'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

// Import the sidebar navigation items to maintain consistency
import GridEdit from '~/icons/grid-edit.svg'
import Grid6 from '~/icons/grid-6.svg'
import Calendar2 from '~/icons/calendar-2.svg'
import InfoCircle from '~/icons/info-circle.svg'

// Matching the sidebar navigation structure for consistency
const navigationItems = [
  { name: 'База даних', href: '/database', icon: <GridEdit /> },
  { name: 'Контент план', href: '/content', icon: <Grid6 /> },
  { name: 'Календар', href: '/calendar', icon: <Calendar2 /> },
];

// Example user data - replace with actual data source
const user = {
  name: 'User Name',
  avatar: '/avatars/default.png'
};

export default function PathNavigator() {
  const pathname = usePathname();
  
  // Find the active sidebar item
  const activeNavItem = navigationItems.find(item => 
    pathname.startsWith(item.href) && item.href !== '/'
  );
  
  // Skip empty segments and create breadcrumb items
  let pathSegments = pathname
    .split('/')
    .filter(segment => segment !== '')
    .filter(segment => !segment.startsWith('(') && !segment.endsWith(')'));
  
  // Check if we're on a database page
  const isDatabasePage = pathSegments.some(segment => segment === 'database');
  
  // If we have an active nav item and it corresponds to the first path segment,
  // replace the display name with the sidebar item name
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const isLast = index === pathSegments.length - 1;
    const isFirst = index === 0;
    
    // Use sidebar item name for the first segment if it matches
    let displayName = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
    
    // If this is the first segment and it matches a sidebar item, use the sidebar item name
    if (isFirst && activeNavItem && href === activeNavItem.href) {
      displayName = activeNavItem.name;
    }
    
    return (
      <React.Fragment key={segment}>
        <li className="flex items-center">
          {isLast ? (
            <span className={`${isFirst ? 'text-[#cBlack] text-2xl font-bold' : 'text-foreground font-normal'}`}>
              {displayName}
            </span>
          ) : (
            <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors">
              {displayName}
            </Link>
          )}
          {isLast && isDatabasePage && (
            <div className="flex items-center ml-2.5">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="cursor-pointer">
                    <InfoCircle className="text-muted-foreground hover:text-foreground transition-colors" />
                  </button>
                </PopoverTrigger>
                <PopoverContent 
                  className="p-5 w-[474px] text-regularLarge font-base" 
                  side="bottom" 
                  align="start"
                  sideOffset={9}
                >
                  Це твоя база даних. Відповідай на питання, щоб вони стали зеленими. Коли заповниш шкалу рівня внизу – отримаєш новий Рівень Обізнаності і згодом нові можливості. Чим більше питань – тим точніше система створюватиме контент.
                </PopoverContent>
              </Popover>
            </div>
          )}
        </li>
        {!isLast && (
          <li className="mx-5">
            <span className="text-muted-foreground">/</span>
          </li>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className="flex justify-between items-center h-[90px] pl-[30px] pr-[26px] py-0 shadow-base border-b border-border">
      <nav aria-label="Breadcrumb" className="flex items-center h-full">
        <ol className="flex items-center h-full">
          {breadcrumbs}
        </ol>
      </nav>
      
      <div className="flex items-center h-full">
        <span className="text-regularLarge font-normal mr-[16px]">{user.name}</span>
        <Avatar className="h-[40px] w-[40px] rounded-[8px]">
          <AvatarImage src={user.avatar} alt={user.name} className="rounded-[8px]" />
          <AvatarFallback className="rounded-[8px]">{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
} 