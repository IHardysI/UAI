'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react'; 

export default function ResetPassword() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    
    router.push('/code');
  };

  return (
    <div className="flex flex-col items-center font-base">
      <h1 className="text-biggest font-bold mb-5">Відновлення пароля</h1>
      <p className="font-light text-regular mb-[30px] max-w-[383px]">
        Введіть свою адресу електронної пошти, на яку прийде посилання з кодом
        для скидання пароля.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center gap-[35px]">
        <div className='w-[373px]'>
          <Input
            type="email"
            name="email"
            placeholder="Ваш email"
            shadow="shadow-purple-drop"
            required
          />
        </div>
        <Button className="font-light text-small text-cWhite" type="submit">
          Далі
        </Button>
      </form>
    </div>
  );
}
