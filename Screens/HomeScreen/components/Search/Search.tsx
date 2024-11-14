import React, { useState } from 'react';
import {
  TextInput, TouchableOpacity, View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import getStyles from './styles';

import AppText from '@/components/AppText/AppText';

function Search() {
  const styles = getStyles();
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  const handleLocation = (location: number) => {
    // console.log(location);
    setLocations([location]);
  };

  return (
    <View style={styles.textInputWrapper}>
      <View style={[styles.textInputContainer, showSearch ? styles.spaceBetween : styles.flexEnd]}>
        {showSearch ? (
          <TextInput
            placeholder="Search city"
            placeholderTextColor="lightgray"
            style={styles.textInput}
          />
        ) : null}
        <TouchableOpacity
          onPress={() => setShowSearch(!showSearch)}
          style={styles.button}
        >
          <Ionicons name="search-outline" color="white" size={24} />
        </TouchableOpacity>
      </View>
      <View>
        {locations.length > 0 && showSearch ? (
          <View style={styles.locationsList}>
            {locations.map((location) => (
              <TouchableOpacity style={styles.location} onPress={() => handleLocation(location)}>
                <Ionicons name="location" color="gray" size={24} />
                <AppText>{location}</AppText>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </View>
    </View>
  );
}

export default Search;
