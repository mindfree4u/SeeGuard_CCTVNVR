import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ScrollView, LogBox } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreLogs(['new NativeEventEmitter']);                                    // Ignore log notification by message
LogBox.ignoreAllLogs();                                                           //Ignore all log notifications

const Intro_10000 = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberEmail, setRememberEmail] = useState(false);

  // 로그인 버튼 클릭시 호출됨
  const handleLogin = () => {
       // Check if email and password are valid
       // if (email === 'rhdy75@gmail.com' && password === '1234') {
          // If valid, log the user in
          navigation.navigate('Page_10000');
          console.log('login successfully');
      //  } else {
          // If invalid, show an error message
      //    Alert.alert('로그인 실패', '이메일 또는 비밀번호가 올바르지 않습니다.', [{ text: '확인' }]);
      //  }
  };

  //이메일 저장용 체크박스 터치시 호출됨
  const handleRememberEmail = () => {
      setRememberEmail(!rememberEmail);
   };

  // 화면 실행 시 저장된 이메일 불러오기
  useEffect(() => {
    const getEmail = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('savedEmail');
        if (savedEmail !== null) {
          setEmail(savedEmail);
          setRememberEmail(true);                                         // 이메일 저장 상태를 true로 설정
        }
      } catch (error) {
        console.log(error);
      }
    };

    getEmail();
  }, []);

  // 이메일 저장 상태 변경 시 이메일 저장/삭제
  useEffect(() => {
    const saveEmail = async () => {
      try {
        if (rememberEmail) {
          await AsyncStorage.setItem('savedEmail', email);
        } else {
          await AsyncStorage.removeItem('savedEmail');
        }
      } catch (error) {
        console.log(error);
      }
    };

    saveEmail();
  }, [rememberEmail, email]);

const handlePassword = (text) => {
      setPassword(text);
      validatePassword(text);
    };

const validatePassword = (password) => {
      // 비밀번호 유효성 검사
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const isValid = passwordRegex.test(password);
    };

  return (
  <View style={{flex: 1, }} >
  <ScrollView>
    <View style={styles.root}>
        <Text style={styles.login}>Log in</Text>
        <Text style={styles.email}>이메일 주소</Text>
        <View style={styles.square}/>
        <TextInput style={styles.textinput} value={email} onChangeText={setEmail}
                               placeholder="abcd@abcd.com" placeholderTextColor="#D9D9D9" />
        <Text style={styles.password}>비밀번호</Text>
        <View style={[styles.square,{ top: 310}]} />
        <TextInput style={[styles.textinput, {top:340}]} value={password}
                   onChangeText={handlePassword} secureTextEntry={true}
                   placeholder="영문,숫자 포함 8자리 이상" placeholderTextColor="#D9D9D9"/>
        <CheckBox style={styles.checkbox}
                        tintColors={{ true: '#4D4D4D' }}
                        value={rememberEmail}
                        onValueChange={handleRememberEmail}
                     />
        <Text style={styles.이메일저장}>이메일 저장</Text>
        <TouchableOpacity style={styles.Component1} onPress={handleLogin}>
            <Text style={styles.로그인}>로그인 </Text>
        </TouchableOpacity>
        <View style={styles.recovery1} >
            <TouchableOpacity onPress={() => navigation.navigate('Intro_12000')}>
                <Text style={ styles.아이디찾기 }>아이디 찾기</Text>
            </TouchableOpacity>
            <Text>  |  </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Intro_13000')}>
                <Text style={ styles.비밀번호찾기 }>비밀번호 찾기</Text>
            </TouchableOpacity>
        </View>
        <Text  style={styles.text1}>아직 회원이 아니신가요?</Text>

        <TouchableOpacity style={[styles.Component1, {top:717}]} onPress={() => navigation.navigate('Intro_11000')}>
            <Text style={styles.로그인}>회원 가입</Text>
        </TouchableOpacity>

    </View>
  </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
root: {
    flex: 1, position: 'relative', width: '100%', height:800,   //800
  },
login: {
    position: 'absolute', left: 19, top: 111,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 35,
    color: '#943deb',
 },
email: {
    position: 'absolute', left: '14%', top: 202,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    color: '#4D4D4D',
},
textinput: {
    position: 'absolute', left: '14%', top: 222, width: '73%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#4D4D4D',
},
square:{
    position: 'absolute', left: '12%', right: '12%', top: 190,
    backgroundColor: 'transparent',                                // 배경색을 투명하게 설정
    padding: 35,
    borderWidth: 0.5,                                              // 테두리 두께 설정
    borderColor: '#000000',                                        // 테두리 색상 설정
},
password:{
    position: 'absolute', left: '14%', top: 315,

    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
    color: '#4D4D4D',
},
checkbox:{
    position: 'absolute', left: 42, top: 393,
    color: '#4D4D4D',
},
이메일저장:{
    position: 'absolute', left: 70, top: 400,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 14,
    color: '#4D4D4D',
},
Component1: {
    position: 'absolute', left: '11.11%', right: '11.11%', top: 444, height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 5,
},
로그인: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    color: '#FFFFFF',
},
recovery1: {
    position: 'absolute', flexDirection: 'row', left: '31%', top: 499,
},
아이디찾기: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    color: '#4D4D4D',
},
비밀번호찾기: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    color: '#4D4D4D',
},
text1:{
    position: 'absolute', left: 50, top: 675,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    color: '#4D4D4D',
},
Component2: {
    position: 'absolute', left: '11.11%', right: '11.11%', top: 717,  height: 45.13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6FA',
    borderRadius: 5,
},
});

export default Intro_10000;