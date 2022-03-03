import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context} from '../../../App';

const LogoutScreen = ({navigation}) => {
  const {isUser, setUser} = useContext(Context);

  const logout = () => {
    setUser(false);
    AsyncStorage.removeItem('token');
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
        <Text style={styles.headerTitle}>Logout</Text>
      </View>

      <View style={styles.settingsWrapper}>
        <View>
          <Text style={styles.option}>Are you sure you want to logout?</Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.logoutButton}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => logout()}>
              <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cancelButton}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}>
              <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp(50),
    marginTop: hp(3),
  },
  logoutButton: {
    backgroundColor: colors.pink,
    paddingVertical: hp(1.2),
    borderRadius: hp(1.8),
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: hp(2.5),
    paddingHorizontal: hp(1.8),
  },
  cancelButton: {
    backgroundColor: colors.blue,
    paddingVertical: hp(1.2),
    borderRadius: hp(1.8),
    elevation: 5,
  },
  option: {
    color: colors.black,
    fontSize: hp(2.5),
    marginLeft: hp(1),
  },
  settingsWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerTitle: {
    fontFamily: 'Roboto',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: hp(3),
    textTransform: 'uppercase',
    paddingLeft: wp(4),
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
  },
});

export default LogoutScreen;
