import { View, Text, TouchableOpacity } from 'react-native';


export default function Detail(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity>
        <Text style={{backgroundColor:'blue', height:60,alignItems:'center'}} 
        onPress={() => props.navigation.navigate('Home')}>Open Link</Text>
      </TouchableOpacity>
    </View>
  );
}