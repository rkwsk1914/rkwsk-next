import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { SelectElement as StoryComponent } from '.'

import { InputAttributeOptions } from '@/types/InputAttribute'


export default {
  title: 'Forms/Atoms/SelectElement',
  component: StoryComponent,
  argTypes: {
    variant: {
      control: 'select', options: ['filled','outlined','standard']
    },
    multiple: {
      control: 'boolean',
    },
    disabled: InputAttributeOptions.disabled,
    error: InputAttributeOptions.error,
    required: InputAttributeOptions.required,
  }
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  multiple: true,
  disabled: false,
  error: false,
  helperText: "this error",
  id: 'default',
  label: 'default',
  variant: 'standard',
  title: "tag",
  selectItems: [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ]
}
