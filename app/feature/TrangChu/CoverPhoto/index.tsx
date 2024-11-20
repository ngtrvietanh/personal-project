import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {getWidth, HEIGHT, WIDTH} from '../../../common/function';
import ItemIconSVG from '../../../common/component/IconSVG';

const CoverPhoto = () => {
  return (
    <TouchableOpacity style={styles.coverPhoto}>
      <TouchableOpacity activeOpacity={0.6} style={styles.btnUpdate}>
        <ItemIconSVG title="Camera update" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CoverPhoto;

const styles = StyleSheet.create({
  coverPhoto: {height: HEIGHT(190), width: getWidth()},
  btnUpdate: {
    backgroundColor: 'white',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH(16),
    height: WIDTH(32),
    width: WIDTH(32),
    right: WIDTH(12),
    bottom: WIDTH(12),
  },
});
