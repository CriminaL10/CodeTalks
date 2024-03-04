import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './RoomCard.styles';

const RoomCard = ({room, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{room.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoomCard;
