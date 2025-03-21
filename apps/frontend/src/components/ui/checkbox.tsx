'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, X } from 'lucide-react';
import { cn } from '@/components/lib/utils';

interface ExtendedCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  indicatorType?: 'check' | 'cross';
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  ExtendedCheckboxProps
>(({ className, indicatorType = 'check', ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-6 w-6 shrink-0 rounded-sm border-2 border-cBlack shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed opacity-50 data-[state=checked]:bg-transparent data-[state=checked]:text-cBlack',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
      {indicatorType === 'cross' ? (
        <X className="h-6 w-6" />
      ) : (
        <Check className="h-6 w-6" />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = 'Checkbox';

export { Checkbox };
