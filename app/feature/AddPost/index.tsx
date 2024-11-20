import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import HeaderReal from '../../common/component/Header';
import BaseButton from '../../common/component/Button/BaseButton';
import TabbarPost from '../../common/component/TabbarPost';
import HeaderUser from './HeaderUser';
import {getFontSize, getLineHeight, WIDTH} from '../../common/function';

const AddPost = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <HeaderReal iconNameLeft="Clear" title="Tạo bài viết">
        <BaseButton title="Đăng" disabled />
      </HeaderReal>
      <View style={styles.content}>
        <View style={styles.viewContent}>
          <HeaderUser />
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Hãy viết gì đó hôm nay"
            multiline
          />
        </View>
        <TabbarPost />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  viewContent: {flex: 1, borderBottomWidth: 1, borderColor: '#F3F4F6'},
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  textInput: {
    paddingHorizontal: WIDTH(12),
    color: 'black',
    fontWeight: '600',
    lineHeight: getLineHeight(24),
    fontSize: getFontSize(16),
    height: '100%',
  },
  content: {flex: 1, flexDirection: 'column'},
});
