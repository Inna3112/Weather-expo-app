import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const getStyles = () => StyleSheet.create({
  base: {
    fontFamily: 'UbuntuRegular',
    fontSize: 16,
    color: Colors.light.text,
  },
});

export default getStyles;
