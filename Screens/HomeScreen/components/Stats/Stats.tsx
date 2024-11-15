import React, { useMemo } from 'react';
import {
  View,
} from 'react-native';

import getStyles from './styles';

import type { IStats } from '@/Screens/HomeScreen/components/Stats/interfaces/IStats';

import Stat from '@/Screens/HomeScreen/components/Stat/Stat';

const wind = require('../../../../assets/images/wind.png');
const drop = require('../../../../assets/images/drop.png');
const sun = require('../../../../assets/images/sun.png');

function Stats({ windSpeed, sunrise, humidity }: IStats) {
  const styles = getStyles();

  const formattedWindSpeed = useMemo(() => {
    if (windSpeed) {
      return `${windSpeed}km`;
    }
    return windSpeed;
  }, [windSpeed]);

  const formattedHumidity = useMemo(() => {
    if (humidity) {
      return `${humidity}%`;
    }
    return humidity;
  }, [humidity]);

  const formattedSunrise = useMemo(() => {
    if (sunrise) {
      const date = new Date(sunrise * 1000);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} AM`;
    }
    return sunrise;
  }, [sunrise]);

  return (
    <View style={styles.stats}>
      <Stat image={wind} metric={formattedWindSpeed} />
      <Stat image={drop} metric={formattedHumidity} />
      <Stat image={sun} metric={formattedSunrise} />
    </View>
  );
}

export default Stats;
