import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert} from 'react-native';
import Footer from './Footer';

const Page_10000 = ({ navigation }) => {
const [selectedIconIndex, setSelectedIconIndex] = useState(0);
const [addVisible, setAddVisible] = useState(false);                     //추가방식 선택창 보이기, 감추기
const [favorites, setFavorites] = useState(false);                       //즐겨찾기 추가상태
const onImg = require('../images/star.png');
const offImg = require('../images/star2.png');

useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          setSelectedIconIndex(0);
        });
        return unsubscribe;
      }, [navigation]);

//즐겨찾기 별표 아이콘 클릭시 호출됨
const handleFavorites = () => {
    if(favorites)
        handleImagePress();
    else
        setFavorites(!favorites);
    };

const renderImage = () => {
    var imgSource = favorites ?  onImg : offImg ;
    return <Image source={imgSource} style={{width: 30, height:30}}/>;
    };

const handleImagePress = () => {
       Alert.alert(
                  '즐겨찾기 채널에서 삭제하시겠습니까?',
                  '',
                  [
                    { text: '취소', onPress: () => setFavorites(true) },
                    { text: '삭제', onPress: () => setFavorites(!favorites) },
                  ]
                );
     };

const handleScanQRCode = () => {
    setAddVisible(false);                              // "QR코드로 스캔" 버튼 누르면 모달 닫기
    navigation.navigate('Page_11000');
  };

const handleSN = () => {
    setAddVisible(false);
    navigation.navigate('Page_12000');
  };

const handleIpdomain = () => {
    setAddVisible(false);
    navigation.navigate('Page_13000', { port: '37777' });
  };

const  handleOnline = () => {
    setAddVisible(false);
   navigation.navigate('Page_13300');
  };

  return (
    <>
    <ScrollView>
        <View style={styles.root}>
            <Text style={styles.home}>HOME</Text>
            <TouchableOpacity style={[styles.Rectangle1, {position: 'absolute', right:'12%', top:21.1}]} onPress={() => setAddVisible(true)}>
                <Text style={styles.text1}>추가</Text>
            </TouchableOpacity>
            <View style={styles.container2}>
                <View style={styles.Rectangle2}>
                    <Text style={styles.text1}>라이브 모아보기</Text>
                </View>
                <View style={styles.Rectangle2}>
                    <Text style={styles.text1}>녹화영상 모아보기</Text>
                </View>
            </View>
            <View style={[styles.container2, {top: 160}]}>
                <TouchableOpacity onPress={ handleFavorites }>
                    {renderImage()}
                </TouchableOpacity>
                <Text style={styles.text1}>  채널명01             </Text>
                <TouchableOpacity style={styles.Rectangle1} onPress={()=> navigation.navigate('Page_15200')}>
                    <Text style={styles.text1}>공유</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.Rectangle1, {marginLeft: 3}]}
                                  onPress={()=> navigation.navigate('Page_15000')}>
                    <Text style={styles.text1}>설정</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.Rectangle1, { position: 'absolute',  left:'23%', top:250 }]}
                                                onPress={()=> navigation.navigate('Page_16000')}>
                <Text style={styles.text1}>라이브</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Rectangle1, {position: 'absolute',  right:'23%',  top:250}]}
                                                onPress={()=> navigation.navigate('Page_17000')}>
                <Text style={styles.text1}>녹화영상</Text>
            </TouchableOpacity>

            <Modal visible={addVisible} animationType="slide">
                <ScrollView>
                    <View style={styles.modalContainer}>
                        <View style={{width: '75%',  maxWidth: 600}}>
                          <Text style={[styles.text1, {textAlign:'left'}]}>{'\n'}원하시는 추가방식을 선택해주세요.
                           {'\n'}{'\n'}{'\n'}{'\n'}</Text>
                          <TouchableOpacity onPress={() => setAddVisible(false)} style={styles.Close}>
                            <Image source={require('../images/Close.png')} style={{width: 14, height: 14}}/>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.Rectangle3} onPress={handleScanQRCode} >
                            <Text style={styles.text1}>QR코드로 스캔</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.Rectangle3}  onPress={handleSN}>
                            <Text style={styles.text1}>SN번호로 추가</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.Rectangle3}
                                            onPress={handleIpdomain}>
                            <Text style={styles.text1}>IP 또는 도메인으로 추가</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.Rectangle3}
                                            onPress={handleOnline}>
                            <Text style={styles.text1}>온라인검색으로 추가</Text>
                          </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Modal>


        </View>
    </ScrollView>
    <Footer navigation={navigation} selectedIconIndex={selectedIconIndex} setSelectedIconIndex={setSelectedIconIndex} />
    </>
  );
};

const styles = StyleSheet.create({
root: {
    position: 'relative',width: '100%', height: 800,
    alignItems: 'center'
},
home: {
    position: 'absolute', left: '11.11%', top: 21.1,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',
    color: '#000000',
},
Rectangle1:{
    width: 60,
    borderWidth: 1,
    borderColor: '#ACACAC',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    marginLeft: 10
},
text1: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
    color: '#4D4D4D',
},
container2: {
   position: 'absolute', top: 90,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
},
Rectangle2:{
    width: 150, height: 30,
    borderWidth: 1,
    borderColor: '#ACACAC',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    marginLeft: 10
},
Component1: {
    position: 'absolute',left: '11.11%', right: '11.11%', top: 489, height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B162B',
    borderRadius: 5,
},
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
Close: {
    position: 'absolute', marginRight: -20, right:23, top: 24, color: '#FFFFFF',
},
Rectangle3:{
    width: 170, height:45,
    borderWidth: 1,
    borderColor: '#ACACAC',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 25,
},
});

export default Page_10000;
