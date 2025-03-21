"use client";

import * as React from "react";
import { cn } from "@/components/lib/utils";

interface DotsPaginationProps {
  currentPage: number;
  totalPages: number;
  
  onDotClick: (page: number) => void;
  className?: string;
}


export function DotsPagination({
  currentPage,
  totalPages,
  onDotClick,
  className,
}: DotsPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={cn("flex items-center justify-center gap-[15px]", className)}
    >
      {pages.map((page) => {
        let colorClass = "bg-[#D9D9D9]"; 
        if (page < currentPage) {
          colorClass = "bg-cLime"; 
        } else if (page === currentPage) {
          colorClass = "bg-cBlack";
        }

        return (
          <div
            key={page}
            onClick={() => onDotClick(page)}
            className={cn(
              "h-[15px] w-[15px] rounded-full cursor-pointer",
              colorClass
            )}
          />
        );
      })}
    </div>
  );
}

/** пример массива с вопросами 
const questionsData = [
  { id: 1, text: "Пытанне №1" },
  { id: 2, text: "Пытанне №2" },
  { id: 3, text: "Пытанне №3" },
  { id: 4, text: "Пытанне №4" },
  { id: 5, text: "Пытанне №5" },
  { id: 6, text: "Пытанне №6" },
  { id: 7, text: "Пытанне №7" },
  { id: 8, text: "Пытанне №8" },
  { id: 9, text: "Пытанне №9" },
];**/
