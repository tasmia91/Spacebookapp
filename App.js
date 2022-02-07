import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import globalStyles from './src/styles/globalStyles';
import LoginScreen from './src/screens/authModule/loginScreen';
import { AuthStackScreens } from './src/components/stacks/authStack';


const App = () => {
  return (
    <NavigationContainer>
      <View style={globalStyles.container}>
        <AuthStackScreens />
      </View>
    </NavigationContainer>
  );
};



export default App;
