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


const SectionLists = () => {

    const separatorView = () =>{
        return(
            <View style={styles.listItemSeparatorStyle}>

            </View>
        )
    }


    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>

            <SectionList
                ItemSeparatorComponent={separatorView} 
                sections={[
                    {title: 'Section Head for Data A', data: DataA},
                    {title: 'Section Head for Data B', data: DataB},
                    {title: 'Section Head for Data C', data: DataC}
                ]}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeaderStyle}>
                        {section.title}
                    </Text>
                )}
                renderItem={({item}) => (
                    <Text 
                        style={styles.sectionListItemStyle}
                        onPress={() => alert(JSON.stringify(item))}
                        >
                        {item.value}
                    </Text>
                )}

                keyExtractor={(item, index) => index.toString()}
                

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