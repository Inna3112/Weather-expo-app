import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const getStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.light.background,
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  areaView: {
    flex: 1,
  },
  switchBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 16,
  },
  deg: {
    color: Colors.light.bgWhite(),
    fontSize: 16,
    paddingHorizontal: 8,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 100,
  },
});

export default getStyles;
