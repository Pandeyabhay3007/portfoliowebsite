declare module 'react' {
  export = React;
  export as namespace React;
}

declare module 'react/jsx-runtime' {
  export = React;
  export as namespace React;
}

declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
  }
  
  export const Download: FC<IconProps>;
  export const ArrowDown: FC<IconProps>;
  export const Sparkles: FC<IconProps>;
  export const Code: FC<IconProps>;
  export const Cpu: FC<IconProps>;
  export const PhoneCall: FC<IconProps>;
  export const Mail: FC<IconProps>;
  export const MapPin: FC<IconProps>;
  // Add other icons as needed
} 