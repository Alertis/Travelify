import React, { useEffect, useState } from 'react';
import {  TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput, IconButton, Snackbar } from 'react-native-paper';
import Background from '../../components/Background'
import { Actions } from 'react-native-router-flux'
import {register as singUp} from '../../middlewares/user/action'
import {useSelector, useDispatch} from 'react-redux'

export default function Register({ navigation}) {
  const [errorMessage , setError] = useState("")
  const [username , setUserName] = useState("")
  const [name , setName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEMail] = useState("")
  const [password , setPassword] = useState("")

  const dispatch = useDispatch();
  const register = useSelector(state => state.User.register)
  const errMsg = useSelector(state => state.User.errMsg)
  const valid = useSelector(state => state.User.valid)
  const loading = useSelector(state => state.User.loading)


  const onRegister = () => {
    let data = {
      name, lastname:lastName, email, password, username
    }
    dispatch(singUp(data))
  }
  useEffect(() => {
   if(errMsg !== "" && errMsg !== errorMessage)
    setError(errMsg.message);
  })
  return (
    <Background>
        {loading ? <Button loading={loading} /> : <> 
        <IconButton
          icon="arrow-left"
          style={styles.container}
          size={20}
          color="#600EE6"
          onPress={() => navigation.goBack()}
        />
        
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <Text style={styles.header}> Yeni Hesap Oluşturun </Text>
        <Snackbar
          visible={errorMessage !== ""}
          onDismiss={() => setError("")}
          style={{backgroundColor: "red"}}
        >
          {errorMessage}
        </Snackbar>
        <Snackbar
          visible={Object.keys(register).length > 0}
          onDismiss={() => navigation.navigate('login')}
          style={{backgroundColor: "green"}}
          duration={100}
        >
          Kayıt Başarı ile oluşturuldu giriş sayfasına yönlendiriliyorsunuz
        </Snackbar>
        <View style={styles.inputGroups}>
          <TextInput error={valid.username} label="Kullanıcı Adı" value={username} onChangeText={(e) => setUserName(e)} style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
          <Text style={styles.errorText}> {Object.keys(valid).length > 0 && valid.username} </Text>
          
          <TextInput label="İsim" error={valid.name} value={name} onChangeText={(e) =>  setName(e)}  style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
          <Text style={styles.errorText}> {Object.keys(valid).length > 0 && valid.name} </Text>
          
          <TextInput label="Soyisim" error={valid.lastname} value={lastName} onChangeText={(e) => setLastName(e)}  style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
          <Text style={styles.errorText}> {Object.keys(valid).length > 0 && valid.lastname} </Text>
          
          <TextInput label="E-posta" error={valid.email} value={email} onChangeText={(e) => setEMail(e)}  style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
          <Text style={styles.errorText}> {Object.keys(valid).length > 0 && valid.email} </Text>
          
          <TextInput label="Şifre" error={valid.password}  secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)}  style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
          <Text style={styles.errorText}> {Object.keys(valid).length > 0 && valid.password} </Text>

        </View>
        <Button mode="contained" onPress={()=> onRegister()}> Kayıt Ol </Button>
        <View style={styles.row}>
          <Text style={styles.label}> Zaten üye misiniz?  </Text>
          <TouchableOpacity onPress={ () => navigation.navigate('login')}>
              <Text style={styles.link}> Giriş Yap </Text>
          </TouchableOpacity>
        </View>
        </> }
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
  errorText: {
    color: "red",
    textAlign: 'center'
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

  row: {
    flexDirection: 'row',
    marginTop: 4,
    backgroundColor: '#fff'
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
  loading:{
    position: "absolute"
}
});