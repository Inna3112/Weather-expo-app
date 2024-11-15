import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const getStyles = () => StyleSheet.create({
  forecast: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  city: {
    color: Colors.light.bgWhite(),
    fontWeight: 'bold',
    fontSize: 36,
  },
  weatherText: {
    color: Colors.light.bgWhite(),
    fontSize: 24,
  },
  weatherImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  weatherImg: {
    width: 100,
    height: 100,
  },
  degreeContainer: {
    alignItems: 'center',
  },
  degree: {
    color: Colors.light.bgWhite(),
    fontSize: 48,
    paddingBottom: 8,
  },
});

export default getStyles;
