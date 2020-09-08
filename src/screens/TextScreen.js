import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return <View>
    <Text>Enter Password:</Text>
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={ newValue => setPassword(newValue)}
      style={styles.input}
      value={password}
    />
    {password.length < 4 && <Text>Password must be 4 characters</Text>}
  </View>
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;