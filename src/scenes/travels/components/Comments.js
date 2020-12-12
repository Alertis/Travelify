import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import {  IconButton, TextInput, Button } from 'react-native-paper';

export default function Comments() {
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
            />
            <IconButton
                icon="send"
                size={24}
                color="#fff"
                onPress={() => console.log('Pressed')}
            />
        </View>
       
        <View style={styles.comments} >
                <View style={styles.comment}>
                    <View>
                        <IconButton
                            icon="chat-outline"
                            size={32}
                            color="#fff"
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}> Osman Yavuz Demir </Text>
                        <Text style={styles.description}> Güzel ve bi o kadar da eğelenceli bir yer.  </Text>
                    </View>
                </View>    
                <View style={styles.comment}>
                    <View>
                        <IconButton
                            icon="chat-outline"
                            size={32}
                            color="#fff"
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}> Osman Yavuz Demir </Text>
                        <Text style={styles.description}> Güzel ve bi o kadar da eğelenceli bir yer.  </Text>
                    </View>
                </View>    
                <View style={styles.comment}>
                    <View>
                        <IconButton
                            icon="chat-outline"
                            size={32}
                            color="#fff"
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}> Osman Yavuz Demir </Text>
                        <Text style={styles.description}> Güzel ve bi o kadar da eğelenceli bir yer.  </Text>
                    </View>
                </View>    
                <View style={styles.comment}>
                    <View>
                        <IconButton
                            icon="chat-outline"
                            size={32}
                            color="#fff"
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}> Osman Yavuz Demir </Text>
                        <Text style={styles.description}> Güzel ve bi o kadar da eğelenceli bir yer.  </Text>
                    </View>
                </View>    
                <View style={styles.comment}>
                    <View>
                        <IconButton
                            icon="chat-outline"
                            size={32}
                            color="#fff"
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}> Osman Yavuz Demir </Text>
                        <Text style={styles.description}> Güzel ve bi o kadar da eğelenceli bir yer.  </Text>
                    </View>
                </View>    
                <View style={styles.comment}>
                    <View>
                        <IconButton
                            icon="chat-outline"
                            size={32}
                            color="#fff"
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}> Osman Yavuz Demir </Text>
                        <Text style={styles.description}> Güzel ve bi o kadar da eğelenceli bir yer.  </Text>
                    </View>
                </View>    

        
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