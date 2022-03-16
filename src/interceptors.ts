import axios, { AxiosError, AxiosResponse } from "axios";

axios.interceptors.response.use(
  async (response: AxiosResponse): Promise<AxiosResponse> => {
    return response as AxiosResponse;
  },
  async (error: AxiosError): Promise<any> => {
    return Promise.reject(error);
  }
);
