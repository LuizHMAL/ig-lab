interface TextProps {
    size?: 'ms' | 'lg' |'md' | 'lg';
}
export function Text({size = 'md'}: TextProps) {
    return(
        <span className="text-gray-100" font-sans >Hello World</span>
    )
} 