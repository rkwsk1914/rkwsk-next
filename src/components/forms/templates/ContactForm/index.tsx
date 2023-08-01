import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from "react-hook-form"

import { SCHEMA } from '@/const/Schema'
import { TEXT_INPUT_DATA } from '@/const/TextInputData'

import { ButtonElement } from '@/components/forms/atoms/ButtonElement'
import { TextInputElement } from '@/components/forms/atoms/TextInputElement'

import styles from './style.module.scss'

type Inputs = {
  firstName: string,
  lastName: string,
  firstKanaName: string,
  lastKanaName: string,
  tel: string,
  email: string,
  contact: string,
};

type Props = {
  onSubmit: (event?: React.FormEvent<HTMLFormElement>) => void
}

export const ContactForm: React.FC<Props> = ({
  onSubmit
}): JSX.Element => {
  const formInputTextNameList: Array<keyof Inputs> = [
    "firstName",
    "lastName",
    "firstKanaName",
    "lastKanaName",
    "tel",
    "email",
    "contact",
  ]
  const { register, trigger, handleSubmit, watch, formState: { errors, isDirty, isValid } } = useForm<Inputs>({
    resolver: zodResolver(SCHEMA),
  })

  const onSubmitCallBack: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    onSubmit()
  }

  const setTextInputElementProps = (index: number): React.ComponentProps<
    typeof TextInputElement
  > => {
    return {
        variant: 'outlined',
        helperText: errors[formInputTextNameList[index]]?.message,
        error: errors[formInputTextNameList[index]] ? true : false,
        ...TEXT_INPUT_DATA[formInputTextNameList[index]],
        ...register(formInputTextNameList[index]),
        onBlur: () => {
          trigger(formInputTextNameList[index])
        },
      }
    }

  return (
    <form onSubmit={handleSubmit(onSubmitCallBack)}>
      <div className={styles.formArea}>
        <div className={styles.nameArea}>
          <TextInputElement {...setTextInputElementProps(0)} />
          <TextInputElement {...setTextInputElementProps(1)} />
        </div>
        <div className={styles.nameArea}>
          <TextInputElement {...setTextInputElementProps(2)} />
          <TextInputElement {...setTextInputElementProps(3)} />
        </div>
        <TextInputElement {...setTextInputElementProps(4)} />
        <TextInputElement {...setTextInputElementProps(5)} />
        <TextInputElement {...setTextInputElementProps(6)} multiline rows={4}/>

        <div className={styles.submitArea}>
          <ButtonElement
            disabled={(isDirty && isValid) ? false : true}
            type='submit'
            variant='contained'
            size='large'
          >送信</ButtonElement>
        </div>
      </div>
    </form>
  )
}
