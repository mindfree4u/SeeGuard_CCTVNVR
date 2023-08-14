import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Page_15500 = ({ navigation }) => {

  return (
    <ScrollView>
        <View style={styles.root}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.vector}>
                <Image source={require('../images/arrow.png')} style={{width: 16.17, height: 19.8}}/>
            </TouchableOpacity>
            <Text style={styles.장치공유}>장치공유</Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
root: {
    position: 'relative',width: '100%', height: 800,
    background: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
},
vector: {
    position: 'absolute', left: 20, top: 21.1, color: '#FFFFFF',
},
장치공유: {
    position: 'absolute', top: 21.1,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',
    color: '#000000',
},
text1: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
    color: '#4D4D4D',
},
});

export default Page_15500;
