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
  children: <>sample<br /></>,
  name: {
    firstName: 'KAWASAKI',
    lastName: 'RYO',
  },
  image: {
    src: '/pic-me.jpg',
    width: 1478,
    height: 1108
  },
}

export const WithButton = Template.bind({})
WithButton.args = {
  children: <>sample<br /></>,
  name: {
    firstName: 'KAWASAKI',
    lastName: 'RYO',
  },
  image: {
    src: '/pic-me.jpg',
    width: 1478,
    height: 1108
  },
  buttonText: 'Detail',
  onClick: (e) => console.log('ProfileImage Click.', e)
}
