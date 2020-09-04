import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;