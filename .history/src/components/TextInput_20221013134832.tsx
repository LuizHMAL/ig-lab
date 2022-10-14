import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

interface TextInputRootProps{
    children: ReactNode;
}


function TextInputRoot(props: TextInputRootProps){
    return(
        <div className="flex items-center gap-3 py-4 px-3 rounded w-full outline-none bg-gray-800 focus:ring-2 ring cyan-300" >
            {props.children}
            </div>
    )
}

function TextInputIcon(){}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps) {
    return(
        
       
        <input 
        className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400'
            {...props} 
        />
        
    )
} 