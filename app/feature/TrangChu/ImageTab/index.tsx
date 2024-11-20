/* eslint-disable react/no-unstable-nested-components */

import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ItemIamge from '../../../common/component/Item/ItemImage';
import {HEIGHT, WIDTH} from '../../../common/function';
import {ItemPostProps} from '../type';
interface Props {
  dsBaiDang: ItemPostProps[];
}
const ImageTab = (props: Props) => {
  const {dsBaiDang} = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={dsBaiDang}
        extraData={dsBaiDang}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.id?.toString()}
        ItemSeparatorComponent={() => <View style={{height: WIDTH(7)}} />}
        renderItem={({item, index}) => <ItemIamge index={index} item={item} />}
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
