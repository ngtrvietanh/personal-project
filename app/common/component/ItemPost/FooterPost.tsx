import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemIconSVG from '../IconSVG';
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../function';
interface ItemIconQuantityProps {
  iconName: string;
  quantity: string;
}
const ItemIconQuantity = (props: ItemIconQuantityProps) => {
  const {iconName, quantity} = props;
  return (
    <View style={styles.containerItem}>
      <ItemIconSVG title={iconName} />
      <Text style={styles.textQuantity}>{quantity}</Text>
    </View>
  );
};

const FooterPost = () => {
  return (
    <View style={styles.container}>
      <ItemIconQuantity iconName="Heart" quantity="55K" />
      <ItemIconQuantity iconName="Message" quantity="28K" />
    </View>
  );
};

export default FooterPost;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: HEIGHT(8),
  },
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
