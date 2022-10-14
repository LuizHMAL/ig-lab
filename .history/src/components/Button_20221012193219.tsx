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
            'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300'
            )} 
        >
                {children}
                </Comp>
    )
} 