import React, { useState, useContext } from 'react';
import { View, Text, NativeModules, TextInput, StyleSheet, ScrollView, Image, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { deviceDataContext } from '../App';

const Page_13100 = ({ navigation, route }) => {
  const { port  } = route.params;
  const { deviceData, setDeviceData } = useContext(deviceDataContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [portNum, setPortNum] = React.useState( '' );
  const [nickname, setNickname] = React.useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const placeholderTextColor = port ?  '#000000' : '#D9D9D9' ;                   // port 값을 받았는지 여부에 따라 placeholder 색상을 설정
  const { IPLoginModule } = NativeModules;

  // 추가 버튼 클릭시 호출됨
const handleAdd =() => {

const newAddress = '106.250.19.243';
const newPort = '37777';
const newUsername = 'admin';
const newPassword = '1q2w3e4r!@#$';
/*
  const newAddress = address;    // 사용자로부터 입력 받은 주소
  //const newPort = portNum !== '' ? parseInt(portNum) : 0;
  const newPort = '37777';
  const newUsername = email;   // 사용자로부터 입력 받은 아이디
  const newPassword = password;
*/

     IPLoginModule.login(newAddress, newPort, newUsername, newPassword)
         .then(loginResult => {
           if (loginResult) {
             Alert.alert('', '장치가 추가되었습니다.', [{ text: '확인' }]);
             navigation.navigate('Page_10000');
           }
         })
         .catch(error => {
           setErrorMessage('장치 추가에 실패하였습니다');
         });
      };

  return (
    <ScrollView>
            <View style={styles.root}>
            <TouchableOpacity onPress={()=> navigation.navigate('Page_10000')} style={styles.vector}>
                 <Image source={require('../images/arrow.png')} style={{width: 16.17, height: 19.8}}/>
            </TouchableOpacity>
            <Text style={styles.장치추가}>장치추가</Text>
            <Text style={styles.text1}>아래에 정보를 입력해주세요.</Text>

            <Text style={[styles.text2, {top:170}]}>주소</Text>
            <View style={[styles.square, {top:170}]}/>
            <TextInput style={[styles.textinput, {top:196}]} value={address} onChangeText={setAddress}
                       placeholder="주소" placeholderTextColor="#D9D9D9" />

            <Text style={[styles.text2, {top:278}]}>포트</Text>
            <View style={[styles.square, {top:280}]}/>
            <TextInput style={[styles.textinput, {top:306}]} value={portNum} onChangeText={setPortNum}
                       placeholder={port}  placeholderTextColor={placeholderTextColor} />

            <Text style={[styles.text2, {top:389}]}>장치 닉네임</Text>
            <View style={[styles.square, {top:390}]}/>
            <TextInput style={[styles.textinput, {top:414}]} value={nickname} onChangeText={setNickname}
                        placeholder="예시)남측CCTV 주차장" placeholderTextColor="#D9D9D9" />

            <Text style={styles.text2}>아이디</Text>
            <View style={styles.square}/>
            <TextInput style={styles.textinput} value={email} onChangeText={setEmail}
                                           placeholder="abcd@abcd.com" placeholderTextColor="#D9D9D9" />
            <Text style={[styles.text2,{top:615}]}>비밀번호</Text>
            <View style={[styles.square,{ top: 610}]} />
            <TextInput style={[styles.textinput, {top:636}]} value={password}
                       onChangeText={setPassword} secureTextEntry={true}
                       placeholder="영문,숫자 포함 8자리 이상" placeholderTextColor="#D9D9D9"/>
            <Text style={[styles.text3,{left: '12%', top:694}]}>{errorMessage}</Text>
            <TouchableOpacity style={[styles.Component1, {top:717}]} onPress={handleAdd}>
                <Text style={styles.추가}>추가</Text>
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
    position: 'absolute', top: 19,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',
    color: '#000000',
},
text1: {
    position: 'absolute', top: 100,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
    color: '#4D4D4D',
},
text2: {
    position: 'absolute', left: '14%', top: 502,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    color: '#4D4D4D',
},
textinput: {
    position: 'absolute', left: '14%', top: 522, width: '73%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#4D4D4D',
},
square:{
    position: 'absolute', left: '12%', right: '12%', top: 500,
    backgroundColor: 'transparent',                                // 배경색을 투명하게 설정
    padding: 35,
    borderWidth: 0.5,                                              // 테두리 두께 설정
    borderColor: '#000000',                                        // 테두리 색상 설정
},
text3: {
    position: 'absolute', left: '8%', top: 440,
    fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: 10,
    lineHeight: 12.1,
    textAlign: 'left',
    color: '#F00101',
},
Component1: {
    position: 'absolute', left: '11.11%', right: '11.11%', top: 444, height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 5,
},
추가: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    color: '#FFFFFF',
},
});

export default Page_13100;
