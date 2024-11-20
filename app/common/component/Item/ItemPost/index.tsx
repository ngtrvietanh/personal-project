import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../../../function';
import HeaderPost from './HeaderPost';
import BodyPost from './BodyPost';
import FooterPost from './FooterPost';
import CommentPost from '../../CommentPost';
import {navigateScreen} from '../../../../navigation/navigation-service';
import {APP_SCREEN} from '../../../../navigation/screen-types';

const ItemPost = () => {
  const onNavigate = () => {
    navigateScreen(APP_SCREEN.DETAIL_POST);
  };
  return (
    <TouchableOpacity
      onPress={onNavigate}
      activeOpacity={0.8}
      style={styles.container}>
      <HeaderPost />
      <View style={styles.gap} />
      <BodyPost />
      <FooterPost />
      <CommentPost />
    </TouchableOpacity>
  );
};

export default ItemPost;

const styles = StyleSheet.create({
  gap: {height: HEIGHT(8)},
  container: {
    marginTop: HEIGHT(8),
    backgroundColor: 'white',
    paddingVertical: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
  },
});
