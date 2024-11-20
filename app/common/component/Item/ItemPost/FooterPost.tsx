import {StyleSheet, View} from 'react-native';
import React from 'react';
import {HEIGHT} from '../../../function';
import ItemIconQuantity from './ItemIconQuantity';

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
});
