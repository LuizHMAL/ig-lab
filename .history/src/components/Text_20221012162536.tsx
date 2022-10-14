import { clsx } from 'clsx';

interface TextProps {
    size?: 'ms' | 'lg' |'md' | 'lg';
}
export function Text({size = 'md'}: TextProps) {
    return(
        <span 
        className={clsx(
            'text-gray-100 font-sans',{

})} 
        >
                Hello World
                </span>
    )
} 