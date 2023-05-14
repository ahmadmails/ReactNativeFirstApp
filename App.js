// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/pages/Home';
import Detail from './src/components/pages/Detail';
import API from './src/components/pages/API';
// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <TouchableOpacity>
//         <Text style={{backgroundColor:'red', height:60,alignItems:'center'}} 
//         onPress={() => navigation.navigate('Detail')}>Open Link</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <TouchableOpacity>
//         <Text style={{backgroundColor:'blue', height:60,alignItems:'center'}} 
//         onPress={() => navigation.navigate('Home')}>Home</Text>
//       </TouchableOpacity>      
//     </View>
//   );
// }

// function LoginScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

function App() {
  return (
    <API />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Detail" component={Detail} options={{title:'Details'}} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;