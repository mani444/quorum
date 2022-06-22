import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { TOKEN, AUTH_TOKEN_HEADER } from "../constants";
import LocalStorage from "../services/LocalStorage";
import SessionStorage from "../services/SessionStorage";

export const requestHandler = (request: AxiosRequestConfig) => {
  const token = LocalStorage.GetItem(TOKEN) || SessionStorage.GetItem(TOKEN);

  if (token && request.headers) request.headers[AUTH_TOKEN_HEADER] = `${token}`;
  return request;
};

export const successResponseHandler = (response: AxiosResponse) => {
  return {
    ...response,
    data: response.data,
  };
};

export const errorResponseHandler = (error: AxiosError) => {
  // window.location.assign(window.location.origin + '/error')
  return Promise.reject(error);
};
