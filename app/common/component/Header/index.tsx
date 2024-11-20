import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {WIDTH} from '../../function';
import {goBack} from '../../../navigation/navigation-service';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';
interface Props {
  onButton?: () => void;
}
const HeaderReal = (props: Props) => {
  const {onButton} = props;

  return (
    <View style={styles.container}>
      <View style={[styles.viewContent]}>
        <TouchableOpacity style={styles.btnBack} onPress={goBack}>
          <Icon size={WIDTH(28)} name="chevron-left" color={'black'} />
        </TouchableOpacity>
        <Text numberOfLines={2} style={[styles.title]}>
          {'UI/UX Graphic\nDesigners in VietNam'}
        </Text>
        <TouchableOpacity style={styles.btnRight} onPress={onButton}>
          <Icon size={WIDTH(28)} name="chevron-left" color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderReal;
