import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {
  acceptFriendRequestApi,
  rejectFriendRequestApi,
  getOutstandingFriendsRequestApi,
} from '../../API/api';

const NotificationsScreen = () => {
  const [requests, setRequests] = useState([]);
  const [load, setLoad] = useState(true);
  const [message, setMessage] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    getFriendRequests();
  }, [isFocused]);

  const getFriendRequests = async () => {
    try {
      const {data} = await getOutstandingFriendsRequestApi();
      if (data.length == 0) {
        setMessage('No Requests');
      }
      console.log(data, 'requests data');
      setRequests(data);
      setLoad(false);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const acceptRequest = async user_id => {
    try {
      const {data} = await acceptFriendRequestApi(user_id);
      console.log(data, 'accept friend');
      getFriendRequests();
      setMessage('Accepted');
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const rejectRequest = async user_id => {
    try {
      const {data} = await rejectFriendRequestApi(user_id);
      console.log(data, 'reject friend requests');
      getFriendRequests();
      setMessage('Rejected');
    } catch (e) {
      console.log(e.response.data);
    }
  };

  return (
    <ScrollView style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {message ? (
        <Text style={[globalStyles.errorLine, styles.errorMessage]}>
          {message}
        </Text>
      ) : null}

      {load ? (
        <ActivityIndicator size="small" color={colors.pink} />
      ) : (
        <ScrollView>
          {requests.map((item, index) => {
            return (
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
                    <Text style={styles.label}>
                      {item.first_name + ' ' + item.last_name}
                    </Text>
                    <View style={styles.icons}>
                      <TouchableOpacity
                        onPress={() => {
                          acceptRequest(item.user_id);
                        }}>
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

                      <TouchableOpacity
                        onPress={() => {
                          rejectRequest(item.user_id);
                        }}>
                        <Image
                          source={require('../../images/icons/reject.png')}
                          resizeMode={'contain'}
                          style={{
                            height: hp(5),
                            width: hp(5),
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    flex: 1,
    paddingVertical: hp(4),
  },
  errorMessage: {
    fontSize: hp(3),
    textAlign: 'center',
    paddingTop: hp(4),
    marginTop: hp(2),
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
    fontSize: hp(3),
    textTransform: 'uppercase',
    paddingLeft: wp(4),
  },
});

export default NotificationsScreen;
