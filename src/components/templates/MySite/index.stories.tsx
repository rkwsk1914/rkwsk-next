import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { SectionContainer } from '@/components/molecules/SectionContainer'

import { MySite as StoryComponent } from '.'

export default {
  title: 'Templates/MySite',
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
    <SectionContainer
      title={'Hello World'}
      level={1} >
      <SectionContainer
        title={'section 1'}
        level={2} >
        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        <p>text text text text text text <br />text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
      </SectionContainer>
      <SectionContainer
        title={'section 2'}
        level={2} >
        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        <p>text text text text text text <br />text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
      </SectionContainer>
      <SectionContainer
        title={'section 3'}
        level={2} >
        <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        <p>text text text text text text <br />text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
      </SectionContainer>
    </SectionContainer>
  ),
  title: '',
  description: ''
}
