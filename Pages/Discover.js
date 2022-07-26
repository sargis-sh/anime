// import MyComponent from '../Components/Search/Search';
// import { Text, View, ScrollView, StyleSheet } from 'react-native';

// const profile = {
//     id: 1,
//     username: "myUser",
//     following: [2, 5, 8, 33, 58, 72, 73, 91]
// }

// const Discover = () => {
//     var rows = [];
//     for (let index = 0; index < 1; index++) {
//         if(!profile.following.includes(index+1)){
//         rows.push(<MyComponent num={index} key={index}/>)}
//     }
//     return(
//         <View style={styles.View}>
//             <ScrollView>
//                 <Text style={{ fontWeight: 'bold', fontSize: 60, margin:20 }}>Search for any anime you want!
//                 </Text>
//                 {rows}
//             </ScrollView>
//         </View>
//     )
// };

// const styles = StyleSheet.create({
//     View: {
//       flex: 1,
//       width: "100%",
//       alignItems:'center',
//       justifyContent:'center',
//       backgroundColor: "#282c34",
//       flexDirection: 'row',
//       flexWrap: 'wrap'
//     }
// });

// export default Discover;


import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  View
} from "react-native";
import List from "../Components/Post/List";
import SearchBar from "../Components/Post/Search";
import json from "../Helpers/Helper";

const Discover = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
        let postHREF = await json.get('/anime');
        let postResult = postHREF.data.data;
      setFakeData(postResult);
    };
    getData();
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.View}>
          <Text style={styles.title}>Search For Anime</Text>

          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <View style={styles.View}>
            <List style={styles.View}
            searchPhrase={searchPhrase}
            data={fakeData}
          />
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "#282c34"
    },
    View: {
      width: "100%",
      alignItems:'center',
      justifyContent:'center',
    },
    title: {
      fontFamily: 'Roboto',
      fontSize: 45,
      color: "#fff",
      margin: 20
    }
  });