/* eslint-disable react-native/no-inline-styles */
import {Button, Image, View} from 'react-native';
import React from 'react';
import {navigateScreen} from '../../navigation/navigation-service';
import {APP_SCREEN} from '../../navigation/screen-types';
import {useDispatch} from 'react-redux';
import {searchFilterChange} from '../../redux/slice/filterSlice';
import HeaderReal from '../../common/component/Header';
import ButtonTabview from '../../common/component/Button/ButtonTabview';
import ItemIconSVG from '../../common/component/IconSVG';
import TabbarPost from '../../common/component/TabbarPost';
import {WIDTH} from '../../common/function';
import R from '../../assets/R';
import Avatar from '../../common/component/Avatar';
import CommentPost from '../../common/component/CommentPost';
import ItemPost from '../../common/component/ItemPost';
const TrangChu = () => {
  const dispatch = useDispatch();
  function handleClick() {
    navigateScreen(APP_SCREEN.HOME);
  }
  function handleSubmit() {
    dispatch(searchFilterChange({id: 'hehe', name: 'hihi', token: ''}));
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <HeaderReal />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ItemPost />
        {/* <Button title="Deploy dữ liệu" onPress={handleSubmit} />
        <Button title="Go to Home" onPress={handleClick} />
        <ButtonTabview isActive title="Thảo luận" />
        <TabbarPost /> */}
        {/* <Image
          style={{height: WIDTH(100), width: WIDTH(100)}}
          source={R.images.avatar}
          resizeMode="cover"
        /> */}
        {/* <Avatar source={R.images.avatar} />
        <CommentPost /> */}
      </View>
    </View>
  );
};

export default TrangChu;
