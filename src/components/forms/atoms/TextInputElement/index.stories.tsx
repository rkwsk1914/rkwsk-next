import React from 'react'

import { action } from "@storybook/addon-actions"
import { StoryFn, Meta } from '@storybook/react'

import { TextInputElement as StoryComponent } from '.'

import { AutoCompleteOptions } from '@/types/AutoCompleteType'
import { InputAttributeOptions } from '@/types/InputAttribute'


export default {
  title: 'Forms/Atoms/TextInputElement',
  component: StoryComponent,
  argTypes: {
    type:{
      control: 'select', options: ['text','tel','email','number','password','search','url'],
    },
    autoComplete: {
      control: 'select', options: AutoCompleteOptions,
    },
    variant: {
      control: 'select', options: ['filled','outlined','standard']
    },
    autoFocus: {
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
  variant: 'standard',
  size: "small",
  type: 'text',
  autoComplete: 'name',
  autoFocus: true,
  error: false,
  disabled: false,
  placeholder: "",
  helperText: "this error",
  id: 'default',
  label: 'default',
  onChange: action('onChange'),
  value: ""
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  variant: 'standard',
  size: "small",
  type: 'text',
  autoComplete: 'name',
  autoFocus: true,
  placeholder: "",
  helperText: "this error",
  error: false,
  disabled: false,
  id: 'uncontrolled',
  label: 'uncontrolled',
  onChange: action('onChange'),
  defaultValue: ""
}
