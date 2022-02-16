import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  textarea,
  View,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';

const PostScreen = ({navigation}) => {
  return (
    <View style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>New Post</Text>
      </View>
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
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity activeOpacity={0.5} style={styles.postButton}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
  },
  buttonWrapper: {
    paddingTop: hp(7),
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
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
  headerTitle: {
    fontFamily: 'Roboto',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: hp(4),
    textTransform: 'uppercase',
    paddingLeft: wp(1),
  },
  postWrapper: {
    borderWidth: 3,
    borderRadius: hp(1.8),
    borderColor: colors.pink,
    paddingHorizontal: wp(2),
  },
});

export default PostScreen;
