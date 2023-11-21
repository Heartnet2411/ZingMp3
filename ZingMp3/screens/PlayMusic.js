import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Feather, Octicons, FontAwesome ,FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';

const PlayMusic = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient   colors={['#999', '#1e1e1e']} style={styles.container}>
        <Image style={styles.image} source={require('../assets/banner/cat-doi-noi-sau.jpg')} />

        <View style={{justifyContent:'center', alignItems:'center', height: screenHeight*0.22,}}>
          <View style={styles.name}>
            <FontAwesome name="share" size={30} color="#ccc" />
            <View style={styles.info}>
              <Text style={styles.songName}>Cắt đôi nỗi sầu</Text>
              <Text style={styles.author}>Tăng Duy Tân</Text>
            </View>
            <Feather name="heart" size={30} color="#ccc" />
          </View>

          <View style={styles.slider}>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              thumbTintColor='#FFFFFF'
            />
            <View style={styles.time}>
              <Text style={styles.timeStart}>00:00</Text>
              <Text style={styles.timeEnd}>03:20</Text>
            </View>
          </View>
        </View>

        <View style={styles.control}>
          <FontAwesome5 name="random" size={24} color="#ccc" />
          <Ionicons name="ios-play-skip-back" size={35} color="white" />
          <AntDesign name="playcircleo" size={70} color="white" />
          <Ionicons name="play-skip-forward" size={35} color="white" />
          <Feather name="repeat" size={24} color="#ccc" />
        </View>

        <View style={styles.feature}>
          <Octicons name="comment" size={30} color="#ccc" />
          <MaterialCommunityIcons name="music-note-plus" size={30} color="#ccc" />
          <Text style={styles.quality}>320 Kbps</Text>
          <Ionicons name="arrow-down-circle-outline" size={30} color="#ccc" />
          <MaterialCommunityIcons name="playlist-music-outline" size={30} color="#ccc" />

        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default PlayMusic;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container : {
    width: '100%',
    height: '100%',
  },

  image: {
    width: screenWidth*0.8,
    height: screenWidth*0.8,
    borderRadius: screenWidth*0.4,
    marginTop: screenHeight*0.08,
    alignSelf: 'center',
  },

  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: screenHeight*0.05,
    width: screenWidth*0.8,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  songName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  author: {
    color: 'white',
    fontSize: 15,
    marginLeft: '5%',
  },

  slider: {
    width: screenWidth*0.8,
    alignSelf: 'center',
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeStart: {
    color: 'white',
  },
  timeEnd: {
    color: 'white',
  },

  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth*0.8,
    alignSelf: 'center',
    height: screenHeight*0.2,
    alignItems: 'center',
    flex: 1,
  },
  
  feature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth*0.8,
    alignSelf: 'center',
    height: screenHeight*0.12,
    alignItems: 'center',
  },
  quality: {
    color: '#ccc',
    alignSelf: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontWeight: 'bold',
  },

});