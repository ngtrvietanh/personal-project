import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {goBack} from '../../../navigation/navigation-service';

import styles from './styles';
import ItemIconSVG from '../IconSVG';
import HeaderPost from '../Item/ItemPost/HeaderPost';
import {ItemPostProps} from '../../../feature/TrangChu/type';
interface Props {
  item: ItemPostProps;
}
const HeaderBaiDang = (props: Props) => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={[styles.viewContent]}>
        <TouchableOpacity style={styles.btnBack} onPress={goBack}>
          <ItemIconSVG title={'Chevron left'} />
        </TouchableOpacity>
        <HeaderPost item={item} />
      </View>
    </View>
  );
};

export default HeaderBaiDang;
