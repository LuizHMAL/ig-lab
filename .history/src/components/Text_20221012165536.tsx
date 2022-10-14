import { clsx } from 'clsx';

export interface TextProps {
    size?: 'ms' | 'lg' |'md';
    children : string;
}
export function Text({ size = 'md', children } : TextProps) {
    return(
        <span 
        className={clsx(
            'text-gray-100 font-sans',
            {
                'text-sm' : size === 'md',
                'text-md' : size === 'lg',      
                'text-xs' : size === 'sm',

            }            
            )} 
        >
                {children}
                </span>
    )
} 