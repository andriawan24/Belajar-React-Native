import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        onPress={() => {
          navigation.navigate('Component');
        }}
        title="Go To Component Demo"
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go To Image Page"
        onPress={() => navigation.navigate('Image')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
