import axios from 'axios'

import { API_END_POINTS, API_KEY } from '@/const/API'

import { PostContactDataType } from '@/types/APIDataType'


type PostArgsType = {
  url: string
  data: any
  headers: {}
}

export const useAPI = () => {
  const doPost = async ({url, data, headers}: PostArgsType): Promise<void> => {
    try {
      const response = await axios.post(url, data, { headers: headers})
      console.log('Response:', response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const doPostContact = async (data: PostContactDataType) => {
    doPost({
      url: API_END_POINTS.contact,
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': API_KEY,
      }
    })
  }

  return {
    doPost,
    doPostContact
  }
}
