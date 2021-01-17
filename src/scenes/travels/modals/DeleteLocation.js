import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import { Modal, TextInput, Button } from 'react-native-paper';
import GetLocation from 'react-native-get-location'
import Maps from '../components/Maps'
import {useSelector, useDispatch} from 'react-redux'
import {categoryList} from '../../../middlewares/categories/action'
import {deleteLocation} from '../../../middlewares/locations/action'

import {Picker} from '@react-native-picker/picker';

export default function AddLocationModal(props) {
    const dispatch = useDispatch();
    

    const saveLocation = () =>{
        let data = {id: props.data[0]._id}
        dispatch(deleteLocation(data))
        console.log(props)
        props.setVisible(false)
        props.goRoute();
    }


  return (
    <Modal visible={props.visible} onDismiss={() => props.setVisible(false)} contentContainerStyle={styles.modalStyle}>
        <ScrollView>
            <View style={styles.inputGroups}>
                <Text>Bir Lokasyonu Silmek istediğinize emin misini? </Text>
                <Button mode="contained" onPress={() => saveLocation()}> Sil </Button>
            </View>
        
        </ScrollView>
          
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalStyle:{
        backgroundColor: 'white',
        padding: 50,
        position:"absolute",
        width:'100%',
        height: '80%'
    },
    inputGroups: {
        width: '100%',
        marginVertical: 12,
      },
});