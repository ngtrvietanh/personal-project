import {View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {HEIGHT} from '../../../function';
interface Props {
  index: number;
  children: ReactNode;
  style?: ViewStyle;
}
const ViewBox = (props: Props) => {
  const {index, children, style} = props;
  const marginRight = index % 3 !== 2 ? HEIGHT(7) : 0;
  return <View style={[{marginRight}, style]}>{children}</View>;
};

export default ViewBox;
