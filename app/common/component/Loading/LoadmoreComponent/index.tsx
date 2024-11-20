import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './styles';

const LoadMore = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'small'} color={'gray'} />
    </View>
  );
};

export default LoadMore;
