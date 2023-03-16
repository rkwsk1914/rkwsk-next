import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoginForm as StoryComponent } from '.'

export default {
  title: 'Forms/Templates/LoginForm',
  component: StoryComponent,
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {}
