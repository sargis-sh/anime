import React from 'react';
import {StyleSheet,  View, Picker } from 'react-native';
import { Searchbar } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker'

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [picked, setPicked] = useState(1.15);
  const onChangeSearch = query => setSearchQuery(query);

  return (
      <View>
      
    <View style ={styles.search}>
     
    <Searchbar style={styles.Bar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({  
    Bar: {
      width: 1009
    },
    search: { 
      width: 100,
        margin:10, 
        backgroundColor: 'white',
        borderColor: '#ffff'
    },  
   
  })  
export default MyComponent;