/* eslint-disable react/no-unstable-nested-components */

import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ItemIamge from '../../../common/component/Item/ItemImage';
import {HEIGHT, WIDTH} from '../../../common/function';
import {ItemPostProps} from '../type';
import ItemVideo from '../../../common/component/Item/ItemVideo';
import ItemAlbum from '../../../common/component/Item/ItemAlbum';
interface Props {
  dsBaiDang: ItemPostProps[];
  tab: number;
}
const ImageTab = (props: Props) => {
  const {dsBaiDang, tab} = props;
  const renderItem = ({item, index}: {item: ItemPostProps; index: number}) => {
    switch (tab) {
      case 1:
        return <ItemIamge index={index} data={item} />;
      case 2:
        return <ItemVideo index={index} data={item} />;
      case 3:
        return <ItemAlbum index={index} data={item} />;

      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={dsBaiDang}
        extraData={dsBaiDang}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.id?.toString()}
        ItemSeparatorComponent={() => <View style={{height: WIDTH(7)}} />}
        renderItem={renderItem}
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
