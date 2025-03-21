"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/lib/utils";

import Plus from "../../../../public/icons/+.svg";
import Check from "../../../../public/icons/check.svg";
import Edit from "../../../../public/icons/edit.svg";
import Drag from "../../../../public/icons/drag.svg";

type IconChoice = "edit" | "check" | "none";

const DragCardVariants = cva(
  "gap-[15px] text-cBlack shadow-base rounded-base flex items-center text-regular",
  {
    variants: {
      variant: {
        default: "bg-cWhite",
        sun: "bg-cSun",
        green: "bg-cLime",
        purple: "bg-cLavender",
        skeleton:
          "group shadow-none border-2 border-dashed border-[#E5E5E5] rounded-[10px] text-cBlack/10 text-[22px] w-full justify-center p-5 cursor-pointer hover:border-cBlack/50",
      },
      size: {
        default: "w-[268px] py-[11px] pl-[10px] pr-[12.87px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface DragCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof DragCardVariants> {
  id: string;
  title: string;
  description: string;
  labelColor?: "primary" | "secondary";
  plusIconColor?: string;
  iconChoice?: IconChoice;
}

export const DragCard: React.FC<DragCardProps> = ({
  className,
  variant = "default",
  size,
  id,
  title,
  description,
  labelColor = "primary",
  plusIconColor,
  iconChoice = "edit", 
  ...props
}) => {
  if (variant === "skeleton") {
    return (
      <div className={cn(DragCardVariants({ variant, size, className }))} {...props}>
        <Plus
          className={cn(
            "text-cBlack/10 transition-colors duration-200 hover:text-cBlack/50",
            plusIconColor
          )}
        />
      </div>
    );
  }

  const renderIcon = () => {
    if (iconChoice === "edit") return <Edit />;
    if (iconChoice === "check") return <Check />;
    return null;
  };

  const textColorClass =
    labelColor === "primary" ? "text-cBlack" : "text-cBlack/50";

  return (
    <div className="relative">
      <div className={cn(DragCardVariants({ variant, size, className }))} {...props}>
        <div className="w-[227px]">
          <h3 className={cn("mb-[7px] text-regular font-bold", textColorClass)}>
            {title}
          </h3>
          <p className={cn("text-smallLarge", textColorClass)}>{description}</p>
        </div>

        <div className="relative -top-4 cursor-pointer text-cBlack/30 transition-colors duration-200 hover:text-cBlack/70">
          {renderIcon()}
        </div>
      </div>

      <Drag className="text-cBlack/20 hover:text-cBlack/50 duration-300  cursor-pointer absolute left-[-17px] top-1/2 -translate-y-1/2 object-contain" />
    </div>
  );
};

export default DragCard;
