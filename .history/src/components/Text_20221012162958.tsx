import { clsx } from 'clsx';

interface TextProps {
    size?: 'ms' | 'lg' |'md' | 'lg';
    children : string;
}
export function Text({size = 'md'}: TextProps) {
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
                Hello World
                </span>
    )
} 