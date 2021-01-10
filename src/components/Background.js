
import React, { memo } from 'react';
import { ImageBackground,  StyleSheet,  KeyboardAvoidingView, View} from 'react-native';

export default function Background(props) {
  return(
    <ImageBackground source={require('../assets/bg.jpg')} resizeMode="repeat" style={styles.background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {props.children}
        </KeyboardAvoidingView>
  </ImageBackground>
  )
    
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
