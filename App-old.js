import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { Component, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import  StudentClass  from './src/components/StudentClass';
import Studentcomp from './src/components/StudentComponent';
import TimerComponent from './src/components/Timer';
import AC from './src/components/ActivityCounter';

export default function App(){
  return (
    <View style={styles.mainContainer}>
      {/* <Studentcomp /> */}
      {/* <Text>Hello World</Text> */}
      {/* <TimerComponent /> */}
      <AC />
    </View>
  )
}
/*
export default function App() {
    useEffect(() => {
      alert("Some Alert");
    });

  return (
    <View style={styles.mainContainer}>
      <Student name={'Ahmad'} university={'International University'} born={'10/23/11'} />
    </View>
  )    
*/  
/*
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Empty'
    };
  }

  changeNameToAli=() => {
    this.setState({
      name:'Ali'
    })
  }
  
  changeNameToUsman=() => {
    this.setState({
      name:'Usman'
    })
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <Text>The student name is: {this.state.name}</Text>
        <TouchableOpacity style={styles.touchButton} onPress={() => this.changeNameToAli()} >
          <Text style={styles.buttonColor}> Click To Change Name To Ali</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.yellowButton} onPress={() => this.changeNameToUsman()} >
          <Text>Click To Change Name To Usman</Text>
        </TouchableOpacity>        
      </View>
    )
  }
*/
/*
  componentDidMount(){
    alert("App is loading")
  }
  render(){
    return (
      <View style={styles.mainContainer}>
        <Student />
      </View>
    )  
  }
*/
    /*<Student />*/
    /*
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
      </ScrollView>
    </SafeAreaView>
    */
    // <View style={styles.container}>
      /*{ <ImageBackground style={styles.bg} source={require('./assets/img/bg1.jpg')} resizeMode="stretch"> }*/

      /*{ </ImageBackground> }*/
      /*
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />      

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />      

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />      

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />      

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />      

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />      

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />      

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />      

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />      

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />                                                                                                

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />
          
          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />

          <Text style={styles.centerText}>Welcome to React Native</Text>
          <Image style={styles.tinyLogo} source={require('./assets/img/tiny_logo.png')} />                                        
        </ScrollView>
      </SafeAreaView>
      */
    // </View>
  /*);*/
//}

const styles = StyleSheet.create({
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
  yellowButton:{
    backgroundColor: 'yellow',
    width:300,
    height:40,
    padding:5,
    borderRadius:5,
    color:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonColor:{
    color:'#FFFFFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /*
    alignItems: 'center',
    justifyContent: 'center',
    */
    paddingTop: 40,
  },
  mainContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  scrollView: {
    backgroundColor: '#FeFeFe',
    marginHorizontal: 30,    
  },
  centerText:{
    textAlign:'center'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },  
  logo: {
    width: 66,
    height: 58, 
  },
  bg: {
    flex: 1,
    justifyContent:'flex-end'
  }
});
