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
