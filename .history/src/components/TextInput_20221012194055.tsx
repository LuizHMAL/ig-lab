import { clsx } from 'clsx';
import { ReactNode } from 'react';
export interface TextInputProps {
    size?: 'sm' | 'lg' |'md';
    children : ReactNode;
    asChild? : boolean;
}
export function TextInput({ size = 'md', children, asChild } : TextInputProps) {
    const Comp = asChild? Slot : 'h2';
    return(
        <Comp 
        className={clsx(
            'py-4 px-3 rounded font-semibold text-black text-sm w-full bg-cyan-500 transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'
            )} 
        >
                {children}
                </Comp>
    )
} 