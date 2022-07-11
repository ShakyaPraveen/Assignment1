import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';


const CalculatorScreen = (props) => {

   console.log(props.values)

    const [number, setNumber] = useState(props.values);

    const keyEffect = () => {
        alert('hello')
    }

    return (
        <TextInput 
            value={number}
            style={styles.txtInputField}
            placeholder='0123456789'
        />

  );
};



export default CalculatorScreen;


const styles = StyleSheet.create({
    txtInputField: {
        // borderWidth: 1,
        height: '100%',
        width: '100%',
        fontSize: 30,
        paddingLeft: 10,
        paddingBottom: '35%',
        
    }

});
