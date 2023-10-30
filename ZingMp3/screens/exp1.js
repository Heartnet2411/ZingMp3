import * as React from 'react';
import { View, Text, Dimensions, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

const exp1 = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={ () => {navigation.navigate('exp2')}}>
        <Text>Press me</Text>
      </TouchableOpacity>
      <FontAwesome5 name="play-circle" size={24} color="black" />
    </SafeAreaView>
  );
}

export default exp1;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

});