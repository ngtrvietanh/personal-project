import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBaiDang from '../../common/component/Header/HeaderBaiDang';
import BodyPost from '../../common/component/Item/ItemPost/BodyPost';
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../common/function';
import ItemIconQuantity from '../../common/component/Item/ItemPost/ItemIconQuantity';
import CommentPost from '../../common/component/CommentPost';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const DetailPost = () => {
  return (
    <View style={styles.container}>
      <HeaderBaiDang />
      <KeyboardAwareScrollView>
        <View style={styles.content}>
          <BodyPost />
          <Text style={styles.viewQuantity}>55K lượt xem</Text>
          <Text style={styles.viewQuantity}>
            11k thích • 6 bình luận • 2 chia sẻ
          </Text>
          <View style={styles.viewFooter}>
            <ItemIconQuantity iconName="Heart" quantity="55K" />
            <ItemIconQuantity
              style={styles.iconRight}
              iconName="Message"
              quantity="55K"
            />
          </View>
        </View>
        <View style={styles.comment}>
          <CommentPost />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default DetailPost;

const styles = StyleSheet.create({
  comment: {
    height: HEIGHT(102),
    backgroundColor: 'white',
    marginTop: HEIGHT(8),
    paddingHorizontal: WIDTH(16),
    paddingTop: HEIGHT(8),
  },
  viewFooter: {flexDirection: 'row', marginTop: HEIGHT(8)},
  container: {flex: 1},
  iconRight: {marginLeft: WIDTH(8)},
  viewQuantity: {
    fontWeight: '500',
    fontSize: getFontSize(12),
    lineHeight: getLineHeight(16),
    color: '#71717A',
    marginTop: HEIGHT(8),
  },
  content: {
    backgroundColor: 'white',
    marginTop: HEIGHT(8),
    paddingHorizontal: WIDTH(16),
    paddingVertical: HEIGHT(12),
  },
});
