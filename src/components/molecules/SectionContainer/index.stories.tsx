import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { SectionContainer as StoryComponent } from '.'

export default {
  title: 'Molecules/SectionContainer',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args?: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
      <p>text text text text text text <br />text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
    </>
  ),
  title: 'title'
}
