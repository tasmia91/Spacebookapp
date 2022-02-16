import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/authModule/homeScreen';
import PostDetailsScreen from '../../screens/authModule/postDetailsScreen';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = ({navigation, route}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="PostDetailsScreen"
        component={PostDetailsScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
