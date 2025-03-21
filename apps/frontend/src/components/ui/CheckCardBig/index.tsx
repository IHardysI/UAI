'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/components/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

import Close from '../../../../public/icons/close.svg';
import LeftArrow from '../../../../public/icons/left-round-arrow.png';
import Image from 'next/image';

const checkCardSmVariants = cva(
  'gap-5 shadow-base rounded-base flex items-start text-regular',
  {
    variants: {
      variant: {
        default: 'text-cBlack bg-cWhite',
        gray: 'text-cBlack/50 bg-cGray',
        green: 'text-cBlack/50 bg-cLime',
        yellow: 'text-cBlack/50 bg-cYellow',
        orange: 'text-cBlack/50 bg-cSun',
      },
      size: {
        default: 'w-[370px] p-[15px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const textVariants = cva('font-bold', {
  variants: {
    color: {
      primary: 'text-cBlack/50',
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
  indicatorType?: 'check' | 'cross';
  subLabel?: string;
  bulletPoints?: string[];
}

export const CheckCardBig: React.FC<CheckCardProps> = ({
  className,
  variant = 'default',
  size,
  id,
  label,
  labelColor = 'primary',
  indicatorType,
  subLabel = 'Головна тема дня',
  bulletPoints,
  ...props
}) => {
  const hasBullets = bulletPoints && bulletPoints.length > 0;

  return (
    <div
      className={cn(checkCardSmVariants({ variant, size, className }))}
      {...props}>
      <Checkbox id={id} indicatorType={indicatorType} />

      <div className="flex flex-col w-[242px]">
        <p className={cn(textVariants({ color: labelColor }))}>{label}</p>

        {hasBullets ? (
          <ul className="mt-1 list-disc list-inside font-regular">
            {bulletPoints?.map((point, idx) => <li key={idx}>{point}</li>)}
          </ul>
        ) : (
          <p className="mt-1 font-regular">{subLabel}</p>
        )}
      </div>

      {variant === 'default' ? (
        <div className="ml-auto flex self-start cursor-pointer">
          <Close className="duration-300 opacity-100" />
        </div>
      ) : variant === 'gray' ? (
        <div className="ml-auto flex self-start cursor-pointer">
          <Image src={LeftArrow} alt="arrow" />
        </div>
      ) : variant === 'yellow' ? (
        <div className="ml-auto flex self-start cursor-pointer">
          <Close className="duration-300 opacity-10 hover:opacity-50" />
        </div>
      ) : variant === 'orange' ? (
        <div className="ml-auto flex self-start cursor-pointer">
          <Close className="duration-300 opacity-10 hover:opacity-50" />{' '}
        </div>
      ) :variant === 'green' ? (
        <div className="ml-auto flex self-start cursor-pointer">
          <Close className="duration-300 opacity-50" />{' '}
        </div>
      ) : undefined}
    </div>
  );
};

export default CheckCardBig;
