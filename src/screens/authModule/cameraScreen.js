import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import {uploadProfilePhotoApi} from '../../API/api';

const CameraScreen = ({navigation}) => {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const photoUpload = async img => {
    try {
      const {data} = await uploadProfilePhotoApi(img);
      navigation.goBack();
    } catch (apiError) {
      console.log('api error', apiError.response.data);
    }
  };

  const captureHandler = async () => {
    try {
      const data = await takePicture();
      console.log(data);
      console.log(data.uri);
      RNFS.readFile(data.uri, 'base64')
        .then(async response => {
          const img = 'data:image/png;base64,' + response;
          photoUpload(response);
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.localContainer}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}
      />
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../images/icons/back.png')}
          resizeMode={'contain'}
          style={{
            height: hp(2.5),
            width: hp(2.5),
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          captureHandler();
        }}
        style={styles.captureWrapper}>
        <View style={styles.capture} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  localContainer: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
  goBack: {
    position: 'absolute',
    top: hp(2),
    left: wp(5),
  },
  capture: {
    height: hp(9),
    width: hp(9),
    backgroundColor: 'white',
    borderRadius: 100 / 2,
  },
  captureWrapper: {
    position: 'absolute',
    bottom: hp(5),
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});

export default CameraScreen;
