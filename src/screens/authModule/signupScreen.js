import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../../styles/globalStyles';
import { colors } from '../../colors/colors';


const SignupScreen = ({ navigation } ) => {
  return (
      <View style={[globalStyles.container, styles.localContainer]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Back</Text>
              </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    paddingHorizontal: wp(4),
    justifyContent: 'space-evenly',
  },

})



export default SignupScreen;
