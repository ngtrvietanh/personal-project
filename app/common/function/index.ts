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
