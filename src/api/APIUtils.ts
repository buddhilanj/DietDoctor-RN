import {AxiosResponse} from 'axios';

export function responseProcessor(response: AxiosResponse<any, any>) {
  return response;
}

export function errorProcessor(error: any) {
  // handle error here
  // if 401: Refresh token
  // log error
  return error;
}
