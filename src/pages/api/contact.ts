import axios from "axios"

import { API_END_POINTS, API_KEY } from '@/const/API'

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "POST") {
    const requestBody = req.body
    const result = await axios
      .post(API_END_POINTS.contact,
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-MICROCMS-API-KEY': API_KEY,
          }
        }
      )
      .then((response) => response.data)
    return res.status(200).json(result)
  }
}