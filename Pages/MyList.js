import Post from '../Components/Post/Post';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MyFavList from '../Components/Post/MyFavList'
import Header from "../Components/Header/Header";
var rows = [];
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import json from "../Helpers/Helper";


var myArray;
const MyList = () => {
  const [fakeData, setFakeData] = useState();
  useEffect(() => {
    const getData = async () => {
        let postHREF = await json.get('/anime');
        let postResult = postHREF.data.data;
      setFakeData(postResult);
    };
    getData();
  }, []);

  console.log(fakeData)
  return (
    <View style={styles.Home}>
      <Header/>
       <Text style={styles.tytle}>My List</Text>
      <View style={styles.View}>
            <MyFavList style={styles.View}
            data={fakeData}
          />
          </View>
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