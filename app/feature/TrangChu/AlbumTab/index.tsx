/* eslint-disable react/no-unstable-nested-components */
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../../../common/function';
import ItemAlbum from '../../../common/component/Item/ItemAlbum';
const DATA = [
  1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3,
];
const AlbumTab = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        extraData={DATA}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        ItemSeparatorComponent={() => <View style={{height: WIDTH(7)}} />}
        renderItem={({item, index}) => <ItemAlbum index={index} />}
      />
    </View>
  );
};

export default AlbumTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: HEIGHT(8),
    paddingVertical: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
  },
});
