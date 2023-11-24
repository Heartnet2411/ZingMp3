import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo } from "@expo/vector-icons";

const LoveSongs = () => {
  const songs = [
    {
      id: "1",
      name: "Cắt Đôi Nỗi Sầu",
      image: require("../img/songs/catdoinoisau.png"),
      singer: "Tăng Duy Tân",
    },
    {
      id: "2",
      name: "Tất Cả Hoặc Không Là Gì Cả",
      image: require("../img/songs/latatca.png"),
      singer: "Cao Thái Sơn",
    },
    {
      id: "3",
      name: "Ngày Mai Người Ta Lấy Chồng",
      image: require("../img/songs/ngaymai.png"),
      singer: "Thành Đạt",
    },
    {
      id: "4",
      name: "Lệ Lưu Ly",
      image: require("../img/songs/leluuly.png"),
      singer: "Vũ Phụng Tiên,DT",
    },
    {
      id: "5",
      name: "Không Thể Say",
      image: require("../img/songs/khongthesay.png"),
      singer: "HIEUTHUHAI",
    },
    {
      id: "6",
      name: "Sao Trời Làm Gió",
      image: require("../img/songs/saotroilamgio.png"),
      singer: "Nal",
    },
    {
      id: "7",
      name: "À Lôi",
      image: require("../img/songs/aloi.png"),
      singer: "Double2T , Masew",
    },
    {
      id: "8",
      name: "Không Phải Gu",
      image: require("../img/songs/khongthesay.png"),
      singer: "HIEUTHUHAI",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Bài hát yêu thích</Text>
        <View style={styles.content}>
          <Text style={styles.txtContent}>8 bài hát</Text>
          <Text style={styles.txtContent}>Đã lưu vào thư viện</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            data={songs}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <View style={styles.wrapSong}>
                    <Image style={styles.imgSong} source={item.image} />
                    <View style={styles.wrapInfo}>
                      <Text style={styles.txtName}>{item.name}</Text>
                      <Text style={styles.txtSinger}>{item.singer}</Text>
                    </View>
                    <TouchableOpacity style={styles.icon}>
                      <AntDesign name="heart" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btndot}>
                      <Entypo
                        name="dots-three-vertical"
                        size={20}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoveSongs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
  },
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#131313",
    flexDirection: "column",
    alignItems: "center",
  },
  txtHeader: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
    textAlign: "center",
  },
  content: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5,
  },
  txtContent: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
  },
  list: {
    width: "100%",
    height: 500,
    backgroundColor: "#131313",
    flexDirection: "column",
    marginTop: 10,
  },
  wrapSong: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    marginTop: 10,
  },
  imgSong: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
  },
  wrapInfo: {
    marginLeft: 10,
  },
  txtName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  txtSinger: {
    color: "gray",
    fontSize: 14,
  },
  icon: {
    position: "absolute",
    right: 40,
  },
  btndot: {
    position: "absolute",
    right: 0,
    marginRight: 10,
  },
});
