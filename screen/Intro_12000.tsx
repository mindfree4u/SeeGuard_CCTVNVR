import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useFocusEffect } from '@react-navigation/native';

const Intro_12000 = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [state, setState] = useState(false);
  const [buttonText, setButtonText] = useState("인증번호 받기");
  const [Authentication, setAuthentication] = useState(false);

  useFocusEffect(
      React.useCallback(() => {
        // 페이지가 포커스를 받을 때마다 상태 값을 초기화
        setPhone('');
        setState(false);
        setButtonText("인증번호 받기");
        setAuthentication(false);
      }, [])
    );

  //인증번호 받기 클릭시
  const RequestClick = () => {
    //if 휴대폰번호 체크
    setState('Request');
    setButtonText("재전송");
  };
  //인증번호 확인 클릭시
  const CheckClick = () => {
    //if 인증확인시 구현
    setState('Check');
  };

  return (
    <ScrollView>
        <View style={styles.root}>
            <TouchableOpacity onPress={() => navigation.navigate('Intro_10000')} style={styles.vector}>
                <Image source={require('../images/arrow.png')} style={{width: 16.17, height: 19.8}}/>
            </TouchableOpacity>
            <Text style={styles.아이디찾기}>아이디 찾기</Text>
            <Text style={styles.아이디} >아이디를 잊으셨나요?</Text>
            <Text style={styles.text1}>아이디를 찾기 위해서는{'\n'}휴대폰번호 인증이 필요합니다.</Text>
            <Text style={[styles.text2,{left:40, top: 200} ]}>휴대폰번호</Text>
            <View style={styles.square} />
            <TextInput  value={phone} style={[styles.textinput, {top: 215 }]}
                                  onChangeText={setPhone} placeholder="숫자만 입력" maxLength={11}
                                  placeholderTextColor="#D9D9D9" />
             <TouchableOpacity style={[styles.Rectangle5, {top:200}]} onPress={RequestClick}>
                <Text style={styles.text3}>{buttonText}</Text>
             </TouchableOpacity>
        {state === 'Request' && (
        <>
        <Text style={[styles.text2,{left:40, top: 270} ]}>인증번호</Text>
        <View style={styles.square} />
        <View style={[styles.square, {top:270}]} />
        <TextInput   style={[styles.textinput, {top: 285 }]} secureTextEntry={true}
                                      onChangeText={setAuthentication} placeholder="4자리"
                                       placeholderTextColor="#D9D9D9" />
        <TouchableOpacity style={[styles.Rectangle5, {top: 270}]} onPress={CheckClick}>
            <Text style={styles.text3}>확인</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={state === 'Check' ? () => {
                                                           navigation.navigate('Intro_12100')
                                                        } : null} style={styles.Component1} >
        <Text style={[styles.text3, {color: (state==='Check') ? '#FFFFFF' : '#FFFFFF'}]}>아이디찾기</Text>
        </TouchableOpacity>
        </>
        )}

       {state=== 'Check' && (
       <>
        <TouchableOpacity style={[styles.Rectangle5, {top:200}]} onPress={RequestClick}>
                            <Text style={ styles.text3 }>재전송</Text>
        </TouchableOpacity>
        <Text style={[styles.text2,{left:40, top: 270} ]}>인증번호</Text>
        <View style={[styles.square, {top:270}]} />
        <TextInput   style={[styles.textinput, {top: 285 }]} secureTextEntry={true} value={Authentication}
                               onChangeText={setAuthentication} placeholder="4자리"  maxLength={4}
                               placeholderTextColor="#D9D9D9" />
        <View style={[styles.Rectangle5, {top: 270}]}>
            <Text style={styles.text3}>확인</Text>
        </View>
        <Text style={styles.text4}>*확인되었습니다.</Text>
        <TouchableOpacity  onPress={state === 'Check' ? () => {
                                                                   navigation.navigate('Intro_12100')
                                                                } : null} style={styles.Component1} >
            <Text style={[styles.text3, {color: (state==='Check') ? '#FFFFFF' : '#FFFFFF'}]}>아이디찾기</Text>
        </TouchableOpacity>
       </>
       )}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
root: {
    position: 'relative', width: '100%', height: 800,
    alignItems: 'center',
},
vector: {
    position: 'absolute', left: 20, top: 21.1,
},
아이디찾기: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 19,
    color: '#000000',
},
아이디: {
    position: 'absolute', left: 40, top: 105,
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
    position: 'absolute', left: 40, top: 266,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#4D4D4D'
},
square:{
    position: 'absolute', left: '8%', right: '45%', top: 200,
    backgroundColor: 'transparent',                              // 배경색을 투명하게 설정
    padding: 27,                                                 // 내부 여백 설정
    borderWidth: 0.5,                                              // 테두리 두께 설정
    borderColor: '#000000',                                      // 테두리 색상 설정
},
Rectangle5:{
    position: 'absolute', right: '12%', bottom: 550, width: 92, height: 55,
    borderWidth: 1,
    borderColor: '#ACACAC',
    backgroundColor: '#000000',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
Component1: {
    position: 'absolute', left: '11.11%', right: '11.11%', top: 715, height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 5,
},
text3: {
    fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 400, fontSize: 12, lineHeight: 17.38,
    textAlign: 'center',
    color: '#FFFFFF',
},
text4: {
    position: 'absolute', left: 40, top: 328,
    fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 400, fontSize: 10, lineHeight: 12,
    textAlign: 'center',
    color: '#008B27',
},
});

export default Intro_12000;
