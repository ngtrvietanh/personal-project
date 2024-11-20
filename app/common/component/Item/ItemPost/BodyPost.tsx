import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getFontSize, getLineHeight, HEIGHT} from '../../../function';
import {ItemPostProps} from '../../../../feature/TrangChu/type';
interface Props {
  item: ItemPostProps;
}
const BodyPost = (props: Props) => {
  const {item} = props;
  return (
    <View>
      <Text style={styles.status}>
        Dân ca Quan họ là một trong những làn điệu dân ca tiêu biểu của vùng
        châu thổ sông Hồng ở miền Bắc Việt Nam.
      </Text>
      <Image
        style={styles.image}
        source={{uri: item?.image}}
        resizeMode={'cover'}
      />
    </View>
  );
};

export default BodyPost;

const styles = StyleSheet.create({
  container: {marginTop: HEIGHT(8)},
  status: {
    fontWeight: '400',
    fontSize: getFontSize(16),
    lineHeight: getLineHeight(24),
    marginBottom: HEIGHT(8),
  },
  image: {width: '100%', height: HEIGHT(418), borderRadius: HEIGHT(16)},
});
