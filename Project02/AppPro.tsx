import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Appearance,
  useColorScheme,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

function AppPro() {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
  const [value, setValue] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  function modechangers() {
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, []);

  const checker = async () => {
    if (!input.trim()) return;

    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.nationalize.io?name=${input}`,
      );
      setValue(response.data.country);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <SafeAreaView style={[styles.container, themeStyles.background]}>
      <Text style={[styles.heading, themeStyles.text]}>
        🌍 Nationality Predictor
      </Text>

      <TextInput
        style={[styles.input, themeStyles.input, themeStyles.text]}
        value={input}
        onChangeText={setInput}
        placeholder="Enter your name"
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
      />

      <TouchableOpacity
        style={[styles.button, themeStyles.button]}
        onPress={checker}
      >
        <Text style={styles.buttonText}>Check Nationality</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.modeButton]} onPress={modechangers}>
        <Text style={[styles.modeText, themeStyles.text]}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator
          size="large"
          color={isDarkMode ? '#fff' : '#000'}
          style={{ marginTop: 20 }}
        />
      )}

      <FlatList
        data={value}
        keyExtractor={item => item.country_id}
        renderItem={({ item }) => (
          <View style={[styles.card, themeStyles.card]}>
            <Text style={[styles.country, themeStyles.text]}>
              {item.country_id}
            </Text>
            <Text style={[styles.probability, themeStyles.text]}>
              {(item.probability * 100).toFixed(2)}%
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modeButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modeText: {
    fontWeight: '600',
  },
  card: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  country: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  probability: {
    fontSize: 16,
  },
});

const lightStyles = StyleSheet.create({
  background: { backgroundColor: '#F4F6F8' },
  text: { color: '#222' },
  input: { borderColor: '#ccc' },
  button: { backgroundColor: '#4A90E2' },
  card: { backgroundColor: '#ffffff' },
});

const darkStyles = StyleSheet.create({
  background: { backgroundColor: '#121212' },
  text: { color: '#ffffff' },
  input: { borderColor: '#444' },
  button: { backgroundColor: '#BB86FC' },
  card: { backgroundColor: '#1E1E1E' },
});

export default AppPro;
