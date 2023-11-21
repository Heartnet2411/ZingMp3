import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";

import { Library, Zingchart,User, Discovery, PlayMusic} from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather, Entypo } from '@expo/vector-icons';

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

const DiscoveryHeader=() =>{
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  )
}

const PlayMusicHeader=() =>{
  return(
    <Stack.Navigator>
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
    </Stack.Navigator>
  )
}

export {LibraryHeader,ZingchartHeader,UserHeader,DiscoveryHeader,PlayMusicHeader};

const styles = StyleSheet.create({});
