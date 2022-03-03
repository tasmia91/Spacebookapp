import React, {useState, useEffect} from 'react';
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
import {getSinglePostApi, updatePostApi} from '../../API/api';

const DraftDetailsScreen = ({navigation}) => {
  const [load, setLoad] = useState(true);
  const [edit, setEdit] = useState(false);

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
        <Text style={styles.headerTitle}>Post</Text>
      </View>

      {load ? (
        <ActivityIndicator size="small" color={colors.pink} />
      ) : (
        <View style={styles.postWrapper}>
          <View style={styles.postHeader}>
            <Text style={styles.name}>
              {posts.author.first_name + posts.author.last_name}
            </Text>
            <Text style={styles.timeStamp}>
              {date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear()}
            </Text>
          </View>

          <Text style={styles.email}>{posts.author.email}</Text>
          <Text style={styles.description}>{posts.text}</Text>

          <View style={styles.likesWrapper}>
            <TouchableOpacity>
              <Image
                source={require('../../images/icons/like.png')}
                resizeMode={'contain'}
                style={{
                  height: hp(3),
                  width: hp(3),
                }}
              />
            </TouchableOpacity>
            <Text style={styles.likes}>{posts.numLikes}</Text>
          </View>

          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => {
                setEdit(!edit);
              }}>
              <Image
                source={require('../../images/icons/edit.png')}
                resizeMode={'contain'}
                style={{
                  height: hp(3),
                  width: hp(3),
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate('DeletePostScreen', {postid: post_id})
              }>
              <Image
                source={require('../../images/icons/delete.png')}
                resizeMode={'contain'}
                style={{
                  height: hp(3),
                  width: hp(3),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {edit ? (
        <View>
          <View style={styles.buttonWrapper}>
            <View style={styles.postWrapper}>
              <TextInput
                onChangeText={text => {
                  setText(text);
                }}
                defaultValue={posts.text}
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

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() => updatePost()}
              activeOpacity={0.5}
              style={styles.postButton}>
              <Text style={styles.postText}>Update Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
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
  postWrapper: {
    borderWidth: 3,
    borderRadius: hp(1.8),
    borderColor: colors.pink,
    paddingHorizontal: wp(2),
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  email: {
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

export default DraftDetailsScreen;
