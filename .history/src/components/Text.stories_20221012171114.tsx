import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title : 'Components/text',
    component : Text,
    args:{
       children : 'Lorem Ipsum',  
       size: 'sm',
    }
}as Meta <TextProps>

export const Default : StoryObj = {} 

export const Small : StoryObj = {} 

export const Large : StoryObj = {} 