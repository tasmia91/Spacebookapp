import React, {useState, useEffect} from 'react';
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
import {addPostApi} from '../../API/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const DraftDetailsScreen = ({navigation, route}) => {
  const {item} = route.params;

  const [text, setText] = useState('');
  const [success, setSuccess] = useState('');

  const isFocused = useIsFocused();

  useEffect(() => {
    onSaveDraft();
  }, [isFocused]);

  const addPost = async () => {
    let apiData = {
      text: text ? text : item.text,
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
        onDeleteDraft(item.id);
      }
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const onDeleteDraft = async id => {
    let list = await AsyncStorage.getItem('localStorage');
    list = JSON.parse(list);
    console.log('list deleted', list, id);
    setSuccess('Deleted');
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
    let delObj = list.find(item => item.id == id);
    const index = list.indexOf(delObj);
    if (index > -1) {
      list.splice(index, 1);
    }
    await AsyncStorage.setItem('localStorage', JSON.stringify(list));
    navigation.goBack();
  };

  const onSaveDraft = async () => {
    if (isFocused == false && text != '') {
      let list = await AsyncStorage.getItem('localStorage');
      list = JSON.parse(list);
      let saveObj = list.find(element => element.id == item.id);
      const index = list.indexOf(saveObj);
      list[index].text = text;
      await AsyncStorage.setItem('localStorage', JSON.stringify(list));
    }
  };

  return (
    <>
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
          <Text style={styles.headerTitle}>Drafts</Text>
        </View>

        <View style={styles.postWrapper}>
          <TextInput
            defaultValue={item.text}
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

        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              onDeleteDraft(item.id);
            }}>
            <Image
              source={require('../../images/icons/delete.png')}
              resizeMode={'contain'}
              style={{
                height: hp(3.5),
                width: hp(3.5),
              }}
            />
          </TouchableOpacity>
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
            <Text style={styles.draftText}>Post Draft</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    backgroundColor: '#EfEF',
  },
  buttonWrapper: {
    paddingTop: hp(7),
  },
  draftText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: hp(2),
  },
  successMessage: {
    fontSize: hp(3),
    textAlign: 'center',
    paddingTop: hp(4),
  },
  postButton: {
    backgroundColor: colors.blue,
    paddingVertical: hp(1.2),
    borderRadius: hp(1.8),
    elevation: 5,
  },
  postWrapper: {
    borderWidth: 3,
    borderRadius: hp(1.8),
    borderColor: colors.pink,
    paddingHorizontal: wp(2),
    backgroundColor: colors.white,
    marginBottom: hp(2),
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
    paddingBottom: hp(4),
  },
  headerTitle: {
    fontFamily: 'Roboto',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: hp(3),
    textTransform: 'uppercase',
    paddingLeft: wp(4),
  },
});

export default DraftDetailsScreen;
