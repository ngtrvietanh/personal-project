import {StyleSheet, View} from 'react-native';
import React from 'react';
import BaseButton from '../../../../common/component/Button/BaseButton';
import {HEIGHT, WIDTH} from '../../../../common/function';

const FunctionGroup = () => {
  return (
    <View style={styles.container}>
      <BaseButton
        customStyleBtn={styles.btnLeft}
        iconNameLeft="Group"
        iconNameRight="Chevron down"
        title="Đã tham gia"
      />
      <BaseButton
        customStyleBtn={styles.btnRight}
        customStyleTitle={styles.textRight}
        iconNameLeft="Invite"
        title="Mời"
      />
    </View>
  );
};

export default FunctionGroup;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: WIDTH(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: HEIGHT(12),
  },
  btnLeft: {
    backgroundColor: '#F9FAFB',
    borderWidth: 0.5,
    borderColor: '#F3F4F6',
    height: HEIGHT(36),
    width: WIDTH(195),
  },
  btnRight: {
    backgroundColor: '#3864FF',
    height: HEIGHT(36),
    width: WIDTH(195),
  },
  textRight: {
    color: 'white',
  },
});
