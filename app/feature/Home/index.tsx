/* eslint-disable react-native/no-inline-styles */
import {Button, View} from 'react-native';
import React from 'react';
import {goBack} from '../../navigation/navigation-service';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import HeaderReal from '../../common/component/Header';

const Home = () => {
  const filterId = useSelector((state: RootState) => state.filter);
  console.log('===>', filterId);
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
