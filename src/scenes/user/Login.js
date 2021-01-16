import React, {useEffect, useState} from 'react';
import {  TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput, IconButton, Snackbar } from 'react-native-paper';
import Background from '../../components/Background'
import {login as singIn} from '../../middlewares/user/action'
import {useSelector, useDispatch} from 'react-redux'


export default function Login({ navigation }) {
  const [errorMessage , setError] = useState("")
  const [username , setUserName] = useState("")
  const [password , setPassword] = useState("")

  const dispatch = useDispatch();
  const login = useSelector(state => state.User.login)
  const errMsg = useSelector(state => state.User.errMsg)
  const valid = useSelector(state => state.User.valid)
  const loading = useSelector(state => state.User.loading)

  const onLogin = () => {
    console.log("Hey")
    let data = {
      email:username, password
    }
    dispatch(singIn(data))
  }
  useEffect(() => {
   if(errMsg && errMsg !== "" && errMsg !== errorMessage)
    setError(errMsg.message);
  })

  var ls = require('react-native-local-storage');
 
  return (
    <Background>
        {loading ? <Button style={styles.loading} loading={loading}></Button> :
          <>
            <IconButton
              icon="arrow-left"
              style={styles.container}
              size={20}
              color="#600EE6"
              onPress={() => navigation.goBack()}
            />
            <Image source={require('../../assets/logo.png')} style={styles.image} />
            <Text style={styles.header}> Hoşgeldiniz </Text>
            <Snackbar
              visible={errorMessage !== ""}
              onDismiss={() => setError("")}
              style={{backgroundColor: "red"}}
            >
              {errorMessage}
            </Snackbar>
            <Snackbar
            visible={login && Object.keys(login).length>0}
            onDismiss={() => {
              navigation.navigate('TabNavigation');
              ls.save('username', login.username)
              ls.save('token', login.token)
              ls.save('userId', login.userId)
             ls.save('role', login.role)
            }}
            duration={100}
            style={{backgroundColor: "green"}}
          >
            Giriş başarılı anasayfaya yönlendiriliyorsunuz
          </Snackbar>
           
            <View style={styles.inputGroups}>
              <TextInput label="Kullanıcı Adı" value={username} onChangeText={(e) => setUserName(e)} style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
              <Text style={styles.errorText}> {valid > 0 && valid.username} </Text>
            
              <TextInput label="Şifre" value={password} secureTextEntry={true} onChangeText={(e) => setPassword(e)} style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
              <Text style={styles.errorText}> {valid && valid.password} </Text>

            </View>
            <View style={styles.forgotPassword}>
              <Button icon="camera" color="#414757" mode="text" onPress={() => navigation.navigate('restorePass')}>
                  <Text style={styles.label}>Şifremi Unuttum</Text>
              </Button>
            </View>
            <Button mode="contained" onPress={() => onLogin()}> Giriş Yap </Button>
            <View style={styles.row}>
            <Text style={styles.label}>Henüz hesabınız yok mu? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text style={styles.link}>Kayıt ol</Text>
            </TouchableOpacity>
            </View>
          </>
        }
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 0
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
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
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
    marginVertical: 12,
  },
  loading:{
    position: "absolute"
}
});