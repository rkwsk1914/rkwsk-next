import React from 'react'

import { action } from "@storybook/addon-actions"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {RefComponent as StoryComponent} from '.'

export default {
  title: 'Sample/RefComponent',
  component: StoryComponent,
  argTypes: {
    option: { control: 'some option' },
  }
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Sample',
  onClick: () => action('action'),
}
