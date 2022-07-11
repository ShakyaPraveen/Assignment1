import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Modal,
    Image,
    } from 'react-native';
import TxtComponent from './TxtComponent';


const LoginPage = () => {

    const [visible, setVisible] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');

    const [setHouseNo, setSetHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [value, onChangeText] = useState('');

    var namevalidation = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/ ;
    var emailvariable = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    var passwordvalidation = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/ ;
    var contactvalidation = password;
    const contactnumvalid = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/ ;




const HidenShow = () => {
    
    if(namevalidation.test(userName) === false){
        alert('Enter Name')
    }
    else{
        if(emailvariable.test(userEmail) === false ){
            alert("Invalid Email")
        }
        else{
            if(passwordvalidation.test(password) === false){
                alert('Enter Strong Password')
            }
            else{
                if(contactvalidation !== reEnterPassword){
                    alert('does not match')
                }
                else{
                    if(contactnumvalid.test(userNumber) === false){
                        alert('contact Number Invalid')
                    }
                    else{
                        if(!visible){
                            setVisible(true)
                        }
                        else{
                            setVisible(false)
                            } 

            setUserName(userName) 
            setUserEmail(userEmail)
            setUserNumber(userNumber)
            setUserAddress(userAddress)
                                
            setSetHouseNo(setHouseNo)
            setStreet(street)
            setArea(area)
            setCity(city)
            setState(state)
                    }
                }
            }
        }   
    }
}

    const clearScreen = () => {
        
        setUserName('');
        setUserEmail('')
        setUserNumber('')
        setUserAddress('')

        setSetHouseNo('')
        setStreet('')
        setArea('')
        setCity('')
        setState('')

        // onChangeText('')
        
    }

  return (
    <ScrollView>    
    <SafeAreaView style={styles.outerContainer}>
        <View style={styles.Container}>
            <Text style={styles.header}>
                User Info
            </Text>
           

            <TxtComponent 
                name='Enter Full Name'
                placeholder='Full Name'
                onChangeText={(input)=>setUserName(input)}/>

            <TxtComponent 
                name='Enter Email'
                placeholder='Email'
                keyboardpad="email-address"
                onChangeText={(input)=>{
                    setUserEmail(input)
                    }}/>

            <TxtComponent 
                name='Create Password'
                placeholder='********'
                secureTextEntry={true}
                onChangeText={(input)=>setPassword(input)}
                />

            <TxtComponent 
                name='Confirm Password'
                placeholder='********'
                secureTextEntry={true} 
                onChangeText={(input)=>setReEnterPassword(input)}
                />
                {/* <Text>hello</Text> */}

            <View style={{marginVertical: 15,}}>
                <Text style={[styles.ItemSpacing, {fontSize: 18,}]}>Address: </Text>
                <View style={{marginLeft: '15%'}}>
                    <AddressSubComponent 
                        name='House/Flat Number'
                        onChangeText={(input)=>setSetHouseNo(input)} />
                    <AddressSubComponent 
                        name='Street' 
                        onChangeText={(input)=>setStreet(input)}/>
                    <AddressSubComponent 
                        name='Area/Locality' 
                        onChangeText={(input)=>setArea(input)}/>
                    <AddressSubComponent 
                        name='City' 
                        onChangeText={(input)=>setCity(input)}/>
                    <AddressSubComponent 
                        name='State' 
                        onChangeText={(input)=>setState(input)}/>
                </View>
            </View>

            

            <TxtComponent 
                name='Contact Number'
                placeholder='********'
                keyboardpad="number-pad"
                onChangeText={(input)=>setUserNumber(input)}/>


            <View>
                <Modal   
                    visible={visible}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent:'center', }}>
                            
                            
                            <View style={styles.modalstyling}>
                                    <TouchableOpacity
                                        style={styles.btnalignment}
                                        onPress={() => {
                                            HidenShow()
                                            clearScreen()
                                            }}>
                                        <Text style={{color: '#fff', textAlign: 'center'}}>
                                            Close
                                        </Text>
                                    </TouchableOpacity> 
                                    <Text style={{padding: 10, paddingBottom: 0,}}>
                                        Name:  {userName}
                                    </Text>   
                                    <Text style={{padding: 10, paddingBottom: 0,}}>
                                        Email:  {userEmail}
                                    </Text>  
                                    <Text style={{padding: 10, paddingBottom: 0,}}>
                                        Contact No.: {userNumber}
                                    </Text> 
                                    <Text style={{padding: 10, paddingBottom: 0,}}>
                                        Address: {setHouseNo}
                                        , {street} {area} - {city}, {state}
       
                                    </Text>                                                      
                            </View>
                        </View>
                </Modal>
            </View>
            <TouchableOpacity
                style={styles.btnalignment}
                activeOpacity={0.5}
                onPress={() => HidenShow()}>
                    <Text style={styles.submitBtnTxt}>
                        Submit
                    </Text>
            </TouchableOpacity>

        </View>

    </SafeAreaView>
    </ScrollView>
  );
    // const CheckPassword = () =>{
    //     return(
    //         <View>
    //             <Text>
    //                 invalid
    //             </Text>
    //         </View>
    //     )
    // }
};


const AddressSubComponent = (props) => {
    let name = props.name;
    let placeholder = props.placeholder;
    return(
        <View style ={styles.ItemSpacing1}>
            <Text style={styles.txtStyle1}>
                {name}
            </Text>
            <TextInput
                style={styles.SubTextInputField}
                placeholder={placeholder}
                onChangeText={props.onChangeText}
                />
        </View>
    );

    

};



export default LoginPage;


const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    Container: {
        flex: 1,
        marginHorizontal: '12%',  
    },
    ItemSpacing:{
        marginVertical: 15,
    },
    btnalignment: {
        padding: 15,
        backgroundColor: 'green',
        marginHorizontal: '25%',
        marginVertical: 20,
        borderRadius: 5,
        
    },
    submitBtnTxt: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    header: {
        fontSize: 25,
        marginVertical: 15,
    },
    ItemSpacing: {
        marginVertical: 15,
    },

    SubTextInputField:{
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'gray',
        padding: 10,
        paddingLeft:18,
        fontSize: 15,

    },
    txtStyle1: {
        fontSize: 15,
        marginVertical: 5,
        color: 'black', 
    },
    ItemSpacing1:{
        marginVertical: 0,
    },
    modalBackground: {
        flex: 1,
        backgroundColor :'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 5,
        // elevation: 20,
    },

    modalstyling: {
        flex: 1, 
        marginVertical: '75%', 
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'lightgray',
    }


});
