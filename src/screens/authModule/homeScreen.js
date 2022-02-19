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
import {useIsFocused} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {getPostsApi, likePostApi} from '../../API/api';

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const [message, setMessage] = useState('');
  const isFocused = useIsFocused();

  //on Load of website will be first thing displayed
  useEffect(() => {
    getPosts();
  }, [isFocused]);
  //isFocused used to update page with new post

  const likePost = async post_id => {
    try {
      const {data} = await likePostApi(post_id);
      console.log('liked', data);
    } catch (e) {
      console.log(e.response.data);
    }
  };
  const getPosts = async () => {
    try {
      const {data} = await getPostsApi();
      console.log('posts', data);

      if (data.length == 0) {
        setMessage('No Posts');
      }
      setPosts(data);
      setLoad(false);
    } catch (e) {
      console.log(e.response.data);
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
        <Text style={styles.headerTitle}>SpaceBook Home</Text>
      </View>

      {message ? (
        <Text style={[globalStyles.errorLine, styles.errorMessage]}>
          {message}
        </Text>
      ) : null}

      {load ? (
        <ActivityIndicator size="small" color={colors.pink} />
      ) : (
        <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
          {posts.map((item, index) => {
            var date = new Date(item.timestamp);
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.postWrapper}
                onPress={() =>
                  navigation.navigate('PostDetailsScreen', {
                    post_id: item.post_id,
                  })
                }>
                <View style={styles.postHeader}>
                  <Text style={styles.name}>{item.author.first_name}</Text>
                  <Text style={styles.timeStamp}>
                    {date.getDate() +
                      '/' +
                      (date.getMonth() + 1) +
                      '/' +
                      date.getFullYear()}
                  </Text>
                </View>

                <Text style={styles.description}>{item.text}</Text>
                <View style={styles.likesWrapper}>
                  <TouchableOpacity
                    onPress={() => likePost(item.post_id)}
                    activeOpacity={0.5}>
                    <Image
                      source={require('../../images/icons/like.png')}
                      resizeMode={'contain'}
                      style={{
                        height: hp(3),
                        width: hp(3),
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.likes}>{item.numLikes}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
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
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
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
  headerTitle: {
    fontFamily: 'Roboto',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: hp(3),
    textTransform: 'uppercase',
    paddingLeft: wp(4),
  },
});

export default HomeScreen;
