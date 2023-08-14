import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Intro_13000 = ({ navigation}) => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');

  //안내이메일 받기 클릭시
  const ReceiveClick = () => {
  //이메일 체크 로직 추가 후
    navigation.navigate('Intro_13100', { address: email });
  };

  return (
    <ScrollView>
        <View style={styles.root}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.vector}>
            <Image source={require('../images/arrow.png')} style={{width: 16.17, height: 19.8}}/>
        </TouchableOpacity>
        <Text style={styles.비밀번호찾기}>비밀번호 찾기</Text>
        <Text style={[styles.비밀번호찾기,{left: 40, top: 105, color: '#4D4D4D'}]}>비밀번호를 잊으셨나요?</Text>
        <Text style={styles.text1}>비밀번호를 재설정 할 수 있도록{'\n'}안내메일을 보내드리겠습니다.
                                   {'\n'}{'\n'}확인가능한 이메일 주소를 입력해주세요.</Text>

        <Text style={[styles.text2,{left:40, top: 229} ]}>이메일주소</Text>
        <View style={styles.square} />
        <TextInput  value={email} style={styles.textinput}
                                  onChangeText={setEmail} placeholder="abcd@abcd.com"
                                  placeholderTextColor="#D9D9D9" />
        <TouchableOpacity style={styles.Rectangle5} onPress={ReceiveClick}>
            <Text style={styles.text3}>안내이메일 받기</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
root: {
    position: 'relative', width: '100%', height: 800,
    background: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
},
vector: {
    position: 'absolute', left: 20, top: 21.1,
},
비밀번호찾기: {
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
    position: 'absolute', left: 40, top: 136,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 14,
    color: '#6F6F6F',
},
text2: {
    position: 'absolute', left: 70, top: 480,
    fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 700, fontSize: 12,
    lineHeight: 17,
    color: '#4D4D4D',
},
textinput: {
    position: 'absolute', left: 40, top: 240, width: '80%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#4D4D4D'
},
square:{
    position: 'absolute', left: 40, right: '8%', top: 230,
    backgroundColor: 'transparent',                              // 배경색을 투명하게 설정
    padding: 27,                                                 // 내부 여백 설정
    borderWidth: 0.5,                                              // 테두리 두께 설정
    borderColor: '#000000',                                      // 테두리 색상 설정
},
Rectangle5:{
    position: 'absolute', left: '11.11%', right: '11.11%', top: 715, height: 44,

    backgroundColor: '#000000',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
text3: {
    fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 400, fontSize: 12, lineHeight: 17,
    textAlign: 'center',
    color: '#FFFFFF',
},
});

export default Intro_13000;