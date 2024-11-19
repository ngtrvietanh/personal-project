import {createRef} from 'react';
import {
  CODE_SUCCESS,
  CODE_TIME_OUT,
  ERROR_NETWORK_CODE,
  RESULT_CODE_PUSH_OUT,
  STATUS_TIME_OUT,
} from '../common/constant';
import {handleErrorApi} from '../common/function';
import {ParamsNetwork} from '../config';
import {AxiosError, AxiosResponse, Method} from 'axios';

const responseDefault = {
  code: -500,
  status: false,
  msg: 'An error occurred. Please try again later',
};

export const controller = createRef<AbortController>();

//@ts-ignore
// init controller
controller.current = new AbortController();

export const cancelAllRequest = () => {
  controller.current?.abort();

  // reset controller, if not. all request cannot execute
  // because old controller was aborted

  // @ts-ignore
  controller.current = new AbortController();
};

export const handleResponseAxios = (res: AxiosResponse) => {
  if (res.data) {
    return {code: CODE_SUCCESS, status: true, data: res.data};
  }

  return responseDefault;
};

export const handleErrorAxios = (error: AxiosError) => {
  if (error.code === STATUS_TIME_OUT) {
    // timeout
    return handleErrorApi(CODE_TIME_OUT);
  }

  if (error.response) {
    if (error.response.status === RESULT_CODE_PUSH_OUT) {
      return handleErrorApi(RESULT_CODE_PUSH_OUT);
    } else {
      return handleErrorApi(error.response);
    }
  }

  return handleErrorApi(ERROR_NETWORK_CODE);
};

export const handlePath = (
  url: string,
  path: ParamsNetwork<undefined, undefined>['path'],
) => {
  if (!path || Object.keys(path).length <= 0) {
    return url;
  }

  let resUrl = url;
  Object.keys(path).forEach(k => {
    resUrl = resUrl.replaceAll(`{${k}}`, String(path[k]));

    resUrl = resUrl.replaceAll(`:${k}`, String(path[k]));
  });

  return resUrl;
};

export const handleParameter = <
  T extends ParamsNetwork<Param, Body>,
  Param,
  Body,
>(
  props: T,
  method: Method,
): ParamsNetwork<Param, Body> => {
  const {url, body, path, params} = props;

  return {
    ...props,
    method,
    url: handlePath(url, path),
    data: body,
    params,
  };
};
