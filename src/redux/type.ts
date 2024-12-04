export enum EnumMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
  CONNECT = 'CONNECT',
  TRACE = 'TRACE',
}

export type RequestT<P, B> = {
  data?: {
    params?: P
    body?: B
  }
}

export type ResponseT<T> = {
  data: T
  status?: number
  message?: string
}
