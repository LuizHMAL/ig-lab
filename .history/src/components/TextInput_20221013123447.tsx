import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
placeholder?: string;
}
interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props: TextInputProps){
    return(
        <div className="py-4 px-3 rounded w-full outline-none bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 focus:ring-2 ring cyan-300" >
            {props.children}
            </div>
    )
}

function TextInputIcon(){}

function TextInputInput(props: TextInputProps) {
    return(
        
       
        <input 
        className={clsx(
           
            )}
            {...props} 
        />
        
    )
} 