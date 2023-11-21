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
import { LineChart } from "react-native-chart-kit";
const Zingchart = () => {
  const songs = [
    {
      id: "1",
      name: "Cắt Đôi Nỗi Sầu",
      image: require("../assets/catdoinoisau.png"),
      singer: "Tăng Duy Tân",
    },
    {
      id: "2",
      name: "Tất Cả Hoặc Không Là Gì Cả",
      image: require("../assets/latatca.png"),
      singer: "Cao Thái Sơn",
    },
    {
      id: "3",
      name: "Ngày Mai Người Ta Lấy Chồng",
      image: require("../assets/ngaymai.png"),
      singer: "Thành Đạt",
    },
    {
      id: "4",
      name: "Lệ Lưu Ly",
      image: require("../assets/leluuly.png"),
      singer: "Vũ Phụng Tiên,DT",
    },
    {
      id: "5",
      name: "Không Thể Say",
      image: require("../assets/khongthesay.png"),
      singer: "HIEUTHUHAI",
    },
    {
      id: "6",
      name: "Sao Trời Làm Gió",
      image: require("../assets/saotroilamgio.png"),
      singer: "Nal",
    },
    {
      id: "7",
      name: "À Lôi",
      image: require("../assets/aloi.png"),
      singer: "Double2T , Masew",
    },
    {
      id: "8",
      name: "Không Phải Gu",
      image: require("../assets/khongthesay.png"),
      singer: "HIEUTHUHAI",
    },
  ];
  const data = {
    labels: ["10","11", "12", "13", "14", "15", "16","17","18","19","20","21"],
    datasets: [
      {
        data: [20, 21, 15, 17, 25, 22,27,21,24,30,20,19],
        strokeWidth: 2,

        color: () => `rgba(245, 0, 0)`, // optional
        // optional
      },
      {
        data: [26, 20, 17, 10, 15, 23,23,20,24,22,21.20],
        strokeWidth: 2,
        color: () => `rgb(0, 245, 0)`, // optional
      },
      {
        data: [59, 50, 27, 18, 30, 77,75,60,76,66,80,75],
        strokeWidth: 2,
        color: () => `rgba(0, 0, 245)`, // optional, // optional
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "#6e1b9e",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#64156c",
     backgroundGradientToOpacity: 0.5,
    color: () => `rgb(252, 251, 255)`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <LinearGradient
      colors={["#6e1b9e", "#64156c"]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.chart}>
          <LineChart
            data={data}
            width={380}
            height={210}
            chartConfig={chartConfig}
            bezier
            withHorizontalLabels={false}
            withDots={false}
            withShadow={false}
            withVerticalLines={false}
            fromZero={true}
            
          />
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
    height: 220,
  },
  list: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#301C3C",
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
