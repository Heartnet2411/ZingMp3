import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";

import { Library, Zingchart,User } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
Feather.loadFont();
const LibraryHeader =() => {
  return(
  <Stack.Navigator>
<Stack.Screen name="LibraryHeader" component={Library} options={{
    headerTitle: () => (
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <Text style={{color: 'white', fontSize: 25, marginLeft: 10, fontWeight: '500'}}>Thư viện</Text>
      </View>
    ),
    headerRight: () => (
      <View style={{flexDirection: 'row', marginRight: 20}}>
        <TouchableOpacity>
        <Feather name="mic" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather style={{marginLeft:20}} name="search" size={24} color="white" />
        </TouchableOpacity>
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
  )
}
const ZingchartHeader=()=>{
  return(
    <Stack.Navigator>
  <Stack.Screen name="ZingchartHeader" component={Zingchart} options={{
    headerTitle: () => (
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <Text style={{color: '#FC9A50', fontSize: 25, marginLeft: 10, fontWeight: '500'}}>#zingchart</Text>
      </View>
    ),
    headerRight: () => (
      <View style={{flexDirection: 'row', marginRight: 20}}>
        <TouchableOpacity>
        <Feather name="mic" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather style={{marginLeft:20}} name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    ),
    headerStyle: {
      backgroundColor: '#6e1b9e',
      color: '#fff',
      boxShadow: 'none',
      borderColor: '#000',
      borderWidth: 0,
    },
  }}/>
</Stack.Navigator>
  )
}
const UserHeader=() =>{
  return(
    <Stack.Navigator>
  <Stack.Screen name="UserHeader" component={User} options={{
    headerTitle: () => (
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <Text style={{color: 'white', fontSize: 25, marginLeft: 10, fontWeight: '500'}}>Cá nhân</Text>
      </View>
    ),
    headerRight: () => (
      <View style={{flexDirection: 'row', marginRight: 20}}>
        <TouchableOpacity>
        <Feather name="mic" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather style={{marginLeft:20}} name="search" size={24} color="white" />
        </TouchableOpacity>
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
  )
}
export {LibraryHeader,ZingchartHeader,UserHeader}

const styles = StyleSheet.create({});
