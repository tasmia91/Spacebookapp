import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';

const ProfileScreen = ({navigation}) => {
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

      <View style={styles.informationWrapper}>
        <Image
          source={require('../../images/icons/profilePhoto.png')}
          resizeMode={'contain'}
          style={{
            height: hp(15),
            width: hp(15),
            borderRadius: hp(50),
          }}
        />
        <Text style={styles.name}>Tasmia Niazi</Text>
        <Text style={styles.email}>tasmia@hotmail.com</Text>
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

      <View style={[styles.settingsWrapper, {paddingVertical: hp(2)}]}>
        <Image
          source={require('../../images/icons/logout.png')}
          resizeMode={'contain'}
          style={{
            height: hp(3),
            width: hp(3),
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('LogoutScreen')}>
          <Text style={styles.option}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
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
    fontSize: hp(4),
    textTransform: 'uppercase',
    paddingLeft: wp(1),
  },
  informationWrapper: {
    marginVertical: hp(3),
    borderBottomWidth: 1,
    borderBottomColor: '#00000020',
    paddingBottom: hp(1),
  },
});

export default ProfileScreen;
