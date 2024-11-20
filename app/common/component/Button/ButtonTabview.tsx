import {StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import BaseButton from './BaseButton';
import {HEIGHT, WIDTH} from '../../function';
interface Props {
  title: string;
  isActive?: boolean;
  styleBtn?: ViewStyle;
}
const ButtonTabview = (props: Props) => {
  const {title, isActive, styleBtn} = props;
  const backgrColor = isActive ? '#3864FF' : '#F9FAFB';
  const textColor = isActive ? '#FFFFFF' : '#4D5761';
  return (
    <BaseButton
      title={title}
      customStyleBtn={[
        styles.customeBtn,
        {backgroundColor: backgrColor},
        styleBtn,
      ]}
      customStyleTitle={{color: textColor}}
    />
  );
};

export default ButtonTabview;

const styles = StyleSheet.create({
  customeBtn: {
    paddingVertical: HEIGHT(8),
    paddingHorizontal: WIDTH(12),
    borderRadius: WIDTH(50),
  },
});
