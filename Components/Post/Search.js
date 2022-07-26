// import React, { useEffect, useState } from 'react';
// import {StyleSheet,  View, TextInput } from 'react-native';
// import { Searchbar } from 'react-native-paper';


// const MyComponent = () => {
//   const [searchQuery, setSearchQuery] = React.useState('');
//   const onChangeSearch = event => setSearchQuery(event.target.value);
//   useEffect(()=>console.log(searchQuery), [searchQuery]);
//   console.log(searchQuery);
//   return (
//     <View style ={styles.search}>
//     <Searchbar
//       placeholder="Search"
//       onChange={onChangeSearch}
//       value={searchQuery}
//     />
//     </View>
//   );
// };

// const styles = StyleSheet.create({  
 
//     search: {
//         width: "70%",
//         margin:10, 
//         backgroundColor: 'white',
//         borderColor: '#ffff'
//     },  
   
//   })  
// export default MyComponent;

import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({searchPhrase, setSearchPhrase}) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",

  },
  input: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 8,
    alignItems: "center",
    fontSize: 20,
    width: "100%",
  },
});