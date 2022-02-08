import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
// stack navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import LoginScreen from '../../screens/authModule/loginScreen';
import SplashScreen from '../../screens/authModule/splashScreen';
import RegisterScreen from '../../screens/authModule/registerScreen';
const AuthStack = createNativeStackNavigator();

export const AuthStackScreens = ({navigation, route}) => {
  return (
    <AuthStack.Navigator>
      {/* <AuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      /> */}
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
