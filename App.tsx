import React, { useEffect, useState,  createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,
  useColorScheme, View,} from 'react-native';
import {
  Colors,DebugInstructions,Header,LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro_10000 from './screen/Intro_10000';
import Intro_11000 from './screen/Intro_11000';
import Intro_11100 from './screen/Intro_11100';
import Intro_11200 from './screen/Intro_11200';
import Intro_12000 from './screen/Intro_12000';
import Intro_12100 from './screen/Intro_12100';
import Intro_13000 from './screen/Intro_13000';
import Intro_13100 from './screen/Intro_13100';
import Page_10000 from './screen/Page_10000';
import Page_11000 from './screen/Page_11000';
import Page_12000 from './screen/Page_12000';
import Page_13000 from './screen/Page_13000';
import Page_13100 from './screen/Page_13100';
import Page_13200 from './screen/Page_13200';
import Page_13300 from './screen/Page_13300';
import Page_14110 from './screen/Page_14110';
import Page_15000 from './screen/Page_15000';
import Page_15200 from './screen/Page_15200';
import Page_16000 from './screen/Page_16000';
import Page_17000 from './screen/Page_17000';
import Page_18000 from './screen/Page_18000';
import Page_42000 from './screen/Page_42000';
import Page_50000 from './screen/Page_50000';
import Page_60000 from './screen/Page_60000';

export const BluetoothContext = createContext();
export const deviceDataContext = createContext();
export const CradleContext = createContext();
export const WiFiContext = createContext();
export const AuthenticationContext = createContext();

const Stack = createStackNavigator();


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {


  const isDarkMode = useColorScheme() === 'dark';
  const [bluetoothStatus, setBluetoothStatus] = useState('');
  const [deviceData, setDeviceData] = useState('');
  const [cradleStatus, setCradleStatus] = useState(true);                        //도어캠 모드의 cradle 삽입상태
  const [wifiName, setWifiName] = useState('');
  const [Authentication, setAuthentication] = useState(false);                   //휴대폰으로 본인인증 상태

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   <BluetoothContext.Provider value={{ bluetoothStatus, setBluetoothStatus }}>
   <deviceDataContext.Provider value={{ deviceData, setDeviceData }}>
   <CradleContext.Provider value={{ cradleStatus, setCradleStatus }}>
   <WiFiContext.Provider value={{ wifiName, setWifiName }}>
   <AuthenticationContext.Provider value={{ Authentication, setAuthentication }}>
    <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Intro_10000" component={Intro_10000} options={{ headerShown: false }}/>
            <Stack.Screen name="Intro_11000" component={Intro_11000} options={{ headerShown: false }}/>
            <Stack.Screen name="Intro_11100" component={Intro_11100} options={{ headerShown: false }}/>
            <Stack.Screen name="Intro_11200" component={Intro_11200} options={{ headerShown: false }}/>
            <Stack.Screen name="Intro_12000" component={ Intro_12000} options={{ headerShown: false }}/>
            <Stack.Screen name="Intro_12100" component={ Intro_12100} options={{ headerShown: false }}/>
            <Stack.Screen name="Intro_13000" component={ Intro_13000} options={{ headerShown: false }}/>
            <Stack.Screen name="Intro_13100" component={ Intro_13100} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_10000" component={Page_10000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_11000" component={Page_11000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_12000" component={Page_12000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_13100" component={Page_13100} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_13200" component={Page_13200} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_13300" component={Page_13300} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_13000" component={Page_13000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_14110" component={Page_14110} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_15000" component={Page_15000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_15200" component={Page_15200} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_16000" component={Page_16000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_17000" component={Page_17000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_18000" component={Page_18000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_42000" component={Page_42000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_50000" component={Page_50000} options={{ headerShown: false }}/>
            <Stack.Screen name="Page_60000" component={Page_60000} options={{ headerShown: false }}/>
         </Stack.Navigator>
    </NavigationContainer>
   </AuthenticationContext.Provider>
   </WiFiContext.Provider>
   </CradleContext.Provider>
   </deviceDataContext.Provider>
   </BluetoothContext.Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
});

export default App;
