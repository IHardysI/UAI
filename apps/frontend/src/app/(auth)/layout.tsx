import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

import uaiBack from '~/images/uai/auth/uai-first.png'
import UaiLogo from '~/images/uai/uai-logo.svg'

export const metadata: Metadata = {
  title: 'Auth page',
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex h-screen w-full text-base">
      <div className="relative hidden w-1/2 md:block">
        <Image
          src={uaiBack} 
          alt="Auth Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative flex w-full flex-col md:w-1/2">
        <div className="flex-1 flex items-center justify-center overflow-y-auto p-8">
          {children}
        </div>

        <div className="absolute bottom-[53px] left-1/2 -translate-x-1/2 flex justify-center">
          <UaiLogo />
        </div>
      </div>
    </main>
  );
}
