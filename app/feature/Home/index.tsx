/* eslint-disable react-native/no-inline-styles */
import {Button, View} from 'react-native';
import React from 'react';
import {goBack} from '../../navigation/navigation-service';

const Home = () => {
  function handleBack() {
    goBack();
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Back" onPress={handleBack} />
    </View>
  );
};

export default Home;
