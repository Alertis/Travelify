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
        <Text style={styles.header}> Şifrenizi Sıfırlayın </Text>
        <View style={styles.inputGroups}>
          <TextInput label="E-posta Adresi" style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
        </View>
        <Button mode="contained"> Şifreyi Sıfırla </Button>
        <Button icon="arrow-left" color="#414757" style={styles.back} size={20}> Giriş Yap </Button>

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
  back: {
    width: '100%',
    marginTop: 12,
    left: 0,
    flexDirection: 'row'
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
    marginVertical: 12
  },
});