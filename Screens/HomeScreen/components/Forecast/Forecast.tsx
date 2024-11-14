import React from 'react';
import {
  Image,
  View,
} from 'react-native';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';

const partlyCloudy = require('../../../../assets/images/partlycloudy.png');

function Forecast() {
  const styles = getStyles();

  return (
    <View style={styles.forecast}>
      <AppText style={styles.city}>
        London,
        <AppText style={styles.country}> United Kingdom</AppText>
      </AppText>
      <View style={styles.weatherImgContainer}>
        <Image
          style={styles.weatherImg}
          source={partlyCloudy}
        />
      </View>
      <View style={styles.degreeContainer}>
        <AppText style={styles.degree}>
          23°
        </AppText>
        <AppText style={styles.country}>
          Partly Cloudy
        </AppText>
      </View>
    </View>
  );
}

export default Forecast;
