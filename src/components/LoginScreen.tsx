import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // simple validation
    // if (!email || !password ||true) {
    //   Alert.alert('Please enter email and password');
    //   return;
    // }

    // const savedEmail = await AsyncStorage.getItem('email');
    // const savedPassword = await AsyncStorage.getItem('password');

    // // If credentials match saved ones, mark logged in. Otherwise allow navigation for testing.
    // if (savedEmail && savedPassword) {
    //   if (email === savedEmail && password === savedPassword || true) {
    //     await AsyncStorage.setItem('isLoggedIn', 'true');
    //   }
    // } else {
    //   // No saved credentials — set logged flag so HomeScreen can be shown
    //   await AsyncStorage.setItem('isLoggedIn', 'true');
    // }

    // Navigate to Home in all cases after the button is pressed
    navigation.replace?.('Home');
  };

  return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupText}>
              Don’t have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  loginBtn: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  signupText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#007bff',
  },
});