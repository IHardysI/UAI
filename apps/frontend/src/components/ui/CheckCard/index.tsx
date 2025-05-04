'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/components/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const radioCardVariants = cva('rounded-base flex items-center text-medium font-bold justify-between', {
  variants: {
    variant: {
      default: 'bg-cWhite shadow-base',
      green: 'bg-cLime shadow-base-bg',
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

// Individual RadioCard Item props
export interface RadioCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof radioCardVariants> {
  id: string;
  label: string;
  labelColor?: 'primary' | 'secondary';
  value: string;
}

// Individual RadioCard Item component
export const RadioCard: React.FC<RadioCardProps> = ({
  className,
  variant = 'default',
  size,
  id,
  value,
  label,
  labelColor = 'primary',
  ...props
}) => {
  return (
    <div
      className={cn(radioCardVariants({ variant, size, className }))}
      {...props}>
      <p className={cn(textVariants({ color: labelColor }), 'w-[242px]')}>
        {label}
      </p>
      <RadioGroupItem id={id} value={value || id} />
    </div>
  );
};

// Props for the RadioCardGroup component
export interface RadioCardGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroup> {
  children: React.ReactNode;
  className?: string;
}

// RadioCardGroup component that wraps children in a RadioGroup
export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RadioGroup className={cn("space-y-4", className)} {...props}>
      {children}
    </RadioGroup>
  );
};

// Maintain backward compatibility
export const CheckCard = RadioCard;
export const CheckCardGroup = RadioCardGroup;

export default RadioCard;
