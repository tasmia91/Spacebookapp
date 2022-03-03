import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {getListOfFriendsApi} from '../../API/api';

const FriendsScreen = ({navigation, route}) => {
  const {friends} = route.params;
  console.log(friends, 'friends screen');

  return (
    <View style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/icons/back.png')}
            resizeMode={'contain'}
            style={{
              height: hp(2.5),
              width: hp(2.5),
            }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Friends</Text>
      </View>

      <ScrollView style={styles.friendsWrapper}>
        {friends.map((item, index) => {
          console.log('friends', item);
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FriendsPosts', {friendId: item.user_id});
              }}
              style={styles.image}>
              <Image
                source={require('../../images/icons/profilePhoto2.png')}
                resizeMode={'contain'}
                style={{
                  height: hp(3),
                  width: hp(3),
                }}
              />
              <Text style={styles.text}>
                {item.user_givenname + ' ' + item.user_familyname}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
  },
  friendsList: {
    color: colors.pink,
    fontWeight: 'bold',
  },
  image: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.blue,
    paddingVertical: hp(2),
    paddingTop: hp(3),
  },
  text: {
    fontSize: hp(2),
    color: colors.black,
    paddingLeft: hp(1),
  },
  optionsWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#00000020',
    paddingVertical: hp(2),
  },
  option: {
    color: colors.black,
    fontSize: hp(1.8),
    marginLeft: hp(1),
  },
  label: {
    color: '#00000050',
    fontWeight: 'bold',
    marginLeft: hp(1),
  },
  settingsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: colors.black,
    fontSize: hp(2),
    marginTop: hp(2),
  },
  email: {
    color: '#00000070',
    fontSize: hp(2),
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
  },
  headerTitle: {
    fontFamily: 'Roboto',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: hp(3),
    textTransform: 'uppercase',
    paddingLeft: wp(4),
  },
  informationWrapper: {
    marginVertical: hp(3),
    borderBottomWidth: 1,
    borderBottomColor: '#00000020',
    paddingBottom: hp(1),
  },
});

export default FriendsScreen;
