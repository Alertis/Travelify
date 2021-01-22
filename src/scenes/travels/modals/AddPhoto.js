import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Image} from 'react-native';
import { Modal, TextInput, Button } from 'react-native-paper';
import Maps from '../components/Maps'
import {useSelector, useDispatch} from 'react-redux'
import {addPhoto, locationDetail, locationPics} from '../../../middlewares/locations/action'
import * as ImagePicker from 'react-native-image-picker';

export default function AddLocationModal(props) {
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState(null)


    const handleChoosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log(response)
        if (response.uri) {
            setPhoto(response)
        }
        });
    };

    const saveLocation = () =>{
        const data = new FormData();

        data.append("file", {
            name: photo.fileName,
            type: photo.type,
            uri:  Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
        });

        data.append("id",  props.data[0]._id)
        console.log(photo)
        dispatch(addPhoto(data))
        dispatch(locationDetail(props.data[0]._id))
        dispatch(locationPics(props.data[0]._id))
        props.setVisible(false)
    }



  return (
    <Modal visible={props.visible} onDismiss={() => props.setVisible(false)} contentContainerStyle={styles.modalStyle}>
        <ScrollView>
            <View style={styles.inputGroups}>
            {photo && (
                <Image
                    source={{ uri: photo.uri }}
                    style={{ width: 300, height: 300 }}
                />
            )}
                <Button mode="contained" style={{marginTop:10}} onPress={() => handleChoosePhoto()}> Resim Seç</Button>
                <Button mode="contained" style={{marginTop:10}} onPress={() => saveLocation()}> Seçilen Resmi Yükle</Button>
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