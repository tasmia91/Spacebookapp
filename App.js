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

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
      <View style={globalStyles.container}>
        {splash ? <SplashScreen /> : <MyTabs />}
      </View>
    </NavigationContainer>
  );
};

export default App;
