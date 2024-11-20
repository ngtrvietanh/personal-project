/* eslint-disable react/no-unstable-nested-components */
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../../../common/function';
import ItemAlbum from '../../../common/component/Item/ItemAlbum';
import {ItemPostProps} from '../type';
interface Props {
  dsBaiDang: ItemPostProps[];
}
const AlbumTab = (props: Props) => {
  const {dsBaiDang} = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={dsBaiDang}
        extraData={dsBaiDang}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item?.id}`}
        ItemSeparatorComponent={() => <View style={{height: WIDTH(7)}} />}
        renderItem={({item, index}) => <ItemAlbum index={index} data={item} />}
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
