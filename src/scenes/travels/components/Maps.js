import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import {  IconButton, TextInput, Button } from 'react-native-paper';
import MapView from 'react-native-maps';

export default function Maps(props) {
    const [region, setRegion] = useState({
        latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
    })
      
      onRegionChange = (region)  => {
        setRegion({ region });
      }
      
  return (
    <ScrollView style={styles.content}>
        <MapView
            style={styles.map}
            region={region}
            onRegionChange={onRegionChange}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#673ab7'
    },
    map:{
        flex: 1,
        width: '100%',
        height:100,
        backgroundColor:'red'
    }
});