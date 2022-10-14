import {Meta, StoryObj} from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput'

export default {
    title : 'Components/textInput',
    component : TextInput,
    args:{
      
       size: 'md',
    },
    argTypes: {

    }
}as Meta <TextInputProps>

export const Default : StoryObj<TextInputProps> = {}

