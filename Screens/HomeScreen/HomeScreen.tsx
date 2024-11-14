import React from 'react';
import {
  Image, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import getStyles from './styles';

import Forecast from '@/Screens/HomeScreen/components/Forecast/Forecast';
import Search from '@/Screens/HomeScreen/components/Search/Search';
import Stats from '@/Screens/HomeScreen/components/Stats/Stats';

const bg = require('../../assets/images/bg.png');

export default function HomeScreen() {
  const styles = getStyles();

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
        <Forecast />
        <Stats />
      </SafeAreaView>
    </View>
  );
}
