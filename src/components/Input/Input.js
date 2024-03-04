import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.styles';

const Input = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default Input;
