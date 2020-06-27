import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, blue, red } from '../utils/colors'

const Deck = ({ deckId }) => {
  const noOfQuestions = 3;

  const addCard = () => { }
  const startQuiz = () => { }
  const deleteDeck = () => { }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.questions}>Deck has {noOfQuestions} Cards</Text>
        <TouchableOpacity
          style={styles.addCard}
          onPress={addCard}>
          <Text style={{ color: blue, textAlign: "center" }}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startQuiz}
          onPress={startQuiz}>
          <Text style={{ color: white, textAlign: "center" }}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteDeck}
          onPress={deleteDeck}>
          <Text style={{ color: red, textAlign: "center" }}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    height: "35%",
    justifyContent: "space-between"
  },
  startQuiz: {
    width: 140,
    padding: 15,
    backgroundColor: blue,
    borderRadius: 15
  },
  addCard: {
    width: 140,
    padding: 15,
    borderWidth: 1,
    borderColor: blue,
    borderRadius: 15

  }

});

export default Deck