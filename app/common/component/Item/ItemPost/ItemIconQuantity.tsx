import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import ItemIconSVG from '../../IconSVG';
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../../function';
interface ItemIconQuantityProps {
  iconName: string;
  quantity: string;
  style?: ViewStyle;
}
const ItemIconQuantity = (props: ItemIconQuantityProps) => {
  const {iconName, quantity, style} = props;
  return (
    <View style={[styles.containerItem, style]}>
      <ItemIconSVG title={iconName} />
      <Text style={styles.textQuantity}>{quantity}</Text>
    </View>
  );
};

export default ItemIconQuantity;

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: HEIGHT(8),
    paddingHorizontal: WIDTH(12),
  },
  textQuantity: {
    marginLeft: WIDTH(4),
    fontWeight: '400',
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(20),
  },
});
