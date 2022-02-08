import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.headerWrapper}>
        <Image
          source={require('../../images/space.jpeg')}
          resizeMode={'contain'}
          style={{
            height: hp(8),
            width: hp(8),
          }}
        />
        <Text style={styles.headerTitle}>Register</Text>
      </View>

      <View style={styles.formWrapper}>
        {/* First name */}
        <View style={styles.fieldWrapper}>
          <Text style={styles.label}>First Name</Text>
          <TextInput placeholder="Tasmia" />
        </View>
        {/* Last Name */}
        <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput placeholder="Niazi" />
        </View>
        {/* Email */}
        <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="tasmia@hotmail.com" />
        </View>
        {/* Password */}
        <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
          <Text style={styles.label}>Password</Text>
          <TextInput placeholder="*****" secureTextEntry={true} />
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          activeOpacity={0.5}
          style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    justifyContent: 'space-evenly',
  },
  registerText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: hp(2),
  },
  registerButton: {
    backgroundColor: colors.blue,
    paddingVertical: hp(1.2),
    borderRadius: hp(1.8),
    elevation: 5,
  },
  label: {
    color: colors.pink,
    fontWeight: '600',
    fontSize: hp(1.8),
  },
  fieldWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: colors.pink,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Roboto',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: hp(4),
    textTransform: 'uppercase',
    paddingLeft: wp(4),
  },
});

export default RegisterScreen;
