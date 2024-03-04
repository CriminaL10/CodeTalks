import {View, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatingButton from '../../components/FloatingButton';
import MessageCard from '../../components/cards/MessageCard';
import {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import ParseId from '../../utils/ParseId';
import styles from './Messages.styles';
import InputModal from '../../components/InputModal';
import {showMessage} from 'react-native-flash-message';

const Messages = ({route}) => {
  const room = route.params;

  const db =
    'https://fir-intro-b60b7-default-rtdb.europe-west1.firebasedatabase.app/';

  const refference = firebase
    .app()
    .database(db)
    .ref('Rooms/' + room.id + '/Messages/');
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState(null);

  const getMessages = () => {
    refference.on('value', snapshot => {
      const contentData = snapshot.val();
      const parsedData = ParseId(contentData || {});
      setList(parsedData);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  const sendMessage = () => {
    const userMail = auth().currentUser.email;
    refference.push({
      date: new Date().toISOString(),
      username: userMail.split('@')[0],
      message: message,
    });
    showMessage({message: 'Mesaj gönderildi.', type: 'success'});
  };

  const modalToggle = () => {
    setModalVisible(!modalVisible);
  };
  const onClose = () => {
    setModalVisible(false);
  };
  const renderMessage = ({item}) => <MessageCard message={item} />;
  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{room.title} odası kuruldu!</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderMessage}
        ListEmptyComponent={renderEmpty}
      />
      <InputModal
        placeholder="Mesajınız.."
        isVisible={modalVisible}
        onChangeText={setMessage}
        value={message}
        onPress={sendMessage}
        onClose={onClose}
      />
      <FloatingButton onPress={modalToggle} icon="plus" theme="secondary" />
    </View>
  );
};

export default Messages;
