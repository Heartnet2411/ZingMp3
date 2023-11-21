import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons , MaterialCommunityIcons,FontAwesome,Entypo} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LibraryHeader, UserHeader, ZingchartHeader, DiscoveryHeader } from "./CustomHeaderNavigation";

const Tab = createBottomTabNavigator();
Feather.loadFont();

function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown:false,
    tabBarStyle:{backgroundColor:'#292929',borderWidth:0},}}>
      <Tab.Screen name="Library" component={LibraryHeader} options={{
        tabBarLabel:'Thư viện',
        tabBarLabelStyle:{
          fontSize:13
        },
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="library-music" size={size} color={color} />
        ),
      }}
       />
      <Tab.Screen name="Discovery" component={DiscoveryHeader} options={{
        tabBarLabel:'Khám phá',
        tabBarLabelStyle:{
          fontSize:13
        },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="circle-double" size={size} color={color} />
        ),
      }}/>
      <Tab.Screen name="Zingchart" component={ZingchartHeader} options={{
        tabBarLabel:'Zingchart',
        tabBarLabelStyle:{
          fontSize:13
        },
        tabBarIcon: ({ color, size }) => (
          <Entypo name="bar-graph" size={24} color={color} />)
      }}/>
      <Tab.Screen name="User" component={UserHeader} options={{
        tabBarLabel:'Cá nhân',
        tabBarLabelStyle:{
          fontSize:13
        },
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-circle" size={size} color={color}/>
          ),
      }}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App;