import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Test1 = (props) => {
    console.log(props.children)
  return (
    
        <Text style={styles.txt}>{props.children}</Text>        
    
  );
};

const styles = StyleSheet.create({
    txt: {
        color: 'red',
        fontSize: 20,
      }

});

export default Test1;






    // <SectionLists />
        // <SectionLists1 />

    // <SectionLists2 />

    
    // <View
    //     style={[styles.center1, {flexDirection: 'column'}]}
    // >

    //     <View style={{flex: 1, flexDirection: 'row'}}>
    //         <View
    //             style={[styles.block1, {flex: 1}]}>
    //             <Test1>
    //                 praveen
    //             </Test1>
    //             {/* <Test1 children={'shakya'}/> */}
    //         </View> 
    //         <View
    //             style={[styles.block1, {flex: 1}]}>
    //             <Test1>
    //                 praveen
    //             </Test1>
    //             {/* <Test1 children={'shakya'}/> */}
    //         </View> 
    //     </View>
    //     <View style={{flex: 1}}>
    //         <View
    //             style={styles.block1}>
    //             <Test1>
    //                 praveen
    //             </Test1>
    //             {/* <Test1 children={'shakya'}/> */}
    //         </View> 
    //     </View>



        // <View style={{flex: 1, }}>
        //     <View style={{flex: 1, flexDirection: 'row'}}>
        //         <View
        //             style={[styles.block1, {flex: 1}]}>
        //             <Test1>
        //                 Block A1
        //             </Test1>
        //         </View>
        //         <View
        //             style={[styles.block1, {flex: 1}]}>
        //             <Test1>
        //                 Block B
        //             </Test1>
        //         </View> 
        //     </View>
        // </View> 



        //  <View style={{flex: 1}}>
        //     <View
        //         style={styles.block1}>
        //         <Test1>
        //             Block C
        //         </Test1>
        //     </View> 
        // </View>
        // <View style={{flex: 1}}>
        //     <View
        //         style={styles.block1}>
        //         <Test1>
        //             Block A
        //         </Test1>
        //     </View>
        //     <View
        //         style={styles.block1}>
        //         <Test1>
        //             Block B
        //         </Test1>
        //     </View> 
        // </View> 

        
    // </View>



    // center1: {
    //     flex: 1,
    //     backgroundColor: '#00dddd',
    //   },
    //   block1:{
    //     flex: 1,
    //     borderWidth: 5,
    //     borderColor: 'black',
    //     borderRadius: 20,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     margin: 5,
    //     marginVertical: 20,
    //     padding: 20,
        
    //   },
    
    //   txt: {
    //     color: 'red',
    //     fontSize: 10,
    //   }
