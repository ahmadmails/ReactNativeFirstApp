import { Component, useState, useEffect } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

export default function TimerComponent(){
    const[counter, setCounter] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            alert("Counter starting");
        })
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCounter(counter + 1);
    //     }, 3000)
    // });    

    return (
        <View style={styles.container}>
            <Text style={styles.studentHeading}>Counter is:</Text>
            <Text style={styles.title}>{counter}</Text>
        </View>       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',        
        alignItems: 'center',
        justifyContent: 'center',
    },    
    studentContainer:{
        backgroundColor:'lightblue',        
        height:200,
        borderRadius:20,
        marginHorizontal:20,
        marginTop:60
    },
    touchButton:{
        height: 60,
        backgroundColor:'#3F67A9',
        flexDirection: "row",
        alignItems:'center',
        width:150,        
        borderRadius:20,
        justifyContent:'center',
        marginTop:20
    },    
    title:{
        fontSize:10,
        marginLeft:30,
        fontWeight:500,
        marginTop:10
    },
    desc:{
        fontSize:12,
        marginLeft:30,
        fontWeight:500
    },
    studentHeading:{
        fontSize:15,
        fontWeight:600,
        marginLeft:40,
        padding:10
    },
    headingContainer:{
        borderBottomWidth:2,
        borderBottomColor:'blue'
    },
    studentImageContainer:{
        flexDirection:'row',
    },
    studentImage:{
        width:100,
        height:100, 
        marginLeft:30,
        marginTop:10       
    },
    studentNumber:{
        marginLeft:40
    }
});
