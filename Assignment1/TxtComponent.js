import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Scrollview,
    TextInput,
    } from 'react-native';



const TxtComponent = (props) => {

    const [textChange, setTextChange] = useState('');

    let placeholder = props.placeholder;
    let name = props.name;
    let secureTextEntry = props.secureTextEntry;
    let keyboardpad = props.keyboardpad;
    let myFunction = props.myFunction;
    let ID = props.ID;

    const emptyFunction = () => {}

    const CheckPassword = (props) => {
        if((myFunction === 'CheckPassword1') === (myFunction === 'CheckPassword2')){
            return(
                alert('yes')
            )
        }
    }

    const ValueChange = (input) => {

        console.log(input)
    }

    return (
    
     
         
            <View style ={styles.ItemSpacing}>
                <Text style={styles.txtStyle}>
                    {name}
                </Text>
                <TextInput
                    style={styles.TextInputField}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry? secureTextEntry : false}
                    keyboardType={keyboardpad === ("number-pad") ? keyboardpad : 
                                        (keyboardpad === ("email-address") ? keyboardpad :'default')}
                    // onBlur={myFunction === 'CheckPassword2'? CheckPassword : emptyFunction}
                    // maxLength={10}
                    // textContentType='emailAddress'
                    onChangeText={props.onChangeText}
                    // onBlur ={(props.password === props.reEnterPassword)? alert('true') : alert('false')}
                    
                    />
            </View>
            
            

            







       


    
   
  );
};








export default TxtComponent;


const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    Container: {
        flex: 1,
        // margin: 20,
        // marginVertical: 50,
        marginHorizontal: '12%',
        // borderWidth: 1,
        
    },
    TextInputField:{
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 3,
        borderColor: 'gray',
        padding: 13,
        paddingLeft:18,
        fontSize: 18,

    },
    txtStyle: {
        fontSize: 18,
        marginVertical: 6,
        color: 'black', 
    },
    ItemSpacing:{
        marginVertical: 15,
    }

});
