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
import {getPostsApi, likePostApi, removeLikePostApi} from '../../API/api';

const FriendsPosts = ({navigation, route}) => {
  const {friendId} = route.params;

  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const [message, setMessage] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    getPosts();
  }, [isFocused]);

  const getPosts = async () => {
    try {
      const {data} = await getPostsApi(friendId);

      if (data.length == 0) {
        setMessage('No Posts');
      } else {
        setMessage('');
      }
      setPosts(data);
      setLoad(false);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const likePost = async (post_id, user_id) => {
    try {
      const {data} = await likePostApi(post_id, user_id);
      console.log('liked', data);
      getPosts();
    } catch (e) {
      console.log(e.response.data);
    }
  };

  console.log(posts, 'friends posts');

  const removeLikePost = async (post_id, user_id) => {
    try {
      const {data} = await removeLikePostApi(post_id, user_id);
      console.log('Removed', data);
      getPosts();
    } catch (e) {
      console.log(e.response.data);
    }
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
        <Text style={styles.headerTitle}>Friends</Text>
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
              <TouchableOpacity activeOpacity={0.9} style={styles.postWrapper}>
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
                    onPress={() => {
                      // removeLikePost(item.post_id, item.author.user_id);
                      likePost(item.post_id, item.author.user_id);
                    }}
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
  friendsList: {
    color: colors.pink,
    fontWeight: 'bold',
  },
  errorMessage: {
    fontSize: hp(3),
    textAlign: 'center',
    paddingTop: hp(4),
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

export default FriendsPosts;
