import { clsx } from 'clsx';

export interface TextInputProps {

}
export function TextInput() {
    return(
        <input 
        className={clsx(
            'py-4 px-3 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400',
            )}
        />
    )
} 