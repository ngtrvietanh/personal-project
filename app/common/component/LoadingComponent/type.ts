import {ViewStyle} from 'react-native';

export interface LoadingType {
  size?: number | 'small' | 'large' | undefined;
  customStyle?: ViewStyle;
  loading?: boolean;
  color?: string;
}
