import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../colors/colors';

export const {width, height} = Dimensions.get('window');

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  errorLine: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: hp(1.7),
    paddingBottom: hp(2),
  },
});

export default globalStyles;
