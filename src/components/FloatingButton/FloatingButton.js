import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';
import styles from './FloatingButton.styles';

const FloatingButton = ({onPress, icon, theme = 'primary'}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <Icon name={icon} size={30} style={styles[theme].color} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
