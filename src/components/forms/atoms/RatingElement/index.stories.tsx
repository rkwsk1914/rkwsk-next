import React from 'react'

import { action } from "@storybook/addon-actions"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputAttributeOptions } from '@/types/InputAttribute'

import { RatingElement as StoryComponent } from '.'

export default {
  title: 'Forms/Atoms/RatingElement',
  component: StoryComponent,
  argTypes: {
    precision: {
      control: 'select', options: [0.5 ,1]
    },
    disabled: InputAttributeOptions.disabled,
    error: InputAttributeOptions.error,
    required: InputAttributeOptions.required,
  }
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  size: "small",
  disabled: false,
  value: 3,
  max: 10,
  precision: 0.5,
  onChange: action('onChange'),
}
