import {NetWorkService} from '../service';

export const notiToTele = (
  tokenTele: string,
  body: {chat_id: string; text: string},
) =>
  NetWorkService.Post({
    url: `https://api.telegram.org/bot${tokenTele}/sendMessage`,
    body,
    baseURL: '',
  }).then((res: any) => {
    return res;
  });
