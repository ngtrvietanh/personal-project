import {StackScreenProps as RNStackScreenProps} from '@react-navigation/stack';

export enum APP_SCREEN {
  TRANG_CHU = 'TrangChu',
  HOME = 'Home',
  ADD_POST = 'AddPost',
  DETAIL_POST = 'DetailPost',
}

export type RootStackParamList = {
  [APP_SCREEN.TRANG_CHU]: any;
  [APP_SCREEN.HOME]: any;
  [APP_SCREEN.ADD_POST]: any;
  [APP_SCREEN.DETAIL_POST]: any;
};

export type StackScreenProps<T extends keyof RootStackParamList> =
  RNStackScreenProps<RootStackParamList, T>;
