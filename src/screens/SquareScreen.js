import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  const { colorToChange, amount } = action;
  return (state[colorToChange] + amount > 255) || (state[colorToChange] + amount < 0)
    ? state
    : { ...state, [colorToChange]: state[colorToChange] + amount}
  /* code from Grider (my repacement above)
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
  */
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT}) }
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT}) }
      />
      <ColorCounter
        color="Green"
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT}) }
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT}) }
      />
      <ColorCounter
        color="Blue"
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT}) }
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT}) }
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