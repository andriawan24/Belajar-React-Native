import React, {useState, useReducer} from 'react';
import {View, Text, Button} from 'react-native';

const CounterScreen = () => {
  const reducer = (state, action) => {
    // state == {counter: 0}
    // action == {type: 'increase' || decrease, payload: 1}

    switch (action.type) {
      case 'increase':
        return {...state, counter: state.counter + action.payload};
      case 'decrease':
        return {...state, counter: state.counter - action.payload};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const {counter} = state;

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({type: 'increase', payload: 1})} />
      <Button title="Decrease" onPress={() => dispatch({type: 'decrease', payload: 1})} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

// eslint-disable-next-line no-unused-vars
const CounterScreenOld = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => {
        // Don't do this
        // counter++;
        setCounter(counter + 1);
      }} />
      <Button title="Decrease" onPress={() => {
        setCounter(counter - 1);
      }} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
