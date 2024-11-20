import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ItemIconSVG from '../IconSVG';
import {HEIGHT, WIDTH} from '../../function';
interface Props {
  title: string;
}
const ButtonIcon = (props: Props) => {
  const {title} = props;
  return (
    <TouchableOpacity style={styles.buttonIcon}>
      <ItemIconSVG title={title} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  buttonIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: HEIGHT(16),
    height: HEIGHT(32),
    width: HEIGHT(32),
    marginLeft: WIDTH(4),
  },
});
