import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';

const NotificationsScreen = () => {
  return (
    <ScrollView style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.fieldWrapper}>
          <Image
            source={require('../../images/icons/profilePhoto2.png')}
            resizeMode={'contain'}
            style={{
              height: hp(5),
              width: hp(5),
            }}
          />
          <View style={styles.align}>
            <Text style={styles.label}>Tasmia Niazi</Text>
            <View style={styles.icons}>
              <TouchableOpacity>
                <Image
                  source={require('../../images/icons/accept.png')}
                  resizeMode={'contain'}
                  style={{
                    height: hp(5),
                    width: hp(5),
                    marginRight: hp(2),
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
    color: colors.black,
    fontWeight: '600',
    fontSize: hp(2),
    marginLeft: hp(2),
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  fieldWrapper: {
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
    paddingLeft: wp(1),
  },
});

export default NotificationsScreen;
