import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  EvilIcons,
  SimpleLineIcons,
  Entypo,
  MaterialCommunityIcons,
  Feather,MaterialIcons,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";    
const User = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.user}>
          <EvilIcons name="user" size={100} color="white" />
          <View>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              User
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>Gói Basic</Text>
          </View>
        </View>
        <View style={styles.upgrade}>
          <Text style={styles.txtup}>
            Bạn đang sử dụng gói nghe nhạc miễn phí, nâng cấp tài khoản để trải
            nghiệm tốt hơn
          </Text>
          <TouchableOpacity style={styles.btnUpgrade}>
            <Text style={styles.txtbtn}>NÂNG CẤP TÀI KHOẢN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.options}>
          <Text style={{ fontSize: 18, color: "white", fontWeight: "500" }}>
            Trải nghiệm nghe nhạc nâng cao
          </Text>
          <View style={styles.listen}>
            <TouchableOpacity style={styles.btnListen}>
              <View style={styles.border}>
                <MaterialIcons
                  name="multitrack-audio"
                  size={28}
                  color="#1e90b0"
                />
              </View>
              <Text style={styles.txtListen}>Âm thanh vượt trội</Text>
              <Text style={styles.txtListen}>(Lossless)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnListen}>
              <View style={styles.border2}>
                <Ionicons name="shuffle" size={24} color="#b01e76" />
              </View>
              <Text style={styles.txtListen}>Chuyển bài mượt mà</Text>
              <Text style={styles.txtListen}>(Crossfade)</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.options}>
          <Text style={{ fontSize: 18, color: "white", fontWeight: "500" }}>
            Dịch vụ
          </Text>
          <TouchableOpacity style={styles.btnoption}>
            <MaterialCommunityIcons name="signal-4g" size={30} color="white" />
            <Text style={styles.txtoption}>Tiết kiệm 3G/4G truy cập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnoption}>
            <Octicons name="device-mobile" size={30} color="white" />
            <Text style={styles.txtoption}>Nhập code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.options}>
          <Text style={{ fontSize: 18, color: "white", fontWeight: "500" }}>
            Cá nhân
          </Text>
          <TouchableOpacity style={styles.btnoption}>
            <SimpleLineIcons name="user-following" size={30} color="white" />
            <Text style={styles.txtoption}>Danh sách quan tâm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnoption}>
            <Entypo name="block" size={30} color="white" />
            <Text style={styles.txtoption}>Danh sách chặn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnoption}>
            <MaterialCommunityIcons
              name="progress-clock"
              size={30}
              color="white"
            />
            <Text style={styles.txtoption}>Danh sách tạm ẩn</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.btnoption}>
            <Feather name="log-out" size={30} color="white" />
            <Text style={styles.txtoption}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  upgrade: {
    alignSelf: "center",
    width: 340,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  txtup: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
  },
  btnUpgrade: {
    width: 200,
    height: 50,
    backgroundColor: "#FFD704",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  txtbtn: {
    fontSize: 17,
    color: "#000",
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "600",
  },
  options: {
    marginTop: 20,
    marginLeft: 20,
  },
  btnoption: {
    flexDirection: "row",
    marginTop: 20,
  },
  txtoption: {
    fontSize: 16,
    color: "white",
    marginLeft: 20,
  },
  line: {
    width: 400,
    height: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  listen: {
    flexDirection: "row",
  },
  btnListen: {
    width: 160,
    height: 100,
    backgroundColor: "#292929",
    borderRadius: 10,
    marginLeft: 8,
    marginTop: 15,
  },
  txtListen: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
  },
  border: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d2e6ef",
    marginLeft: 10,
  },
  border2: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efd2e4",
    marginLeft: 10,
  },
});
