import * as React from 'react';
import { View, Text, Dimensions, Pressable, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

const Discoverys = [
  {
    id: 'a',
    name: 'Vũ trụ cò bay',
    title: 'Album nổi bật',
    image: require('../assets/banner/vu-tru-co-bay.jpg'),
  },
  {
    id: 'b',
    name: 'Cắt đôi nỗi sầu',
    title: 'Phát hành nổi bật',
    image: require('../assets/banner/cat-doi-noi-sau.jpg'),
  },
  {
    id: 'c',
    name: 'Vũ trụ cò bay',
    title: 'Album nổi bật',
    image: require('../assets/banner/vu-tru-co-bay.jpg'),
  },
  {
    id: 'd',
    name: 'Cắt đôi nỗi sầu',
    title: 'Phát hành nổi bật',
    image: require('../assets/banner/cat-doi-noi-sau.jpg'),
  },
]

const Recently = [
  {
    id: 1,
    name: 'Alone',
    author: 'Alan Walker',
    image: require('../assets/img/Alone.jpg'),
    music: require('../assets/music/Alone.mp3'),
  },
  {
    id: 2,
    name: 'AmewoMatsu',
    author: 'Hoaprox',
    image: require('../assets/img/AmewoMatsu.jpg'),
    music: require('../assets/music/AmewoMatsu.mp3'),
  },
  {
    id: 3,
    name: 'Faded',
    author: 'Alan Walker',
    image: require('../assets/img/Faded.jpg'),
    music: require('../assets/music/Faded.mp3'),
  },
  {
    id: 4,
    name: 'Light It Up',
    author: 'Robin Hustin x TobiMorrow',
    image: require('../assets/img/LightItUp.jpg'),
    music: require('../assets/music/LightItUp.mp3'),
  },
  {
    id: 5,
    name: 'Muộn rồi mà sao còn',
    author: 'Sơn Tùng M-TP',
    image: require('../assets/img/MuonRoiMaSaoCon.jpg'),
    music: require('../assets/music/MuonRoiMaSaoCon.mp3'),
  },
  {
    id: 6,
    name: 'Nevada',
    author: 'Vicetone',
    image: require('../assets/img/Nevada.jpg'),
    music: require('../assets/music/Nevada.mp3'),
  },
  {
    id: 7,
    name: 'See you again',
    author: 'Charlie Puth',
    image: require('../assets/img/SeeYouAgain.jpg'),
    music: require('../assets/music/SeeYouAgain.mp3'),
  },
  {
    id: 8,
    name: 'Sugar',
    author: 'Maroon 5',
    image: require('../assets/img/Sugar.jpg'),
    music: require('../assets/music/Sugar.mp3'),
  },
  {
    id: 9,
    name: 'Symphony',
    author: 'Clean Bandit',
    image: require('../assets/img/Symphony.jpg'),
    music: require('../assets/music/Symphony.mp3'),
  },
  {
    id: 10,
    name: 'Waiting For Love',
    author: 'Avicii',
    image: require('../assets/img/WaitingForLove.jpg'),
    music: require('../assets/music/WaitingForLove.mp3'),
  },
  {
    id: 11,
    name: 'YoruniKakeru',
    author: 'YOASOBI',
    image: require('../assets/img/YoruniKakeru.jpg'),
    music: require('../assets/music/YoruniKakeru.mp3'),
  },
]

function chiaMang(array) {
  let doDai = (array.length / 3);

  if (!Number.isInteger(doDai)) {
    doDai += 1;
  }
  let doDaiPhan = Math.floor(doDai);

  const phan1 = array.slice(0, doDaiPhan);
  const phan2 = array.slice(doDaiPhan, doDaiPhan * 2);
  const phan3 = array.slice(doDaiPhan * 2);

  return [phan1, phan2, phan3];
}

const mangChia = chiaMang(Recently);
const suggest1 = mangChia[0];
const suggest2 = mangChia[1];
const suggest3 = mangChia[2]; 

const Discovery = ({navigation, route}) => {
  return (
    <ScrollView style={styles.container}>
      
      <ScrollView style={{width: 'auto', height:'auto'}}>
        {/* //Discovery */}
        <ScrollView style={styles.discovery} horizontal={true}>
          {
            Discoverys.map((item) => (
              <View key={item.id} style={styles.discoveryWrap}>
                <View style={styles.discoveryItem}>
                  <Text style={styles.discoveryText}>{item.title}</Text>
                </View>
                <Image style={styles.discoveryImage} source={item.image} />
                <Text style={styles.discoveryName}>{item.name}</Text>
              </View>
            ))
          }
        </ScrollView>
        
        {/* //Noticeable */}
        <View style={styles.noticeable}>
          <Text style={styles.title}>Đáng chứ ý</Text>
          <Image style={styles.noticeableImage} source={require('../assets/banner/banner1.jpg')} />
        </View>
        {/* //Recently */}
        <View style={styles.recently}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Đáng chứ ý</Text>
            <MaterialIcons name="chevron-right" size={34} color="white" />
          </View>
          <ScrollView style={styles.recentlyWrap} horizontal={true}>
            {
              Recently.map((item) => (
                <TouchableOpacity onPress={() => { navigation.navigate('PlayMusic', 
                    {
                      name: item.name,
                      author: item.author,
                      image: item.image,
                      music: item.music,
                    })
                    }}>   
                  <View key={item.id} style={styles.recentlyItem}>
                    <Image style={styles.recentlyImage} source={item.image} />
                    <Text style={styles.recentlyName}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
        {/* //Suggest */}
        <View style={styles.suggest}>
          <Text style={styles.suggestText}>Bắt đầu nghe từ một bài hát</Text>
          <Text style={styles.title}>Gợi ý từ nhạc bạn đã nghe</Text>
          <View style={{width: screenWidth, height: 'auto'}}>
            <ScrollView style={styles.suggestWrap} horizontal={true}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  {
                    suggest1.map((item) => (
                      <View key={item.id} style={styles.suggestItem}>
                        <Image style={styles.suggestImage} source={item.image} />
                        <View style={{flexDirection: 'column', marginLeft: 10, flex: 1}}>
                          <Text style={styles.suggestName}>{item.name}</Text>
                          <Text style={styles.suggestSinger}>{item.author}</Text>
                        </View>
                        <Entypo name="dots-three-vertical" size={24} color="white" style={{alignSelf: 'center'}}/>
                      </View>
                    ))
                  }
                </View>
              <View style={{flexDirection: 'row'}}>
                  {
                    suggest2.map((item) => (
                      <View key={item.id} style={styles.suggestItem}>
                        <Image style={styles.suggestImage} source={item.image} />
                        <View style={{flexDirection: 'column', marginLeft: 10, flex: 1}}>
                          <Text style={styles.suggestName}>{item.name}</Text>
                          <Text style={styles.suggestSinger}>{item.author}</Text>
                        </View>
                        <Entypo name="dots-three-vertical" size={24} color="white" style={{alignSelf: 'center'}}/>
                      </View>
                    ))
                  }
                </View>
                <View style={{flexDirection: 'row'}}>
                  {
                    suggest3.map((item) => (
                      <View key={item.id} style={styles.suggestItem}>
                        <Image style={styles.suggestImage} source={item.image} />
                        <View style={{flexDirection: 'column', marginLeft: 10, flex: 1}}>
                          <Text style={styles.suggestName}>{item.name}</Text>
                          <Text style={styles.suggestSinger}>{item.author}</Text>
                        </View>
                        <Entypo name="dots-three-vertical" size={24} color="white" style={{alignSelf: 'center'}}/>
                      </View>
                    ))
                  }
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* //category */}
        <View style={styles.category}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Chủ đề & thể loại</Text>
            <MaterialIcons name="chevron-right" size={34} color="white" />
          </View>
          <ScrollView style={styles.categoryWrap} horizontal={true}>
            <View style={[styles.categoryItem, {backgroundColor: '#365eff'}]}>
              <FontAwesome name="music" size={24} color="white" />
              <Text style={styles.categoryText}>BXH Nhạc Mới</Text>
            </View>
            <View style={[styles.categoryItem, {backgroundColor: '#c50bbf'}]}>
              <FontAwesome name="star" size={24} color="white" />
              <Text style={styles.categoryText}>Top 100</Text>
            </View>
            <View style={[styles.categoryItem, {backgroundColor: '#fb995e'}]}>
              <Text style={styles.categoryText}>Nhạc Việt</Text>
            </View>
            <View style={[styles.categoryItem, {backgroundColor: '#1a75a7'}]}>
              <Text style={styles.categoryText}>Nhạc Hàn</Text>
            </View>
            <View style={[styles.categoryItem, {backgroundColor: '#767676'}]}>
              <Text style={styles.categoryText}>Nhạc Âu Mỹ</Text>
            </View>
          </ScrollView>
        </View>
        {/* //new release */}
        <View style={styles.suggest}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Mới phát hành</Text>
            <MaterialIcons name="chevron-right" size={34} color="white" />
          </View>
        
          <View style={styles.filter}>
            <View style={[styles.filterItem, styles.filterActive]}>
              <Text style={styles.filterText}>Tất cả</Text>
            </View>
            <View style={styles.filterItem}>
              <Text style={styles.filterText}>Việt Nam</Text>
            </View>
            <View style={styles.filterItem}>
              <Text style={styles.filterText}>Quốc Tế</Text>
            </View>
          </View>
          <View style={{width: screenWidth, height: 'auto'}}>
            <ScrollView style={styles.suggestWrap} horizontal={true}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  {
                    suggest1.map((item) => (
                      <View key={item.id} style={styles.suggestItem}>
                        <Image style={styles.suggestImage} source={item.image} />
                        <View style={{flexDirection: 'column', marginLeft: 10, flex: 1}}>
                          <Text style={styles.suggestName}>{item.name}</Text>
                          <Text style={styles.suggestSinger}>{item.author}</Text>
                        </View>
                        <Entypo name="dots-three-vertical" size={24} color="white" style={{alignSelf: 'center'}}/>
                      </View>
                    ))
                  }
                </View>
              <View style={{flexDirection: 'row'}}>
                  {
                    suggest2.map((item) => (
                      <View key={item.id} style={styles.suggestItem}>
                        <Image style={styles.suggestImage} source={item.image} />
                        <View style={{flexDirection: 'column', marginLeft: 10, flex: 1}}>
                          <Text style={styles.suggestName}>{item.name}</Text>
                          <Text style={styles.suggestSinger}>{item.author}</Text>
                        </View>
                        <Entypo name="dots-three-vertical" size={24} color="white" style={{alignSelf: 'center'}}/>
                      </View>
                    ))
                  }
                </View>
                <View style={{flexDirection: 'row'}}>
                  {
                    suggest3.map((item) => (
                      <View key={item.id} style={styles.suggestItem}>
                        <Image style={styles.suggestImage} source={item.image} />
                        <View style={{flexDirection: 'column', marginLeft: 10, flex: 1}}>
                          <Text style={styles.suggestName}>{item.name}</Text>
                          <Text style={styles.suggestSinger}>{item.author}</Text>
                        </View>
                        <Entypo name="dots-three-vertical" size={24} color="white" style={{alignSelf: 'center'}}/>
                      </View>
                    ))
                  }
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* //you might want to hear */}
        <View style={[styles.recently, {marginBottom: 30}]}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Có thể bạn muốn nghe</Text>
            <MaterialIcons name="chevron-right" size={34} color="white" />
          </View>
          <ScrollView style={styles.recentlyWrap} horizontal={true}>
            {
              Recently.map((item) => (
                <TouchableOpacity onPress={() => {navigation.navigate('PlayMusic')}}>
                  <View key={item.id} style={styles.recentlyItem}>
                    <Image style={styles.recentlyImage} source={item.image} />
                    <Text style={styles.recentlyName}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

export default Discovery;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: "auto",
    backgroundColor: '#000',
  },

  // discovery
  discovery: {
    width: screenWidth,
    height: 250,
    marginLeft: 20,
    
  },
  discoveryWrap: {
    width: screenWidth * 0.6,
    height: 250,
    position: 'relative',
    marginRight: 60,
  },
  discoveryItem: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#000',
    opacity: 0.5,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  discoveryText: {
    color: '#ccc',
    fontSize: 13,
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  discoveryImage: {
    width: screenWidth * 0.6,
    height: 250,
    borderRadius: 10,
  },
  discoveryName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    left: 10,
    padding: 10,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },

  // noticeable
  noticeable: {
    width: 'auto',
    height: 'auto',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  noticeableImage: {
    width: screenWidth - 40,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },

  // recently
  recently: {
    width: 'auto',
    height: 'auto',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  titleWrap: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentlyWrap: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    marginTop: 10,
  },
  recentlyItem: {
    width: 100,
    height: 'auto',
    marginRight: 20,
  },
  recentlyImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  recentlyName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },

  // suggest
  suggest: {
    width: 'auto',
    height: 'auto',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  suggestText: {
    color: '#999',
    fontSize: 12,
  },
  suggestWrap: {
    width: 'auto',
    height: 'auto',
    marginTop: 10,
  },
  suggestItem: {
    width: 250,
    height: 'auto',
    marginRight: 30,
    marginTop: 10,
    flexDirection: 'row',
  },
  suggestImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  suggestName: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
  },
  suggestSinger: {
    color: '#999',
    fontSize: 12,
  },

  // category
  category: {
    width: 'auto',
    height: 'auto',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  categoryWrap: {
    width: 'auto',
    height: 'auto',
    marginTop: 10,
  },
  categoryItem: {
    width: 150,
    height: 70,
    marginRight: 20,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    justifyContent: 'flex-end',
  },
  categoryText: {
    color: '#fff',
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
  },

  // new release
  filter: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    marginTop: 20,
  },
  filterItem: {
    width: 'auto',
    height: 30,
    backgroundColor: '#000',
    borderRadius: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  filterText: {
    color: '#fff',
    fontSize: 17,
    paddingHorizontal: 10,
  },
  filterActive: {
    backgroundColor: '#fa00ff',
  },
});