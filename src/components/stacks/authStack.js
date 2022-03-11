import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/authModule/loginScreen';
import RegisterScreen from '../../screens/authModule/registerScreen';

const AuthStack = createNativeStackNavigator();

export const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator>
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
