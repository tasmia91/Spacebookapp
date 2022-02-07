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
import { colors } from '../../colors/colors';


const LoginScreen = ({ navigation }) => {
  return (
      <View style={[globalStyles.container, styles.localContainer]}>
          
      <View style={styles.headerWrapper}>
          
              <Image 
                  source={require('../../images/astronaut-3.png')}
                  resizeMode={'contain'}
                  style={{
                      height: hp(8),
                      width: hp(8)
                  }}
              />
              <Text style={styles.headerTitle}>SpaceBook</Text>
      </View>

      <View style={styles.formWrapper}>
        {/* Username */}
        <View style={styles.fieldWrapper}>
          <Text style={styles.label}>Username</Text>
          <TextInput 
            placeholder='tasmia@hotmail.com'
          />
        </View> 
        {/* Password */}
        <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
          <Text style={styles.label}>Password</Text>
          <TextInput 
            placeholder='*****'
            secureTextEntry={true}
          />
        </View> 
      </View>
      <View>
      <TouchableOpacity activeOpacity={0.5} style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.RegisterText}> Register!</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    justifyContent: 'space-evenly',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  text: {
    fontWeight: 'bold',
  },
  RegisterText: {
    fontWeight: 'bold',
    color: colors.pink,
  },
  loginText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: hp(2),
  },
  loginButton: {
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
    }
})



export default LoginScreen;
