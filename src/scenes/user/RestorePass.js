import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput, IconButton, Snackbar } from 'react-native-paper';
import Background from '../../components/Background'
import {restorePass} from '../../middlewares/user/action'
import {useSelector, useDispatch} from 'react-redux'

export default function Login({navigation}) {
  const [email , setEMail] = useState("")
  const [errorMessage , setError] = useState("")


  const dispatch = useDispatch();
  const restore = useSelector(state => state.User.restore)
  const errMsg = useSelector(state => state.User.errMsg)
  const valid = useSelector(state => state.User.valid)
  const loading = useSelector(state => state.User.loading)

  const changePass = () => {
    dispatch(restorePass({email}))
  }
  useEffect(() => {
    if(errMsg && errMsg !== "" && errMsg !== errorMessage)
     setError(errMsg.message);
   })
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
              <Snackbar
                visible={errorMessage !== ""}
                onDismiss={() => setError("")}
                style={{backgroundColor: "red"}}
              >
                {errorMessage}
              </Snackbar>
            <Image source={require('../../assets/logo.png')} style={styles.image} />
            <Text style={styles.header}> Şifrenizi Sıfırlayın </Text>
            <View style={styles.inputGroups}>
              <TextInput label="E-posta Adresi" value={email}  onChangeText={(e) => setEMail(e)} style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
            </View>
            <Button mode="contained" onPress={() => changePass()}> Şifreyi Sıfırla </Button>
            <Button icon="arrow-left" color="#414757" style={styles.back} size={20} onPress={() => navigation.navigate('login')}> Giriş Yap </Button>
      
        </>
      }
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