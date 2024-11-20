import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';
// config
import {getFontSize, getLineHeight, HEIGHT, WIDTH} from '../../function';
import ItemIconSVG from '../IconSVG';
type Props = {
  title?: string;
  onPress?: (firstItem?: any, secondItem?: any) => void;
  customStyleBtn?: StyleProp<ViewStyle>;
  customStyleTitle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isInvisible?: boolean;
  customStyle?: StyleProp<ViewStyle>;
  iconNameLeft?: string;
  iconNameRight?: string;
  iconColorLeft?: string;
  iconColoright?: string;
};

const BaseButton: FunctionComponent<Props> = (props: Props) => {
  const {
    isInvisible,
    title,
    onPress,
    customStyleBtn,
    customStyleTitle,
    disabled,
    iconNameLeft,
    iconNameRight,
    iconColorLeft,
    iconColoright,
  } = props;
  const color = disabled ? '#D2D6DB' : 'black';
  const backgroundColor = disabled ? '#F3F4F6' : '#FFFFFF';
  const marginLeft = iconNameLeft ? WIDTH(8) : 0;
  const marginRight = iconNameRight ? WIDTH(8) : 0;
  const styleContainer = [styles.container, {backgroundColor}, customStyleBtn];
  if (isInvisible) {
    return null;
  } else {
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.6}
        onPress={onPress && onPress}
        style={styleContainer}>
        {!!iconNameLeft && (
          <ItemIconSVG title={iconNameLeft} color={iconColorLeft} />
        )}
        <Text
          style={[
            styles.title,
            {
              marginLeft,
              marginRight,
              color,
            },
            customStyleTitle,
          ]}>
          {title || 'Nút nhấn'}
        </Text>
        {!!iconNameRight && (
          <ItemIconSVG title={iconNameRight} color={iconColoright} />
        )}
      </TouchableOpacity>
    );
  }
};

export default BaseButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: WIDTH(8),
    justifyContent: 'center',
    paddingVertical: HEIGHT(8),
    paddingHorizontal: WIDTH(14),
    textAlign: 'center',
  },
  title: {
    fontSize: getFontSize(12),
    fontWeight: '500',
    lineHeight: getLineHeight(16),
    color: 'black',
  },
});
