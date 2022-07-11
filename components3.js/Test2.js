import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
} from 'react-native';
import Test3 from './Test3';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>    
        <View>
            
            <Test3 name="Enter User Name: " placehold="User Name." color="lightgreen"/>

            <Test3 name="Enter Email: " placehold="Email." keyboardpad={"email-address"}/>

            <Test3 name="Enter Password: " placehold="**********" secureEntry={true}/>

            <Test3 name="Enter Phone No.: " placehold="Moblie no." keyboardpad={"number-pad"}/>



           

            <View style={styles.btnstyle}>
                <Button
                    title='Submit'
                    onPress={()=>alert("hello")} />
            </View>
            
       
        </View>
    </SafeAreaView>
  );
};



export default App;


const styles = StyleSheet.create({
    btnstyle: {
        backgroundColor: '#00dddd',
        marginHorizontal: '25%',
        padding: 6,
        borderRadius: 5,
        marginTop: 40,
    }
});





