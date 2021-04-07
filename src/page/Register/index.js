import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Gap, Input, Loading} from '../../component';
import Fire from '../../config';
import {colors, getData, storeData, useForm} from '../../utility';
import {showMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    // const data = {
    //   fullName: form.fullName,
    //   email: form.email,
    // };

    // navigation.navigate('UploadPhoto', data);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        showMessage({
          message: 'Register Berhasil',
          type: 'default',
          backgroundColor: colors.success,
          color: colors.white,
        });
        setForm('reset');
        const data = {
          fullName: form.fullName,
          email: form.email,
          uid: success.user.uid,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        console.log('register sukses :', success);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });

    // // const data = {
    //   fullName: form.fullName,
    //   profession: form.profession,
    //   email: form.email,
    // };
    // navigation.navigate('UploadPhoto', data);
    // setLoading(true);
    // Fire.auth()
    //   .createUserWithEmailAndPassword(form.email, form.password)
    //   .then(success => {
    //     setLoading(false);
    //     setForm('reset');
    //     const data = {
    //       fullName: form.fullName,
    //       email: form.email,
    //       uid: success.user.uid,
    //     };

    //     Fire.database()
    //       .ref('users/' + success.user.uid + '/')
    //       .set(data);

    //     // storeData('user', data);
    //     navigation.navigate('UploadPhoto', data);
    //     console.log('register success : ', success);
    //   })
    //   .catch(error => {
    //     const errorMessage = error.message;
    //     setLoading(false);
    //     showMessage({
    //       message: errorMessage,
    //       type: 'default',
    //       backgroundColor: colors.error,
    //       color: colors.white,
    //     });
    //   });
  };

  return (
    <>
      <View style={styles.pages}>
        <View style={styles.content}>
          <Gap height={30} />
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={30} />
          <Input
            label="Email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={30} />
          <Input
            label="Password"
            secureTextEntry
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={50} />
          <Button title="continue" onPress={onContinue} />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});