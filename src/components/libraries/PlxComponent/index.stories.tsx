import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { PlxComponent as StoryComponent } from '.'

export default {
  title: 'Libraries/PlxComponent',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <div style={{ height: '500vh' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'aqua',
          position: 'fixed'
        }}
    /></div>
  ),
  parallaxData: [
    {
      start: 0,
      end: 300,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ],
}
