import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderReal from '../../common/component/Header';
import TabbarGroup from '../../common/component/Tabview';
import ThaoLuan from './ThaoLuan';
import ImageTab from './ImageTab';
import VideoTab from './VideoTab';
import AlbumTab from './AlbumTab';
import {getWidth, HEIGHT} from '../../common/function';
import UpdateThought from './UpdateThought';
import InfoGroup from './InfoGroup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {onGetDanhSach} from '../../networking/user';
import {ItemPostProps} from './type';
interface RouteProps {
  key: number;
  title: string;
}
const TrangChu = () => {
  const [dsBaiDang, setdsBaiDang] = useState<ItemPostProps[]>([]);
  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    try {
      const params = {page: 1, limit: 10};
      const response = await onGetDanhSach(params);
      setdsBaiDang(response?.data?.results || []);
    } catch (error) {}
  };
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

  return (
    <View style={styles.container}>
      <HeaderReal />
      <KeyboardAwareScrollView stickyHeaderIndices={[3]} style={styles.content}>
        <TouchableOpacity style={styles.coverPhoto} />
        <InfoGroup />
        <UpdateThought />
        <TabbarGroup
          onIndexChange={onIndexChange}
          navigationState={{index, routes}}
        />
        <RenderScene index={index} dsBaiDang={dsBaiDang} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default TrangChu;
const RenderScene = ({
  index,
  dsBaiDang,
}: {
  index: number;
  dsBaiDang: ItemPostProps[];
}) => {
  switch (index) {
    case 0:
      return <ThaoLuan dsBaiDang={dsBaiDang} />;
    case 1:
      return <ImageTab />;
    case 2:
      return <VideoTab />;
    case 3:
      return <AlbumTab />;
    case 4:
      return <Text>1</Text>;

    default:
      return null;
  }
};
const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1},
  coverPhoto: {height: HEIGHT(190), width: getWidth()},
});
