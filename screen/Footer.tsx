import React from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity,} from 'react-native';


const Footer = ({ navigation, selectedIconIndex, setSelectedIconIndex }) => {

 return (
      <>
  <View style={styles.line } />
  <View style={styles.container}>
    <TouchableOpacity onPress={() => {navigation.navigate('Page_10000'); setSelectedIconIndex(0); }}>
        <Text style={[styles.text1, selectedIconIndex === 0 ? {color:'#000000'} : {color:'#6F6F6F'}]}>홈</Text>
    </TouchableOpacity>
    {/*
    <TouchableOpacity onPress={() => {navigation.navigate('Page_20000'); setSelectedIconIndex(1); }}>
        <Text style={[styles.text1, selectedIconIndex === 1 ? {color:'#000000'} : {color:'#6F6F6F'}]}>도어</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {navigation.navigate('Page_30000'); setSelectedIconIndex(2); }}>
        <Text style={[styles.text1, selectedIconIndex === 2 ? {color:'#000000'} : {color:'#6F6F6F'}]}>접근제어</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {navigation.navigate('Page_40000'); setSelectedIconIndex(3); }}>
        <Text style={[styles.text1, selectedIconIndex === 3 ? {color:'#000000'} : {color:'#6F6F6F'}]}>알람</Text>
    </TouchableOpacity>
    */}
    <TouchableOpacity onPress={() => {navigation.navigate('Page_50000'); setSelectedIconIndex(4); }}>
        <Text style={[styles.text1, selectedIconIndex === 4 ? {color:'#000000'} : {color:'#6F6F6F'}]}>메세지</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {navigation.navigate('Page_60000'); setSelectedIconIndex(5); }}>
         <Text style={[styles.text1, selectedIconIndex === 5 ? {color:'#000000'} : {color:'#6F6F6F'}]}>MY</Text>
    </TouchableOpacity>
  </View>
    </>
        );
 };

const styles = StyleSheet.create({
container: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: 20, marginBottom: 20, marginRight: 30, marginLeft: 30
},
line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ACACAC',
},
text1: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 18,
},
});

export default Footer;