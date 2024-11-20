import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import HeaderReal from '../../common/component/Header';
import TabbarGroup from '../../common/component/Tabview';
import ThaoLuan from './ThaoLuan';
import ImageTab from './ImageTab';
import VideoTab from './VideoTab';
import AlbumTab from './AlbumTab';
import {getWidth, HEIGHT} from '../../common/function';
import UpdateThought from './UpdateThought';
import InfoGroup from './InfoGroup';
interface RouteProps {
  key: number;
  title: string;
}
const TrangChu = () => {
  const [index, setIndex] = useState(0);
  console.log('===>', index);
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
    switch (route.title) {
      case 'Thảo luận':
        return <ThaoLuan key={route?.key} />;
      case 'Ảnh':
        return <ImageTab />;
      case 'Video':
        return <VideoTab />;
      case 'Album':
        return <AlbumTab />;
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
        <TouchableOpacity style={styles.coverPhoto} />
        <InfoGroup />
        <UpdateThought />
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
  coverPhoto: {height: HEIGHT(190), width: getWidth()},
});
