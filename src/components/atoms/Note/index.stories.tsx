import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import { Note as StoryComponent } from '.'
import { Note } from './index'

export default {
  title: 'Atoms/Note',
  component: StoryComponent,
} as Meta<typeof StoryComponent>

const Template: StoryFn<typeof StoryComponent> = (
  args: React.ComponentProps<typeof StoryComponent>
) => (
  <StoryComponent {...args}></StoryComponent>
)

const sampleText = <>sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.sample.</>
const jpText = <>サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。サンプル。</>

export const Default = Template.bind({})
Default.args = {
  data: [sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText]
}

export const TypeDot = Template.bind({})
TypeDot.args = {
  data: [sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText],
  type: 'dot'
}

export const TypeAsterisk = Template.bind({})
TypeAsterisk.args = {
  data: [sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText],
  type: 'asterisk'
}

export const TypeNumber = Template.bind({})
TypeNumber.args = {
  data: [sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText, sampleText],
  type: 'number'
}

export const Japanese = Template.bind({})
Japanese.args = {
  data: [jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText],
  type: 'number'
}

export const Recursive = Template.bind({})
Recursive.args = {
  data: [
    <React.Fragment key={1}>
      <Note data={[jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText]} />
    </React.Fragment>,
    <React.Fragment key={2}>
      <Note data={[jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText]} />
    </React.Fragment>,
    <React.Fragment key={3}>
      <Note data={[jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText, jpText]} />
    </React.Fragment>
  ],
  type: 'asterisk'
}
