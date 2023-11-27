import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Library, Zingchart, User, Discovery, PlayMusic} from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather, Entypo } from "@expo/vector-icons";
import LoveSongs from "./details/LoveSongs";
import Search from "./screens/Search";
import Download from "./details/Download";
import Singers from "./details/Singers";
import RecentList from "./details/RecentList";
import SearchSong from "./details/SearchSong";

const Stack = createNativeStackNavigator();
Feather.loadFont();
const LibraryHeader = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LibraryHeader"
        component={Library}
        options={({navigation})=>({
          headerTitle: () => (
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  marginLeft: 10,
                  fontWeight: "500",
                }}
              >
                Thư viện
              </Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 20 }}>
              <TouchableOpacity>
                <Feather name="mic" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                navigation.navigate("Search")
              }}>
                <Feather
                  style={{ marginLeft: 20 }}
                  name="search"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#000",
            color: "#fff",
            boxShadow: "none",
            borderColor: "#000",
            borderWidth: 0,
          },
        })}
      />
      <Stack.Screen
        name="LoveSongs"
        component={LoveSongs}
        options={({navigation})=> ({
          headerTitle: "",
          headerTintColor:'white',
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 20 }}>
              <TouchableOpacity onPress={()=>{
                navigation.navigate("SearchSong")
              }}>
                <Feather
                  style={{ marginLeft: 20 }}
                  name="search"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#000",
            color: "#fff",
            boxShadow: "none",
            borderColor: "#000",
            borderWidth: 0,
          },
        })}
      />
      <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
      <Stack.Screen
        name="Download"
        component={Download}
        options={{
          headerTitle: "",
          headerTintColor:'white',
          headerStyle: {
            backgroundColor: "#000",
            color: "#fff",
            boxShadow: "none",
            borderColor: "#000",
            borderWidth: 0,
          },
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 20 }}>
              <TouchableOpacity>
                <Feather
                  style={{ marginLeft: 20 }}
                  name="search"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
         <Stack.Screen
     name="Singers"
     component={Singers}
     options={{
       headerTitle: "",
       headerTintColor:'white',
       headerStyle: {
         backgroundColor: "#000",
         color: "#fff",
         boxShadow: "none",
         borderColor: "#000",
         borderWidth: 0,
       },
      }}
    />
    <Stack.Screen name="Recent" component={RecentList} options={{
      headerTitle: "Nghe gần đây",
      headerTintColor:'white',
      headerStyle: {
        backgroundColor: "#000",
        color: "#fff",
        boxShadow: "none",
        borderColor: "#000",
        borderWidth: 0,
      },
    }}/>
    <Stack.Screen name="SearchSong" component={SearchSong} options={{
      headerShown: false
    }}/>
    </Stack.Navigator>
  );
};
const ZingchartHeader = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ZingchartHeader"
        component={Zingchart}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Text
                style={{
                  color: "#FC9A50",
                  fontSize: 25,
                  marginLeft: 10,
                  fontWeight: "500",
                }}
              >
                #zingchart
              </Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 20 }}>
              <TouchableOpacity>
                <Feather name="mic" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                navigation.navigate("Search")
              }}>
                <Feather
                  style={{ marginLeft: 20 }}
                  name="search"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#6e1b9e",
            color: "#fff",
            boxShadow: "none",
            borderColor: "#000",
            borderWidth: 0,
          },
        }}
      />
      <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};
const UserHeader = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserHeader"
        component={User}
        options={({navigation})=>({
          headerTitle: () => (
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  marginLeft: 10,
                  fontWeight: "500",
                }}
              >
                Cá nhân
              </Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 20 }}>
              <TouchableOpacity>
                <Feather name="mic" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                navigation.navigate("Search")
              }}>
                <Feather
                  style={{ marginLeft: 20 }}
                  name="search"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#000",
            color: "#fff",
            boxShadow: "none",
            borderColor: "#000",
            borderWidth: 0,
          },
        })}
      />
      <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

const DiscoveryHeader=(props) =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discovery" component={Discovery} options={({navigation}) => ({
            headerTitle: () => (
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Text style={{color: 'white', fontSize: 25, marginLeft: 10, fontWeight: 'bold'}}>Khám phá</Text>
              </View>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row', marginRight: 20}}>
                <Feather name="mic" size={24} color="white" />
                <TouchableOpacity onPress={()=>{
                  navigation.navigate("Search")
                  }}>
                  <Feather
                    style={{ marginLeft: 20 }}
                    name="search"
                    size={24}
                    color="white"
                  />
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
          })}/>
        <Stack.Screen name="PlayMusic" component={PlayMusic} options={({navigation}) => ({
          headerTitle: '',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 20}}>
              <Feather name="more-vertical" size={28} color="white" />
            </View>
          ),
          headerTransparent: true,
          headerBackVisible: false,
          tabarStyle: {
            display: 'none',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Entypo name="chevron-down" size={32} color="white" />
              </View>
            </TouchableOpacity>
          ),
        })}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export { LibraryHeader, ZingchartHeader, UserHeader, DiscoveryHeader };

const styles = StyleSheet.create({});
