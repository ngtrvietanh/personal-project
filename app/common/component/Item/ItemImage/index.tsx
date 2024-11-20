import {StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {HEIGHT, WIDTH} from '../../../function';
import ViewBox from '../ViewBox';
import {ItemPostProps} from '../../../../feature/TrangChu/type';
interface Props {
  index: number;
  item: ItemPostProps;
}
const ItemImage = (props: Props) => {
  const {index, item} = props;
  return (
    <ViewBox index={index}>
      <Image
        style={styles.image}
        source={{uri: item?.image}}
        resizeMode={'cover'}
      />
    </ViewBox>
  );
};

export default ItemImage;

const styles = StyleSheet.create({
  image: {height: HEIGHT(160), width: WIDTH(128), borderRadius: WIDTH(8)},
});
