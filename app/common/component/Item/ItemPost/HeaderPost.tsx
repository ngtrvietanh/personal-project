import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Avatar from '../../Avatar';
import R from '../../../../assets/R';
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../../function';
import ItemIconSVG from '../../IconSVG';
const HeaderPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Avatar source={R.images.avatar} size={HEIGHT(40)} />
        <View style={styles.infoUser}>
          <View style={styles.nameBox}>
            <Text numberOfLines={1} style={styles.name}>
              Sơn Tùng MTP
            </Text>
            <ItemIconSVG title="Verify" />
          </View>
          <Text style={styles.time}>@hoanghai • 2 giờ</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnMore}>
        <ItemIconSVG title="Three dot" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderPost;

const styles = StyleSheet.create({
  nameBox: {flexDirection: 'row', alignItems: 'center'},
  user: {flexDirection: 'row', flex: 1},
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
    justifyContent: 'space-between',
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
