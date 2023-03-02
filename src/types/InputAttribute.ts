export type InputAttributeTypes = {
  id: string
  label: string
  name: string
  disabled: boolean
  required: boolean
  error: boolean
  helperText: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputAttributeOptions = {
  disabled: {
    control: 'boolean',
  },
  error: {
    control: 'boolean',
  },
  required: {
    control: 'boolean',
  },
}