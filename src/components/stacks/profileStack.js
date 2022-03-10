import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/authModule/profileScreen';
import EditScreen from '../../screens/authModule/editScreen';
import LogoutScreen from '../../screens/authModule/logoutScreen';
import FriendsScreen from '../../screens/authModule/friendsScreen';
import FriendsPosts from '../../screens/authModule/friendsPosts';
import CameraScreen from '../../screens/authModule/cameraScreen';
import DraftScreen from '../../screens/authModule/draftScreen';
import DraftDetailsScreen from '../../screens/authModule/draftDetailsScreen';
// import DeleteDraftScreen from '../../screens/authModule/deleteDraftScreen';

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
      <ProfileStack.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="FriendsPosts"
        component={FriendsPosts}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="DraftScreen"
        component={DraftScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="DraftDetailsScreen"
        component={DraftDetailsScreen}
        options={{headerShown: false}}
      />
      {/* <ProfileStack.Screen
        name="DeleteDraftScreen"
        component={DeleteDraftScreen}
        options={{headerShown: false}}
      /> */}
    </ProfileStack.Navigator>
  );
};
