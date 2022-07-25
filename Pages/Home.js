import Post from '../Components/Post/Post';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from '../Components/Post/List'
// import './Home.css';
var rows = [];
const Home = () => {
//   var count = prompt("Enter the post count!")
//   parseFloat(count);
  
  for (let index = 0; index < 10; index++) {
    rows.push(<Post searchText="true" num={index} key={index}/>);
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
      flex: 1,
      backgroundColor: "#282c34",
    },
    View: {
      width: "100%",
      alignItems:'center',
      justifyContent:'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
});

export default Home;