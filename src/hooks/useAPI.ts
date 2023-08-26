import axios from 'axios'

import { API_END_POINTS, API_KEY } from '@/const/API'
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
    const isError = await doPost({
      url: API_END_POINTS.contact,
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': API_KEY,
      }
    })
    return {
      isError: isError ? true : false,
      message: FORM_MESSAGE[isError ? 1 : 0]
    }
  }

  return {
    doPost,
    doAPIDisplaySimulation,
    doPostContact
  }
}
