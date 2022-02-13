import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../../screens/authModule/searchScreen';

const SearchStack = createNativeStackNavigator();

export const SearchStackScreen = ({navigation, route}) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
};
