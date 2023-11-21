import * as React from "react";
import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Library = ({ navigation ,onPress}) => {
  const [albums, setAlbums] = useState([
    {
      id: "1",
      name: "Top 100 Nhạc VPop Hay Nhất",
      image: require("../assets/image17.png"),
    },
    {
      id: "2",
      name: "Top 100 Nhạc USUK Hay Nhất",
      image: require("../assets/image18.png"),
    },
    {
      id: "3",
      name: "Top 100 Nhạc Trẻ Hay Nhất",
      image: require("../assets/image19.png"),
    },
    {
      id: "4",
      name: "Top 100 Nhạc Trữ Tình Hay Nhất",
      image: require("../assets/image19.png"),
    },
  ]);
  const tabs = ["Playlist", "Album"];
  const [selected, setSelected] = useState(0);
  const playlists = [
    {
      id: "1",
      name: "Nhạc VPop",
      image: require("../assets/image17.png"),
    },
    {
      id: "2",
      name: "Nhạc USUK",
      image: require("../assets/image18.png"),
    },
    {
      id: "3",
      name: "Nhạc Trẻ",
      image: require("../assets/image19.png"),
    },
    {
      id: "4",
      name: "Nhạc Trữ Tình",
      image: require("../assets/image19.png"),
    },
    {
      id: "5",
      name: "Nhạc VPop",
      image: require("../assets/image17.png"),
    },
    {
      id: "6",
      name: "Nhạc USUK",
      image: require("../assets/image18.png"),
    },
    {
      id: "7",
      name: "Nhạc Trẻ",
      image: require("../assets/image19.png"),
    },
    {
      id: "8",
      name: "Nhạc Trữ Tình",
      image: require("../assets/image19.png"),
    },
    {
      id: "9",
      name: "Nhạc VPop",
      image: require("../assets/image17.png"),
    },
    {
      id: "10",
      name: "Nhạc USUK",
      image: require("../assets/image18.png"),
    },
    {
      id: "11",
      name: "Nhạc Trẻ",
      image: require("../assets/image19.png"),
    },
    {
      id: "12",
      name: "Nhạc Trữ Tình",
      image: require("../assets/image19.png"),
    },
  ];
  const w = Dimensions.get('screen').width;
  const onScroll = ({nativeEvent}) =>{
    const index=Math.round(nativeEvent.contentOffset.x/(w-20));
      setSelected(index);
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.option}>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={styles.btnOption}>
            <AntDesign
              style={styles.iconOption}
              name="heart"
              size={24}
              color="#4bd1f9"
            />
            <Text style={styles.txtOption}>Bài hát yêu thích</Text>
            <Text style={styles.txtOption}>0 bài hát</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOption}>
            <Ionicons
              style={styles.iconOption}
              name="arrow-down-circle"
              size={26}
              color="#AF4CF7"
            />
            <Text style={styles.txtOption}>Tải xuống</Text>
            <Text style={styles.txtOption}>0 bài hát</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOption}>
            <MaterialCommunityIcons
              style={styles.iconOption}
              name="account-music"
              size={24}
              color="#FF9434"
            />
            <Text style={styles.txtOption}>Nghệ sĩ</Text>
            <Text style={styles.txtOption}>0 bài hát</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOption}>
            <MaterialCommunityIcons
              style={styles.iconOption}
              name="cloud-upload"
              size={24}
              color="#f9944b"
            />
            <Text style={styles.txtOption}>Upload</Text>
            <Text style={styles.txtOption}>0 bài hát</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.recent}>
        <TouchableOpacity style={styles.btnRecent}>
          <Text style={styles.txtRecent}>Nghe gần đây</Text>
          <AntDesign
            style={{ marginTop: 3 }}
            name="right"
            size={20}
            color="white"
          />
        </TouchableOpacity>
        <View style={styles.albumRecent}>
          <ScrollView horizontal={true}>
            {albums.map((item) => (
              <View
                key={item.id}
                style={{ marginLeft: 15, margin: 10, width: 110 }}
              >
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                    source={item.image}
                  />
                  <Text style={{ color: "white", fontSize: 13, marginTop: 5 }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.playlist}>
        {tabs.map((e, i) => (
          <Pressable onPress={() => setSelected(i)}>
            <Text style={[styles.title, selected == i && { color: "white" }]}>
              {e}
            </Text>
            {selected == i && <View style={styles.line}></View>}
          </Pressable>
        ))}
      </View>
      <ScrollView horizontal style={{ marginTop: 40 }}
      pagingEnabled
      snapToAlignment="center"
      onScroll={onScroll}
      decelerationRate={"fast"}>
        <FlatList
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.list}>
              <Image style={styles.listimg} source={item.image} />
              <Text style={styles.titlelist}>{item.name}</Text>
            </TouchableOpacity>
          )}
          data={playlists}
        />
        <FlatList
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.list}>
              <Image style={styles.listimg} source={item.image} />
              <Text style={styles.titlelist}>{item.name}</Text>
            </TouchableOpacity>
          )}
          data={albums}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Library;

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
  },
  option: {
    flexDirection: "row",
    width: screenWidth,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  btnOption: {
    width: 130,
    height: 100,
    backgroundColor: "#292929",
    borderRadius: 10,
    marginLeft: 15,
  },
  txtOption: {
    color: "white",
    fontSize: 13,
    marginLeft: 10,
    marginTop: 5,
  },
  iconOption: {
    marginLeft: 15,
    marginTop: 15,
  },
  recent: {
    marginTop: 15,
    height: 200,
  },
  txtRecent: {
    color: "white",
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  btnRecent: {
    flexDirection: "row",
    height: 30,
    alignItems: "center",
  },
  albumRecent: {
    marginTop: 10,
    height: 150,
  },
  playlist: {
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
  },
  title: {
    color: "gray",
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15,
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: "white",
    alignSelf: "center",
  },
  listimg: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  list: {
    flexDirection: "row",
    width: screenWidth,
    marginTop:10
  },
  titlelist: {
    fontSize: 16,
    marginLeft: 10,
    color: "white",
  },
});
