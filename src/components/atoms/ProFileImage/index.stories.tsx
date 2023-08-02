import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ProFileImage as StoryComponent } from '.'

export default {
  title: 'Atoms/ProFileImage',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  firstName: 'KAWASAKI',
  lastName: 'RYO',
  image: {
    src: '/cafe.jpg',
    width: 340,
    height: 253
  },
  sectionLevel: 2
}
