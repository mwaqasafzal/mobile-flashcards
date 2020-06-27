import React from 'react'
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Deckinfo from '../components/Deckinfo'
import { white, blue, purple } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'


const DeckList = props => {
  const Data = [{ title: "Test", questions: [{ question: "Test", answer: "Test Answer" }] }];
  const deckInfo = ({ item }) => {
    const { title, questions } = item;
    return (
      <Deckinfo
        title={title}
        key={title}
        noOfQuestions={questions.length} />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={deckInfo}
        contentContainerStyle={styles.list}
      >
      </FlatList>
      <Ionicons
        name="md-add-circle"
        size={65}
        color={purple}
        style={styles.addDeck}
      />
    </View >

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 24,
    alignItems: "center"
  },
  addDeck: {
    position: "absolute",
    bottom: 25,
    right: 25
  }
});


export default DeckList;