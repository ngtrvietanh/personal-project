import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../function';
import Avatar from '../Avatar';
import R from '../../../assets/R';
import ButtonIcon from './ButtonIcon';
const CommentPost = () => {
  const [text, onChangeText] = React.useState('');
  const borderTopWidth = 0.5;
  return (
    <View style={[styles.container, {borderTopWidth}]}>
      <Avatar source={R.images.avatar} size={HEIGHT(32)} />
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          value={text}
          placeholder="Nhập vào đây"
        />
        <ButtonIcon title="Sentiment" />
        <ButtonIcon title="Image comment" />
      </View>
    </View>
  );
};

export default CommentPost;

const styles = StyleSheet.create({
  textInput: {
    borderRadius: HEIGHT(16),
    paddingHorizontal: WIDTH(12),
    backgroundColor: '#F9FAFB',
    flex: 1,
    marginRight: WIDTH(4),
    fontWeight: '500',
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(20),
  },
  container: {
    borderColor: '#F3F4F6',
    flexDirection: 'row',
    paddingTop: HEIGHT(8),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputBox: {
    flex: 1,
    height: HEIGHT(32),
    flexDirection: 'row',
    marginLeft: WIDTH(12),
  },
});
