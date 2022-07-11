import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import CalculatorScreen from './CalculatorScreen';


const CalculatorKeys = (props) => {

    let number = props.number;
    let keybgcolor = props.keybgcolor;

    const keyEffect = () => {

        <CalculatorScreen values='number' />
        console.log(number)
                // alert({number})
    }

    return (
        <TouchableHighlight 
            // activeOpacity={0.00001}
            underlayColor={'#b3b3b3'}
            // style={[styles.keystyle, {backgroundColor: keybgcolor ? keybgcolor : '#d9d9d9'}]}
            style={[styles.keystyle, {backgroundColor: keybgcolor ? keybgcolor : '#d9d9d9'}]}
            onPress={keyEffect}>
            <View>
                <Text style={[styles.keytxtstyle, {}]}>
                    {number}
                </Text>
            </View>
        </TouchableHighlight>




  
  );
};



export default CalculatorKeys;


const styles = StyleSheet.create({
    keystyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        borderWidth: 2,
        borderColor: '#d9d9d9',
        borderRadius: 20,
        margin: 3,
    },
    keytxtstyle: {
        fontSize: 25,

    }

});
