'use client';

import { Button } from '@/components/ui/button';
import { CheckCard, CheckCardGroup } from '@/components/ui/CheckCard';
import { useState } from 'react';

export default function ChooseTime() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleValueChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: add form submission logic here with the selected option: selectedOption
  };

  return (
    <form
      className="w-full flex-1 flex flex-col justify-center items-center space-y-[40px]"
      onSubmit={handleSubmit}>
      <h1 className="text-biggest font-bold">
        Скільки часу в тебе є на блог?
      </h1>
      <CheckCardGroup value={selectedOption || ''} onValueChange={handleValueChange}>
        <div className="flex flex-col gap-[20px]">
          <CheckCard
            id="check-green"
            value="check-green"
            label="Менше 1 год на день"
            variant="green"
          />
          <CheckCard
            id="check-default-1"
            value="check-default-1"
            label="Менше 1 год на день"
            variant="default"
          />
          <CheckCard
            id="check-default-2"
            value="check-default-2"
            label="Менше 1 год на день"
            variant="default"
          />
        </div>
      </CheckCardGroup>
      <Button
        type="submit"
        variant="default"
        size="default">
        Далі
      </Button>
    </form>
  );
}
