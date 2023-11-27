import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const RecentList = () => {
  const playlists = [
    {
        id: "1",
        name: "Top 100 Nhạc VPop Hay Nhất",
        image: require("../img/albums/image17.png"),
      },
      {
        id: "2",
        name: "Top 100 Nhạc Dance Việt Hay Nhất",
        image: require("../img/albums/100dance.png"),
      },
      {
        id: "3",
        name: "Top 100 Nhạc Trẻ Hay Nhất",
        image: require("../img/albums/100Vpop.png"),
      },
      {
        id: "4",
        name: "Top bài hát hay của Kay Trần",
        image: require("../img/albums/image18.png"),
      },
      {
        id: "5",
        name: "Top Hits 2010",
        image: require("../img/albums/2010.png"),
      },
      {
        id: "6",
        name: "Top bài hát hay của Sơn Tùng M-TP",
        image: require("../img/albums/image19.png"),
      },
    ];
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <View style={styles.body}>
        <FlatList
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.list}>
              <Image style={styles.listimg} source={item.image} />
              <View>
                <Text style={styles.titlelist}>{item.name}</Text>
                <Text style={styles.txtZing}>ZingMp3</Text>
              </View>
            </TouchableOpacity>
          )}
          data={playlists}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
  },
  body: {
    margin: 10,
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  listimg: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  titlelist: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  txtZing: {
    color: "#999",
  },
});
