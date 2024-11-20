import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderReal from '../../common/component/Header';
import TabbarGroup from '../../common/component/Tabview';
import ThaoLuan from './ThaoLuan';
import ImageTab from './ImageTab';
import {getWidth, HEIGHT} from '../../common/function';
import UpdateThought from './UpdateThought';
import InfoGroup from './InfoGroup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ItemPostProps} from './type';
import CoverPhoto from './CoverPhoto';
import {onGetDanhSach} from '../../networking/user';
import LoadingComponent from '../../common/component/Loading/LoadingComponent';
interface RouteProps {
  key: number;
  title: string;
}
const TrangChu = () => {
  const [index, setIndex] = useState(0);
  const [loading, setloading] = useState(false);
  const [dsBaiDang, setdsBaiDang] = useState<ItemPostProps[]>([]);
  const [routes] = useState<RouteProps[]>([
    {key: 0, title: 'Thảo luận'},
    {key: 1, title: 'Ảnh'},
    {key: 2, title: 'Video'},
    {key: 3, title: 'Album'},
    {key: 4, title: 'File'},
  ]);
  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    setloading(true);
    try {
      const params = {page: 1, limit: 10};
      const response = await onGetDanhSach(params);
      setdsBaiDang(response?.data?.results || []);
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  };

  const onIndexChange = (curindex: number) => {
    setIndex(curindex);
  };

  return (
    <View style={styles.container}>
      <HeaderReal />
      <KeyboardAwareScrollView stickyHeaderIndices={[3]} style={styles.content}>
        <CoverPhoto />
        <InfoGroup />
        <UpdateThought />
        <TabbarGroup
          onIndexChange={onIndexChange}
          navigationState={{index, routes}}
        />
        <RenderScene index={index} dsBaiDang={dsBaiDang} />
      </KeyboardAwareScrollView>
      <LoadingComponent loading={loading} />
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
    case 2:
    case 3:
      return <ImageTab dsBaiDang={dsBaiDang} tab={index} />;

    case 4:
      return null;

    default:
      return null;
  }
};
const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1},
  coverPhoto: {height: HEIGHT(190), width: getWidth()},
});
