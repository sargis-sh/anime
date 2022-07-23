import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Components/Tab/Tab';

export default function App() {
  return (
    <View style={styles.View}>
      <SafeAreaView style={styles.SafeArea}>
        <Text style={styles.Header}>ANIME REACT APP</Text>
      </SafeAreaView>
      <NavigationContainer style={styles.App}>
        <MyTabs/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: "#000",
    height: "100%"
  },
  SafeArea: {
    paddingTop: 35,
    backgroundColor: "#D61C4E",
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center"
  },
  App: {
    flex: 0.9,
  },
  Header: {
    color: "#000",
    fontWeight: "900",
    fontSize: 20,
  },
});