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




const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)

  const onSubmit = async() => {
      await AsyncStorage.setItem('token', username)
      if (username === 'marina'  && password === '123456') {
          console.log('Nice')
          navigation.navigate('SignIn')
      }
  }

  const tokensignup = async() => {
      const value = await AsyncStorage.getItem('token')
      if (value !== null) {
          navigation.navigate('SignIn')
          console.log('Welcome to your profile')
      }else {
          console.log('Sign In again')
      }
  }

  tokensignup()
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/Logo.png')}
      />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        onChangeText={(value) => setUsername(value)}
        placeholder="Username"
        style={styles.input}
       
      />
      <TextInput 
      onChangeText={(value) => setEmail(value)}
      placeholder="Email"
      
        style={styles.input}
        
      />
       <TextInput
       onChangeText={(value) => setPassword(value)}
    
        placeholder='Password'
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
    padding: 8,
    textAlign: 'center'
  }
});

export default SignUp;