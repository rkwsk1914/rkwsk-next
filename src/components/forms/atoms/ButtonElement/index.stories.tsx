import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ButtonElement as StoryComponent } from '.'

import { MuiSizeOptions } from '@/types/MuiSize'


export default {
  title: 'Forms/Atoms/ButtonElement',
  component: StoryComponent,
  argTypes: {
    isDark: {
      control: 'boolean',
    },
    color: {
      control: 'select', options: ['inherit','primary','secondary','success','error','info','warning'],
    },
    variant:{
      control: 'select', options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: 'select', options: [MuiSizeOptions]
    },
    disabled: {
      control: 'boolean',
    },
  }
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Sample',
  color: 'primary',
  variant: 'contained',
  size: 'large',
  disabled: false
}
