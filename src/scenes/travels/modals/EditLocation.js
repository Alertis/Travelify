import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { Modal, TextInput, Button } from 'react-native-paper';
import GetLocation from 'react-native-get-location'
import Maps from '../components/Maps'
import {useSelector, useDispatch} from 'react-redux'
import {categoryList} from '../../../middlewares/categories/action'
import {editLocation, locationDetail, locationPics} from '../../../middlewares/locations/action'

import {Picker} from '@react-native-picker/picker';

export default function AddLocationModal(props) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.Categories.categories)
    const [lat, setLat] = useState(props.data.length > 0 ? props.data[0].lat : 0)
    const [long, setLong] = useState(props.data.length > 0 ? props.data[0].name : 0)
    const [locName, setLocName] = useState(props.data.length > 0 ? props.data[0].name : "")
    const [locDescription, setLocDesc] = useState(props.data.length > 0 ? props.data[0].description : "")
    const [country, setCountry] = useState(props.data.length > 0 ? props.data[0].country : "")
    const [selectedCategory, setCategory] = useState(props.data.length > 0 ? props.data[0].category._id : "")


    const saveLocation = () =>{
        let data = {id: props.data[0]._id, name: locName, country, description: locDescription, lat, long}
        dispatch(editLocation(data))
        setLocDesc("")
        setLocName("")
        setCountry("")
        setCategory("")
        dispatch(locationDetail(props.data[0]._id))
        dispatch(locationPics(props.data[0]._id))
        props.setVisible(false)
    }

    useEffect(() => {
        dispatch(categoryList())
        if((locName == "" || locDescription == "") && props.data.length > 0 ){
            setLocDesc(props.data[0].description)
            setLocName(props.data[0].name)
            setCountry(props.data[0].country)
            setCategory(props.data[0].category._id)
            setLat(parseFloat(props.data[0].lat))
            setLong(parseFloat(props.data[0].long))
        }
    
    },[props])

  return (
    <Modal visible={props.visible} onDismiss={() => props.setVisible(false)} contentContainerStyle={styles.modalStyle}>
        <ScrollView>
            <View style={styles.inputGroups}>
                <TextInput label="Lokasyon Adı" value={locName} onChangeText={(e) => setLocName(e)} style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
                <TextInput label="Lokasyon Açıklaması" value={locDescription} onChangeText={(e) => setLocDesc(e)} style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
                <TextInput label="Ülke" value={country} onChangeText={(e) => setCountry(e)} style={styles.input} selectionColor='#600EE6' underlineColor="transparent" mode="outlined"/>
                
                <Button mode="contained" onPress={() => saveLocation()}> Kaydet</Button>
            </View>
        
            <Maps lat={lat} long={ long} />
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