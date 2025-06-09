import { ButtonHTMLAttributes, ReactNode } from 'react';

declare module '@/components/ui/button' {
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
    children?: ReactNode;
  }

  export const Button: React.FC<ButtonProps>;
} 