import {StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {HEIGHT, WIDTH} from '../../../function';
import ViewBox from '../ViewBox';
interface Props {
  index: number;
}
const ItemImage = (props: Props) => {
  const {index} = props;
  return (
    <ViewBox index={index}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/736x/fa/3a/bc/fa3abc7daa02799fb3cd7dbee73b6a2a.jpg',
        }}
        resizeMode={'cover'}
      />
    </ViewBox>
  );
};

export default ItemImage;

const styles = StyleSheet.create({
  image: {height: HEIGHT(160), width: WIDTH(128), borderRadius: WIDTH(8)},
});
