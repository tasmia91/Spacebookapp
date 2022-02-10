import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../colors/colors';

const NotificationsScreen = ({navigation}) => {
  return (
    <ScrollView style={[styles.localContainer]}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <View style={styles.formWrapper}>
        {/* First name */}
        <View style={styles.fieldWrapper}>
          <Image
            source={require('../../images/icons/profilePhoto.png')}
            resizeMode={'contain'}
            style={{
              height: hp(5),
              width: hp(5),
              marginRight: wp(4),
            }}
          />
          <Text style={styles.label}>Friend Request</Text>
          <TouchableOpacity>
            <Image
              source={require('../../images/icons/accept.png')}
              resizeMode={'contain'}
              style={{
                height: hp(5),
                width: hp(5),
                marginRight: wp(4),
                marginLeft: wp(25),
              }}
            />
          </TouchableOpacity>
          <Image
            source={require('../../images/icons/reject.png')}
            resizeMode={'contain'}
            style={{
              height: hp(5),
              width: hp(5),
            }}
          />
        </View>
      </View>
      <View style={styles.formWrapper}>
        {/* First name */}
        <View style={styles.fieldWrapper}>
          <Image
            source={require('../../images/icons/profilePhoto2.png')}
            resizeMode={'contain'}
            style={{
              height: hp(5),
              width: hp(5),
              marginRight: wp(4),
            }}
          />
          <Text style={styles.label}>Tasmia Niazi</Text>
          <TouchableOpacity>
            <Image
              source={require('../../images/icons/accept.png')}
              resizeMode={'contain'}
              style={{
                height: hp(5),
                width: hp(5),
                marginRight: wp(4),
                marginLeft: wp(25),
              }}
            />
          </TouchableOpacity>
          <Image
            source={require('../../images/icons/reject.png')}
            resizeMode={'contain'}
            style={{
              height: hp(5),
              width: hp(5),
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    flex: 1,
    paddingVertical: hp(4),
  },
  label: {
    color: colors.pink,
    fontWeight: '600',
    fontSize: hp(2),
    marginLeft: hp(2),
  },
  fieldWrapper: {
    // borderWidth: 2,
    // borderColor: colors.blue,
    // borderRadius: hp(30),
    // paddingHorizontal: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: hp(4),
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

export default NotificationsScreen;
