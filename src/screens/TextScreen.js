import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text>My name is {name}</Text>

      <Text style={{marginTop: 10}}>Enter Password:</Text>
      <TextInput
        placeholder="Password"
        value={password}
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={(text) => setPassword(text) }
      />
      {(password.length < 5) ? <Text>Password must be longer than 5 characters</Text> : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
