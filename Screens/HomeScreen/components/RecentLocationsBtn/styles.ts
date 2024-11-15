import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const getStyles = () => StyleSheet.create({
  text: {
    color: Colors.light.bgWhite(),
  },
  disabled: {
    color: Colors.light.tabIconDefault,
  },
});

export default getStyles;
