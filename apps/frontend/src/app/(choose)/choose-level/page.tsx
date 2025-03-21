"use client"

import ChooseCard from "@/components/ui/ChooseCard";
import { blogLevelParams } from "@/components/entities/blogLevelParams";

export default function ChooseLevel() {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center">
      <h1 className="text-biggest font-bold mb-5">
      Який в тебе рівень блогу? 🚀
      </h1>
      <p className="font-light text-regular mb-[30px] max-w-[459px] text-center">
      Не соромся, якщо тільки починаєш! Від рівня блогу залежить тип контенту і підказок, які тобі буде генерувати AI
      </p>
      <div className="flex gap-[30px]">
      {blogLevelParams.map((card) => (
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
