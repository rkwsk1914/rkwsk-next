import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { FirstViewBackGround as StoryComponent } from '.'

export default {
  title: 'Atoms/FirstViewBackGround',
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

export const WithTitle = Template.bind({})
WithTitle.args = {
  children: (
    <>
      <section>
        <h2>Hello</h2>
        <p>first text</p>
        <section>
          <h3>Sub Title</h3>
          <p>text text text text text text text text text text text text text text</p>
        </section>
      </section>

    </>
  ),
  imgSrc: '/cafe.jpg'
}
