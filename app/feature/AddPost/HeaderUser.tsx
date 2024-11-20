import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../../common/component/Avatar';
import ItemIconSVG from '../../common/component/IconSVG';
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../common/function';
import R from '../../assets/R';
import BaseButton from '../../common/component/Button/BaseButton';
const HeaderUser = () => {
  return (
    <View style={styles.user}>
      <Avatar source={R.images.avatar} size={HEIGHT(40)} />
      <View style={styles.infoUser}>
        <View style={styles.nameBox}>
          <Text numberOfLines={1} style={styles.name}>
            Nguyễn Thọ Trung
          </Text>
          <ItemIconSVG title="Verify" />
        </View>
        <BaseButton
          iconNameLeft="Public"
          iconNameRight="Chevron down"
          customStyleTitle={styles.title}
          customStyleBtn={styles.btn}
          title="Công khai"
        />
      </View>
    </View>
  );
};

export default HeaderUser;

const styles = StyleSheet.create({
  title: {marginLeft: WIDTH(4), marginRight: WIDTH(4)},
  btn: {
    marginTop: HEIGHT(4),
    alignSelf: 'flex-start',
    height: HEIGHT(32),
    width: WIDTH(124),
    backgroundColor: '#F9FAFB',
    borderWidth: 0.5,
    borderColor: '#F3F4F6',
  },
  nameBox: {flexDirection: 'row', alignItems: 'center'},
  user: {
    flexDirection: 'row',
    paddingHorizontal: WIDTH(16),
    paddingVertical: HEIGHT(16),
  },
  name: {
    fontWeight: '600',
    fontSize: getFontSize(14),
    marginRight: HEIGHT(8),
    lineHeight: getLineHeight(20),
    color: '#0D121C',
  },
  time: {
    fontWeight: '500',
    fontSize: getFontSize(12),
    lineHeight: getLineHeight(16),
    color: '#A3A3A3',
  },
  infoUser: {
    flex: 1,
    marginHorizontal: WIDTH(8),
  },
  btnMore: {
    height: HEIGHT(28),
    width: HEIGHT(28),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
