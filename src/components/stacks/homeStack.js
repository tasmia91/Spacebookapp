import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/authModule/homeScreen';
import PostDetailsScreen from '../../screens/authModule/postDetailsScreen';
import DeletePostScreen from '../../screens/authModule/deletePostScreen';

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
      <HomeStack.Screen
        name="DeletePostScreen"
        component={DeletePostScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
