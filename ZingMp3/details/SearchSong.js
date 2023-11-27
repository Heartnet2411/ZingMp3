import { StyleSheet, Text, TextInput, View,Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchSong = ({navigation}) => {
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
    {
      id: "16",
      name: "Một Nhà",
      image: require("../img/songs/motnha.png"),
      singer: "DA LAB",
    },
    {
      id: "17",
      name: "Em Của Ngày Hôm Qua",
      image: require("../img/songs/ecuangayhomqua.png"),
      singer: "Sơn Tùng M-TP",
    },
    {
      id: "18",
      name: "Bước Qua Đời Nhau",
      image: require("../img/songs/lebaobinh.png"),
      singer: "Lê Bảo Bình",
    },
    {
      id: "19",
      name: "Nơi Này Có Anh",
      image: require("../img/songs/noinaycoanh.png"),
      singer: "Đình Dũng",
    },
    {
      id: "20",
      name: "Rời Bỏ",
      image: require("../img/songs/roibo.png"),
      singer: "Hòa Minzy",
    },
    {
      id: "21",
      name: "Mặt Trời Của Em",
      image: require("../img/songs/mattroicuaem.png"),
      singer: "Phương Ly,JustaTee",
    },
    {
      id: "22",
      name: "Em Nên Dừng Lại",
      image: require("../img/songs/emnendunglai.png"),
      singer: "Khang Việt",
    },
    {
      id: "23",
      name: "Rượu Mừng Hóa Người Dưng",
      image: require("../img/songs/ruoumung.png"),
      singer: "TLong",
    },
    {
      id: "24",
      name: "Sao Cũng Được",
      image: require("../img/songs/saocungduoc.png"),
      singer: "Thành Đạt",
    },
    {
      id: "25",
      name: "Một Bước Yêu Vạn Dặm Đau",
      image: require("../img/songs/1buocyeu.png"),
      singer: "Mr Siro",
    },
    {
      id: "26",
      name: "Gạt Đi Nước Mắt",
      image: require("../img/songs/ffe87169f25c5bc08d1333bda3d3acb5_1410318537.jpg"),
      singer: "Noo Phước Thịnh",
    },
    {
      id: "27",
      name: "Là Bạn Không Thể Yêu",
      image: require("../img/songs/lou.png"),
      singer: "Lou Hoàng",
    },
    {
      id: "28",
      name: "Qua Cầu Rước Em",
      image: require("../img/songs/quacauruocem.png"),
      singer: "Danh Ka",
    },
    {
      id: "29",
      name: "Âm Thầm Bên Em",
      image: require("../img/songs/amthambenem.png"),
      singer: "Sơn Tùng M-TP",
    },
    {
      id: "30",
      name: "Yêu Là Tha Thu",
      image: require("../img/songs/yeulathathu.png"),
      singer: "Only C",
    },
    {
      id: "31",
      name: "Lạc Trôi",
      image: require("../img/songs/ecuangayhomqua.png"),
      singer: "Sơn Tùng M-TP"
    }
  ];
      const [searchQuery,setSearchQuery]=useState("");
      const [songList,setSongList] = useState(songs) ;

      const handleSearch= (query)=>{
        if(query){
          let filteredList = songs.filter((song)=>song.name.toLowerCase().includes(query.toLowerCase())||song.singer.toLowerCase().includes(query.toLowerCase()) );
          setSongList(filteredList)
        }
        else{
          setSongList(songs)
        }
      }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.iconSearch} source={require('../assets/search.png')}/>
        <TextInput style={styles.input}
        onChangeText={(query)=>{
          setSearchQuery(query)
          handleSearch(query)}}
        placeholder='Tìm kiếm bài hát' placeholderTextColor='white'></TextInput>
        <TouchableOpacity style={styles.btnClose}onPress={()=>{navigation.goBack()}}>
            <Text style={styles.txtClose}>Đóng</Text>
        </TouchableOpacity>
        </View>
        <FlatList
       data={songList}
       renderItem={({ item }) => {
         return (
           <TouchableOpacity>
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
  )
}

export default SearchSong

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#131313',
    },
    input:{
        width: 320,
        height: 40,
        color:'white',
        backgroundColor: '#403444',
        borderRadius: 20,
        marginTop: 10,
        paddingLeft: 50,
        borderWidth:1,
        borderColor:'#fff',
    },
    header:{
        width: '100%',
        height: 70,
        backgroundColor: '#403444',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSearch:{
        width: 20,
        height: 20,
        position:'absolute',
        left: 20,
        top: 30,
        },
    btnClose:{
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
    },
    txtClose:{
        color: 'white',
    },
    wrapSong:{
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
    },
    imgSong:{
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    wrapInfo:{
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    txtName:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    txtSinger:{
        color: 'gray',
        fontSize: 15,
        marginTop: 5,
    },

})