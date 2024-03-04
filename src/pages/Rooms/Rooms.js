import {SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/database';
import {FlatList} from 'react-native-gesture-handler';
import RoomCard from '../../components/cards/RoomCard';
import ParseId from '../../utils/ParseId';
import styles from './Rooms.styles';
import FloatingButton from '../../components/FloatingButton';
import InputModal from '../../components/InputModal';
import {showMessage} from 'react-native-flash-message';

const Rooms = ({navigation}) => {
  const db =
    'https://fir-intro-b60b7-default-rtdb.europe-west1.firebasedatabase.app/';
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [roomName, setRoomName] = useState(null);
  const [loading, setLoading] = useState();

  const modalToggle = () => {
    setModalVisible(!modalVisible);
  };

  const getRooms = () => {
    setList(null);
    firebase
      .app()
      .database(db)
      .ref('Rooms/')
      .on('value', snapshot => {
        const contentData = ParseId(snapshot.val());
        setList(contentData);
      });
    showMessage({message: 'Oda oluşturuldu', type: 'success'});
  };
  useEffect(() => {
    getRooms();
  }, []);

  const sendData = () => {
    setLoading(true);
    firebase.app().database(db).ref('Rooms/').push({
      title: roomName,
    });
    setLoading(false);
    modalToggle();
    setRoomName(null);
  };

  const renderRoom = ({item}) => (
    <RoomCard
      room={item}
      onPress={() => navigation.navigate('MessagesPage', item)}
    />
  );

  const onClose = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={list} renderItem={renderRoom} numColumns={2} />
      <FloatingButton onPress={modalToggle} icon="plus" />
      <InputModal
        placeholder="Oda adı.."
        isVisible={modalVisible}
        onPress={sendData}
        value={roomName}
        onChangeText={setRoomName}
        loading={loading}
        onClose={onClose}
      />
    </SafeAreaView>
  );
};

export default Rooms;
