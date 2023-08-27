import axios from 'axios'

import { FORM_MESSAGE } from '@/const/FormMessage'

import { PostContactDataType } from '@/types/APIDataType'

type PostArgsType = {
  url: string
  data: any
  headers: {}
}

type responseStateType = {
  isError: boolean,
  message: string
}

export const useAPI = () => {
  const doPost = async ({url, data, headers}: PostArgsType): Promise<boolean> => {
    try {
      const response = await axios.post(url, data, { headers: headers})
      console.log('Response:', response.data)
      return false
    } catch (error) {
      console.error('Error:', error)
      return true
    }
  }

  const doAPIDisplaySimulation = (isError: boolean): responseStateType => {
    return {
      isError: isError ? true : false,
      message: FORM_MESSAGE[isError ? 1 : 0]
    }
  }

  const doPostContact = async (data: PostContactDataType): Promise<responseStateType> => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    console.log(response.status)
    const isSuccess = response.status !== 200

    return {
      isError: isSuccess ? true : false,
      message: FORM_MESSAGE[isSuccess ? 1 : 0]
    }
  }

  return {
    doPost,
    doAPIDisplaySimulation,
    doPostContact
  }
}
