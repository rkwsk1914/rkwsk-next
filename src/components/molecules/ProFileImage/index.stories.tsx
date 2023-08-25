import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { ButtonElement } from '@/components/forms/atoms/ButtonElement'

import { ProFileImage as StoryComponent } from '.'

export default {
  title: 'Molecules/ProFileImage',
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
  }
}

export const HasChildren = Template.bind({})
HasChildren.args = {
  image: {
    src: '/pic-me.jpg',
    width: 1478,
    height: 1108
  },
  children: (
    <>
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement>
    </>
  )
}

export const HasChildren2 = Template.bind({})
HasChildren2.args = {
  image: {
    src: '/pic-me.jpg',
    width: 1478,
    height: 1108
  },
  children: (
    <>
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement><br />
      <ButtonElement>smaple</ButtonElement>
    </>
  )
}
