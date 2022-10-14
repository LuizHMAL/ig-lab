import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface CheckBoxProps {

}
export function CheckBox({} : CheckBoxProps) {
    return(
        <div
        className={clsx(
            'py-4 px-3 rounded font-semibold text-black text-sm w-full bg-cyan-500 transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'
            )} 
        > </div>
    )
} ''