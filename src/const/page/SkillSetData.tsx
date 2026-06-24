import { ICON_DATA } from '@/const/IconData'

import { SkillSetDataCategoryType, SkillSetDateType } from '@/types/SkillSetDateType'

export const FRONT_END_SKILL_SET_DATA: SkillSetDataCategoryType = [
  { label: "React", icon: ICON_DATA.react, skillName: <>React {ICON_DATA.react}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { label: "TypeScript", skillName: <>TypeScript</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { label: "Next.js", skillName: <>NextJs</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { label: "HTML5", icon: ICON_DATA.html5, skillName: <>HTML5 {ICON_DATA.html5}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { label: "CSS3", icon: ICON_DATA.css3, skillName: <>CSS3 {ICON_DATA.css3}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { label: "JavaScript", icon: ICON_DATA.javascript, skillName: <>JavaScript {ICON_DATA.javascript}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { label: "jQuery", skillName: <>jQuery</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { label: "Shopify", icon: ICON_DATA.shopify, skillName: <>shopify {ICON_DATA.shopify}</>, value: 4, acquisitionDate: "2022-09-01", category: "work-experience" },
  { label: "WordPress", icon: ICON_DATA.wordpress, skillName: <>WordPress {ICON_DATA.wordpress}</>, value: 2, acquisitionDate: "2019-09-01", category: "self-studying" },
]

export const DEVELOP_SKILL_SET_DATA: SkillSetDataCategoryType = [
  { label: "Node.js", icon: ICON_DATA.nodeJs, skillName: <>Node.js {ICON_DATA.nodeJs}</>, value: 5, acquisitionDate: "2019-09-01", category: "work-experience" },
  { label: "Docker", icon: ICON_DATA.docker, skillName: <>Docker {ICON_DATA.docker}</>, value: 4, acquisitionDate: "2021-09-01", category: "work-experience" },
  { label: "AWS", icon: ICON_DATA.aws, skillName: <>AWS {ICON_DATA.aws}</>, value: 3, acquisitionDate: "2021-09-01", category: "work-experience" },
]

export const BACK_END_SET_DATA: SkillSetDataCategoryType = [
  { label: "TypeScript", skillName: <>TypeScript</>, value: 2, acquisitionDate: "2023-01-01", category: "work-experience" },
  { label: "GraphQL", skillName: <>GraphQL</>, value: 2, acquisitionDate: "2023-01-01", category: "work-experience" },
  { label: "Ruby on Rails", skillName: <>Ruby on Rails</>, value: 3, acquisitionDate: "2019-09-01", category: "self-studying" },
  { label: "Laravel", icon: ICON_DATA.laravel, skillName: <>PHP Laravel {ICON_DATA.laravel}</>, value: 2, acquisitionDate: "2021-09-01", category: "self-studying" },
  { label: "Python 3", icon: ICON_DATA.python, skillName: <>Python 3 {ICON_DATA.python}</>, value: 3, acquisitionDate: "2020-09-01", category: "work-experience" },
  { label: "Google Apps Script", icon: ICON_DATA.google, skillName: <>Google Apps Script</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
]

export const USABLE_TOOL_DATA: SkillSetDataCategoryType = [
  { label: "Visual Studio Code", skillName: <>Visual Studio Code</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { label: "Figma", icon: ICON_DATA.figma, skillName: <>Figma {ICON_DATA.figma}</>, value: 4, acquisitionDate: "2022-09-01", category: "work-experience" },
  { label: "Adobe XD", skillName: <>Adobe XD</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { label: "Git", icon: ICON_DATA.git, skillName: <>Git {ICON_DATA.git}</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { label: "GitHub", icon: ICON_DATA.gitHub, skillName: <>Git Hub {ICON_DATA.gitHub}</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { label: "Adobe Photoshop", skillName: <>Adobe Photoshop</>, value: 5, acquisitionDate: "2020-09-01", category: "work-experience" },
  { label: "Google Spreadsheet", icon: ICON_DATA.google, skillName: <>Google Spreadsheet {ICON_DATA.google}</>, value: 5, acquisitionDate: "2019-05-01", category: "work-experience" },
]

export const WORKING_SKILL_SET_DATA: SkillSetDataCategoryType = [
  { skillName: <></>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <></>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <></>, value: 5, acquisitionDate: "", category: "work-experience" },
  { skillName: <></>, value: 5, acquisitionDate: "", category: "work-experience" },
]

export const USABLE_OS_DATA: SkillSetDataCategoryType = [
  { label: "Windows", icon: ICON_DATA.windows, skillName: <>Windows {ICON_DATA.windows}</>, value: 5, acquisitionDate: "2019-04-01", category: "work-experience" },
  { label: "macOS", icon: ICON_DATA.apple, skillName: <>macOS {ICON_DATA.apple}</>, value: 5, acquisitionDate: "2021-09-01", category: "work-experience" },
]

export const SKILL_SET_DATA: SkillSetDateType = [
  { title: "FRONT END SKILL", data:  FRONT_END_SKILL_SET_DATA },
  { title: "DEVELOP SKILL", data:  DEVELOP_SKILL_SET_DATA },
  { title: "BACK END SKILL", data:  BACK_END_SET_DATA },
  { title: "USABLE TOOL", data: USABLE_TOOL_DATA },
  { title: "USABLE OS", data: USABLE_OS_DATA },
]
