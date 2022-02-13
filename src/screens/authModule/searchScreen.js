import React from 'react';
import {StyleSheet, TextInput, View, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';

const SearchScreen = ({navigation}) => {
  return (
    <ScrollView style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.formWrapper}>
        {/* First name */}
        <View style={styles.fieldWrapper}>
          <Image
            source={require('../../images/icons/searchBlue.png')}
            resizeMode={'contain'}
            style={{
              height: hp(2),
              width: hp(2),
              marginRight: wp(3),
            }}
          />
          <TextInput style={{paddingVertical: hp(0.5)}} placeholder="Search" />
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
    fontSize: hp(1.8),
  },
  fieldWrapper: {
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: hp(30),
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchScreen;
