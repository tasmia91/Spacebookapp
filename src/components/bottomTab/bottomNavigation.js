import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../../screens/authModule/loginScreen';
import RegisterScreen from '../../screens/authModule/registerScreen';
import SearchScreen from '../../screens/authModule/searchScreen';
import NotificationsScreen from '../../screens/authModule/notificationsScreen';
import {colors} from '../../colors/colors';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="homeScreen"
        component={LoginScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/homeBlue.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.blue}]}>
                    Home
                  </Text>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/homePink.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.pink}]}>
                    Home
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="post"
        component={RegisterScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/postBlue.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.blue}]}>
                    Posts
                  </Text>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/postPink.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.pink}]}>
                    Posts
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/searchBlue.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.blue}]}>
                    Search
                  </Text>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/searchPink.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.pink}]}>
                    Search
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/bellBlue.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.blue}]}>
                    Notifications
                  </Text>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/bellPink.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.pink}]}>
                    Notifications
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={RegisterScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/profileBlue.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.blue}]}>
                    Profile
                  </Text>
                </View>
              ) : (
                <View>
                  <View style={styles.iconCenter}>
                    <Image
                      source={require('../../images/icons/profilePink.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(2.5),
                        width: hp(2.5),
                      }}
                    />
                  </View>
                  <Text style={[styles.labelStyle, {color: colors.pink}]}>
                    Profile
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconCenter: {
    alignSelf: 'center',
  },
  labelStyle: {
    fontSize: hp(1.4),
    textAlign: 'center',
    width: wp(15),
    marginTop: hp(0.5),
  },
});
