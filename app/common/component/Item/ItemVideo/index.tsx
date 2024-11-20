import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../../function';
import ViewBox from '../ViewBox';
import ItemIconSVG from '../../IconSVG';
import {ItemPostProps} from '../../../../feature/TrangChu/type';
interface Props {
  index: number;
  data: ItemPostProps;
}
const ItemVideo = (props: Props) => {
  const {index, data} = props;
  return (
    <ViewBox index={index}>
      <Image
        style={styles.image}
        source={{uri: data?.image}}
        resizeMode={'cover'}
      />
      <View style={styles.viewPosition}>
        <TouchableOpacity style={styles.btnPlay}>
          <View style={styles.viewBlur} />
          <ItemIconSVG title="Play" />
        </TouchableOpacity>
        <View style={styles.viewTime}>
          <Text style={styles.textTime}>20:00</Text>
        </View>
      </View>
    </ViewBox>
  );
};

export default ItemVideo;

const styles = StyleSheet.create({
  viewTime: {
    left: WIDTH(8),
    bottom: WIDTH(8),
    borderRadius: WIDTH(20),
    position: 'absolute',
    backgroundColor: '#E5E7EB',
    paddingHorizontal: WIDTH(8),
    paddingVertical: HEIGHT(2),
  },
  textTime: {
    fontWeight: '500',
    fontSize: getFontSize(11),
    lineHeight: getLineHeight(12),
  },
  image: {height: HEIGHT(160), width: WIDTH(128), borderRadius: WIDTH(8)},
  viewPosition: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPlay: {
    height: WIDTH(24),
    width: WIDTH(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBlur: {
    height: WIDTH(24),
    width: WIDTH(24),
    backgroundColor: '#0000005E',
    opacity: 0.37,
    position: 'absolute',
    borderRadius: WIDTH(12),
  },
});
