import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import {AuthenticationContext } from '../App';

const Intro_11111 = ({ navigation}) => {
    const [phone, setPhone] = useState('');
    const [certification, setCertification] = useState('');                            //인증번호 저장
    const { Authentication, setAuthentication } = useContext(AuthenticationContext);   //휴대폰으로 본인인증 상태저장
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);                    //인증버튼 활성화용
    const [isButtonDisabled2, setIsButtonDisabled2] = useState(true);                  //확인버튼 활성화용

    useEffect(() => {
        if (phone.length > 0) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [phone]);

    useEffect(() => {
        if (certification.length > 0) {
            setIsButtonDisabled2(false);
        } else {
            setIsButtonDisabled2(true);
        }
    }, [certification]);

    //인증번호 전송 클릭시
    const [state2, setState2] = useState('false');
    const RequestClick = () => {
        setState2('Request');
    };
    //인증번호 확인 클릭시
    const [state3, setState3] = useState('');
    const CheckClick = () => {
        //인증확인 절차 구현
        setState3('Check');
        setAuthentication(true);
    };

  return (
    <ScrollView>
            <View style={styles.root}>
            <Text style={styles.휴대폰인증}>본인 인증</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Intro_11000')} style={styles.Close}>
                <Image source={require('../images/Close.png')} style={{width: 14, height: 14}}/>
            </TouchableOpacity>
            <Text style={styles.text1}>사용중인 휴대폰 번호를 {'\n'}입력해 주세요.</Text>

            <Text style={[styles.text2,{left:'11%', top:200} ]}>휴대폰번호</Text>
            <View style={[styles.square, { right: '40%', top:200}]} />
            <TextInput  value={phone} style={styles.textinput}
                        onChangeText={setPhone} placeholder="숫자만 입력"  maxLength={11}
                        placeholderTextColor="#D9D9D9" />
            <TouchableOpacity style={styles.Rectangle8} onPress={RequestClick} disabled={isButtonDisabled}>
                <Text style={[styles.text3,{color: '#FFFFFF' } ]}>{state2 === 'Request' ? '재전송' : '인증번호 전송'}</Text>
            </TouchableOpacity>

            {state2 === 'Request' && (
              <>

                <Text style={[styles.text2,{left:'11%', top: 300} ]}>인증번호</Text>
                <View style={[styles.square, {top:300, right: '40%'}]} />
                <TextInput  style={[styles.textinput, {top: 320 }]} value={certification}
                                         onChangeText={setCertification} placeholder="4자리" maxLength={4}
                                         placeholderTextColor="#D9D9D9" />
                <TouchableOpacity style={styles.Rectangle9} onPress={CheckClick}  disabled={isButtonDisabled2}>
                    <Text style={[styles.text3,{color: '#FFFFFF' } ]}>확인</Text>
                </TouchableOpacity>
                { state3==='Check'? (
                              <Text style={[styles.text5, { top: 370 }]}>*확인되었습니다.</Text>
                            ) : null}
              </>
            )}

            <TouchableOpacity  onPress={state3 === 'Check' ? () => {
                                   navigation.navigate('Intro_11000', { phone: phone })
                                } : null} style={styles.Component3}  disabled={state3 !== 'Check'}>
            <Text  style={[styles.text3, {color: (state3==='Check') ? '#FFFFFF' : '#FFFFFF'}]}>
             다음</Text>
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
    alignItems: 'center',
  },
휴대폰인증: {
    position: 'absolute', left: '39.166%', top: 19,

    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',

    color: '#000000',
},
Close: {
    position: 'absolute', marginRight: -20, right:27, top: 24, color: '#FFFFFF',
},
text1: {
    position: 'absolute', left:'11.11%', top: 105,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23.17,
    color: '#4D4D4D',
},
checkbox: {
    borderWidth: 1.5, borderColor: '#4D4D4D', borderStyle: 'solid',
},
text2: {
    position: 'absolute',
    fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 700, fontSize: 12,
    lineHeight: 17,
    color: '#4D4D4D',
},
Component4: {
    position: 'absolute', left: '11.11%', right: '11.11%', top: 473, height: 44,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
},
자세히보기: {
    marginLeft: 'auto',
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 14,
    textAlign: 'center',
    color: '#D9D9D9',
},
textinput: {
    position: 'absolute', left: 40, top: 220, width: 200,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#4D4D4D'
},
Component3: {
    position: 'absolute', left: '12%', right: '12%', top: 715, height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 5,
},
text3: {
    fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 400, fontSize: 12, lineHeight: 17,
    textAlign: 'center',
    color: '#0075FF',
},
square:{
    position: 'absolute', left: '8%', right: '10%', top: 215,
    backgroundColor: 'transparent',                              // 배경색을 투명하게 설정
    padding: 30,                                                 // 내부 여백 설정
    borderWidth: 0.5,                                              // 테두리 두께 설정
    borderColor: '#000000',                                      // 테두리 색상 설정
},
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
modal: {
    width: '88%',  maxWidth: 600,
},
닫기:{
    width: 106, height:44,
    borderWidth: 1,
    borderColor: '#ACACAC',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
text4: {
    fontFamily: 'Noto Sans KR', fontStyle: 'normal', fontWeight: 400, fontSize: 10,
    lineHeight: 14.48,
    color: '#4D4D4D',
},
Rectangle4: {
    position: 'absolute', right: '13%', top: 223, width: 42, height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#EBF5FF',
},
Rectangle5: {
    position: 'absolute', right: '27%', top: 223, width: 42, height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#EBF5FF',
},
Rectangle7: {
    position: 'absolute', right: '27%', top: 293, width: 42, height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#EBF5FF',
},
Rectangle6: {
    position: 'absolute', right: '13%', top: 293, width: 42, height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#EBF5FF',
},
Rectangle8:{
    position: 'absolute', right: '12%', top: 200, width: 92, height: 55,
    borderWidth: 1,
    borderColor: '#ACACAC',
    backgroundColor: '#000000',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
Rectangle9:{
    position: 'absolute', right: '12%', top: 300, width: 92, height: 55,
    borderWidth: 1,
    borderColor: '#ACACAC',
    backgroundColor: '#000000',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
text5: {
    position: 'absolute', left: '8%', top: 440,
    fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: 10,
    lineHeight: 12.1,
    textAlign: 'left',
    color: '#008B27',
},
});
export default Intro_11111;

