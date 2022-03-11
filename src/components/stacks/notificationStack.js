import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from '../../screens/authModule/notificationsScreen';

const NotificationStack = createNativeStackNavigator();

export const NotificationStackScreen = () => {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="notificationsScreen"
        component={NotificationsScreen}
        options={{headerShown: false}}
      />
    </NotificationStack.Navigator>
  );
};
