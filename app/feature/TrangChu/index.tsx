/* eslint-disable react-native/no-inline-styles */
import {Button, View} from 'react-native';
import React from 'react';
import {navigateScreen} from '../../navigation/navigation-service';
import {APP_SCREEN} from '../../navigation/screen-types';
import {useDispatch} from 'react-redux';
import {searchFilterChange} from '../../redux/slice/filterSlice';
import HeaderReal from '../../common/component/Header';
import BaseButton from '../../common/component/Button/BaseButton';

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
        <Button title="Deploy dữ liệu" onPress={handleSubmit} />
        <Button title="Go to Home" onPress={handleClick} />
        <BaseButton title="Gõ vào đây" />
      </View>
    </View>
  );
};

export default TrangChu;
