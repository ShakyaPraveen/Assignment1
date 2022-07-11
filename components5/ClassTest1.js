import React, {Component} from 'react';
import {View,
        Text,
        SafeAreaView,
        StyleSheet,
    } from 'react-native';


class ClassTest1 extends Component {
    render () {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View 
                style={styles.alincntr}>
                    <Text>
                        Hello world!
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default ClassTest1;

const styles = StyleSheet.create({
    alincntr: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    }

});

