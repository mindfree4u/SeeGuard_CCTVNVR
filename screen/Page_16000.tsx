import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Page_16000 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
        <View style={styles.root}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.vector}>
            <Image source={require('../images/arrow.png')} style={{width: 16.17, height: 19.8}}/>
        </TouchableOpacity>
            <Text style={styles.라이브뷰}>라이브 뷰</Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
root: {
    position: 'relative', width: '100%', height: 800,
    background: '#FFFFFF',
    alignItems: 'center'
},
vector: {
    position: 'absolute', left: 20, top: 21.1,
},
img1: {
    position: 'absolute', top: 219.5,
},
라이브뷰: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 19,
    color: '#000000',
},
});

export default Page_16000;