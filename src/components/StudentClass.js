import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Component } from "react";
export const logo = require('../img/student.png');
export const defaultLogo = require('../img/student_1.png');

export default class StudentClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'John Doe',
            university: 'International University',
            studentImage: defaultLogo,//require('../img/student.png'),
            born: '01/12/23'
        };
    }

    changeCardDetails=()=>{
        this.setState({
            name: 'Hugo Boss',
            university: 'NUST',
            studentImage: logo,//require('../img/student.png'),
            born:'01/23/99'
        });

    }

    render(){
        return (
            
            <View style={styles.studentContainer}>

                <View style={styles.headingContainer}>
                    <Text style={styles.studentHeading}>Student</Text>
                </View>

                <View style={styles.studentImageContainer}>
                    <View>
                        <Text style={styles.title}>Studies At</Text>
                        <Text style={styles.desc}>{this.state.university}</Text>

                        <Text style={styles.title}>Name</Text>
                        <Text style={styles.desc}>{this.state.name}</Text>

                        <Text style={styles.title}>Born</Text>
                        <Text style={styles.desc}>{this.state.born}</Text>                                
                    </View>

                    <View> 
                    <Image style={styles.studentImage} source={this.state.studentImage} />                       
                        <Text style={styles.studentNumber}>257 486 124</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.touchButton} onPress={() => this.changeCardDetails()} >
                    <Text style={styles.buttonColor}> Click To Change Card Details</Text>
                </TouchableOpacity>                            
            </View>
                         
        );
    }
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
        backgroundColor: 'blue',
        width:300,
        height:40,
        padding:5,
        borderRadius:5,
        color:'#fff',
        alignItems:'center',
        justifyContent:'center'
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
