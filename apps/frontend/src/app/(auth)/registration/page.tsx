'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import Eye from '~/icons/eye.svg';
import ClosedEye from '~/icons/eye-slash.svg';
import Link from 'next/link';

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center font-base">
      <h1 className="mb-5 text-biggest font-bold">Реєстрація</h1>
      <p className="font-light text-regular">
      Введіть свої дані для створення акаунту.
      </p>
      <form className="relative w-[513px] mt-[30px] flex flex-col items-center gap-4">
        <div className='flex gap-4 w-full'>
          <Input
            className="w-1/2"
            type="text"
            placeholder="Ваше ім’я"
            shadow="shadow-pink-drop"
          />
          <Input
            className="w-1/2"
            type="text"
            placeholder="Ваше прізвище"
            shadow="shadow-pink-drop"
          />
        </div>
        <Input
          className=""
          type="email"
          placeholder="Ваш email"
          shadow="shadow-purple-drop"
        />
        <div className="relative w-full">
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
        <Button
          className="mt-[66px] font-light text-small text-cWhite"
          type="submit">
          Зареєструватись
        </Button>
      </form>
    </div>
  );
}
