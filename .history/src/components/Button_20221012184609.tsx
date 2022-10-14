import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
export interface ButtonProps {
    size?: 'sm' | 'lg' |'md';
    children : ReactNode;
    asChild? : boolean;
}
export function Button({ size = 'md', children, asChild } : ButtonProps) {
    const Comp = asChild? Slot : 'h2';
    return(
        <Comp 
        className={clsx(
            'text-gray-100 font-bold',
            {
                'text-lg' : size === 'sm',
                'text-xl' : size === 'md',
                'text-2xl' : size === 'lg',      
              
            }            
            )} 
        >
                {children}
                </Comp>
    )
} 