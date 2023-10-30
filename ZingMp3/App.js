import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {exp1, exp2} from './screens'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="exp1">
        <Stack.Screen name="exp1" component={exp1} />
        <Stack.Screen name="exp2" component={exp2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;