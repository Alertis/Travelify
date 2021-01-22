import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import {  IconButton, TextInput } from 'react-native-paper';
import { addComment, locationDetail, locationPics } from '../../../middlewares/locations/action'
import {useSelector, useDispatch} from 'react-redux'
var ls = require('react-native-local-storage');

export default function Comments(props) {
    const [comment, setComment] = useState("")
    const dispatch = useDispatch();
    const login = useSelector(state => state.User.login)
    
    const sendComment = () => {
        let username = login.username
        console.log(login)
        dispatch(addComment({comment,username,lId: props.data._id}))
        dispatch(locationDetail(props.data._id))
        dispatch(locationPics(props.data._id))
    }
  return (
    <ScrollView style={styles.content}>
        <View style={styles.commentInput}>
            <TextInput
                label="Yorumunuzu yazın..."
                style={styles.input}
                theme={{
                    roundness: 50,
                    colors: {
                    primary:'white',
                    underlineColor:'white',
                    text: 'white',
                    placeholder: 'white'
                    
                    }
                }}
                onChangeText={ val => setComment(val)}
            />
            <IconButton
                icon="send"
                size={24}
                color="#fff"
                onPress={() => sendComment()}
            />
        </View>
       
        <View style={styles.comments} >
            {props.comment.map((comment) =>{
                return  <View style={styles.comment}>
                <View>
                    <IconButton
                        icon="chat-outline"
                        size={32}
                        color="#fff"
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <View>
                    <Text style={styles.title}> {comment.username} </Text>
                    <Text style={styles.description}> {comment.comment}  </Text>
                </View>
            </View>   
            })}

        
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#673ab7'
    },
    comments:{
        top: 10
    },
    comment:{
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        margin: 10,
        paddingBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color:'#fff'
    },
    description:{
        fontSize: 13,
        color:'#fff',
        flex:1,
        paddingRight: 50,
    },
    input:{
        flex:1,
        backgroundColor: '#673ab7',
        color: '#fff'
    },
    commentInput:{
        flexDirection: 'row',
        alignItems: 'center',
    }
});