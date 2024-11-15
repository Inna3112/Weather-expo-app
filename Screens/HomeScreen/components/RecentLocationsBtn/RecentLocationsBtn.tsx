import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';

import getStyles from './styles';

import type { IRecentLocationsBtn } from '@/Screens/HomeScreen/components/RecentLocationsBtn/interfaces/IRecentLocationsBtn';

import AppText from '@/components/AppText/AppText';

function RecentLocationsBtn({ onPress, isDisabled = false }: IRecentLocationsBtn) {
  const styles = getStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
    >
      <AppText style={[styles.text, isDisabled ? styles.disabled : null]}>Recent Locations</AppText>
    </TouchableOpacity>
  );
}

export default RecentLocationsBtn;
