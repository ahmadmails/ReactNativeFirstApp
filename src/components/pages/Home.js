import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const isUserLoggedIn = "false";

const setUserLoggedIn= async isUserLoggedIn => {
  try{
    isUserLoggedIn = "true";
    await AsyncStorage.setItem("isUserLoggedIn", isUserLoggedIn);
    console.log(await AsyncStorage.getItem("isUserLoggedIn"));
  }catch(error){
    console.log(error.message);
  }
  alert("User Logged In");
}

export default function Home(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Home Screen</Text> */}
      <TouchableOpacity>
        <Text style={{backgroundColor:'red', height:60,alignItems:'center'}} 
        // onPress={() => props.navigation.navigate('Detail')}>Open Link</Text>
        onPress={setUserLoggedIn}>Open Link</Text>
      </TouchableOpacity>
    </View>
  );
}