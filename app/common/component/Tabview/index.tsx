import React from 'react';
import {FlatList, View} from 'react-native';

import styles from './styles';
import ButtonTabview from '../Button/ButtonTabview';
interface Props {
  navigationState: any;
  onIndexChange: (e: number) => void;
}
const TabbarGroup = (props: Props) => {
  const {navigationState, onIndexChange} = props;

  return (
    <>
      <View style={styles.container}>
        <Tabbar
          data={navigationState.routes}
          onChangeIndex={onIndexChange}
          curIndex={navigationState.index}
        />
      </View>
    </>
  );
};

export default TabbarGroup;

const Tabbar = ({data, onChangeIndex, curIndex}: any) => {
  return (
    <FlatList
      bounces={false}
      style={styles.viewTabbar}
      contentContainerStyle={styles.contentContainer}
      data={data}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const isActive = index === curIndex ? true : false;

        return (
          <ButtonTabview
            onPress={() => onChangeIndex(index)}
            isActive={isActive}
            title={item?.title}
            styleBtn={styles.btn}
          />
        );
      }}
    />
  );
};
