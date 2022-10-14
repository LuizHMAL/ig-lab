import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
export interface TextProps {
    size?: 'sm' | 'lg' |'md';
    children : string;
}
export function Text({ size = 'md', children } : TextProps) {
    return(
        <span 
        className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs' : size === 'sm',
                'text-sm' : size === 'md',
                'text-md' : size === 'lg',      
              
            }            
            )} 
        >
                {children}
                </span>
    )
} 