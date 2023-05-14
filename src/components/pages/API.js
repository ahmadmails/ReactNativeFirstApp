import { Component, useEffect, useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

export default function API(props){
    const[Name, setName] = useState('John Doe');
    const[Age, setAge] = useState('23');
    const[Email, setEmail] = useState('test@gmail.com');
    const[Phone, setPhone] = useState('03214146795');

    const getMoviesData = () => {
        return fetch("https://randomuser.me/api/")
        .then ((response) => response.json())
        .then ((json) => {
            setName(json.results[0].Name);
            setAge(json.results[0].Age);
            setEmail(json.results[0].Email);
            setPhone(json.results[0].Phone);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    useEffect(() => {
        getMoviesData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.desc}>{Name}</Text>

            <Text style={styles.title}>Age</Text>
            <Text style={styles.desc}>{Age}</Text>

            <Text style={styles.title}>Email</Text>
            <Text style={styles.desc}>{Email}</Text>                                

            <Text style={styles.title}>Phone</Text>
            <Text style={styles.desc}>{Phone}</Text>                                                        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
});
