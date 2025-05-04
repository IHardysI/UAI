"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

import Close from "../../../../public/icons/close.svg";
import LeftArrow from "../../../../public/icons/left-round-arrow.png";
import Danger from "../../../../public/icons/danger.svg";
import Image from "next/image";
import Plus from "../../../../public/icons/+.svg";

const checkCardSmVariants = cva(
  "gap-5 shadow-base rounded-base flex items-center text-regular",
  {
    variants: {
      variant: {
        default: "text-cBlack bg-cWhite",
        gray: "p-5 text-cBlack/50 bg-cGray",
        green: "p-5 text-cBlack/50 bg-cLime",
        yellow: "p-5 text-cBlack/50 bg-cYellow",
        skeleton:
          "duration-200 group shadow-none border-2 border-dashed border-[#E5E5E5] rounded-[10px] text-cBlack/10 text-[22px] w-full justify-center p-5 cursor-pointer hover:border-cBlack/50",
      },
      size: {
        default: "w-[370px] p-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CheckCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof checkCardSmVariants> {
  id: string;
  label: string;
  labelColor?: "primary" | "secondary";
  plusIconColor?: string; 
}

export const CheckCardSm: React.FC<CheckCardProps> = ({
  className,
  variant = "default",
  size,
  id,
  label,
  labelColor = "primary",
  plusIconColor,
  ...props
}) => {
  if (variant === "skeleton") {
    return (
      <div className={cn(checkCardSmVariants({ variant, size, className }))} {...props}>
        <Plus
          className={cn(
            "text-cBlack/10 transition-colors duration-200",
            "group-hover:text-cBlack/50",
            plusIconColor
          )}
        />
      </div>
    );
  }

  return (
    <div className={cn(checkCardSmVariants({ variant, size, className }))} {...props}>
      {variant === "yellow" ? (
        <div className="w-6 h-6 flex items-center justify-center">
          <Danger className="w-6 h-6 flex-shrink-0" />
        </div>
      ) : (
        <div className="w-6 h-6 flex items-center justify-center">
          <Checkbox id={id} className="w-6 h-6" />
        </div>
      )}
      <p className="w-[242px]">{label}</p>
      {variant === "default" ? (
        <div className="ml-auto flex self-start cursor-pointer">
          <Close className="duration-300 opacity-100 opacity-10 hover:opacity-50" />
        </div>
      ) : variant === "gray" ? (
        <div className="ml-auto flex self-start cursor-pointer">
          <Image src={LeftArrow} alt="arrow" />
        </div>
      ) : variant === "yellow" ? (
        null
      ) : null}
    </div>
  );
};

export default CheckCardSm;
