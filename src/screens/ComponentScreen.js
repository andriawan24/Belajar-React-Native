import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ComponentScreen = () => {
  // const greeting = {color: 'red'};
  // const helloWorld = <Text>Hello World</Text>;
  const nama = 'Naufal Fawwaz Andriawan';

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderText}>
        My Name is {nama}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  container: {
    padding: 10,
  },
  subHeaderText: {
    fontSize: 20,
  },
});

export default ComponentScreen;
