import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {goBack} from '../../../navigation/navigation-service';

import styles from './styles';
import ItemIconSVG from '../IconSVG';
import HeaderPost from '../Item/ItemPost/HeaderPost';
interface Props {
  onButton?: () => void;
  title?: string;
  iconNameLeft?: string;
  children?: ReactNode;
}
const HeaderBaiDang = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.viewContent]}>
        <TouchableOpacity style={styles.btnBack} onPress={goBack}>
          <ItemIconSVG title={'Chevron left'} />
        </TouchableOpacity>
        <HeaderPost />
      </View>
    </View>
  );
};

export default HeaderBaiDang;
