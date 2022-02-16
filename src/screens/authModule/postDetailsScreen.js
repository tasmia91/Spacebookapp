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
import {colors} from '../../colors/colors';

const PostDetailsScreen = ({navigation}) => {
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

      <TouchableOpacity activeOpacity={0.9} style={styles.postWrapper}>
        <View style={styles.postHeader}>
          <Text style={styles.name}>Tasmia Niazi</Text>
          <Text style={styles.timeStamp}>1607110465663</Text>
        </View>
        <Text style={styles.email}>tasmia12@hotmail.com</Text>

        <Text style={styles.description}>Hello, welcome</Text>
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
          <Text style={styles.likes}>25</Text>
        </View>

        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              <View style={styles.buttonWrapper}>
                <View style={styles.postWrapper}>
                  <TextInput
                    style={{
                      textAlignVertical: 'top',
                    }}
                    placeholder="Add Text"
                    multiline
                    numberOfLines={6}
                    textAlignVertical="top"
                  />
                </View>
              </View>;
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
            onPress={() => navigation.navigate('deletePostScreen')}>
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
      </TouchableOpacity>
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

export default PostDetailsScreen;
