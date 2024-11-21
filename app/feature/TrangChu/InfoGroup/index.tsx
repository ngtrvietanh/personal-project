import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemIconSVG from '../../../common/component/IconSVG';
import FunctionGroup from './FunctionGroup';
import {
  getFontSize,
  getLineHeight,
  HEIGHT,
  WIDTH,
} from '../../../common/function';
import R from '../../../assets/R';
const InfoGroup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nameGr}>UI/UX Graphic Designers in VietNam</Text>
        <View style={styles.info}>
          <ItemIconSVG title="Globe" />
          <Text style={styles.sttGr}>Nhóm Công Khai · 36,9k thành viên </Text>
        </View>
      </View>
      <FunctionGroup />
    </View>
  );
};

export default InfoGroup;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', marginBottom: HEIGHT(8)},
  info: {flexDirection: 'row', alignItems: 'center'},
  header: {paddingHorizontal: WIDTH(16), paddingVertical: HEIGHT(12)},
  nameGr: {
    fontFamily: R.fonts.NotoSansSemiBold,
    fontWeight: '600',
    fontSize: getFontSize(20),
    lineHeight: getLineHeight(30),
    color: '#0D121C',
    marginBottom: HEIGHT(12),
  },
  sttGr: {
    marginLeft: WIDTH(8),
    fontWeight: '400',
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(20),
    color: '#0D121C',
  },
});
