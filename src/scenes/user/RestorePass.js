import React from 'react';
import {  TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput, IconButton } from 'react-native-paper';
import Background from '../../components/Background'
import { Actions } from 'react-native-router-flux'

export default function Login({navigation}) {
  return (
    <Background>

        <IconButton
          icon="arrow-left"
          style={styles.container}
          size={20}
          color="#600EE6"
          onPress={() => navigation.goBack()}
        />
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <Text style={styles.header}> Şifrenizi Sıfırlayın </Text>
        <View style={styles.inputGroups}>
          <TextInput label="E-posta Adresi" style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
        </View>
        <Button mode="contained"> Şifreyi Sıfırla </Button>
        <Button icon="arrow-left" color="#414757" style={styles.back} size={20} onPress={() => navigation.navigate('login')}> Giriş Yap </Button>

    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 0,
    backgroundColor: '#fff'
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
    backgroundColor: '#fff'
  },
  back: {
    width: '100%',
    marginTop: 12,
    left: 0,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    backgroundColor: '#fff'
  },
  label: {
    color: '#414757',
    backgroundColor: '#fff'
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