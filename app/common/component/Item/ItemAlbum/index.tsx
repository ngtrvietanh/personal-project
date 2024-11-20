import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../../function';
import ViewBox from '../ViewBox';
import {ItemPostProps} from '../../../../feature/TrangChu/type';
interface Props {
  index: number;
  data: ItemPostProps;
}
const ItemAlbum = (props: Props) => {
  const {index, data} = props;
  return (
    <ViewBox style={styles.container} index={index}>
      <Image
        style={styles.image}
        source={{
          uri: data?.image,
        }}
        resizeMode={'cover'}
      />
      <Text numberOfLines={1} style={styles.nameAlbum}>{`${
        data?.location?.name || '--'
      }`}</Text>
      <Text style={styles.textQuantity}>{`${
        data?.episode?.length || 0
      } mục`}</Text>
    </ViewBox>
  );
};

export default ItemAlbum;

const styles = StyleSheet.create({
  container: {
    paddingBottom: HEIGHT(8),
    width: WIDTH(128),
  },
  image: {height: HEIGHT(160), width: WIDTH(128), borderRadius: WIDTH(8)},
  nameAlbum: {
    flex: 1,
    fontWeight: '500',
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(20),
    color: '#0D121C',
    marginTop: HEIGHT(12),
  },
  textQuantity: {
    fontWeight: '400',
    fontSize: getFontSize(12),
    lineHeight: getLineHeight(16),
    color: '#9DA4AE',
    marginTop: HEIGHT(2),
  },
});
