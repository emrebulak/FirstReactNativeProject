import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './card.style';

const Card = (data) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.text}>{data.text}</Text>
      </View>
      <TouchableOpacity onPress={()=> Alert.alert("Merhaba "+data.title)} style={styles.button}>
        <Text style={styles.button_text}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
