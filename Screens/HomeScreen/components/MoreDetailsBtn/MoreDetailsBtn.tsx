import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';
import useAppNavigation from '@/hooks/useAppNavigation';

function MoreDetailsBtn() {
  const navigation = useAppNavigation();
  const styles = getStyles();

  return (
    <TouchableOpacity style={styles.moreDetailsBtn} onPress={() => navigation.navigate('moreDetails')}>
      <AppText style={styles.moreDetails}>More details</AppText>
    </TouchableOpacity>
  );
}

export default MoreDetailsBtn;
