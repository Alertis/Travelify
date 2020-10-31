import React from 'react';
import {  TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput, IconButton } from 'react-native-paper';
import Background from '../../components/Background'

export default function Login() {
  return (
    <Background>

        <IconButton
          icon="arrow-left"
          style={styles.container}
          size={20}
          color="#600EE6"
          onPress={() => console.log('Pressed')}
        />
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <Text style={styles.header}> Hoşgeldiniz </Text>
        <View style={styles.inputGroups}>
          <TextInput label="Kullanıcı Adı" style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
          <TextInput label="Şifre" style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
        </View>
        <View style={styles.forgotPassword}>
          <Button icon="camera" color="#414757" mode="text" onPress={() => console.log("go to forgot page")}>
              <Text style={styles.label}>Şifremi Unuttum</Text>
          </Button>
        </View>
        <Button mode="contained"> Giriş Yap </Button>
        <View style={styles.row}>
        <Text style={styles.label}>Henüz hesabınız yok mu? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.link}>Kayıt ol</Text>
        </TouchableOpacity>
        </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 0
  },
  image: {
    width: 128,
    height: 128
  },
  header: {
    fontSize: 26,
    color: '#600EE6',
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: '#414757',
  },
  link: {
    fontWeight: 'bold',
    color: '#600EE6',
  },
  input: {
    backgroundColor: '#fff',
  },
  error: {
    fontSize: 14,
    color: '#f13a59',
    paddingHorizontal: 4,
    paddingTop: 4,
  },

  inputGroups: {
    width: '100%',
    marginVertical: 12,
  },
});