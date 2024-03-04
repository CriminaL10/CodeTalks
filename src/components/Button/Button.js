import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Button.styles';

const Button = ({title, onPress, disabled, loading, theme = 'primary'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles[theme].touch}>
      <View style={styles[theme].container}>
        {loading ? (
          <ActivityIndicator size={30} color="white" />
        ) : (
          <Text style={styles[theme].title}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
