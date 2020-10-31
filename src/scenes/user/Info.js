import React from 'react';
import {  TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput, IconButton } from 'react-native-paper';
import Background from '../../components/Background'

export default function Info() {
  return (
    <Background>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <Text style={styles.header}> Merhaba </Text>
        <Text style={styles.text}> İçeriklerimize ulaşabilmek için lütfen kayıt olunuz. Eğer zaten üye olduysanız lütfen giriş yapınız. </Text>
        <Button mode="contained" style={styles.button}> Giriş Yap </Button>
        <Button mode="outlined" style={styles.button}> Kayıt Ol </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
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
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: '#414757',
    textAlign: 'center',
    marginBottom: 14,
  },
  button: {
    width: '100%',
    marginVertical: 12,
  },
});