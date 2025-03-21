'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import Eye from '~/icons/eye.svg';
import ClosedEye from '~/icons/eye-slash.svg';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center font-base">
      <h1 className="mb-5 text-biggest font-bold">Вхід</h1>
      <p className="font-light text-regular">
        Увійдіть у свій обліковий запис.
      </p>
      <form className="relative w-full mt-[30px] flex flex-col items-center gap-4">
        <div className='w-[373px]'>
          <Input
            className=""
            type="email"
            placeholder="Ваш email"
            shadow="shadow-purple-drop"
          />
        </div>
        <div className="relative w-[373px]">
          <Input
            className=""
            type={showPassword ? 'text' : 'password'}
            placeholder="Ваш пароль"
            shadow="shadow-blue-drop"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="opacity-20 absolute top-1/2 -translate-y-1/2 right-4"
            aria-label={showPassword ? 'Схаваць пароль' : 'Паказаць пароль'}>
            {showPassword ? <ClosedEye /> : <Eye />}
          </button>
        </div>
        <div className="w-full flex justify-end">
          <Link
            href="/reset-password"
            className="text-small text-cBlack/30 font-light">
            Забули пароль?
          </Link>
        </div>
        <Button
          className="mt-[66px] font-light text-small text-cWhite"
          type="submit">
          Вхід
        </Button>
      </form>
    </div>
  );
}
