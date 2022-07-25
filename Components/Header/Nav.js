import LoginForm from '../../Pages/SignIn';
import { View, Text, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function MyStack (){
  return (
      <View style={styles.Header}>
          <Text>bcjkbsdjkb</Text><NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginForm}
          options={{ title: 'LoginForm' }}
        />
      </Stack.Navigator>
    </NavigationContainer></View>
    
  );
};

const styles = StyleSheet.create({  
    Header: {
      padding: 100,
      height:300,
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      height: "auto",
      backgroundColor: "#0d0c39",
      justifyContent: "space-around",
      alignItems: "center",
    }});