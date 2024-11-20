/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemPost from '../../../common/component/Item/ItemPost';
const DATA = [1, 2, 3];
const ThaoLuan = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        extraData={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item?._id}
        renderItem={({item, index}) => <ItemPost />}
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

const styles = StyleSheet.create({});
