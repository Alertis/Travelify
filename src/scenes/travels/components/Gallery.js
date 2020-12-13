import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import {  IconButton, TextInput, Button } from 'react-native-paper';
import ImageBrowser from 'react-native-interactive-image-gallery'

export default function Gallery(props) {
    const imageURLs = props.images.map( (img, index) => ({
          URI: img.uri,
          thumbnail: img.thumbnail,
          id: String(index),
          title: img.title,
          description: img.description
        })
      )
  return (
    <ScrollView style={styles.content}>
       <ImageBrowser images={imageURLs} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#673ab7'
    }
});