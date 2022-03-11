import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from '../../screens/authModule/postScreen';

const PostStack = createNativeStackNavigator();

export const PostStackScreen = () => {
  return (
    <PostStack.Navigator>
      <PostStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{headerShown: false}}
      />
    </PostStack.Navigator>
  );
};
