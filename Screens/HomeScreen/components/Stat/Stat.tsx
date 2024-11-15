import React from 'react';
import {
  Image,
  View,
} from 'react-native';

import getStyles from './styles';

import type { IStat } from '@/Screens/HomeScreen/components/Stat/interfaces/IStat';

import Switch from '@/components/AppText/AppText';

function Stat({ metric, image }: IStat) {
  const styles = getStyles();

  return (
    <View style={styles.stat}>
      <Image
        style={styles.img}
        source={image}
      />
      <Switch style={styles.text}>{metric}</Switch>
    </View>
  );
}

export default Stat;
