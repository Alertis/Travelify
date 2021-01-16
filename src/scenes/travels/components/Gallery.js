import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import {  IconButton, TextInput, Button } from 'react-native-paper';
import ImageBrowser from 'react-native-interactive-image-gallery'

export default function Gallery(props) {
  const [photos, setPhotos] = useState([])
    useEffect(() => {
      let imageURLs= [];
      props.images.photos && props.images.photos.map( (img, index) => {
        console.log("resim", img, props )
        imageURLs.push(
          {
            URI: img.imageUrl,
            thumbnail: img.imageUrl,
            id: String(index),
            title: props.title,
            description: props.description
          }
        )
        }
      )
      setPhotos(imageURLs)
    },[props])
    
  return (
    <ScrollView style={styles.content}>
       <ImageBrowser images={photos} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#673ab7'
    }
});