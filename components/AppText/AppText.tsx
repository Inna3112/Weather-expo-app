import { Text } from 'react-native';

import getStyles from './styles';

import type { TextProps } from 'react-native/Libraries/Text/Text';

function AppText({ children, style }:TextProps) {
  const styles = getStyles();

  return (
    <Text style={[styles.base, style]}>
      {children}
    </Text>
  );
}

export default AppText;
