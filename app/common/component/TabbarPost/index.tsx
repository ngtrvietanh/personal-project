import {FlatList, View, StyleSheet} from 'react-native';
import React from 'react';
import ItemIconSVG from '../IconSVG';
import {getWidth, HEIGHT, WIDTH} from '../../function';
import {TouchableOpacity} from 'react-native';
const LIST_FUNCTION = [
  {
    name: 'Camera',
  },
  {
    name: 'Image',
  },
  {
    name: 'Camera video',
  },
  {
    name: 'Locate',
  },
  {
    name: 'Add user',
  },
  {
    name: 'Emotion',
  },
  {
    name: 'Flag',
  },
];
const TabbarPost = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={LIST_FUNCTION}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainer}
        horizontal
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity key={index}>
              <ItemIconSVG title={item?.name} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TabbarPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: HEIGHT(18),
  },
  contentContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH(16),
    flexGrow: 1,
  },
  containerList: {width: getWidth()},
});
