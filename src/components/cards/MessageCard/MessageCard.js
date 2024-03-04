import {Text, View} from 'react-native';
import React from 'react';
import styles from './MessageCard.styles';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessageCard = ({message}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.message}>{message.message}</Text>
    </View>
  );
};

export default MessageCard;
