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
  // const [load, setLoad] = useState(true);
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
        <Text style={styles.headerTitle}>Drafts</Text>
      </View>
      {/* {load ? (
        <ActivityIndicator size="small" color={colors.pink} />
      ) : ( */}
      <View style={styles.postWrapper}>
        <View style={styles.postHeader}></View>

        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              setEdit(!edit);
            }}>
            <Image
              source={require('../../images/icons/save.png')}
              resizeMode={'contain'}
              style={{
                height: hp(4),
                width: hp(4),
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../images/icons/delete.png')}
              resizeMode={'contain'}
              style={{
                height: hp(4),
                width: hp(4),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* )} */}
      {edit ? (
        <View>
          <View style={styles.buttonWrapper}>
            <View style={styles.postWrapper}></View>
          </View>
        </View>
      ) : null}

      <View style={styles.buttonWrapper}>
        <TouchableOpacity activeOpacity={0.5} style={styles.postButton}>
          <Text style={styles.postText}>Post Draft</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    backgroundColor: '#EfEF',
  },
  buttonWrapper: {
    paddingTop: hp(50),
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
