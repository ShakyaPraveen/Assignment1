import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	SafeAreaView,
	Button,
	} from 'react-native';
import CalculatorKeys from './CalculatorKeys';
import CalculatorScreen from './CalculatorScreen';


const Calculator = () => {
  return (
    <SafeAreaView style={styles.Container}>    
        {/* <View style={styles.Container}> */}
			{/* <View style={styles.innerContainer}> */}

				<View style={styles.Container1}>
					{/* <Text
						style={{fontSize: 40,}}>
						Screen 1
					</Text> */}
					<CalculatorScreen />
				</View>

				<View style={styles.Container2}>

					<View style={[styles.Container, {flexDirection: 'row'}]}>
						<View style={styles.Container}>
							<CalculatorKeys number='C'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='( )'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='%'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='/' keybgcolor='#668eb2'/>
						</View>						
					</View>




					<View style={[styles.Container, {flexDirection: 'row'}]}>
						<View style={styles.Container}>
							<CalculatorKeys number='7'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='8'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='9'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='x' keybgcolor='#668eb2'/>
						</View>	
					</View>




					<View style={[styles.Container, {flexDirection: 'row'}]}>
						<View style={styles.Container}>
							<CalculatorKeys number='4'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='5'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='6'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='-' keybgcolor='#668eb2'/>
						</View>	
					</View>
					

					
					<View style={[styles.Container, {flexDirection: 'row'}]}>
						<View style={styles.Container}>
							<CalculatorKeys number='1'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='2'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='3'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='+' keybgcolor='#668eb2'/>
						</View>		
					</View>


					<View style={[styles.Container, {flexDirection: 'row'}]}>
						<View style={[styles.Container2, {borderWidth: 0, padding: 1}]}>
							<CalculatorKeys number='0'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='.'/>
						</View>
						<View style={styles.Container}>
							<CalculatorKeys number='=' keybgcolor='#4fcccb'/>
						</View>
					</View>
					

				</View>







			{/* </View>      */}
        {/* </View> */}
    </SafeAreaView>
  );
};



export default Calculator;


const styles = StyleSheet.create({
	Container: {
		flex: 1, 
		// borderWidth: 1,
		// borderColor: '#d9d9d9',
	},
	innerContainer: {
		flex: 1, 
		marginHorizontal: '14%',
		marginVertical: '35%',
		// borderWidth: 2,
		// borderColor: '#d9d9d9',
	},
	Container1: {
		flex: 1, 
		borderWidth: 8,
		borderColor: '#ccc',
		// borderColor: '#000',
		borderRadius: 10,

	},
	Container2: {
		flex: 2,
		borderWidth: 8,
		borderColor: '#ccc',
		// borderColor: '#000',
		borderRadius: 10,
		padding: 4,
	},
    btns: {
        flex: 1,
		borderWidth: 2,
    }
});


//#293e52
//#4fcccb






