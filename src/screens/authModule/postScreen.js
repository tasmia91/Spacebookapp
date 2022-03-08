import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {addPostApi} from '../../API/api';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostScreen = () => {
  const [text, setText] = useState('');
  const [success, setSuccess] = useState('');

  const isFocused = useIsFocused();

  useEffect(() => {
    localStorage();
  }, [isFocused]);

  const localStorage = async () => {
    if (isFocused == false && text != '') {
      let list = await AsyncStorage.getItem('localStorage');
      list = JSON.parse(list);
      console.log(list.length);
      let message = {text: text};
      list.push(message);
      console.log(list, 'after push');
      // console.log(message, 'message');
      // await AsyncStorage.setItem('message1', JSON.stringify(message));
      setText('');
    }
  };

  const addPost = async () => {
    let apiData = {
      text: text,
    };
    try {
      const {data} = await addPostApi(apiData);
      console.log('add post', data);
      setText('');
      if (data) {
        setSuccess('Posted');
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      }
    } catch (e) {
      console.log(e.response.data);
    }
  };

  return (
    <View style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>New Post</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.postWrapper}>
          <TextInput
            defaultValue={text}
            onChangeText={text => {
              setText(text);
            }}
            style={{
              textAlignVertical: 'top',
            }}
            placeholder="Add Text"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
        </View>
      </View>

      {success ? (
        <Text style={[globalStyles.errorLine, styles.successMessage]}>
          {success}
        </Text>
      ) : null}

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => addPost()}
          activeOpacity={0.5}
          style={styles.postButton}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
  },
  buttonWrapper: {
    paddingTop: hp(7),
  },
  successMessage: {
    fontSize: hp(3),
    textAlign: 'center',
    paddingTop: hp(4),
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
  },
  postText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: hp(2),
  },
  postButton: {
    backgroundColor: colors.blue,
    paddingVertical: hp(1.2),
    borderRadius: hp(1.8),
    elevation: 5,
  },
  headerTitle: {
    fontFamily: 'Roboto',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: hp(3),
    textTransform: 'uppercase',
    paddingLeft: wp(4),
  },
  postWrapper: {
    borderWidth: 3,
    borderRadius: hp(1.8),
    borderColor: colors.pink,
    paddingHorizontal: wp(2),
  },
});

export default PostScreen;
