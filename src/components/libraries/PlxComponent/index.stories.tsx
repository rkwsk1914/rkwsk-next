import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ScrollWrap, SAMPLE_END_ELEMENT_CLASS_NAME } from '@/components/parts/ScrollWrap'

import { PlxComponent as StoryComponent } from '.'

export default {
  title: 'Libraries/PlxComponent',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <ScrollWrap>
    <StoryComponent {...args}></StoryComponent>
  </ScrollWrap>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'aqua',
        position: 'fixed',
        top: '50%',
      }}
    />
  ),
  parallaxData: [
    {
      start: 0,
      end: SAMPLE_END_ELEMENT_CLASS_NAME,
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
