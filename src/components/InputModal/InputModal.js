import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './InputModal.styles';
import Button from '../Button';

const InputModal = ({
  onPress,
  isVisible,
  value,
  onChangeText,
  onClose,
  placeholder,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.container}
      avoidKeyboard
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection={'down'}>
      <View style={styles.body}>
        <TextInput
          placeholder={placeholder}
          multiline
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
        />
        <Button title="Gönder" onPress={onPress} />
      </View>
    </Modal>
  );
};

export default InputModal;
