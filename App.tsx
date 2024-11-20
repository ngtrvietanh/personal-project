/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppContainer} from './app/navigation/app-navigation';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import {LogBox} from 'react-native';

function App(): React.JSX.Element {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
