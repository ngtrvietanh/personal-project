import {NetWorkService} from '../service';
import url from '../url';

export const onGetDanhSach = (params: any) =>
  NetWorkService.Get({
    url: url.DANH_SACH_BAI_DANG,
    params,
    baseURL: '',
  }).then((res: any) => {
    return res;
  });
