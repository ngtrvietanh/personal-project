import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';
import React from 'react';
import {WIDTH} from '../../function';
interface Props {
  borderRadius?: number;
  size?: number;
  source?: ImageSourcePropType | undefined;
  resizeMode?: ImageResizeMode | undefined;
  customeStyleImage?: StyleProp<ImageStyle>;
}
const Avatar = (props: Props) => {
  const {borderRadius, size, source, resizeMode, customeStyleImage} = props;
  const styleImage = [
    {
      height: size || WIDTH(44),
      width: size || WIDTH(44),
      borderRadius: borderRadius || 50,
    },
    customeStyleImage,
  ];
  return (
    <Image
      style={styleImage}
      source={source}
      resizeMode={resizeMode || 'contain'}
    />
  );
};

export default Avatar;
