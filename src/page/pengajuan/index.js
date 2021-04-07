import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import {colors, fonts} from '../../utility';

const Pengajuan = ({navigation}) => {
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    phone: '',
    credit: '',
  });

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
          <Button
            title="Submit"
            onPress={() => navigation.navigate('UploadKtp')}
          />
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
