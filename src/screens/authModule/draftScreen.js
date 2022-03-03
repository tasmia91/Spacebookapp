import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useIsFocused} from '@react-navigation/native';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DraftScreen = ({navigation}) => {
  useEffect(() => {
    // getPosts();
  }, [isFocused]);

  const [posts, setPosts] = useState([]);
  // const [load, setLoad] = useState(true);
  const [message, setMessage] = useState('');
  const [draft, setDraft] = useState('');
  const isFocused = useIsFocused();

  try {
    const draft = AsyncStorage.getItem('message1');
    console.log(JSON.parse(draft));
  } catch (e) {
    console.log('error retrieving data');
  }

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
        <Text style={styles.headerTitle}>Drafts</Text>
      </View>
      {message ? (
        <Text style={[globalStyles.errorLine, styles.errorMessage]}>
          {message}
        </Text>
      ) : null}

      <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.postWrapper}
          onPress={() => navigation.navigate('DraftDetailsScreen', {})}>
          <Text>{draft}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    backgroundColor: '#EfEF',
  },
  errorMessage: {
    fontSize: hp(3),
    textAlign: 'center',
    paddingTop: hp(4),
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  headerTitle: {
    fontFamily: 'Roboto',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: hp(3),
    textTransform: 'uppercase',
    paddingLeft: wp(4),
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: hp(2.2),
    color: colors.pink,
  },
  likes: {
    fontSize: hp(1.8),
    color: colors.blue,
    paddingLeft: wp(2),
  },
  likesWrapper: {
    paddingTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeStamp: {
    fontSize: hp(1.7),
    fontWeight: '300',
  },
  name: {
    fontWeight: 'bold',
    fontSize: hp(2),
    color: colors.black,
  },
  postWrapper: {
    backgroundColor: 'white',
    elevation: 5,
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    borderRadius: wp(4),
    marginVertical: hp(1),
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
  },
});

export default DraftScreen;
