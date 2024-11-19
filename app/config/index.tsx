import {AxiosRequestConfig} from 'axios';

export interface ParamsNetwork<T, U> extends AxiosRequestConfig {
  url: string;
  params?: T;
  path?: Record<string, string | number>;
  body?: U;
  controller?: AbortController;
}
