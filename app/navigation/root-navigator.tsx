import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_SCREEN} from './screen-types';
import TrangChu from '../feature/TrangChu';
import Home from '../feature/Home';

const RootStack = createNativeStackNavigator();

export const RootNavigation = () => {
  // state

  // effect
  useEffect(() => {
    const id = setTimeout(() => {}, 1000);

    return () => clearTimeout(id);
  }, []);

  // render
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Group>
        <RootStack.Screen name={APP_SCREEN.TRANG_CHU} component={TrangChu} />
        <RootStack.Screen name={APP_SCREEN.HOME} component={Home} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
