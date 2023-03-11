import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ComponenteImagemHelder from './components/ComponenteImagemHelder';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
 
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
    

     <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

    <ComponenteImagemHelder />


 <ComponenteImagemHelder />

 
     <ComponenteImagemHelder />


      <ComponenteImagemHelder />
     
     
    </View>
  );
}

export default DisplayAnImage;