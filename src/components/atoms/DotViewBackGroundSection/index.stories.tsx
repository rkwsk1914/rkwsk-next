import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { SectionContainer } from '@/components/molecules/SectionContainer'

import { DotViewBackGroundSection as StoryComponent } from '.'

export default {
  title: 'Atoms/DotViewBackGroundSection',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: (<p>Hello World!</p>),
  imgSrc: '/cafe.jpg'
}

export const HasSection = Template.bind({})
HasSection.args = {
  children: (
    <SectionContainer
      title={'section 1'}
      level={2} >
      <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
      <p>text text text text text text <br />text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
    </SectionContainer>
  ),
  imgSrc: '/cafe.jpg'
}