import React from 'react'

import { action } from "@storybook/addon-actions"
import { StoryFn, Meta } from '@storybook/react'

import { RadioGroup as StoryComponent } from '.'

import { InputAttributeOptions } from '@/types/InputAttribute'


export default {
  title: 'Forms/Molecules/RadioGroup',
  component: StoryComponent,
  argTypes: {
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
  error: false,
  disabled: false,
  helperText: "this error",
  id: 'default',
  label: 'default',
  data: [
    {
      label: "value 1",
      value: 1,
      checked: false,
      disabled: false,
      size: "medium",
      name: "radio"
    },
    {
      label: "value 2",
      value: 2,
      checked: false,
      disabled: false,
      size: "medium",
      name: "radio"
    },
  ],
  onChange: action('onChange'),
}
