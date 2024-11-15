import React, { useMemo } from 'react';
import {
  Image,
  View,
} from 'react-native';

import getStyles from './styles';

import type { IForecast } from '@/Screens/HomeScreen/components/Forecast/interfaces/IForecast';

import Switch from '@/components/AppText/AppText';
import getIcon from '@/utils/getIcon';

const sun = require('../../../../assets/images/sun2.png');

function Forecast({
  icon, city, hasWeather, temperature, description,
}: IForecast) {
  const styles = getStyles();
  const formatedTemperature = useMemo(() => {
    if (temperature) {
      return `${temperature}°`;
    }

    return temperature;
  }, [temperature]);

  const capitalizeDescription = useMemo(() => {
    if (description) {
      return description.charAt(0).toUpperCase() + description.slice(1);
    }

    return description;
  }, [description]);

  return (
    <View style={styles.forecast}>
      <Switch style={styles.city}>
        {hasWeather ? city : 'Enter the city'}
      </Switch>
      <View style={styles.weatherImgContainer}>
        <Image
          style={styles.weatherImg}
          source={hasWeather ? getIcon(icon) : sun}
        />
      </View>
      <View style={styles.degreeContainer}>
        {hasWeather ? (
          <>
            <Switch style={styles.degree}>
              {formatedTemperature}
            </Switch>
            <Switch style={styles.weatherText}>
              {capitalizeDescription}
            </Switch>
          </>
        ) : null}
      </View>
    </View>
  );
}

export default Forecast;
