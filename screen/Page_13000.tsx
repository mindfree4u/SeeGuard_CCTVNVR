import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { deviceDataContext } from '../App';

const Page_13000 = ({ navigation, route }) => {
  const { deviceData, setDeviceData } = useContext(deviceDataContext);
  const { port } = route.params;

  return (
    <ScrollView>
            <View style={styles.root}>
            <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.vector}>
                 <Image source={require('../images/arrow.png')} style={{width: 16.17, height: 19.8}}/>
            </TouchableOpacity>
            <Text style={styles.장치추가}>장치추가</Text>
            <Text style={styles.text1}>카메라</Text>
            <View style={styles.cameracontainer}>
            <TouchableOpacity  style={styles.Component1} onPress={() => navigation.navigate('Page_13100', { port } ) }>
                <Text style={styles.카메라}>네트워크{'\n'}카메라</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.Component1} onPress={() => navigation.navigate('Page_13100', { port } ) }>
                <Text style={styles.카메라}>아날로그{'\n'}카메라</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.Component1} onPress={() => navigation.navigate('Page_13100', { port } ) }>
                <Text style={styles.카메라}>PTZ</Text>
            </TouchableOpacity>
            </View>
            <Text style={[styles.text1, {top:350}]}>저장장치</Text>
            <View style={[styles.cameracontainer, {top:370}]}>
            <TouchableOpacity  style={styles.Component1} onPress={() => navigation.navigate('Page_13100', { port } ) }>
                <Text style={styles.카메라}>NVR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Component1} onPress={() => navigation.navigate('Page_13100', { port } ) }>
                <Text style={styles.카메라}>DVR</Text>
            </TouchableOpacity>
            </View>
            <Text style={[styles.text1, {top:550}]}>특수카메라</Text>
            <View style={[styles.cameracontainer, {top:570}]}>
            <TouchableOpacity  style={styles.Component1} >
                <Text style={styles.카메라}>멀티캠</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.Component1} >
                <Text style={styles.카메라}>도어캠</Text>
            </TouchableOpacity>
            </View>
            </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
root: {
    position: 'relative', width: '100%', height: 800,
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
    position: 'absolute', left:60, top:100,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
    color: '#4D4D4D',
},
cameracontainer: {
    position: 'absolute', left: 30, top: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
Component1: {
    width:80, height: 80, margin:20,
    justifyContent: 'center',
    backgroundColor: '#E0DDBA',
    borderRadius: 5,
},
카메라: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 17.38,
    textAlign: 'center',
    color: '#000000',
},
});

export default Page_13000;
