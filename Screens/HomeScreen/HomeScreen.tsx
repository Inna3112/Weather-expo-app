import React from 'react';
import {
  Image, View,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Progress from 'react-native-progress';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

import getStyles from './styles';

import type { AppDispatch } from '@/store/types/TStore';

import AppText from '@/components/AppText/AppText';
import Switch from '@/components/Switch/Switch';
import Forecast from '@/Screens/HomeScreen/components/Forecast/Forecast';
import Search from '@/Screens/HomeScreen/components/Search/Search';
import Stats from '@/Screens/HomeScreen/components/Stats/Stats';
import { selectWeather } from '@/store/slices/weather/selectors';
import { setMetric } from '@/store/slices/weather/slice';

const bg = require('../../assets/images/bg.png');

export default function HomeScreen() {
  const styles = getStyles();
  const dispatch = useDispatch<AppDispatch>();

  const {
    weather, loading, metric,
  } = useSelector(selectWeather);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.bgImage}
        blurRadius={70}
        source={bg}
      />
      <SafeAreaView style={styles.areaView}>
        <Search />
        <View style={styles.switchBlock}>
          <AppText style={styles.deg}>°F</AppText>
          <Switch
            toggleSwitch={(prop) => {
              const unit = prop ? 'metric' : 'imperial';
              dispatch(setMetric(unit));
            }}
            isEnabled={metric === 'metric'}
          />
          <AppText style={styles.deg}>°C</AppText>
        </View>
        <Forecast
          city={weather?.name || undefined}
          icon={weather?.weather[0].icon || undefined}
          temperature={weather?.main.temp || undefined}
          description={weather?.weather[0].description || undefined}
          hasWeather={!!weather}
        />
        <Stats
          windSpeed={weather?.wind.speed || undefined}
          humidity={weather?.main.humidity || undefined}
          sunrise={weather?.sys.sunrise || undefined}
        />
      </SafeAreaView>
      {loading ? (
        <View style={styles.loader}>
          <Progress.Circle size={30} indeterminate color="#fff" />
        </View>
      ) : null}
    </View>
  );
}
