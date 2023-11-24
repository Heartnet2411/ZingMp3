import { StyleSheet, Text, TouchableOpacity, View,Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Singers = () => {
    const singers=[{
        id: "1",
        name: "Tăng Duy Tân",
        image: require("../img/singers/duytan.png"),
        follower: '60K quan tâm'
        },
        {
        id: "2",
        name: 'Sơn Tùng M-TP',
        image: require("../img/singers/mtp.png"),
        follower: '2,4M quan tâm'
        },
        {
        id: "3",
        name: "Hoàng Tôn",
        image: require("../img/singers/hoangton.png"),
        follower: '40K quan tâm'
        },
        {
        id: "4",
        name: "Trịnh Thăng Bình",
        image: require("../img/singers/trinhthangbinh.png"),
        follower: '26K quan tâm'
        },
        {
        id: "5",
        name: "Khắc Việt",
        image: require("../img/singers/khacviet.png"),
        follower: '60K quan tâm'
        },
        {
        id: "6",
        name: "Phan Mạnh Quỳnh",
        image: require("../img/singers/PMQ.png"),
        follower: '110K quan tâm'
        },
        
        {
        id: "7",
        name: "Đức Phúc",
        image: require("../img/singers/ducphuc.png"),
        follower: '69K quan tâm'
        },
        {
        id: "8",
        name: "Tuấn Hưng",
        image: require("../img/singers/tuanhung.png"),
        follower: '35K quan tâm'
        },
        
        {
        id: "9",
        name: "Noo Phước Thịnh",
        image: require("../img/singers/noo.png"),
        follower: '60K quan tâm'
        },
    ]
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
            <Text style={styles.txtHeader}>Nghệ sĩ</Text>
            <MaterialCommunityIcons name="account-music-outline" size={100} color="white" />
            <Text style={styles.txtContent}>Bạn chưa theo dõi nghệ sĩ nào</Text>
            <TouchableOpacity style={styles.btnAdd}>
                <Text style={styles.txtFollow}>THÊM NGHỆ SĨ</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.wrapSinger}>
            {singers.map((item) => (
                <TouchableOpacity style={styles.wrapElement}>
                    <Image style={styles.imgSinger} source={item.image} />
                    <View style={styles.wrapInfo
                    }>
                    <Text style={styles.txtSinger}>{item.name}</Text>
                    <Text style={styles.txtFl}>{item.follower}</Text>
                    </View>
                    <TouchableOpacity style={styles.btnFollow}>
                        <Text style={styles.txtFollow}>Quan tâm</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            ))}
        </View>
    </ScrollView>

    </SafeAreaView>
  )
}

export default Singers

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        width:Dimensions.get('screen').width
    },
    header:{
        backgroundColor: '#000',
        width:"100%",
        height: 250,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    txtHeader:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    txtContent:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '409',
        marginTop: 10,
    },
    txtFl:{
        color: '#fff',
        fontSize: 15,
        marginTop: 10,
    },
    wrapInfo:{
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    btnAdd:{
        width: 300,
        height: 40,
        backgroundColor: '#9044cc',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    txtFollow:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    wrapSinger:{
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor:"black"
    },
    wrapElement:{
        flexDirection:'row',
    },
    imgSinger:{
        width: 40,
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 50,
    },
    txtSinger:{
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        color:'white'
    },
    btnFollow:{
        width: 100,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute",
        right: 0,
        marginTop: 10,
    },
    txtFollow:{
        color: '#fff',
        fontSize: 15,
    },
})