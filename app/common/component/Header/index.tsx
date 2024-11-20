import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {goBack} from '../../../navigation/navigation-service';

import styles from './styles';
import ItemIconSVG from '../IconSVG';
interface Props {
  onButton?: () => void;
  title?: string;
  iconNameLeft?: string;
  children?: ReactNode;
}
const HeaderReal = (props: Props) => {
  const {onButton, title, iconNameLeft, children} = props;

  return (
    <View style={styles.container}>
      <View style={[styles.viewContent]}>
        <TouchableOpacity onPress={goBack}>
          <ItemIconSVG title={iconNameLeft || 'Chevron left'} />
        </TouchableOpacity>
        <Text numberOfLines={2} style={[styles.title]}>
          {title || 'UI/UX Graphic\nDesigners in VietNam'}
        </Text>
        {children ? (
          children
        ) : (
          <TouchableOpacity onPress={onButton}>
            <ItemIconSVG title="Search" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderReal;
