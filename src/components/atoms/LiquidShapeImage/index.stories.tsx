import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { LiquidShapeImage as StoryComponent } from '.'

export default {
  title: 'Atoms/LiquidShapeImage',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  image: {
    src: '/pic-me.jpg',
    width: 1478,
    height: 1108
  },
}
