import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
const Zingchart = () => {
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
    {
      id: "9",
      name: "Say Trong Nụ Cười",
      image: require("../img/songs/saytrongnucuoi.png"),
      singer: "Tăng Duy Tân",
    },
    {
      id: "10",
      name: "Như Anh Đã Thấy Em",
      image: require("../img/songs/nhuanhdathayem.png"),
      singer: "PhucXP,Freak D",
    },
    {
      id: "11",
      name: "Ngày Mai Em Đi Mất",
      image: require("../img/songs/ngaymaiemdimat.png"),
      singer: "Khải Đăng",
    },
    {
      id: "12",
      name: "Hoa Cỏ Lau",
      image: require("../img/songs/hoacolau.png"),
      singer: "Phong Max",
    },
    {
      id: "13",
      name: "Ai Chung Tình Được Mãi",
      image: require("../img/songs/aichungtinhduocmai.png"),
      singer: "Đinh Tùng Huy",
    },
    {
      id: "14",
      name: "Sau Tất Cả",
      image: require("../img/songs/sautatca.png"),
      singer: "Erik",
    },
    {
      id: "15",
      name: "Ngoài 30",
      image: require("../img/songs/ngoai30.png"),
      singer: "Thái Học",
    },
  ];
  return (
    <LinearGradient
      colors={["#6e1b9e", "#64156c"]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.chart}>
          <Image style={styles.imgchart} source={require('../assets/chart.png')}/>
        </View>
        <FlatList
          style={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <Text style={styles.rank}>{item.id}</Text>
              <Image source={item.image} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.txtname}>{item.name}</Text>
                <Text style={styles.txtsinger}>{item.singer}</Text>
              </View>
              <TouchableOpacity style={styles.btndot}>
                <Entypo name="dots-three-vertical" size={20} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          data={songs}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Zingchart;

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  chart: {
    height: 260,
    alignItems:"center"
  },
  list: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#301C3C",
  },
  imgchart:{
    resizeMode:"contain",
    width:400,
    height:255
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
    width: screenWidth,
    marginTop: 10,
    marginLeft: 15,
    alignItems: "center",
  },
  info: {
    marginLeft: 10,
    marginTop: 5,
  },
  rank: {
    color: "white",
    fontSize: 30,
    marginRight: 20,
  },
  txtname: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  txtsinger: {
    color: "gray",
    fontSize: 14,
  },
  btndot: {
    position: "absolute",
    right: 20,
  },
});
