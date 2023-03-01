import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from '@/components/layouts/Theme'

import {FunctionComponent as StoryComponent} from '.'

export default {
  title: 'Sample/FunctionComponent',
  component: StoryComponent,
  decorators: [
    (Story) => {
      return (
        <Theme isTest>
          <Story />
        </Theme>
      )
    },
  ],
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Sample',
}
