import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { GlobalNavigation as StoryComponent } from '.'

export default {
  title: 'Organisms/GlobalNavigation',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

const commonArgs = {
  menu: [
    { text: 'menu 1', id: 'menu1', href: '/' },
    { text: 'menu 2', id: 'menu2', href: '/' },
    { text: 'menu 3', id: 'menu3', href: '/' },
    { text: 'menu 4', id: 'menu4', href: '/' },
  ],
  isDark: true,
  callBackChangeTheme: () => {console.log("click")}
}

export const Default = Template.bind({})
Default.args = {
  ...commonArgs
}

export const slideInFromTop = Template.bind({})
slideInFromTop.args = {
  ...commonArgs,
  slideInFrom: 'top'
}

export const slideInFromBottom = Template.bind({})
slideInFromBottom.args = {
  ...commonArgs,
  slideInFrom: 'bottom'
}

export const slideInFromRight = Template.bind({})
slideInFromRight.args = {
  ...commonArgs,
  slideInFrom: 'right'
}

export const slideInFromLeft = Template.bind({})
slideInFromLeft.args = {
  ...commonArgs,
  slideInFrom: 'left'
}
