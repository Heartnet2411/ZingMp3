import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PlayMusic, Discovery} from './screens'
import { Feather, Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Discovery">
        <Stack.Screen name="PlayMusic" component={PlayMusic} options={({navigation}) => ({
          headerTitle: '',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 20}}>
              <Feather name="more-vertical" size={28} color="white" />
            </View>
          ),
          headerTransparent: true,
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Entypo name="chevron-down" size={32} color="white" />
              </View>
            </TouchableOpacity>
          ),
        })}/>
        <Stack.Screen name="Discovery" component={Discovery} options={{
          headerTitle: () => (
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <Text style={{color: 'white', fontSize: 25, marginLeft: 10, fontWeight: 'bold'}}>Discovery</Text>
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 20}}>
              <Feather name="mic" size={24} color="white" />
              <Feather style={{marginLeft:20}} name="search" size={24} color="white" />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#000',
            color: '#fff',
            boxShadow: 'none',
            borderColor: '#000',
            borderWidth: 0,
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;