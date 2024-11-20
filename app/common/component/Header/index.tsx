import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {WIDTH} from '../../function';
import {goBack} from '../../../navigation/navigation-service';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import ItemIconSVG from '../IconSVG';
interface Props {
  onButton?: () => void;
}
const HeaderReal = (props: Props) => {
  const {onButton} = props;

  return (
    <View style={styles.container}>
      <View style={[styles.viewContent]}>
        <TouchableOpacity style={styles.btnBack} onPress={goBack}>
          <ItemIconSVG title="Chevron left" />
        </TouchableOpacity>
        <Text numberOfLines={2} style={[styles.title]}>
          {'UI/UX Graphic\nDesigners in VietNam'}
        </Text>
        <TouchableOpacity style={styles.btnRight} onPress={onButton}>
          <ItemIconSVG title="Search" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderReal;
