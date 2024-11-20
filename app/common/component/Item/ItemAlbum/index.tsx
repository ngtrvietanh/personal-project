import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../../function';
import ViewBox from '../ViewBox';
interface Props {
  index: number;
}
const ItemAlbum = (props: Props) => {
  const {index} = props;
  return (
    <ViewBox style={styles.container} index={index}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/736x/fa/3a/bc/fa3abc7daa02799fb3cd7dbee73b6a2a.jpg',
        }}
        resizeMode={'cover'}
      />
      <Text style={styles.nameAlbum}>Tên danh mục</Text>
      <Text style={styles.textQuantity}>29 mục</Text>
    </ViewBox>
  );
};

export default ItemAlbum;

const styles = StyleSheet.create({
  container: {
    paddingBottom: HEIGHT(8),
  },
  image: {height: HEIGHT(160), width: WIDTH(128), borderRadius: WIDTH(8)},
  nameAlbum: {
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