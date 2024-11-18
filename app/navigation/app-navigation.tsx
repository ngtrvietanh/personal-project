import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {navigationRef} from './navigation-service';
import {RootNavigation} from './root-navigator';

export const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <RootNavigation />
    </NavigationContainer>
  );
};
