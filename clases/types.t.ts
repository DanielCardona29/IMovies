export type tokenType = string

export interface dataMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface PagintaionTypes {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  results: dataMovie[]
  total_pages: number
  total_results: number
}

export interface QueryParamsTypes {
  include_adult?: boolean
  include_video?: boolean
  language?: string
  page?: number
  sort_by?: string
  with_release_type?: string
}
