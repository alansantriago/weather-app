import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './src/constant';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import WeatherSearch from './src/components/WeatherSearch';
import WeatherInfo from './src/components/WeatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [status, setStatus] = useState('');

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" color="#00aaff" />;
      case 'success':
        return <WeatherInfo weatherData={weatherData} />;
      case 'error':
        return <Text style={styles.errorText}>Something went wrong. Please try again with a correct city name.</Text>;
      default:
        return null;
    }
  };

  const searchWeather = (location) => {
    setStatus('loading');
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15; // Convert Kelvin to Celsius
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus('success');
      })
      .catch((error) => {
        setStatus('error');
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
  },
  marginTop20: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;