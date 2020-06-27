import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lightBlue, white } from '../utils/colors'

const Deckinfo = ({ title, noOfQuestions }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.questions}>{noOfQuestions} Card(s)</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightBlue,
    borderRadius: 16
  },
  title: {
    fontSize: 22,
    color: white
  },
  questions: {
    fontSize: 16,
    color: white
  }
});

export default Deckinfo