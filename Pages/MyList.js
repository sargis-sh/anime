import Post from '../Components/Post/Post';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from '../Components/Post/List'
import Header from "../Components/Header/Header";
var rows = [];
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
var myArray;
const MyList = () => {

  for (let index = 0; index < 10; index++) {
    rows.push(<Post page="list" num={index} key={index}/>);
  }
  return (
    <View style={styles.Home}>
      <Header/>
      <ScrollView>
      <Text ellipsizeMode='tail' numberOfLines={2}  style= {styles.tytle}>My List</Text>
        <View style={styles.View}>
          {rows}
        </View> 
      </ScrollView>
    </View>
  );
}


  

  


const styles = StyleSheet.create({
    Home: {
      flex: 1,
      backgroundColor: "#282c34",
    },
    View: {
      width: "100%",
      alignItems:'center',
      justifyContent:'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    tytle:{
      margin:20,
      fontFamily: 'Roboto',
      textAlign: 'center',
      fontWeight: 'bold',
     
      fontSize: 40,
      color: 'white'
    }
});

export default MyList;