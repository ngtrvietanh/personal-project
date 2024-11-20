import {StyleSheet} from 'react-native';
import {getWidth, HEIGHT} from '../../../function';

const styles = StyleSheet.create({
  container: {
    paddingTop: HEIGHT(20),
    alignSelf: 'center',
    alignItems: 'center',
    width: getWidth(),
  },
});

export default styles;
