import {Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title : 'Components/text',
    component : Button,
    args:{
       children : 'Creat',  
       size: 'md',
    },
    argTypes: {
size: {
    options: ['sm', 'md', 'lg'],
    control: {
        type: 'inline-radio'
    }
}
    }
}as Meta <ButtonProps>

export const Default : StoryObj<ButtonProps> = {}

export const Small : StoryObj<ButtonProps> = {
    args: {
        size : 'sm',
    }
} 

export const Large  : StoryObj<ButtonProps> = {
    args : {
        size : 'lg',
    }
} 
    
export const CustomComponent  : StoryObj<ButtonProps> = {
    args : {
        asChild : true, 
        children: (
            <h1>Testando com h1</h1>
        )
        },
        argTypes:{
            children: {
                    table: {
                        disable: true,
                }
            },
            asChild: {
                table: {
                    disable: true,
                }
            },     
        }
    }

    
