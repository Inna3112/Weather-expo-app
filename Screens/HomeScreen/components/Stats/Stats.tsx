import React from 'react';
import {
  Image,
  View,
} from 'react-native';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';

const wind = require('../../../../assets/images/wind.png');
const drop = require('../../../../assets/images/drop.png');
const sun = require('../../../../assets/images/sun.png');

function Forecast() {
  const styles = getStyles();

  return (
    <View style={styles.stats}>
      <View style={styles.stat}>
        <Image
          style={styles.img}
          source={wind}
        />
        <AppText style={styles.text}>22km</AppText>
      </View>
      <View style={styles.stat}>
        <Image
          style={styles.img}
          source={drop}
        />
        <AppText style={styles.text}>23%</AppText>
      </View>
      <View style={styles.stat}>
        <Image
          style={styles.img}
          source={sun}
        />
        <AppText style={styles.text}>6:05 AM</AppText>
      </View>
    </View>
  );
}

export default Forecast;
