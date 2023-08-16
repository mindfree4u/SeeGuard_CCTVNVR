import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, NativeModules,  DeviceEventEmitter } from 'react-native';
import { deviceDataContext } from '../App';

const Page_13300 = ({ navigation }) => {
  const { deviceData, setDeviceData } = useContext(deviceDataContext);
  const [deviceInfo, setDeviceInfo] = useState([]);
  const { DeviceSearchModule } = NativeModules;

  useEffect(() => {
      // Start device search when the component mounts
      DeviceSearchModule.startSearchDevices();
      // Listen for the DeviceSearchComplete event
      const deviceSearchListener = DeviceEventEmitter.addListener('DeviceSearchComplete', handleDeviceSearchComplete);

      // Stop device search and remove the event listener when the component unmounts
      return () => {
      console.log('DeviceSearch End');
      DeviceSearchModule.stopSearchDevices();
      deviceSearchListener.remove();
      };
    }, []);

    const handleDeviceSearchComplete = (device) => {
      setDeviceInfo(prevDeviceInfos => [...prevDeviceInfos, device]);
    };


  return (
    <ScrollView>
      <View style={styles.root}>
        <TouchableOpacity onPress={() => navigation.navigate('Page_13200')} style={styles.vector}>
          <Image source={require('../images/arrow.png')} style={{ width: 16.17, height: 19.8 }} />
        </TouchableOpacity>
        <Text style={styles.장치추가}>장치추가</Text>
        <Text style={styles.text1}>추가할 장치를 선택해 주세요.</Text>
        <Text style={styles.text1}>{'\n'}{deviceInfo}</Text>
        <View style={styles.container1}>
           {deviceInfo.map((info, index) => (
                      <Text key={index} style={styles.deviceText}>
                        SN: {info.sn}{'\n'}IP: {info.ip}
                      </Text>
                    ))}
        </View>
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
    position: 'absolute', top: 105,
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 21,
    color: '#4D4D4D',
},
container1:{
   position: 'absolute', left: '20%', top: 150,
},
deviceText: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    color: '#4D4D4D',
    marginTop: 35,
  },
});

export default Page_13300;
