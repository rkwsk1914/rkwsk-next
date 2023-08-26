import { TextInputBaseProps } from '@/types/InputAttribute'

type InputElementProps = Pick<TextInputBaseProps, 'id' | 'label' | 'type' | 'autoComplete' | 'placeholder' | 'required'>

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
  contact: InputElementProps,
}

export const TEXT_INPUT_DATA: TextInputDataType = {
  firstName: {
    id: "firstName",
    label: "姓",
    type: 'text',
    autoComplete: "family-name",
    placeholder: "山田",
    required: true
  },
  lastName: {
    id: "lastName",
    label: "名",
    type: 'text',
    autoComplete: "given-name",
    placeholder: "太郎",
    required: true
  },
  firstKanaName: {
    id: "firstKanaName",
    label: "ふりがな（姓）",
    type: 'text',
    placeholder: "やまだ",
    required: true
  },
  lastKanaName: {
    id: "lastKanaName",
    label: "ふりがな（名）",
    type: 'text',
    placeholder: "たろう",
    required: true
  },
  email: {
    id: "email",
    label: "メールアドレス",
    type: 'email',
    autoComplete: "email",
    placeholder: "sample@sample.com",
    required: true
  },
  tel: {
    id: "tel",
    label: "電話番号",
    type: 'tel',
    placeholder: "08012345678",
    required: true
  },
  postalCode: {
    id: "postalCode",
    label: "郵便番号",
    type: 'text',
    autoComplete: "postal-code",
    placeholder: "1234567",
    required: true
  },
  address1: {
    id: "address1",
    label: "住所１",
    type: 'text',
    autoComplete: "address-line1",
    placeholder: "都道府県 市区町村 番地",
    required: true
  },
  address2: {
    id: "address2",
    label: "住所１",
    type: 'text',
    autoComplete: "address-line1",
    placeholder: "建物名 部屋番号",
    required: true
  },
  password: {
    id: "password",
    label: "パスワード",
    type: 'password',
    autoComplete: "new-password",
    required: true
  },
  contact: {
    id: "content",
    label: "お問い合わせ内容",
    type: 'text',
    required: true
  },
}