import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ImageDetail = ({ imageScore, imageSource, title }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {imageScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ImageDetail;