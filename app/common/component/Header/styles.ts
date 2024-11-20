import {StyleSheet} from 'react-native';

import {
  getFontSize,
  getLineHeight,
  getWidth,
  HEIGHT,
  WIDTH,
} from '../../function';
const styles = StyleSheet.create({
  btnBack: {position: 'absolute', left: WIDTH(0)},
  btnRight: {position: 'absolute', right: WIDTH(0)},
  viewContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH(16),
    paddingBottom: HEIGHT(12),
    width: getWidth(),
    height: HEIGHT(126),
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: getFontSize(16),
    fontWeight: '600',
    lineHeight: getLineHeight(24),
    textAlign: 'center',
  },
});

export default styles;