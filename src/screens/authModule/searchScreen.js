import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {createFilter} from 'react-native-search-filter';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {addFriendApi, searchFriendsApi} from '../../API/api';

const SearchScreen = ({navigation}) => {
  const KEYS_TO_FILTERS = ['user_givenname'];

  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getSearch();
  }, []);

  const sendRequest = async user_id => {
    try {
      const {data} = await addFriendApi(user_id);
      console.log(data, 'request sent');
    } catch (e) {
      console.log(e);
    }
  };

  const getSearch = async () => {
    try {
      const {data} = await searchFriendsApi();
      setUsers(data);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const filteredUsers = users.filter(createFilter(search, KEYS_TO_FILTERS));

  return (
    <View style={[globalStyles.container, styles.localContainer]}>
      <View style={styles.formWrapper}>
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
          <TextInput
            defaultValue={search}
            onChangeText={search => {
              setSearch(search);
            }}
            style={{paddingVertical: hp(0.5)}}
            placeholder="Search"
          />
        </View>
      </View>

      <ScrollView styles={styles.searchResultsWrapper}>
        {search ? (
          <View>
            {filteredUsers.map((item, index) => {
              return (
                <View style={styles.searchResult}>
                  <Text style={styles.searchResultName}>
                    {item.user_givenname + ' ' + item.user_familyname}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      sendRequest(item.user_id);
                    }}>
                    <Image
                      source={require('../../images/icons/friendReq.png')}
                      resizeMode={'contain'}
                      style={{
                        width: hp(3),
                        height: hp(3),
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    flex: 1,
    paddingVertical: hp(4),
  },
  searchResult: {
    paddingVertical: hp(2),
    borderBottomColor: colors.blue,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
