import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import HeaderReal from '../../common/component/Header';
import TabbarGroup from '../../common/component/Tabview';
import ThaoLuan from './ThaoLuan';
interface RouteProps {
  key: number;
  title: string;
}
const TrangChu = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState<RouteProps[]>([
    {key: 0, title: 'Thảo luận'},
    {key: 1, title: 'Ảnh'},
    {key: 2, title: 'Video'},
    {key: 3, title: 'Album'},
    {key: 4, title: 'File'},
  ]);

  const onIndexChange = (curindex: number) => {
    setIndex(curindex);
  };

  const renderScene = ({route}: {route: RouteProps}) => {
    console.log('===>', route);
    switch (route.title) {
      case 'Thảo luận':
        return <ThaoLuan key={route?.key} />;
      case 'Ảnh':
        return <Text>1</Text>;
      case 'Video':
        return <Text>1</Text>;
      case 'Album':
        return <Text>1</Text>;
      case 'File':
        return <Text>1</Text>;

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <HeaderReal />
      <View style={styles.content}>
        <TabbarGroup
          renderScene={renderScene}
          onIndexChange={onIndexChange}
          navigationState={{index, routes}}
        />
      </View>
    </View>
  );
};

export default TrangChu;

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1},
});
