import {View, Text, Image, StyleSheet, TouchableOpacity, Pressable} from "react-native";

export default function Button(){
    return (
        <TouchableOpacity style={styles.container} onPress={() => alert("Facebook button pressed.")}>
            <View style={styles.button}>
                <Image style={styles.fbImage} source={{uri: 'https://img.icons8.com/color/256/facebook-new.png'}} />
                <Text style={styles.fbText}>Login with facebook</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        height: 80,
        backgroundColor:'#3F67A9',
        flexDirection: "row",
        alignItems:'center',
        width:300,        
        borderRadius:20,
        justifyContent:'center'
    },
    fbText:{
        color:'#FFFFFF'
    },
    fbImage:{
        width:80,
        height:80
    },
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
