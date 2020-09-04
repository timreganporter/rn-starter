import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  const { type, payload } = action;
  return (state[type] + payload > 255) || (state[type] + payload < 0)
    ? state
    : { ...state, [type]: state[type] + payload}
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onDecrease={() => dispatch({ type: 'red', payload: -1 * COLOR_INCREMENT}) }
        onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT}) }
      />
      <ColorCounter
        color="Green"
        onDecrease={() => dispatch({ type: 'green', payload: -1 * COLOR_INCREMENT}) }
        onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT}) }
      />
      <ColorCounter
        color="Blue"
        onDecrease={() => dispatch({ type: 'blue', payload: -1 * COLOR_INCREMENT}) }
        onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT}) }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;