/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemPost from '../../../common/component/Item/ItemPost';
const DATA = [1, 2, 3];
const ThaoLuan = () => {
  return (
    <View style={{flex: 1}}>
      {DATA?.map(item => {
        return <ItemPost />;
      })}
      {/* <FlatList
        data={DATA}
        extraData={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item, index}) => <ItemPost />}
        //   onRefresh={getData}
        //   refreshing={loading}
        //   contentContainerStyle={styles.viewContent}
        //   onEndReached={getMore}
        //   onEndReachedThreshold={0.01}
        //   onMomentumScrollBegin={() => {
        //     beginScroll.current = true;
        //   }}
      /> */}
    </View>
  );
};

export default ThaoLuan;

const styles = StyleSheet.create({});
