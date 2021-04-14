import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Gap, Input, Loading} from '../../component';
import Fire from '../../config';
import {
  colors,
  getData,
  showError,
  showSuccess,
  storeData,
  useForm,
} from '../../utility';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    // test data
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
        showSuccess('Registrasi Berhasil');
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
        setLoading(false);
        showError(error.message);
      });
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
