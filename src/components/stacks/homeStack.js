import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/authModule/loginScreen';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = ({navigation, route}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
