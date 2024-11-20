/* eslint-disable react/no-unstable-nested-components */

import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ItemIamge from '../../../common/component/Item/ItemImage';
import {HEIGHT, WIDTH} from '../../../common/function';
const DATA = [
  1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3,
];
const ImageTab = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        extraData={DATA}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        ItemSeparatorComponent={() => <View style={{height: WIDTH(7)}} />}
        renderItem={({item, index}) => <ItemIamge index={index} />}
      />
    </View>
  );
};

export default ImageTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: HEIGHT(8),
    paddingVertical: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
  },
});
