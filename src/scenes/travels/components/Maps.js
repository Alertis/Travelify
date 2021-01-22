import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import {  IconButton, TextInput, Button } from 'react-native-paper';
import MapView, { Marker, Callout} from 'react-native-maps';

export default function Maps(props) {
    const [region, setRegion] = useState({})

    useEffect(() => {
  
        setRegion({latitude: parseFloat(props.lat), longitude: parseFloat(props.long), latitudeDelta: 0.0922, longitudeDelta: 0.0421})
      },[props])
      
      
      
  return (
    <ScrollView style={styles.content}>
        <MapView
            style={styles.map}
            region={region}
        >
            <Marker coordinate={region} >
            <Callout>
                <View>
                    <Text> İstanbul Oyuncak Müzesi
                    </Text>
                </View>
            </Callout>
            </Marker>
        </MapView>
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
        height: 500,
        backgroundColor:'red'
    }
});