import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'

const LoginForm = () => {

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/Logo.png')}
      />
   
      <TextInput
        placeholder='Name'
        style={styles.input}
        onChangeText={() => { }}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={() => { }}
      />
      <TouchableOpacity
        onPress={() => { }}>
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

export default LoginForm;