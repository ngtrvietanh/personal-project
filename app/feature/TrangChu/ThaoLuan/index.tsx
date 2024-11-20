import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ItemPost from '../../../common/component/Item/ItemPost';
import {ItemPostProps} from '../type';
import {HEIGHT} from '../../../common/function';
interface Props {
  dsBaiDang: ItemPostProps[];
}
const ThaoLuan = (props: Props) => {
  const {dsBaiDang} = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={dsBaiDang}
        extraData={dsBaiDang}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: HEIGHT(30)}}
        keyExtractor={item => `${item?.id}`}
        renderItem={({item, index}) => <ItemPost key={index} item={item} />}
        onEndReachedThreshold={0.01}
      />
    </View>
  );
};

export default ThaoLuan;

const styles = StyleSheet.create({
  container: {flex: 1},
});
