import React, {useContext, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
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
import {loginApi} from '../../API/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context} from '../../../App';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const {isUser, setUser} = useContext(Context);
  const [load, setLoad] = useState(false);

  const login = async () => {
    if (username && password && !emailError) {
      setLoad(true);
      setError('');
      const apiData = {
        email: username,
        password: password,
      };
      try {
        const {data} = await loginApi(apiData);
        AsyncStorage.setItem('token', data.token);
        AsyncStorage.setItem('id', data.id.toString());
        setUser(true);
        console.log(data);
      } catch (e) {
        setError(e.response.data);
        setLoad(false);
      }
    } else {
      if (!emailError) {
        setError('Please fill in both fields');
        setLoad(false);
      }
    }
  };
  return (
    <View style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.headerWrapper}>
        <Image
          source={require('../../images/astronaut-3.png')}
          resizeMode={'contain'}
          style={{
            height: hp(8),
            width: hp(8),
          }}
        />
        <Text style={styles.headerTitle}>SpaceBook</Text>
      </View>

      <View style={styles.formWrapper}>
        {error ? <Text style={globalStyles.errorLine}>* {error}</Text> : null}
        {emailError ? (
          <Text style={globalStyles.errorLine}>* {emailError}</Text>
        ) : null}
        <View style={styles.fieldWrapper}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="tasmia@hotmail.com"
            defaultValue={username}
            onChangeText={username => {
              let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
              if (reg.test(username) === false) {
                setEmailError('Please enter a valid email');
              } else if (username == '') {
                setEmailError('');
              } else {
                setEmailError('');
                setUsername(username);
              }
            }}
          />
        </View>

        <View style={[styles.fieldWrapper, { paddingTop: hp(2) }]}>
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
      </View>

      <View>
        {load ? (
          <View style={styles.loginButton}>
            <ActivityIndicator size="small" color="white" />
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => login()}
            activeOpacity={0.5}
            style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        )}
        <View style={styles.wrapper}>
          <Text style={styles.text}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
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
  },
});

export default LoginScreen;
