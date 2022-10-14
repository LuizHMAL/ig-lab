interface TextProps {
    size?: 'ms' | 'lg' |'md' | 'lg';
}
export function Text(props: TextProps) {
    return(
        <span className="text-gray-100" font-sans >Hello World</span>
    )
} 