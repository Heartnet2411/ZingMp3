import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Feather, Octicons, FontAwesome ,FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useEffect, useState, useMemo, useRef } from 'react';


const PlayMusic = ({navigation, route}) => {
  const name = route.params.name;
  const author = route.params.author;
  const image = route.params.image;
  const music = route.params.music;

  const [rotation, setRotation] = useState(0);
  const rotateValue = useRef(new Animated.Value(rotation)).current;

  const rotateAnimation = Animated.timing(rotateValue, {
    toValue: 1,
    duration: 10000,
    easing: Easing.linear,
    useNativeDriver: true,
  });
  Animated.loop(rotateAnimation).start();

  useEffect(() => {
    Animated.loop(rotateAnimation).start();
    return () => rotateValue.setValue(rotation); // Preserve rotation value when component unmounts
  }, [rotation, rotateAnimation, rotateValue]);

  const rotateImage = useMemo(() => (
    <Animated.Image
          source={image}
          style={[styles.image,{
            transform: [
              {
                rotate: rotateValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [`${rotation}deg`, `${rotation + 360}deg`],
                }),
              },
            ],
          }]}
        />
  ), [ rotateValue, rotation]);


  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState('0:00');
  const [position, setPosition] = useState('0:00');
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [positionSecond, setPositionSeconds] = useState(0);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playSound = async () => {
    if (!sound) {
      const { sound, status } = await Audio.Sound.createAsync(
        music
      );

      if (status.isLoaded) {
        setSound(sound);

        // Set up playback status update listener
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            setIsPlaying(false);
          }

          // Chuyển đổi vị trí thành đơn vị phút và giây
          const positionMinutes = Math.floor(status.positionMillis / 60000);
          const positionSeconds = ((status.positionMillis % 60000) / 1000).toFixed(0);
          const position = `${positionMinutes}:${positionSeconds < 10 ? '0' : ''}${positionSeconds}`;
          const positionS = Math.floor(status.positionMillis / 1000);
          setPosition(position);

          // Chuyển đổi độ dài thành đơn vị phút và giây
          const durationMinutes = Math.floor(status.durationMillis / 60000);
          const durationSeconds = ((status.durationMillis % 60000) / 1000).toFixed(0);
          const duration = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
          const durationSeconds2 = Math.floor(status.durationMillis / 1000);
          setDurationSeconds(durationSeconds2);
          setDuration(duration);

          setPositionSeconds(positionS/ durationSeconds2)
        });

        await sound.playAsync();
        setIsPlaying(true);
      } else {
        console.error('Error loading sound');
      }
    } else {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient   colors={['#999', '#1e1e1e']} style={styles.container}>
        {rotateImage}

        <View style={{justifyContent:'center', alignItems:'center', height: screenHeight*0.22,}}>
          <View style={styles.name}>
            <FontAwesome name="share" size={30} color="#ccc" />
            <View style={styles.info}>
              <Text style={styles.songName}>{name}</Text>
              <Text style={styles.author}>{author}</Text>
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
              value={positionSecond}
            />
            <View style={styles.time}>
              <Text style={styles.timeStart}>{position}</Text>
              <Text style={styles.timeEnd}>{duration}</Text>
            </View>
          </View>
        </View>

        <View style={styles.control}>
          <FontAwesome5 name="random" size={24} color="#ccc" />
          <Ionicons name="ios-play-skip-back" size={35} color="white" />
          {
            isPlaying ? (
              <TouchableOpacity onPress={playSound}>
                <FontAwesome5 name="pause-circle" size={70} color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={playSound}>
                <FontAwesome5 name="play-circle" size={70} color="white" />
              </TouchableOpacity>
            )
          }
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