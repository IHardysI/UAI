'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/components/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

const checkCardSmVariants = cva('rounded-base flex items-center text-medium font-bold justify-between shadow-base', {
  variants: {
    variant: {
      default: 'bg-cWhite',
      green: 'bg-cLime',
    },
    size: {
      default: 'w-[414px] pl-[50px] pr-[29px] py-[29px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const textVariants = cva('', {
  variants: {
    color: {
      primary: 'text-cBlack',
      secondary: 'text-cBlack',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export interface CheckCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof checkCardSmVariants> {
  id: string;
  label: string;
  labelColor?: 'primary' | 'secondary';
}

export const CheckCard: React.FC<CheckCardProps> = ({
  className,
  variant = 'default',
  size,
  id,
  label,
  labelColor = 'primary',
  ...props
}) => {
  return (
    <div
      className={cn(checkCardSmVariants({ variant, size, className }))}
      {...props}>
      <p className={cn(textVariants({ color: labelColor }), 'w-[242px]')}>
        {label}
      </p>
      <Checkbox id={id} />
    </div>
  );
};

export default CheckCard;
