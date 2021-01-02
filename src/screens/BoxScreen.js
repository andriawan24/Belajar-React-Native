import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{backgroundColor: 'red', height: 100, width: 100}} />
        <View style={{backgroundColor: 'blue', height: 100, width: 100}} />
      </View>
      <View style={styles.containerTwo}>
        <View style={{backgroundColor: 'blue', height: 100, width: 100}} />
      </View>
    </View>
  );
};

// eslint-disable-next-line no-unused-vars
const BoxScreenOld = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTwo: {
    height: 100,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});
