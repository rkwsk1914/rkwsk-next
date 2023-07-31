const maxLengthErrorMessage = (value: string | number ) => `最大${value}文字までしか入力できません`

export const MAX_LENGTH_LIST = {
  email: 100,
  name: 50,
  tel: 11
}

export const ERROR_MESSAGE: Array<string> = [
  'メールアドレスの形式で入力してください。例）sample@sample.com', // 0
  '入力必須項目です。', // 1
  maxLengthErrorMessage(MAX_LENGTH_LIST.email), // 2
  maxLengthErrorMessage(MAX_LENGTH_LIST.name), // 3
  maxLengthErrorMessage(MAX_LENGTH_LIST.tel), // 4
]
