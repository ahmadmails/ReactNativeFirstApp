import { Component, useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native";

export default function AC(props){
    const[isLoading, setIsLoading] = useState(true);

    const stopLoading=()=>{        
        {isLoading ? setIsLoading(false) : setIsLoading(true)}        
    }

    return (
        <View style={[styles.container, styles.horizontal]}>            
            {isLoading == true ? <ActivityIndicator size="large" color="#00ff00" /> : null}

            <TouchableOpacity style={styles.touchButton} onPress={() => stopLoading()} >
                <Text style={styles.buttonColor}>{isLoading ? "Stop" : "Start"} Loading</Text>
            </TouchableOpacity>            
        </View>       
    );
}

const styles = StyleSheet.create({
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
