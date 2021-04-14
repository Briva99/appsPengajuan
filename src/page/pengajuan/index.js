import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import Fire from '../../config';
import {colors, fonts, useForm} from '../../utility';

const Pengajuan = ({navigation, fullName}) => {
  const [form, setForm] = useForm({
    fullName: '',
    address: '',
    phone: '',
    credit: '',
    id: '',
  });

  const onContinue = () => {
    console.log(form);
    if (form.fullName && form.address && form.phone && form.credit) {
      const tambahCredit = Fire.database().ref('Register_Pengajuan');
      const registerPengajuan = {
        fullName: form.fullName,
      };

      tambahCredit.push(registerPengajuan).then(success => {
        // showSuccess('Registrasi berhasil');

        console.log('Registrasi berhasil :', success);
        const data = {
          fullName: form.fullName,
          address: form.address,
          phone: form.phone,
          credit: form.credit,
          uid: success.path.pieces_[1],
        };
        Fire.database()
          .ref('Register_Pengajuan/' + success.path.pieces_[1] + '/')
          .set(data);
        setForm('reset');
        navigation.navigate('UploadKtp', data);
        console.log('data :', data);
      });
    } else {
      Alert.alert('Error:', 'Data Harus Diisi Dengan Lengkap');
    }
  };

  return (
    <View style={styles.pages}>
      <Header
        type="icon-only"
        title="Form Pengajuan Kredit"
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.content}>
          <Gap height={30} />
          <Input
            label="Nama Lengkap"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={20} />
          <Input
            label="Alamat"
            isTextArea={true}
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={20} />
          <Input
            label="No Telp"
            keyboardType="number-pad"
            value={form.phone}
            onChangeText={value => setForm('phone', value)}
          />
          <Gap height={20} />
          <Input
            label="Nominal Pengajuan"
            keyboardType="number-pad"
            value={form.credit}
            onChangeText={value => setForm('credit', value)}
          />
          <Gap height={50} />
          <Button title="Submit" onPress={onContinue} />
          <Gap height={30} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Pengajuan;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
