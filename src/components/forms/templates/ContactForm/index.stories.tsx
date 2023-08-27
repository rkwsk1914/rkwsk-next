import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ContactForm as StoryComponent } from '.'

export default {
  title: 'Forms/Templates/ContactForm',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  isTestMode: false
}

export const APIDisplaySimulation = Template.bind({})
APIDisplaySimulation.args = {
  isTestMode: true
}
