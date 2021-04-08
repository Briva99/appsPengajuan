import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header} from '../../component';
import {colors, fonts} from '../../utility';

const FotoSelfie = ({navigation, route}) => {
  // const { uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoForDB, setPhotoForDB] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  return (
    <View style={styles.page}>
      <Header title="Foto Selfie" onPress={() => navigation.goBack()} />

      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper}>
            {hasPhoto && <Image source={photo} style={styles.avatar} />}
            {!hasPhoto && <Image source={photo} style={styles.avatar1} />}

            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text>Silahkan Foto Selfie</Text>
        </View>

        <View style={styles.button}>
          <Button disable={!hasPhoto} title="Upload Photo Selfie" />
        </View>
      </View>
    </View>
  );
};

export default FotoSelfie;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  button: {
    marginTop: 20,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 70,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {width: 230, height: 330},
  avatar1: {width: 110, height: 110},
  avatarWrapper: {
    width: 230,
    height: 330,
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
