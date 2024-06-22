import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CustomTextInput from './CustomTextInput';

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState('');

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        text={location}
        onChange={setLocation}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Search" onPress={() => searchWeather(location)} color="#00aaff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonWrapper: {
    marginTop: 20,
  },
});

export default WeatherSearch;
