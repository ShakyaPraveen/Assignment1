import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';


const Test3 = (props) => {

    const [numberPlate, setNumberPlate] = useState("");

    
    let keyboardpad = props.keyboardpad;
    let secureEntry = props.secureEntry;

  return (
    <SafeAreaView>    
        <View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.fntsize}>
                        {props.name}
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={[styles.TxtField, {backgroundColor: props.color ? props.color : 'lightgray'}]}
                        placeholder={props.placehold}
                        keyboardType={keyboardpad === ("number-pad") ? keyboardpad : 
                                        (keyboardpad === ("email-address") ? keyboardpad :'default')}
                        secureTextEntry={secureEntry ? secureEntry : 'false'}
                        />
                </View>  
            </View>

      

            {/* <View style={styles.btnstyle}>
                <Button
                    title='Submit'
                    onPress={()=>alert("hello")} />
            </View> */}

       
        </View>
    </SafeAreaView>
  );
};



export default Test3;


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginTop: '10%',
    },
    TxtField: {
        borderWidth: 2,
        padding: 16,
        paddingLeft: 22,    
        borderRadius: 7,
        marginVertical: 6,
    },
    fntsize: {
        fontSize: 20,
    },
    

});





