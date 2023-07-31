import React from 'react'

import { action } from "@storybook/addon-actions"
import { StoryFn, Meta } from '@storybook/react'

import { RatingWithStatus as StoryComponent } from '.'

import { InputAttributeOptions } from '@/types/InputAttribute'


export default {
  title: 'Forms/molecules/RatingWithStatus',
  component: StoryComponent,
  argTypes: {
    precision: {
      control: 'select', options: [0.5 ,1]
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
  size: "small",
  disabled: false,
  value: 3,
  max: 5,
  precision: 0.5,
  onChange: action('onChange'),
  data: {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  }
}
