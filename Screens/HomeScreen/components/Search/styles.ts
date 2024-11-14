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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10000,
  },
  textInput: {
    paddingLeft: 16,
    paddingRight: 'auto',
    height: 40,
    color: Colors.light.bgWhite(),
    alignSelf: 'flex-start',
  },
  button: {
    borderRadius: 10000,
    padding: 6,
    margin: 2,
    backgroundColor: Colors.light.bgWhite(0.3),
  },
  flexEnd: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    backgroundColor: Colors.light.bgWhite(0.2),
  },
  locationsList: {
    position: 'absolute',
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
