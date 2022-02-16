import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';

const HomeScreen = ({navigation}) => {
  var timestamp = 1607110465663;
  var date = new Date(timestamp);

  console.log(
    'Date: ' +
      date.getDate() +
      '/' +
      (date.getMonth() + 1) +
      '/' +
      date.getFullYear(),
  );

  return (
    <View style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.headerWrapper}>
        <Image
          source={require('../../images/astronaut-3.png')}
          resizeMode={'contain'}
          style={{
            height: hp(8),
            width: hp(8),
          }}
        />
        <Text style={styles.headerTitle}>SpaceBook Home</Text>
      </View>

      <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.postWrapper}
            onPress={() => navigation.navigate('PostDetailsScreen')}>
            <View style={styles.postHeader}>
              <Text style={styles.name}>Tasmia</Text>
              <Text style={styles.timeStamp}>1607110465663</Text>
            </View>

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
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    backgroundColor: '#EfEF',
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

export default HomeScreen;
