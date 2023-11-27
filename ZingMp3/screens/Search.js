import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Search = ({ navigation, route }) => {
  const songs = [
    {
      id: "1",
      name: "Cắt Đôi Nỗi Sầu",
      image: require("../img/songs/catdoinoisau.png"),
      singer: "Tăng Duy Tân",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "2",
      name: "Tất Cả Hoặc Không Là Gì Cả",
      image: require("../img/songs/latatca.png"),
      singer: "Cao Thái Sơn",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "3",
      name: "Ngày Mai Người Ta Lấy Chồng",
      image: require("../img/songs/ngaymai.png"),
      singer: "Thành Đạt",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "4",
      name: "Lệ Lưu Ly",
      image: require("../img/songs/leluuly.png"),
      singer: "Vũ Phụng Tiên,DT",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "5",
      name: "Không Thể Say",
      image: require("../img/songs/khongthesay.png"),
      singer: "HIEUTHUHAI",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "6",
      name: "Sao Trời Làm Gió",
      image: require("../img/songs/saotroilamgio.png"),
      singer: "Nal",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "7",
      name: "À Lôi",
      image: require("../img/songs/aloi.png"),
      singer: "Double2T , Masew",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "8",
      name: "Không Phải Gu",
      image: require("../img/songs/khongthesay.png"),
      singer: "HIEUTHUHAI",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "9",
      name: "Say Trong Nụ Cười",
      image: require("../img/songs/saytrongnucuoi.png"),
      singer: "Tăng Duy Tân",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "10",
      name: "Như Anh Đã Thấy Em",
      image: require("../img/songs/nhuanhdathayem.png"),
      singer: "PhucXP,Freak D",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "11",
      name: "Ngày Mai Em Đi Mất",
      image: require("../img/songs/ngaymaiemdimat.png"),
      singer: "Khải Đăng",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "12",
      name: "Hoa Cỏ Lau",
      image: require("../img/songs/hoacolau.png"),
      singer: "Phong Max",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "13",
      name: "Ai Chung Tình Được Mãi",
      image: require("../img/songs/aichungtinhduocmai.png"),
      singer: "Đinh Tùng Huy",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "14",
      name: "Sau Tất Cả",
      image: require("../img/songs/sautatca.png"),
      singer: "Erik",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "15",
      name: "Ngoài 30",
      image: require("../img/songs/ngoai30.png"),
      singer: "Thái Học",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "16",
      name: "Một Nhà",
      image: require("../img/songs/motnha.png"),
      singer: "DA LAB",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "17",
      name: "Em Của Ngày Hôm Qua",
      image: require("../img/songs/ecuangayhomqua.png"),
      singer: "Sơn Tùng M-TP",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "18",
      name: "Bước Qua Đời Nhau",
      image: require("../img/songs/lebaobinh.png"),
      singer: "Lê Bảo Bình",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "19",
      name: "Nơi Này Có Anh",
      image: require("../img/songs/noinaycoanh.png"),
      singer: "Đình Dũng",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "20",
      name: "Rời Bỏ",
      image: require("../img/songs/roibo.png"),
      singer: "Hòa Minzy",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "21",
      name: "Mặt Trời Của Em",
      image: require("../img/songs/mattroicuaem.png"),
      singer: "Phương Ly,JustaTee",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "22",
      name: "Em Nên Dừng Lại",
      image: require("../img/songs/emnendunglai.png"),
      singer: "Khang Việt",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "23",
      name: "Rượu Mừng Hóa Người Dưng",
      image: require("../img/songs/ruoumung.png"),
      singer: "TLong",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "24",
      name: "Sao Cũng Được",
      image: require("../img/songs/saocungduoc.png"),
      singer: "Thành Đạt",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "25",
      name: "Một Bước Yêu Vạn Dặm Đau",
      image: require("../img/songs/1buocyeu.png"),
      singer: "Mr Siro",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "26",
      name: "Gạt Đi Nước Mắt",
      image: require("../img/songs/ffe87169f25c5bc08d1333bda3d3acb5_1410318537.jpg"),
      singer: "Noo Phước Thịnh",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "27",
      name: "Là Bạn Không Thể Yêu",
      image: require("../img/songs/lou.png"),
      singer: "Lou Hoàng",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "28",
      name: "Qua Cầu Rước Em",
      image: require("../img/songs/quacauruocem.png"),
      singer: "Danh Ka",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "29",
      name: "Âm Thầm Bên Em",
      image: require("../img/songs/amthambenem.png"),
      singer: "Sơn Tùng M-TP",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "30",
      name: "Yêu Là Tha Thu",
      image: require("../img/songs/yeulathathu.png"),
      singer: "Only C",
      song: require("../assets/music/Alone.mp3"),
    },
    {
      id: "31",
      name: "Lạc Trôi",
      image: require("../img/songs/ecuangayhomqua.png"),
      singer: "Sơn Tùng M-TP",
      song: require("../assets/music/Alone.mp3"),
    }
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [songList, setSongList] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      let filteredList = songs.filter(
        (song) =>
          song.name.toLowerCase().includes(query.toLowerCase()) ||
          song.singer.toLowerCase().includes(query.toLowerCase())
      );
      setSongList(filteredList);
    } else {
      setSongList([]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnClose}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Image
          style={styles.iconSearch}
          source={require("../assets/search.png")}
        />
        <TextInput
          style={styles.input}
          onChangeText={(query) => {
            handleSearch(query);
          }}
          placeholder="Tìm kiếm bài hát"
          placeholderTextColor="white"
          value={searchQuery}
        ></TextInput>
      </View>
      <Text style={styles.txtRecommend}>Đề xuất cho bạn</Text>
      <View style={styles.wrapRec}>
        <TouchableOpacity style={styles.btnRe} onPress={()=>{setSearchQuery("Cắt Đôi Nỗi Sầu")}}>
          <Text style={styles.txtInput}>Cắt Đôi Nỗi Sầu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRe} onPress={()=>{
          setSearchQuery("Từng quen")
        }}>
  <Text style={styles.txtInput}>Từng quen</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btnRe} onPress={()=>{
  setSearchQuery("không phải gu")
}}>
  <Text style={styles.txtInput}>không phải gu</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btnRe} onPress={()=>{
  setSearchQuery("tất cả hoặc không là gì cả")
}}>
  <Text style={styles.txtInput}>tất cả hoặc không là gì cả</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btnRe} onPress={()=>{
  setSearchQuery("lệ lưu ly")
}}>
  <Text style={styles.txtInput}>Lệ lưu ly</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btnRe} onPress={()=>{
  setSearchQuery("sao trời làm gió")
}}>
  <Text style={styles.txtInput}>sao trời làm gió</Text>
</TouchableOpacity>
      </View>
      <FlatList
        data={songList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {navigation.navigate('PlayMusic',
              {
                name: item.name,
                image: item.image,
                author: item.singer,
                music: item.song,
              })}}>
              <View style={styles.wrapSong}>
                <Image style={styles.imgSong} source={item.image} />
                <View style={styles.wrapInfo}>
                  <Text style={styles.txtName}>{item.name}</Text>
                  <Text style={styles.txtSinger}>{item.singer}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
  },
  input: {
    width: 320,
    height: 40,
    color: "white",
    backgroundColor: "#403444",
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
  header: {
    width: "100%",
    height: 70,
    backgroundColor: "#403444",
    flexDirection: "row",
    alignItems: "center",
  },
  txtInput: {
    color: "white",
    fontSize: 12,
    padding:10
  },
  wrapRec: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
    marginTop: 5,
    marginBottom:20
  },
  btnRe: {
    width: "auto",
    height: 30,
    backgroundColor: "#403444",
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnClose: {
    marginLeft: 10,
    marginTop: 10,
    alignItems: "center",
    marginRight: 10,
  },
  iconSearch: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 50,
    top: 30,
  },
  txtClose: {
    color: "white",
  },
  txtRecommend: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  wrapSong: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5,
  },
  imgSong: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  wrapInfo: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginLeft: 10,
  },
  txtName: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  txtSinger: {
    color: "gray",
    fontSize: 15,
    marginTop: 5,
  },
});
