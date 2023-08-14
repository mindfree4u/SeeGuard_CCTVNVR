import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {deviceDataContext } from '../App';

const Page_12000 = ({ navigation}) => {
  const [serial, setSerial] = useState('');
  const [code, setCode] = useState('');
  const { deviceData, setDeviceData } = useContext(deviceDataContext);

  const handleDeviceData = () => {
      setDeviceData(serial);
      if (serial.length === 9   //SN번호 검증 추가필요
      ) {
          navigation.navigate('Page_13000');
        } else {
          navigation.navigate('Page_13200');
        }
    };

  return (
    <ScrollView>
            <View style={styles.root}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.vector}>
                <Image source={require('../images/arrow.png')} style={{width: 16.17, height: 19.8}}/>
            </TouchableOpacity>
            <Text style={styles.장치추가}>장치추가</Text>
            <Text style={styles.text1}>디바이스의 시리얼번호와{'\n'}안전코드를 입력하세요.</Text>
            <Text style={styles.text2 }>시리얼번호</Text>
            <View style={styles.square} />
            <TextInput  value={serial} style={[styles.textinput, {top: 378 }]}
                        onChangeText={setSerial} placeholder="...9자리" maxLength={9}
                        placeholderTextColor="#D9D9D9" />

            <Text style={[styles.text2,{top: 435} ]}>안전 코드</Text>
            <View style={[styles.square,{top:435}]} />
            <TextInput  value={code} style={[styles.textinput, {top: 458 }]}
                        onChangeText={setCode} placeholder="...9자리" maxLength={9}
                        placeholderTextColor="#D9D9D9" />
            <TouchableOpacity  onPress={serial === '' || code === '' ? () => { null } :
                                         handleDeviceData } style={styles.Component1} >
                <Text  style={[styles.다음, {color: (serial === '' || code === '') ? '#FFFFFF' :'#FFFFFF' }]}>
                      다음</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
root: {
    position: 'relative', width: '100%', height: 800,
    justifyContent: 'center',
    alignItems: 'center'
},
vector: {
    position: 'absolute', left: 20, top: 21.1,
},
장치추가: {
    position: 'absolute', left: '41.94%', top: '2.38%',
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',
    color: '#000000',
},
text1: {
    position: 'absolute', left: 40, top: 105,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 21,
    color: '#4D4D4D',
},
text2: {
    position: 'absolute', left: '11.11%', top: 355,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 14,
    color: '#4D4D4D',
},
square:{
    position: 'absolute', left: '8%', right: '40%', top: 350,
    backgroundColor: 'transparent',                              // 배경색을 투명하게 설정
    padding: 35,                                                 // 내부 여백 설정
    borderWidth: 0.5,                                              // 테두리 두께 설정
    borderColor: '#000000',                                      // 테두리 색상 설정
},
img1: {
     position: 'absolute', width: '77.77%', top: 164,
     height: 167,
},
textinput: {
    position: 'absolute', left: '11.11%', top: 266,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
},
line:{
    position: 'absolute', left: '11.11%', right: '11.39%', top: 410,

    borderBottomWidth:1,
    borderBottomColor: '#ACACAC',
},
Component1: {
    position: 'absolute', left: '11.11%', right: '11.11%', top: 715,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 5,
},
다음: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    color: '#FFFFFF',
},
});

export default Page_12000;
