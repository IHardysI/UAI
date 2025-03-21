"use client"

import ChooseCard from "@/components/ui/ChooseCard";
import { assistantParams } from '@/components/entities/assistantParams.ts'

export default function ChooseAi() {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center">
      <h1 className="text-biggest font-bold mb-5">
        Обери собі AI асистента 🤖
      </h1>
      <p className="font-light text-regular mb-[30px] max-w-[459px] text-center">
        Він буде спілкуватись з тобою, дізнаватись більше про твоє життя і
        допомагати роботи твій блог краще
      </p>
      <div className="flex gap-[30px]">
      {assistantParams.map((card) => (
        <div className="">
          <ChooseCard
            key={card.id}
            id={card.id}
            text={card.text}
            photo={card.photo}
            voice={card.voice}
            shadow={card.shadow}
          />
          <h3 className="text-center mt-[30px] mb-2 font-bold text-huge">{card.name}</h3>
          <p className="text-center font-light text-regular">{card.description}</p>
        </div>
      ))}
      </div>
    </div>
  );
}
