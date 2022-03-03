import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {
  getListOfFriendsApi,
  getProfilePhotoApi,
  getUserInformationApi,
} from '../../API/api';

const ProfileScreen = ({navigation}) => {
  const [friends, setFriends] = useState([]);
  const [userData, setUserData] = useState({});
  const [load, setLoad] = useState(true);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    getListOfFriends();
    getUserInformation();
    getProfilePhoto();
  }, []);

  const getListOfFriends = async () => {
    try {
      const {data} = await getListOfFriendsApi();
      console.log(data, 'list of friends');
      setFriends(data);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const getUserInformation = async () => {
    try {
      const {data} = await getUserInformationApi(data);
      console.log('user info', data);
      setUserData(data);
      setLoad(false);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const getProfilePhoto = async () => {
    try {
      const {data} = await getProfilePhotoApi();
      setPhoto(data);
    } catch (e) {
      console.log(e.response.data);
    }
  };

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
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {load ? (
        <ActivityIndicator size="small" color={colors.pink} />
      ) : (
        <View>
          <View style={styles.informationWrapper}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CameraScreen');
              }}>
              {photo ? (
                <Image
                  source={{uri: 'data:image/png;base64,' + photo}}
                  resizeMode={'contain'}
                  style={{
                    height: hp(15),
                    width: hp(15),
                  }}
                />
              ) : (
                <Image
                  source={require('../../images/icons/profilePhoto.png')}
                  resizeMode={'contain'}
                  style={{
                    height: hp(15),
                    width: hp(15),
                    borderRadius: hp(50),
                  }}
                />
              )}
            </TouchableOpacity>

            <Text style={styles.name}>
              {userData.first_name + ' ' + userData.last_name}
            </Text>
            <Text style={styles.email}>{userData.email}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FriendsScreen', {
                  friends: friends,
                });
              }}>
              <Text style={styles.friendsList}>Friends: {friends.length}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.settingsWrapper}>
            <Image
              source={require('../../images/icons/settings.png')}
              resizeMode={'contain'}
              style={{
                height: hp(3),
                width: hp(3),
                opacity: 0.3,
              }}
            />
            <Text style={styles.label}>Settings</Text>
          </View>

          <View style={[styles.settingsWrapper, styles.optionsWrapper]}>
            <Image
              source={require('../../images/icons/edit.png')}
              resizeMode={'contain'}
              style={{
                height: hp(3),
                width: hp(3),
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('EditScreen')}>
              <Text style={styles.option}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.settingsWrapper, styles.optionsWrapper]}>
            <Image
              source={require('../../images/icons/edit.png')}
              resizeMode={'contain'}
              style={{
                height: hp(3),
                width: hp(3),
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('DraftScreen')}>
              <Text style={styles.option}>Drafts</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.settingsWrapper, {paddingVertical: hp(2)}]}>
            <Image
              source={require('../../images/icons/logout.png')}
              resizeMode={'contain'}
              style={{
                height: hp(3),
                width: hp(3),
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('LogoutScreen')}>
              <Text style={styles.option}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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

export default ProfileScreen;
