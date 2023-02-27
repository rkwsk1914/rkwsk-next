import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import {FunctionComponent as StoryComponent} from '.'

export default {
  title: 'Sample/FunctionComponent',
  component: StoryComponent,
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (args?: React.ComponentProps<typeof StoryComponent>) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Sample',
}
