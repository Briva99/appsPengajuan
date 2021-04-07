import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconAddPhoto, IconRemovePhoto, ILPicture} from '../../assets';
import {Button, Gap, Header} from '../../component';
import {colors, fonts, storeData} from '../../utility';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import Fire from '../../config';

const UploadKtp = ({navigation, route}) => {
  // const {uid} = route.params;

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoForDB, setPhotoForDB] = useState('');
  const [photo, setPhoto] = useState(ILPicture);

  const getImage = () => {
    launchImageLibrary(
      {quality: 1, maxWidth: 400, maxHeight: 400, includeBase64: true},
      response => {
        // Same code as in above section!
        console.log('hasil response :', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Foto Gagal Upload',
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          console.log('response getImage :', response);
          const source = {uri: response.uri};
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          // setPhotoForDB({
          //   uri: 'data:' + response.type + 'base64,' + response.data,
          // });
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };
  const Upload = () => {
    Fire.database()
      // .ref('users/' + uid + '/')
      .update({photo: photoForDB});
    const data = route.params;
    data.photo = photoForDB;
    storeData('user', data);
    navigation.navigate('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header title="Upload KTP" onPress={() => navigation.goBack()} />

      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            {hasPhoto && <Image source={photo} style={styles.avatar} />}
            {!hasPhoto && <Image source={photo} style={styles.avatar1} />}

            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text>Silahkan Upload KTP anda</Text>
        </View>
        <View>
          <Button disable={!hasPhoto} title="Upload Photo" onPress={Upload} />
        </View>
      </View>
    </View>
  );
};

export default UploadKtp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 130,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {width: 330, height: 230},
  avatar1: {width: 110, height: 110},
  avatarWrapper: {
    width: 330,
    height: 230,
    borderWidth: 3,
    borderColor: colors.border,
    // borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
