/** @format */

import { API_HOST } from "../hooks/utils"
import { type tokenType } from "./types.t"

class Api {
  token: string
  host: string
  constructor (token: tokenType) {
    this.token = token
    this.host = API_HOST
  }

  async request (url: string, method: string = 'GET', body?: any): Promise<any> {
    try {
      const options = {
        method,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + this.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
      const consult = await fetch(this.host + url, options)
      const data = await consult.json()
      return data
    } catch (error) {
      return error
    }
  }

  async getRequest (path: string): Promise<any> {
    return await this.request(path, 'GET')
  }

  async postRequest (path: string, body?: any): Promise<any> {
    return await this.request(path, 'POST', body)
  }

  async putRequest (path: string, body?: any): Promise<any> {
    return await this.request(path, 'PUT', body)
  }
}

export default Api
