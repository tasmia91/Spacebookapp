import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {
  getUserInformationApi,
  updateUserInformationApi,
  getProfilePhotoApi,
} from '../../API/api';
import {useIsFocused} from '@react-navigation/native';

const EditScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState({});
  const [load, setLoad] = useState(true);
  const [photo, setPhoto] = useState('');

  const isFocused = useIsFocused();

  useEffect(() => {
    getUserInformation();
    getProfilePhoto();
    if (isFocused == false) {
      navigation.replace('ProfileScreen');
    }
  }, [isFocused]);

  const getUserInformation = async () => {
    try {
      const {data} = await getUserInformationApi(data);
      console.log('user info', data);
      setData(data);
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

  const updateUserInformation = async () => {
    if (password === confirmPassword) {
      const apiData = {
        first_name: firstName == '' ? data.firstName : first_name,
        last_name: lastName == '' ? data.lastName : last_name,
        email: email == '' ? data.email : email,
        password: password == '' ? data.password : password,
      };
      try {
        const {data} = await updateUserInformationApi(apiData);
        console.log('update', data);
        if (data == 'OK') {
          setLoad(true);
          getUserInformation();
        }
      } catch (e) {
        console.log(e.response.data);
      }
    } else {
      setError('Password should match');
    }

    if (password && password.length < 5) {
      setError('Password should be greater than 5 characters');
    }
  };

  return (
    <ScrollView style={[styles.localContainer]}>
      <View style={styles.headerWrapper}>
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
        <Text style={styles.headerTitle}>Edit</Text>
      </View>

      {load ? (
        <ActivityIndicator size="small" color={colors.pink} />
      ) : (
        <>
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
                height: hp(10),
                width: hp(10),
                borderRadius: hp(10),
              }}
            />
          )}
          <View style={styles.formWrapper}>
            {error ? (
              <Text style={globalStyles.errorLine}>* {error}</Text>
            ) : null}

            {emailError ? (
              <Text style={globalStyles.errorLine}>* {emailError}</Text>
            ) : null}
            <View style={styles.row}>
              <View style={[styles.fieldWrapper, {width: '45%'}]}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  onChangeText={firstName => {
                    setFirstName(firstName);
                  }}
                  defaultValue={data.first_name}
                />
              </View>
              <View style={[styles.fieldWrapper, {width: '45%'}]}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  defaultValue={data.last_name}
                  onChangeText={lastName => {
                    setLastName(lastName);
                  }}
                />
              </View>
            </View>

            <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
              <Text style={styles.label}>Email</Text>
              <TextInput
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
                defaultValue={data.email}
              />
            </View>

            <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                onChangeText={password => {
                  setPassword(password);
                }}
                defaultValue={password}
                secureTextEntry={true}
              />
            </View>

            <View style={[styles.fieldWrapper, {paddingTop: hp(2)}]}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
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
              onPress={() => updateUserInformation()}
              activeOpacity={0.5}
              style={styles.updateProfileButton}>
              <Text style={styles.updateText}>Update Profile</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
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
  updateText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: hp(2),
  },
  updateProfileButton: {
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
    marginTop: hp(2),
  },
  headerTitle: {
    fontFamily: 'Roboto',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: hp(3),
    textTransform: 'uppercase',
    paddingLeft: wp(4),
    marginTop: hp(-5),
  },
  formWrapper: {
    paddingVertical: hp(5),
  },
});

export default EditScreen;
