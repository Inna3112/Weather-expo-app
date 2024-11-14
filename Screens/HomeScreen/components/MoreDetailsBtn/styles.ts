import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const getStyles = () => StyleSheet.create({
  moreDetailsBtn: {
    display: 'flex',
    alignItems: 'center',
  },
  moreDetails: {
    color: Colors.light.bgWhite(),
  },
});

export default getStyles;
