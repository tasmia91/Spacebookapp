import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {loginApi} from '../../API/api';

const LogoutScreen = ({navigation}) => {
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
        <Text style={styles.headerTitle}>Logout</Text>
      </View>

      <View style={[styles.settingsWrapper, styles.optionsWrapper]}>
        <TouchableOpacity onPress={() => navigation.navigate('EditScreen')}>
          <Text style={styles.option}>Are you sure you want to logout?</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.settingsWrapper, {paddingVertical: hp(2)}]}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.option}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Text style={styles.option}>Cancel</Text>
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
    borderTopWidth: 1,
    borderTopColor: '#00000020',
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

export default LogoutScreen;
