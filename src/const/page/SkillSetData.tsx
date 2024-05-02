import { ICON_DATA } from '@/const/IconData'

import { SkillSetDataCategoryType, SkillSetDateType } from '@/types/SkillSetDateType'

export const FRONT_END_SKILL_SET_DATA: SkillSetDataCategoryType = [
  { skillName: <>React {ICON_DATA.react}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { skillName: <>TypeScript</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { skillName: <>NextJs</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { skillName: <>HTML5 {ICON_DATA.html5}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { skillName: <>CSS3 {ICON_DATA.css3}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { skillName: <>JavaScript {ICON_DATA.javascript}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { skillName: <>jQuery</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { skillName: <>shopify {ICON_DATA.shopify}</>, value: 4, acquisitionDate: "2022-09-01", category: "work-experience" },
  { skillName: <>WordPress {ICON_DATA.wordpress}</>, value: 2, acquisitionDate: "2019-09-01", category: "self-studying" },
]

export const DEVELOP_SKILL_SET_DATA: SkillSetDataCategoryType = [
  { skillName: <>Node.js {ICON_DATA.nodeJs}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { skillName: <>Docker {ICON_DATA.docker}</>, value: 4, acquisitionDate: "2021-09-01", category: "work-experience" },
  { skillName: <>AWS {ICON_DATA.aws}</>, value: 3, acquisitionDate: "2021-09-01", category: "work-experience" },
]

export const BACK_END_SET_DATA: SkillSetDataCategoryType = [
  { skillName: <>TypeScript</>, value: 2, acquisitionDate: "2023-01-01", category: "work-experience" },
  { skillName: <>GraphQL</>, value: 2, acquisitionDate: "2023-01-01", category: "work-experience" },
  { skillName: <>Ruby on Rails</>, value: 3, acquisitionDate: "2019-09-01", category: "self-studying" },
  { skillName: <>PHP Laravel {ICON_DATA.laravel}</>, value: 2, acquisitionDate: "2021-09-01", category: "self-studying" },
  { skillName: <>Python 3 {ICON_DATA.python}</>, value: 3, acquisitionDate: "2020-09-01", category: "work-experience" },
  { skillName: <>Google Apps Script</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
]

export const USABLE_TOOL_DATA: SkillSetDataCategoryType = [
  { skillName: <>Visual Studio Code</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { skillName: <>Figma {ICON_DATA.figma}</>, value: 4, acquisitionDate: "2022-09-01", category: "work-experience" },
  { skillName: <>Adobe XD</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { skillName: <>Git {ICON_DATA.git}</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { skillName: <>Git Hub {ICON_DATA.gitHub}</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { skillName: <>Adobe Photoshop</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { skillName: <>Google Spreadsheet {ICON_DATA.google}</>, value: 5, acquisitionDate: "2019-05-01", category: "work-experience" },
]

export const WORKING_SKILL_SET_DATA: SkillSetDataCategoryType = [
  { skillName: <></>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <></>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <></>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <></>, value: 5, acquisitionDate: "", category: "work-experience" },
]

export const USABLE_OS_DATA: SkillSetDataCategoryType = [
  { skillName: <>Windows {ICON_DATA.windows}</>, value: 5, acquisitionDate: "2019-04-01", category: "work-experience" },
  { skillName: <>macOS {ICON_DATA.apple}</>, value: 5, acquisitionDate: "2021-09-01", category: "work-experience" },
]

export const SKILL_SET_DATA: SkillSetDateType = [
  { title: "FRONT END SKILL", data:  FRONT_END_SKILL_SET_DATA },
  { title: "DEVELOP SKILL", data:  DEVELOP_SKILL_SET_DATA },
  { title: "BACK END SKILL", data:  BACK_END_SET_DATA },
  { title: "USABLE TOOL", data: USABLE_TOOL_DATA },
  { title: "USABLE OS", data: USABLE_OS_DATA },
]