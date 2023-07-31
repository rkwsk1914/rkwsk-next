export type SkillSetItemDataType = {
  skillName: React.ReactNode
  value: 0 | 1 | 2 | 3 | 4 | 5
  acquisitionDate?: string
  category?: "work-experience" | "self-studying"
}

export type SkillSetDataCategoryType = Array<SkillSetItemDataType>

export type SkillSetDateType = Array<{title: string, data: SkillSetDataCategoryType}>
