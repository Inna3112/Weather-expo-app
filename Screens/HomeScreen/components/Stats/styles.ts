import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const getStyles = () => StyleSheet.create({
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stat: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 20,
    height: 20,
  },
  text: {
    color: Colors.light.bgWhite(),
    fontSize: 24,
    paddingVertical: 10,
  },
});

export default getStyles;
