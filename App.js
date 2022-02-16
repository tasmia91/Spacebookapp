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
