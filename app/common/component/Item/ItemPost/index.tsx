import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../../../function';
import HeaderPost from './HeaderPost';
import BodyPost from './BodyPost';
import FooterPost from './FooterPost';
import CommentPost from '../../CommentPost';

const ItemPost = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <HeaderPost />
      <BodyPost />
      <FooterPost />
      <CommentPost />
    </TouchableOpacity>
  );
};

export default ItemPost;

const styles = StyleSheet.create({
  container: {
    marginTop: HEIGHT(8),
    backgroundColor: 'white',
    paddingVertical: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
  },
});
