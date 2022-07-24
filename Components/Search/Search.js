import React from 'react';
import {StyleSheet,  View } from 'react-native';
import { Searchbar } from 'react-native-paper';


const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style ={styles.search}>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  );
};

const styles = StyleSheet.create({  
 
    search: {
        width: "70%",
        margin:10, 
        backgroundColor: 'white',
        borderColor: '#ffff'
    },  
   
  })  
export default MyComponent;