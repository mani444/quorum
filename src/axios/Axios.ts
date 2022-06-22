import axios from "axios";
import { ContentType } from "../enums/Enums";
import {
  requestHandler,
  successResponseHandler,
  errorResponseHandler,
} from "./Interceptors";

export const getAxiosInstance = (
  config = {
    headers: { contentType: ContentType.json },
  }
) => {
  const instance = axios.create({
    baseURL: "http://localhost:8080/",
    // baseURL:  'http://10.0.2.2:5001/squadappdev-300514/us-central1/api/',
    headers: {
      "Content-Type": config.headers.contentType || ContentType.json,
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(
    successResponseHandler,
    errorResponseHandler
  );

  return instance;
};

export default getAxiosInstance();
