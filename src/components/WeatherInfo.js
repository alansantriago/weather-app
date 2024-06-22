import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  const {
    name,
    main: { temp },
    weather,
    visibility,
    wind: { speed },
  } = weatherData;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The weather of {name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>{temp} °C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image source={{ uri: `https://openweathermap.org/img/w/${weather[0].icon}.png` }} style={styles.weatherIcon} />
        <Text style={[styles.text, styles.bold]}>{weather[0].main}</Text>
      </View>
      <Text style={styles.text}>{weather[0].description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{speed} m/s</Text>
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
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 80,
    textAlign: 'center',
    color: '#00aaff',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default WeatherInfo;
