import { Component, useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

export default function Studentcomp(props){
    const[studentName, setStudentName] = useState('John Doe');
    const[studiesAt, setstudiesAt] = useState('The International University');
    const[born, setBorn] = useState('01/01/2023');

    const setFirstStudentDetails=()=>{
        setStudentName('Hugo First');
        setstudiesAt('NUST');
        setBorn('01/01/1994');
    }

    const setSecondStudentDetails=()=>{
        setStudentName('Hugo Second');
        setstudiesAt('UET');
        setBorn('12/15/1994');
    }

    return (
        <View style={styles.studentContainer}>
            <View>
                <View style={styles.headingContainer}>
                    <Text style={styles.studentHeading}>Student</Text>
                </View>

                <View style={styles.studentImageContainer}>
                    <View>
                        <Text style={styles.title}>Studies At</Text>
                        <Text style={styles.desc}>{studiesAt}</Text>

                        <Text style={styles.title}>Name</Text>
                        <Text style={styles.desc}>{studentName}</Text>

                        <Text style={styles.title}>Born</Text>
                        <Text style={styles.desc}>{born}</Text>                                
                    </View>

                    <View>
                        <Image style={styles.studentImage} source={require('../img/student.png')} />
                        <Text style={styles.studentNumber}>257 486 124</Text>
                    </View>
                </View>                                        
            </View>

            <View>
                <TouchableOpacity style={styles.touchButton} onPress={() => setFirstStudentDetails()} >
                    <Text style={styles.buttonColor}>First Student Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchButton} onPress={() => setSecondStudentDetails()} >
                    <Text style={styles.buttonColor}>2nd Student Details</Text>
                </TouchableOpacity>            
            </View>             
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
