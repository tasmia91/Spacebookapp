import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/authModule/profileScreen';
import EditScreen from '../../screens/authModule/editScreen';
import LogoutScreen from '../../screens/authModule/logoutScreen';

const ProfileStack = createNativeStackNavigator();

export const ProfileStackScreen = ({navigation, route}) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};
