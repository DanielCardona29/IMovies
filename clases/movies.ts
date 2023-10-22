import Api from "./api"
import { type QueryParamsTypes, type PagintaionTypes } from "./types.t"

class Movies extends Api {
  token: string
  constructor (token: string) {
    super(token)
    this.token = token
  }

  async NowPlaying (queryParams?: QueryParamsTypes): Promise<PagintaionTypes> {
    queryParams = {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
      ...queryParams
    }
    const params = new URLSearchParams((queryParams as any))
    const consult: PagintaionTypes = await this.getRequest('movie/now_playing?' + params.toString())
    return consult
  }

  // This method is used for get a movie detail
  async getMovie (id: string): Promise<any> {
    const queryParams = {
      include_video: true
    }
    const params = new URLSearchParams((queryParams as any))

    const consult: any = await this.getRequest('movie/' + id + '?' + params.toString())
    return consult
  }
}

export default Movies
