import type { Metadata } from 'next';

import UaiLogo from '~/images/uai/uai-logo.svg'

export const metadata: Metadata = {
  title: 'Auth page',
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex flex-col h-screen w-full text-base">
      {children}
      <div className="pb-[50px] w-full flex justify-center items-center">
        <UaiLogo />
      </div>
    </main>
  );
}
