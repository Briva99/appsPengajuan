import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../component';
import {colors} from '../../utility';

const Report = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header title="Status Pengajuan" onPress={() => navigation.goBack()} />
      <View style={styles.wripper}>
        <Text style={styles.Text}>Nama :</Text>
        <Text style={styles.Text}>Jors Buss</Text>
      </View>
      <View style={styles.wripper}>
        <Text style={styles.Text}>Alamat :</Text>
        <Text style={styles.Text}>jalan simanjuntak belakang</Text>
      </View>
      <View style={styles.wripper}>
        <Text style={styles.Text}>Keterangan :</Text>
        <Text style={styles.Text}>tidak di ACC</Text>
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
  },
  Text: {
    marginVertical: 5,
    marginLeft: 20,
    fontSize: 14,
    justifyContent: 'center',
  },
  wripper: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    marginRight: 20,
    marginLeft: 20,
  },
});
