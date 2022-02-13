import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';

const PostScreen = ({navigation}) => {
  return (
    <View style={[globalStyles.container, styles.localContainer]}>
      <Text>Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    justifyContent: 'space-evenly',
  },
});

export default PostScreen;
