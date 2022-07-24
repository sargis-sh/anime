// import "./Header.css";
import {  Button, StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Icon } from "react-native-vector-icons/Icon";
import { TouchableHighlight } from "react-native";

export default function Header() {
  return (
    <View style={styles.Header}>
      <View style={styles.ButtonContainer}>
        <Text style={styles.Title}>📙AnimeLibrary</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableHighlight style={styles.Button}>
          <Text style={styles.ButtonText}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.Button}>
          <Text style={styles.ButtonText}>Sign Up</Text>
        </TouchableHighlight> 
      </View>
    </View>
  );
}
const styles = StyleSheet.create({  
  Header: {
    // padding: 20,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "auto",
    backgroundColor: "#0d0c39",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ButtonContainer: {
    margin: 20,
    flexDirection: "row",
    // height: 100,
    alignItems: "center",
  },
  ButtonText:{
    fontSize: 17,
    color: "#272727",
  },
  Button: {
    marginRight: 28.3,
    marginLeft: 28.3,
    height: 40,
    width:100,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#F58216",
    justifyContent: "center",
    alignItems: "center"
  },
  Title: {
    fontSize: 40,
    color: "whitesmoke",
    textAlign: "left"
  }
})  
