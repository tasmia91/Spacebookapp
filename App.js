import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import globalStyles from './src/styles/globalStyles';
import LoginScreen from './src/screens/authModule/loginScreen';
import {AuthStackScreens} from './src/components/stacks/authStack';
import SplashScreen from './src/screens/authModule/splashScreen';
import MyTabs from './src/components/bottomTab/bottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Context = React.createContext();

const App = () => {
  const [splash, setSplash] = useState(true);
  const [isUser, setUser] = useState(false);

  useEffect(() => {
    settingLocalStorage();
    getToken();
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setUser(true);
    }
  };

  const settingLocalStorage = async () => {
    let storage = await AsyncStorage.getItem('localStorage');
    storage = JSON.parse(storage);
    console.log(storage, 'app.js');
    if (storage.length == 0) {
      const list = [];
      await AsyncStorage.setItem('localStorage', JSON.stringify(list));
    }
  };

  // AsyncStorage.removeItem('localStorage');

  return (
    <NavigationContainer>
      <Context.Provider value={{isUser, setUser}}>
        <View style={globalStyles.container}>
          {splash ? (
            <SplashScreen />
          ) : (
            <View style={{flex: 1}}>
              {isUser ? <MyTabs /> : <AuthStackScreens />}
            </View>
          )}
        </View>
      </Context.Provider>
    </NavigationContainer>
  );
};

export default App;
