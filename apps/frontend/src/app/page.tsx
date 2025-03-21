import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

import uaiBack from '~/images/uai/auth/uai-first.png';
import UaiLogo from '~/images/uai/uai-logo.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login page',
};

export default function Home() {
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

      <div className="flex w-full flex-col md:w-1/2 relative">
        <div className="flex-1 flex items-center justify-center overflow-y-auto">
          <div>
            <h1 className="flex flex-col items-center font-bold text-biggest mb-[35px]">Почнімо?👋</h1>
            <div className="flex gap-[19px] ">
              <Button asChild>
                <Link href="/login">Вхід</Link>
              </Button>
              <Button asChild>
                <Link href="/registration">Реєстрація</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[53px] left-1/2 -translate-x-1/2 flex justify-center">
          <UaiLogo className="" />
        </div>
      </div>
    </main>
  );
}
