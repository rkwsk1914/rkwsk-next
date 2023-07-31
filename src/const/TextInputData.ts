import { TextInputBaseProps } from '@/types/InputAttribute'

type InputElementProps = Pick<TextInputBaseProps, 'id' | 'label' | 'type' | 'autoComplete'>

type TextInputDataType = {
  firstName: InputElementProps,
  lastName: InputElementProps,
  firstKanaName: InputElementProps,
  lastKanaName: InputElementProps,
  email: InputElementProps,
  tel: InputElementProps,
  postalCode: InputElementProps,
  address1: InputElementProps,
  address2: InputElementProps,
  password: InputElementProps,
}

export const TEXT_INPUT_DATA: TextInputDataType = {
  firstName: {
    id: "firstName",
    label: "姓",
    type: 'text',
    autoComplete: "family-name"
  },
  lastName: {
    id: "lastName",
    label: "名",
    type: 'text',
    autoComplete: "given-name"
  },
  firstKanaName: {
    id: "firstKanaName",
    label: "ふりがな（姓）",
    type: 'text',
  },
  lastKanaName: {
    id: "lastKanaName",
    label: "ふりがな（姓）",
    type: 'text',
  },
  email: {
    id: "email",
    label: "メールアドレス",
    type: 'email',
    autoComplete: "email"
  },
  tel: {
    id: "tel",
    label: "電話番号",
    type: 'tel'
  },
  postalCode: {
    id: "postalCode",
    label: "郵便番号",
    type: 'text',
    autoComplete: "postal-code"
  },
  address1: {
    id: "address1",
    label: "住所１",
    type: 'text',
    autoComplete: "address-line1"
  },
  address2: {
    id: "address2",
    label: "住所１",
    type: 'text',
    autoComplete: "address-line1"
  },
  password: {
    id: "password",
    label: "パスワード",
    type: 'password',
    autoComplete: "new-password"
  },
}