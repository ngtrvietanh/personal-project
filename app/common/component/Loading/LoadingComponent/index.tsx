import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './styles';
import {LoadingType} from './type';

const LoadingComponent = (props: LoadingType) => {
  const {size, customStyle, loading = true, color} = props;

  if (loading) {
    return (
      <View
        style={[styles.loadingContainer, customStyle && customStyle]}
        testID="loading">
        <ActivityIndicator
          color={color || 'gray'}
          animating
          size={size || 'large'}
        />
      </View>
    );
  } else {
    return <View />;
  }
};

export default LoadingComponent;
