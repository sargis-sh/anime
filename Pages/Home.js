import { useState, useEffect } from 'react';
import Post from '../Components/Post/Post';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
// import {SearchObjj} from '../Components/Search/Search';
// import './Home.css';
const Home = () => {
//   var count = prompt("Enter the post count!")
//   parseFloat(count);
  var rows = [];

  for (let index = 0; index < 10; index++) {
    rows.push(<Post num={index} key={index}/>);
  }

  return (
    <View style={styles.Home}>
      <ScrollView>
        <View style={styles.View}>
            {rows}
        </View> 
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    Home: {
      flex: 1
    },
    View: {
      width: "100%",
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: "#282c34",
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
});
export default Home;