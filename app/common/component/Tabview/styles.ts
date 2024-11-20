import {StyleSheet} from 'react-native';

import {HEIGHT, WIDTH} from '../../function';
const styles = StyleSheet.create({
  viewTabbar: {
    flex: 1,
  },
  btn: {marginRight: WIDTH(12)},
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: WIDTH(16),
  },
  viewButton: {
    height: HEIGHT(34),
    width: WIDTH(161),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WIDTH(8),
  },
  container: {
    height: HEIGHT(64),
    backgroundColor: 'white',
  },
});

export default styles;
