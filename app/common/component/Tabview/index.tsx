import React from 'react';
import {FlatList, View} from 'react-native';

import {SceneRendererProps, TabView} from 'react-native-tab-view';

import styles from './styles';
import ButtonTabview from '../Button/ButtonTabview';
interface Props {
  navigationState: any;
  onIndexChange: (e: number) => void;
  renderScene: (props: SceneRendererProps & {route: any}) => React.ReactNode;
  lazy?: boolean;
}
const TabbarGroup = (props: Props) => {
  const {navigationState, onIndexChange, renderScene, lazy = true} = props;

  return (
    <>
      <View style={styles.container}>
        <Tabbar
          data={navigationState.routes}
          onChangeIndex={onIndexChange}
          curIndex={navigationState.index}
        />
      </View>
      <TabView
        navigationState={navigationState}
        onIndexChange={onIndexChange}
        renderScene={renderScene}
        renderTabBar={() => null}
        lazy={lazy}
      />
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
