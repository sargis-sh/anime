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
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    width: 100,
    height: 40,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#d9dbda",
    borderRadius: 8,
    alignItems: "center",
    fontSize: 20,
    marginRight: 25,
      marginLeft: 25,
  },
});