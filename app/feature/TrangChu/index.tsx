/* eslint-disable react-native/no-inline-styles */
import {Button, View} from 'react-native';
import React from 'react';
import {navigateScreen} from '../../navigation/navigation-service';
import {APP_SCREEN} from '../../navigation/screen-types';

const TrangChu = () => {
  function handleClick() {
    navigateScreen(APP_SCREEN.HOME);
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button title="Go to Home" onPress={handleClick} />
    </View>
  );
};

export default TrangChu;
