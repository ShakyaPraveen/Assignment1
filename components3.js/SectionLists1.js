import React from "react";
import {StyleSheet, 
        Text, 
        View, 
        SafeAreaView, 
        SectionList, 
        StatusBar 
        } from "react-native";

let DataA = [
  {
    id: "1",
    value: "AA 1"
  },
  {
    id: "2",
    value: "AA 2"
  },
  {
    id: "3",
    value: "AA 3"
  },
  {
    id: "4",
    value: "AA 4"
  }
];

let DataB = [
    {
        id: "5",
        value: "BB 1"
    },
    {
        id: "6",
        value: "BB 2"
    },
    {
        id: "7",
        value: "BB 3"
    },
    {
        id: "8",
        value: "BB 4"
    }

];

let DataC = [
    {
        id: "9",
        value: "CC 1"
    },
    {
        id: "10",
        value: "CC 2"
    },
    {
        id: "11",
        value: "CC 3"
    },
    {
        id: "12",
        value: "CC 4"
    }

];

let DataD =[];


const SectionLists = () => {

    


    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>





            {/* horizontal:  */}
            {/* <SectionList
                // horizontal
                sections={[
                    {data: DataA},
                    {data: DataB},
                    {data: DataB},
                    {data: DataC},
                ]}             
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.sectionListItemStyle} >
                            {item.value}
                        </Text>
                    </View>
                )}
                /> */}


            {/* inverted:  */}
            {/* <SectionList
                inverted
                sections={[
                    {data: DataA},
                    {data: DataB},
                    {data: DataB},
                    {data: DataC},
                ]}             
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.sectionListItemStyle} >
                            {item.value}
                        </Text>
                    </View>
                )}
                /> */}


            {/* initialNumToRender: use to render limited amount of data in first batch*/}
            {/* <SectionList
                initialNumToRender={4}
                sections={[
                    {data: DataA},
                    {data: DataB},
                    {data: DataB},
                    {data: DataC},
                ]}             
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.sectionListItemStyle} >
                            {item.value}
                        </Text>
                    </View>
                )}
                /> */}

            
            {/* ItemSeparatorComponent: */}
            {/* <SectionList
                ItemSeparatorComponent={()=>{
                        return(
                            <View 
                                style={{
                                    height: 1,
                                    // width: '80%',
                                    backgroundColor: 'gray',
                                    marginHorizontal: '5%'
                                }}>
                                
                            </View>

                            )}}
                sections={[
                    {data: DataA},
                    {data: DataB},
                    {data: DataB},
                    {data: DataC},
                ]}             
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.sectionListItemStyle} >
                            {item.value}
                        </Text>
                    </View>
                )}
                />  */}


                {/* ItemSeparatorComponent: */}
            <SectionList
                ListEmptyComponent={()=>{
                    return(
                        <View>
                            <Text style={{fontSize: 20,}}>SectionList not found</Text> 
                        </View>

                        )}}
                sections={[
                    {data: DataD},
                ]}             
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.sectionListItemStyle} >
                            {item.value}
                        </Text>
                    </View>
                )}
                /> 



            </View>       
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20, 
    margin: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  listItemSeparatorStyle:{
    height: 0.5,
    width: '100%',
    backgroundColor: '#c8c8c8',
  },
  sectionHeaderStyle: {
    backgroundColor: 'blue',
    fontSize: 20,
    padding: 5,
    color: 'white',
  },
  sectionListItemStyle: {
    fontSize: 15,
    padding: 15,
  }
});

export default SectionLists;