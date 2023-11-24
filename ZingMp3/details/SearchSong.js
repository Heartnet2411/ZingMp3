import { StyleSheet, Text, TextInput, View,Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import filter from 'lodash.filter';

const SearchSong = ({navigation}) => {
    const [songs,setSongs] =useState([
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
      ])
      useEffect(()=>{},[])
      const [searchQuery,setSearchQuery]=useState("");
      const [song,setSong] = useState([]);

      const handleSearch= (query)=>{
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(songs,(song)=>{
            return contains(song,formattedQuery);
        });
        setSongs(filteredData);
        console.log(songs)
      };
      const contains = ({name,singer},query)=>{
            if(name.includes(query)||singer.includes(query)){
                return true;
            }
            return false;
        }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.iconSearch} source={require('../assets/search.png')}/>
        <TextInput style={styles.input} value={searchQuery}
        onChangeText={(query)=>{handleSearch(query)}}
        placeholder='Tìm kiếm bài hát' placeholderTextColor='white'></TextInput>
        <TouchableOpacity style={styles.btnClose}onPress={()=>{navigation.goBack()}}>
            <Text style={styles.txtClose}>Đóng</Text>
        </TouchableOpacity>
        </View>
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