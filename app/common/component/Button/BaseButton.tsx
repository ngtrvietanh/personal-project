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
type Props = {
  title?: string;
  children?: React.ReactElement;
  onPress?: (firstItem?: any, secondItem?: any) => void;
  customStyleBtn?: StyleProp<ViewStyle>;
  customStyleTitle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isInvisible?: boolean;
  customStyle?: StyleProp<ViewStyle>;
};

const BaseButton: FunctionComponent<Props> = (props: Props) => {
  const {
    isInvisible,
    title,
    onPress,
    customStyleBtn,
    customStyleTitle,
    disabled,
    customStyle,
    children,
  } = props;
  const backgroundColor = disabled ? '#F3F4F6' : '#FFFFFF';
  if (isInvisible) {
    return null;
  } else {
    return (
      <View style={customStyle}>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={0.6}
          onPress={onPress && onPress}
          style={[styles.container, {backgroundColor}, customStyleBtn]}>
          <>
            {title && (
              <Text style={[styles.title, customStyleTitle]}>{title}</Text>
            )}
            {!!children && children}
          </>
        </TouchableOpacity>
      </View>
    );
  }
};

export default BaseButton;

const styles = StyleSheet.create({
  container: {
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
