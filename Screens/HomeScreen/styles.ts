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
});

export default getStyles;
