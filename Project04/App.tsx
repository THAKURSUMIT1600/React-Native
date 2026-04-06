import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Clipboard,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const App = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Minimum Length is 4 ')
      .max(20, ' Maximum Length is 20')
      .required('Length is Required'),
  });

  const generatePassword = length => {
    let char = '';
    setLoading(true);
    if (lowerCase) {
      char += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (upperCase) {
      char += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (symbol) {
      char += '!@#$%^&*';
    }
    if (number) {
      char += '1234567890';
    }
    if (!char) {
      Alert.alert('Validation Error', 'Select At Least One Option');
      setLoading(false);
      return;
    }
    createPassword(char, length);
  };
  const createPassword = (character: string, length: number) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      let randomval = Math.floor(Math.random() * character.length);
      result += character.charAt(randomval);
    }
    setPassword(result);
    setLoading(false);
  };
  const resetPassword = () => {
    setPassword('');
    setLowerCase(false);
    setNumber(false);
    setLoading(false);
    setSymbol(false);
    setUpperCase(false);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Password Generator</Text>
        </View>
        <View style={styles.card}>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatePassword(+values.passwordLength);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleReset,
              handleSubmit,
            }) => (
              <>
                <View style={styles.inputSection}>
                  <Text style={styles.label}>Enter Password Length</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('passwordLength')}
                    value={values.passwordLength}
                    placeholder="e.g., 12"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                  />
                  {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.error}>{errors.passwordLength}</Text>
                  )}
                </View>
                <View style={styles.checkboxSection}>
                  <Text style={styles.label}>
                    Select Character Types (at least one)
                  </Text>
                  <View style={styles.checkboxColumn}>
                    <View style={styles.checkboxItem}>
                      <BouncyCheckbox
                        isChecked={upperCase}
                        disableText
                        fillColor="#4CAF50"
                        size={30}
                        useBuiltInState={false}
                        iconStyle={{ borderColor: '#4CAF50' }}
                        onPress={() => setUpperCase(prev => !prev)}
                      />
                      <Text style={styles.checkboxLabel}>
                        Uppercase Letters
                      </Text>
                    </View>
                    <View style={styles.checkboxItem}>
                      <BouncyCheckbox
                        isChecked={lowerCase}
                        disableText
                        fillColor="#2196F3"
                        size={30}
                        useBuiltInState={false}
                        iconStyle={{ borderColor: '#2196F3' }}
                        onPress={() => setLowerCase(prev => !prev)}
                      />
                      <Text style={styles.checkboxLabel}>
                        Lowercase Letters
                      </Text>
                    </View>
                    <View style={styles.checkboxItem}>
                      <BouncyCheckbox
                        isChecked={number}
                        disableText
                        fillColor="#FF9800"
                        size={30}
                        useBuiltInState={false}
                        iconStyle={{ borderColor: '#FF9800' }}
                        onPress={() => setNumber(prev => !prev)}
                      />
                      <Text style={styles.checkboxLabel}>Numbers</Text>
                    </View>
                    <View style={styles.checkboxItem}>
                      <BouncyCheckbox
                        isChecked={symbol}
                        disableText
                        fillColor="#E91E63"
                        size={30}
                        useBuiltInState={false}
                        iconStyle={{ borderColor: '#E91E63' }}
                        onPress={() => setSymbol(prev => !prev)}
                      />
                      <Text style={styles.checkboxLabel}>Symbols</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttonSection}>
                  <TouchableOpacity
                    style={[styles.button, !isValid && styles.buttonDisabled]}
                    disabled={!isValid}
                    onPress={handleSubmit}
                  >
                    {loading ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <Text style={styles.buttonText}>Generate Password</Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.resetButton]}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}
                  >
                    <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {password && (
          <View style={styles.passwordCard}>
            <Text style={styles.passwordLabel}>Generated Password:</Text>
            <Text selectable style={styles.passwordText}>
              {password}
            </Text>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={() => {
                Clipboard.setString(password);
                Alert.alert('Copied!', 'Password copied to clipboard.');
              }}
            >
              <Text style={styles.copyButtonText}>Copy</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  inputSection: {
    marginBottom: 25,
  },
  label: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    height: 55,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
    color: '#333',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  error: {
    fontSize: 14,
    color: '#e74c3c',
    marginTop: 5,
  },
  checkboxSection: {
    marginBottom: 25,
  },
  checkboxColumn: {
    flexDirection: 'column',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  buttonSection: {
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  resetButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  passwordLabel: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
    fontWeight: '600',
  },
  passwordText: {
    fontSize: 22,
    color: '#27ae60',
    backgroundColor: '#ecf0f1',
    padding: 20,
    borderRadius: 15,
    textAlign: 'center',
    marginBottom: 15,
    width: '100%',
    fontFamily: 'monospace',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  copyButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
