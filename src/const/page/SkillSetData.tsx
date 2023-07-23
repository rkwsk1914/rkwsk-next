import { ICON_DATA } from '@/const/IconDate'

import { SkillSetDateType } from '@/types/SkillSetDateType'

export const FRONT_END_SKILL_SET_DATA: Array<SkillSetDateType> = [
  { skillName: <>React { ICON_DATA.react}</>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <>HTML5 { ICON_DATA.html5}</>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <>CSS3 { ICON_DATA.css3}</>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <>JavaScript { ICON_DATA.javascript}</>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <>jQuery { ICON_DATA.jquery}</>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <>TypeScript { ICON_DATA.typescript}</>, value: 5, acquisitionDate: "", category: "work-experience" },

]

export const DEVELOP_SKILL_SET_DATA: Array<SkillSetDateType> = [
  { skillName: "", value: 5, acquisitionDate: "", category: "work-experience" },
]

export const BACK_END_SET_DATA: Array<SkillSetDateType> = [
  { skillName: "", value: 5, acquisitionDate: "", category: "work-experience" },
]

export const USABLE_TOOL_DATA: Array<SkillSetDateType> = [
  { skillName: "", value: 5, acquisitionDate: "", category: "work-experience" },
]

export const WORKING_SKILL_SET_DATA: Array<SkillSetDateType> = [
  { skillName: "", value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: "", value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: "", value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: "", value: 5, acquisitionDate: "", category: "work-experience" },
]

export const SKILL_SET_DATA: Array<{title: string, data: Array<SkillSetDateType>}> = [
  { title: "FRONT END SKILL", data:  FRONT_END_SKILL_SET_DATA },
  { title: "DEVELOP SKILL", data:  DEVELOP_SKILL_SET_DATA },
  { title: "BACK END", data:  BACK_END_SET_DATA },
  { title: "USABLE TOOL ", data: USABLE_TOOL_DATA },
  { title: "WORKING SKILL", data: WORKING_SKILL_SET_DATA },
]