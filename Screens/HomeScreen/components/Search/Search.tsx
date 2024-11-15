import React, { useState } from 'react';
import {
  TextInput, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';

import getStyles from './styles';

import type { AppDispatch } from '@/store/types/TStore';

import AppText from '@/components/AppText/AppText';
import RecentLocationsBtn from '@/Screens/HomeScreen/components/RecentLocationsBtn/RecentLocationsBtn';
import { selectWeather } from '@/store/slices/weather/selectors';
import { fetchWeather, setLocation, setShowSearch } from '@/store/slices/weather/slice';

function Search() {
  const styles = getStyles();
  const dispatch = useDispatch<AppDispatch>();
  const [showRecentLocations, setShowRecentLocations] = useState(false);
  const {
    metric, recentLocations, error, showSearch, location,
  } = useSelector(selectWeather);

  const onPress = (city: string) => {
    if (!city) {
      dispatch(setShowSearch(!showSearch));
    }

    if (city) {
      dispatch(fetchWeather({ city: city.trim(), metric }));
    }
  };

  const onRecentLocationPress = (city: string) => {
    onPress(city);
    setShowRecentLocations(false);
  };

  return (
    <View style={styles.textInputWrapper}>
      <View style={[styles.textInputContainer, showSearch ? styles.whiteBg : styles.transparentBg]}>
        {showSearch ? (
          <TextInput
            placeholder="Search city"
            placeholderTextColor="lightgray"
            style={styles.textInput}
            value={location}
            onChangeText={(text) => dispatch(setLocation(text))}
          />
        ) : (
          <View style={styles.recentLocations}>
            <RecentLocationsBtn
              onPress={() => setShowRecentLocations(!showRecentLocations)}
              isDisabled={recentLocations.length === 0}
            />
            {showRecentLocations ? (
              <View style={styles.locationsList}>
                {recentLocations.map((recentLocation) => (
                  <TouchableOpacity style={styles.location} onPress={() => onRecentLocationPress(recentLocation)}>
                    <Ionicons name="location" color="gray" size={24} />
                    <AppText>{recentLocation}</AppText>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </View>
        )}
        <TouchableOpacity
          onPress={() => onPress(location)}
          style={styles.button}
        >
          <Ionicons name="search-outline" color="white" size={24} />
        </TouchableOpacity>
      </View>
      <AppText style={styles.error}>{error ? 'Failed to fetch weather data' : ''}</AppText>
    </View>
  );
}

export default Search;
