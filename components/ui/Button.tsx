'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  asChild?: boolean;
}

const buttonVariants = {
  primary: 'bg-[#1a365d] text-white hover:bg-[#0f2439] active:bg-[#0a1f33] focus-visible:ring-[#d4af37] shadow-lg hover:shadow-xl',
  secondary: 'bg-[#f7fafc] text-[#1a365d] hover:bg-[#e2e8f0] active:bg-[#cbd5e0] focus-visible:ring-[#d4af37] border border-[#e2e8f0]',
  outline: 'border-2 border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white active:bg-[#0f2439] focus-visible:ring-[#d4af37]',
  ghost: 'text-[#4a5568] hover:bg-[#f7fafc] active:bg-[#e2e8f0] focus-visible:ring-[#d4af37]',
  gold: 'bg-[#d4af37] text-[#1a365d] hover:bg-[#f4d03f] active:bg-[#c9a227] focus-visible:ring-[#d4af37] font-bold shadow-lg hover:shadow-xl',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[52px]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-semibold',
        'transition-all duration-150 ease-out',
        'hover:scale-[1.02] active:scale-[0.98]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        'min-w-[44px]', // Minimum touch target
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

