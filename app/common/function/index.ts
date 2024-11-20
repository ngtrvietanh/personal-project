import {Dimensions} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

export const handleErrorApi = (response: any) => {
  const result = {
    status: false,
    code: response?.status,
    msg: '',
    errorCode: response?.data?.errorCode,
  };

  if (response?.status > 505) {
    result.msg = response?.data?.errorDescription ?? 'Server Error';

    return result;
  }

  if (response?.status < 500 && response?.status >= 418) {
    result.msg =
      response?.data?.errorDescription ??
      'An error occurred while sending the request';

    return result;
  }

  result.msg =
    response?.data?.message ??
    response?.data?.errorDescription ??
    `Lỗi: ${response?.status || ''}`;

  return result;
};

const {width, height} = Dimensions.get('window');

const deviceHeight = height - (initialWindowMetrics?.insets.top ?? 0);

export const responsiveHeight = (h: number): number => height * (h / 100);

export const WIDTH = (w: number): number => width * (w / 375);

export const HEIGHT = (h: number): number => deviceHeight * (h / 812);

export const getWidth = (): number => width;

export const getHeight = (): number => height;

export const getLineHeight = (f: number): number => f;

export const getFontSize = (fontSize: number) => fontSize;
