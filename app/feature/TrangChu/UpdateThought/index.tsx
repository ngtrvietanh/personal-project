import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  getFontSize,
  getLineHeight,
  HEIGHT,
  WIDTH,
} from '../../../common/function';
import TabbarPost from '../../../common/component/TabbarPost';
import Avatar from '../../../common/component/Avatar';
import R from '../../../assets/R';
import {navigateScreen} from '../../../navigation/navigation-service';
import {APP_SCREEN} from '../../../navigation/screen-types';
const UpdateThought = () => {
  const onNavigate = () => {
    navigateScreen(APP_SCREEN.ADD_POST);
  };
  return (
    <TouchableOpacity onPress={onNavigate} style={styles.container}>
      <View style={styles.header}>
        <Avatar source={R.images.avatar} />
        <Text style={styles.text}>Hãy viết gì đó cho hôm nay</Text>
      </View>
      <TabbarPost />
    </TouchableOpacity>
  );
};

export default UpdateThought;

const styles = StyleSheet.create({
  text: {
    marginLeft: WIDTH(12),
    fontWeight: '600',
    fontSize: getFontSize(16),
    lineHeight: getLineHeight(24),
    color: '#D2D6DB',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH(16),
  },
  container: {
    justifyContent: 'space-between',
    height: HEIGHT(120),
    backgroundColor: 'white',
    marginBottom: HEIGHT(8),
  },
});
