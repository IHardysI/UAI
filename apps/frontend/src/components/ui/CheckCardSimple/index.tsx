"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

const checkCardSimpleVariants = cva(
  "relative border-l-2 border-cBlack p-[1px] pl-[22px] text-regular",
  {
    variants: {
      variant: {
        default: "text-cBlack",
      },
      size: {
        default: "w-[699px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CheckCardSimpleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof checkCardSimpleVariants> {
  id: string;
  typeOfContent?: string;
  nameOfContent?: string;
  textOfContent?: string;
  initiallyChecked?: boolean;
}

export const CheckCardSimple: React.FC<CheckCardSimpleProps> = ({
  className,
  variant,
  size,
  id,
  typeOfContent = "Type of content",
  nameOfContent = "Name of content",
  textOfContent = "Text of content",
  initiallyChecked = false,
  ...props
}) => {
  const [checked, setChecked] = React.useState<boolean>(initiallyChecked);

  const handleChange = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  const textClasses = checked
    ? "text-cBlack/30 line-through"
    : "text-cBlack";

  return (
    <div className={cn(checkCardSimpleVariants({ variant, size, className }))} {...props}>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(val) => handleChange(val === true)}
        className="
          absolute
          top-2
          right-2
          cursor-pointer
        "
      />

      <div className="">
        <span className={cn("mb-1 text-regularHuge font-light", textClasses)}>
          {typeOfContent}
        </span>
        <h3 className={cn("mb-1.5 text-normalLarge font-medium", textClasses)}>
          {nameOfContent}
        </h3>
        <p className={cn("font-light text-regularHuge !text-cBlack/50", textClasses)}>
          {textOfContent}
        </p>
      </div>
    </div>
  );
};

export default CheckCardSimple;
