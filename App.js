import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MyTabs from './Components/Tab/Tab';
import { AuthStackScreen } from './Components/Header/Nav';
import Header from './Components/Header/Header';
import  React, { Component }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from "./Pages/SignIn";
const Stack = createNativeStackNavigator();


class App extends Component {
  render() {
    return (
          <NavigationContainer className = "Container">
            <Header></Header>
          
            <MyTabs />
          </NavigationContainer>
         );
  }
}
export default App;








// export default function App() {
//   return (
//     <NavigationContainer className = "Container">
//       <Header></Header>
      
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   View: {
//     backgroundColor: "#000",
//     height: "100%",
//     width: "100%"
//   },
//   SafeArea: {
//     width: "100%",
//     // backgroundColor: "rgb(0, 122, 255)",
//   },
//   App: {
//     flex: 0.9,
//   },
//   // Header: {
//   //   color: "#000",
//   //   fontWeight: "900",
//   //   fontSize: 20,
//   // },
// });