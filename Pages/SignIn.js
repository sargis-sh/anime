
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../Components/Tab/RootNavigation';

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState(null)

  const onSubmit = async() => {
      const un = await AsyncStorage.getItem('UNtoken')
      const pass = await AsyncStorage.getItem('PASStoken')
      const em = await AsyncStorage.getItem('EMtoken')
      if (username === un && password === pass) {
          RootNavigation.navigate('Profile', { loggedUsername: {un}, loggedPassword: {pass}, loggedEmail: {em}});
      }else {
          console.log('Try again')
      }
  }

  const tokenlogin = async() => {
      const un = await AsyncStorage.getItem('UNtoken')
      const pass = await AsyncStorage.getItem('PASStoken')
      const em = await AsyncStorage.getItem('EMtoken')
      if (un !== null && pass !== null && em !== null) {
          console.log('Welcome to your profile')
      }else {
          console.log('Sign In again')
      }
  }

  tokenlogin()
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/Logo.png')}
      />
     <Text style={styles.title}>Sign In</Text>
      <TextInput  onChangeText={(value) => setUsername(value)}
       placeholder="Username"
        style={styles.input}
     
      />
      <TextInput secureTextEntry onChangeText={(value) => setPassword(value)}
       placeholder="Password"
      
        style={styles.input}
      
      />
        <TouchableOpacity
        onPress={onSubmit}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 36,
    marginBottom: 30,
    marginTop: 16,
    color: '#de5523'
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 36,
    marginRight: 36
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 12,
    width: '50%',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 16,
    marginTop: 16
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  },
  button: {
    fontSize: 20,
    color: 'white',
    width: 120,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#3b99d9',
    padding: 9,
    textAlign: 'center'
  }
});

export default SignIn;