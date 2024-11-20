import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ItemPost from '../../../common/component/Item/ItemPost';
import {ItemPostProps} from '../type';
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
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item?.id}`}
        renderItem={({item, index}) => <ItemPost key={index} item={item} />}
        //   onRefresh={getData}
        //   refreshing={loading}
        //   contentContainerStyle={styles.viewContent}
        //   onEndReached={getMore}
        //   onEndReachedThreshold={0.01}
        //   onMomentumScrollBegin={() => {
        //     beginScroll.current = true;
        //   }}
      />
    </View>
  );
};

export default ThaoLuan;

const styles = StyleSheet.create({
  container: {flex: 1},
});
