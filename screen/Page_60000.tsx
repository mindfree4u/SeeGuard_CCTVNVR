import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import Footer from './Footer';


const Page_60000 = ({ navigation }) => {
const [selectedIconIndex, setSelectedIconIndex] = useState(5);
const [addVisible, setAddVisible] = useState(false);                     //추가방식 선택창 보이기, 감추기

useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          setSelectedIconIndex(5);
        });

        return unsubscribe;
      }, [navigation]);

  return (
    <>
    <ScrollView>
        <View style={styles.root}>
            <Text style={styles.My}>MY</Text>

            <Modal visible={addVisible} animationType="slide">
                <ScrollView>
                    <View style={styles.modalContainer}>
                        <View style={{width: '75%',  maxWidth: 600}}>
                          <Text style={[styles.text1, {textAlign:'left'}]}>{'\n'}원하시는 추가방식을 선택해주세요.
                           {'\n'}{'\n'}{'\n'}{'\n'}</Text>
                          <TouchableOpacity onPress={() => setAddVisible(false)} style={styles.Close}>
                            <Image source={require('../images/Close.png')} style={{width: 14, height: 14}}/>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.Rectangle3}
                                            onPress={() => setAddVisible(true)}>
                            <Text style={styles.text1}>QR코드로 스캔</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.Rectangle3}
                                             onPress={() => setAddVisible(true)}>
                            <Text style={styles.text1}>SN번호로 추가</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.Rectangle3}
                                            onPress={() => setAddVisible(true)}>
                            <Text style={styles.text1}>IP 또는 도메인으로 추가</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.Rectangle3}
                                            onPress={() => setAddVisible(true)}>
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
    position: 'relative', width: '100%',  height: 800,
},
My: {
    justifyContent: 'center', top: 21.1,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',
    color: '#000000',
},
container1: {
   position: 'absolute', left:'60%', top: 21.1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
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

export default Page_60000;
