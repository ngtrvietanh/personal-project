import {StyleSheet} from 'react-native';

import {RESULT_CODE_PUSH_OUT, TIME_OUT} from '../common/constant';

import {ParamsNetwork} from '../config';
import {AppState} from '../redux/type';
import Axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

import {
  controller,
  handleErrorAxios,
  handleParameter,
  handleResponseAxios,
} from './helper';
import {getState} from '../common/redux';
interface AdditionParamType {
  noAuth?: boolean;
  tokenParam?: string;
  useChatToken?: boolean;
}

const tokenKeyHeader = 'Authorization';

export const AxiosInstance = Axios.create({});
AxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (
      error &&
      error.response &&
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      await refreshToken();
    }

    return Promise.reject(error);
  },
);

// refresh token
async function refreshToken() {
  try {
  } catch (error) {
    return error;
  }
}

// base
function Request<Params, Body, T = Record<string, unknown>>(
  config: ParamsNetwork<Params, Body>,
  additionParam?: AdditionParamType,
) {
  const {token}: AppState = getState('filter');

  const defaultConfig: AxiosRequestConfig = {
    baseURL: config.baseURL,
    ...(!!config?.responseType && {responseType: config?.responseType}),
    timeout: TIME_OUT,
    paramsSerializer: {
      serialize: (params: any) => {
        const parts: any = [];

        const encode = (val: any) => {
          return encodeURIComponent(val)
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',')
            .replace(/%20/g, '+');
        };

        const convertPart = (key: any, val: any) => {
          if (val instanceof Date) {
            val = val.toISOString();
          } else if (val instanceof Object) {
            val = JSON.stringify(val);
          }

          parts.push(encode(key) + '=' + encode(val));
        };

        Object.entries(params).forEach(([key, val]) => {
          if (val === null || typeof val === 'undefined') {
            return;
          }

          if (Array.isArray(val)) {
            val.forEach((v, i) => convertPart(`${key}[${i}]`, v));
          } else {
            convertPart(key, val);
          }
        });

        return parts.join('&');
      },
    },
    headers: {
      ...config?.headers,
      ...(!additionParam?.noAuth && {
        [tokenKeyHeader]: `Bearer ${additionParam?.tokenParam || token || ''}`,
      }),
    },
  };

  return new Promise((rs, rj) => {
    AxiosInstance.request(
      StyleSheet.flatten([
        defaultConfig,
        config,
        {signal: config?.controller?.signal || controller.current?.signal},
      ]),
    )
      .then((res: AxiosResponse<T>) => {
        const result = handleResponseAxios(res);

        rs(result);
      })
      .catch((error: AxiosError<T>) => {
        if (error.code === AxiosError.ERR_CANCELED) {
          rs(null);
        }

        const result = handleErrorAxios(error);

        if (error?.response?.status === RESULT_CODE_PUSH_OUT) {
          rs(null);
        } else {
          rs(result);

          rj(() => null);
        }
      });
  });
}

// get
async function Get<Param, T>(
  params: ParamsNetwork<Param, undefined>,
  additionParam?: AdditionParamType,
) {
  return Request<Param, undefined, T>(
    handleParameter<ParamsNetwork<Param, undefined>, Param, undefined>(
      params,
      'GET',
    ),
    additionParam,
  );
}

async function Post<Body, T>(
  params: ParamsNetwork<undefined, Body>,
  additionParam?: AdditionParamType,
) {
  return Request<undefined, Body, T>(
    handleParameter<ParamsNetwork<undefined, Body>, undefined, Body>(
      params,
      'POST',
    ),
    additionParam,
  );
}

// post FormData
async function PostFormData<Body, T>(
  params: ParamsNetwork<undefined, Body>,
  additionParam?: AdditionParamType,
) {
  const {token}: AppState = getState('filter');

  const headers: AxiosRequestConfig['headers'] = {
    [tokenKeyHeader]: `Bearer ${token ?? ''}`,
    'Content-Type': 'multipart/form-data',
  };

  return Request<undefined, Body, T>(
    handleParameter<
      AxiosRequestConfig & ParamsNetwork<undefined, Body>,
      undefined,
      Body
    >({...params, headers}, 'POST'),
    additionParam,
  );
}

// put
async function Put<Body, T>(
  params: ParamsNetwork<undefined, Body>,
  additionParam?: AdditionParamType,
) {
  return Request<undefined, Body, T>(
    handleParameter<ParamsNetwork<undefined, Body>, undefined, Body>(
      params,
      'PUT',
    ),
    additionParam,
  );
}

// delete
async function Delete<Body, T>(
  params: ParamsNetwork<undefined, Body>,
  additionParam?: AdditionParamType,
) {
  return Request<undefined, Body, T>(
    handleParameter<ParamsNetwork<undefined, Body>, undefined, Body>(
      params,
      'DELETE',
    ),
    additionParam,
  );
}

export const NetWorkService = {
  Get,
  Post,
  Put,
  Delete,
  PostFormData,
  Request,
};
