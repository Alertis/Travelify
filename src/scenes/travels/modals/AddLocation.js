import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { Modal, TextInput, Button } from 'react-native-paper';
import GetLocation from 'react-native-get-location'
import Maps from '../components/Maps'


export default function AddLocationModal(props) {
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [locName, setLocName] = useState(0)
    const [locDescription, setLocDesc] = useState(0)
    const [country, setCountry] = useState(0)

    const saveLocation = () =>{
        console.log("save loc")
    }

    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            setLat(location.latitude)
            setLong(location.longitude)

            console.log(location);
        })
        .catch(error => {
            const { code, message } = error;
            console.log(error);
        })
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