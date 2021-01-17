import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { List, Surface, IconButton, Button } from 'react-native-paper';
import Background from '../../components/Background'
import {useSelector, useDispatch} from 'react-redux'
import {rejectApp} from '../../middlewares/user/action'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Main({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const dispatch = useDispatch();
  const login = useSelector(state => state.User.login)
  const errMsg = useSelector(state => state.Categories.errMsg)
  const loading = useSelector(state => state.Categories.loading)
  var ls = require('react-native-local-storage');
  const logOut = () => {
    dispatch(rejectApp())
    navigation.navigate('login')
  }
  return (
    <Background>
        <ScrollView style={styles.scrlCategory} >
            {console.log(login)}
            <List.Item
                title="Kullanıcı Adı"
                description={ login.username}
                left={props => <List.Icon {...props} icon="account-circle-outline" />}
            />
            <List.Item
                title="Yetki"
                description={ login.role}
                left={props => <List.Icon {...props} icon="lock" />}
            />
            <List.Item
                title="token"
                description={ login.token}
                left={props => <List.Icon {...props} icon="key-variant" />}
            />
            <List.Item
                title="Benzersiz Kimlik"
                description={ login.userId}
                left={props => <List.Icon {...props} icon="fingerprint" />}
            />
            <Button mode="contained" onPress={() => logOut()}> Çıkış Yap</Button>

        </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
    searchBar :{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
    },
    scrlCategory:{
        width: '100%',
        top: 54,
    },
    categoryBox:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 750
    },
    categoryIcon:{
        flexDirection: 'column',
        justifyContent: "center",
        color: '#fff'
    },
    surfaceContent: {
        alignItems: 'center',
        width:'100%'
    },
    text:{
        color: '#fff',
        fontSize: 18
    },
    loading:{
        position: "absolute"
    }
});