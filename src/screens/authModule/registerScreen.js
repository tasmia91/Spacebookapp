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
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {registerApi} from '../../API/api';

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  const register = async () => {
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      !emailError
    ) {
      if (password === confirmPassword) {
        setError('');
        const apiData = {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        };
        try {
          const {data} = await registerApi(apiData);
          console.log(data);
        } catch (e) {
          if (
            e.response.data ==
            'Bad request - email must be valid and password greater than 5 characters'
          ) {
            setError('Password should be greater than 5 characters');
          }
          console.log(e.response.data);
        }
      } else {
        setError('Password should match');
      }
    } else {
      if (!emailError) {
        setError('Please fill in all fields');
      }
    }
  };

  return (
    <ScrollView style={[styles.localContainer]}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/icons/back.png')}
            resizeMode={'contain'}
            style={{
              height: hp(2.5),
              width: hp(2.5),
              marginBottom: hp(5),
            }}
          />
        </TouchableOpacity>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../../images/astronaut-3.png')}
            resizeMode={'contain'}
            style={{
              height: hp(8),
              width: hp(8),
            }}
          />
          <Text style={styles.headerTitle}>Register</Text>
        </View>
      </View>

      <View style={styles.formWrapper}>
        {error ? <Text style={globalStyles.errorLine}>* {error}</Text> : null}
        {emailError ? (
          <Text style={globalStyles.errorLine}>* {emailError}</Text>
        ) : null}
        <View style={styles.row}>
          {/* First name */}
          <View style={[styles.fieldWrapper, {width: '45%'}]}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              placeholder="Tasmia"
              defaultValue={firstName}
              onChangeText={firstName => {
                setFirstName(firstName);
              }}
            />
          </View>
          {/* Last Name */}
          <View style={[styles.fieldWrapper, {width: '45%'}]}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              placeholder="Niazi"
              defaultValue={lastName}
              onChangeText={lastName => {
                setLastName(lastName);
              }}
            />
          </View>
        </View>
        {/* Email */}
        <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="tasmia@hotmail.com"
            defaultValue={email}
            onChangeText={email => {
              let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
              if (reg.test(email) === false) {
                setEmailError('Please enter a valid email');
              } else if (email == '') {
                setEmailError('');
              } else {
                setEmailError('');
                setEmail(email);
              }
            }}
          />
        </View>
        {/* Password */}
        <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="*****"
            defaultValue={password}
            onChangeText={password => {
              setPassword(password);
            }}
            secureTextEntry={true}
          />
        </View>
        {/* Password */}
        <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            placeholder="*****"
            defaultValue={confirmPassword}
            onChangeText={confirmPassword => {
              setConfirmPassword(confirmPassword);
            }}
            secureTextEntry={true}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => register()}
          activeOpacity={0.5}
          style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    flex: 1,
    paddingVertical: hp(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginVertical: hp(2),
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
  formWrapper: {
    paddingVertical: hp(5),
  },
});

export default RegisterScreen;
