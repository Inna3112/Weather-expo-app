import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const getStyles = () => StyleSheet.create({
  textInputWrapper: {
    height: '7%',
    marginHorizontal: 16,
    position: 'relative',
    zIndex: 10,
    marginTop: 16,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10000,
  },
  textInput: {
    paddingLeft: 16,
    paddingRight: 'auto',
    height: 50,
    color: Colors.light.bgWhite(),
    alignSelf: 'flex-start',
  },
  error: {
    color: Colors.light.error,
    paddingTop: 4,
  },
  button: {
    borderRadius: 10000,
    padding: 6,
    margin: 2,
    backgroundColor: Colors.light.bgWhite(0.3),
  },
  transparentBg: {
    backgroundColor: 'transparent',
  },
  whiteBg: {
    backgroundColor: Colors.light.bgWhite(0.2),
  },
  recentLocations: {
    width: '60%',
  },
  locationsList: {
    position: 'absolute',
    top: 30,
    width: '100%',
    borderRadius: 4,
    backgroundColor: Colors.light.bgWhite(0.8),
  },
  location: {
    padding: 8,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    borderBottomColor: Colors.light.bgBlack(0.1),
  },
});

export default getStyles;
