import {View, Text, Image, StyleSheet} from "react-native";

export default function student(props){
    return (
        <View style={styles.studentContainer}>

            <View style={styles.headingContainer}>
                <Text style={styles.studentHeading}>Student</Text>
            </View>

            <View style={styles.studentImageContainer}>
                <View>
                    <Text style={styles.title}>Studies At</Text>
                    <Text style={styles.desc}>{props.university}</Text>

                    <Text style={styles.title}>Name</Text>
                    <Text style={styles.desc}>{props.name}</Text>

                    <Text style={styles.title}>Born</Text>
                    <Text style={styles.desc}>{props.born}</Text>                                
                </View>

                <View>
                    <Image style={styles.studentImage} source={require('../img/student.png')} />
                    <Text style={styles.studentNumber}>257 486 124</Text>
                </View>
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
