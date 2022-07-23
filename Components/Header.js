import "./Header.css";
import {  Button, StyleSheet, View } from "react-native";



function Header() {
  return (
    <header className="header">
      <div className="title"> 📙AnimeLibrary</div>
      <View style={styles.buttonContainer}>  
                    <Button  
                        title="Login" 
                        
                    />  
                </View> 
                <View style={styles.buttonContainer}>  
                    <Button   
                        title="Signup"  
                    />  
                </View> 
    </header>
  );
}
const styles = StyleSheet.create({  
 
  buttonContainer: {
      width: "10%",
      margin:10,
      justifyContent:'space-between',
      flex: 2,
      right: 20,
      left: 100,
      button: 0,
      flexDirection: 'column', 
    
  },  
 
})  
export default Header;