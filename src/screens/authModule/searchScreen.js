import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View, Image, ScrollView} from 'react-native';
import {createFilter} from 'react-native-search-filter';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import {colors} from '../../colors/colors';
import {searchFriendsApi} from '../../API/api';

const SearchScreen = ({navigation}) => {
  const KEYS_TO_FILTERS = ['user_givenname'];

  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getSearch();
  }, []);

  const getSearch = async () => {
    try {
      const {data} = await searchFriendsApi();
      console.log('search', data);
      setUsers(data);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const filteredUsers = users.filter(createFilter(search, KEYS_TO_FILTERS));

  return (
    <ScrollView style={[globalStyles.container, styles.localContainer]}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    flex: 1,
    paddingVertical: hp(4),
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
