import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, blue, red, lightBlue } from '../utils/colors'
import { connect } from 'react-redux'
import { removeDeckHandler } from '../actions'

const Deck = ({ decks, route, navigation, dispatch }) => {

  let title, deck, noOfQuestions = 0;
  if (route) {
    title = route.params.title;
    deck = decks[title];
    noOfQuestions = deck ? deck.questions.length : 0;/*this is for handling bug 
                                                              as after deleting deck state updates
                                                              before moving to home screen therefore
                                                              there will be no question
                                                              */
    navigation.setOptions({ title: title });
  }

  const addCard = () => { }
  const startQuiz = () => { }
  const deleteDeck = () => {
    //deleting from async storage then from store
    dispatch(removeDeckHandler(title));
    navigation.navigate("Flash Cards");
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={{ textAlign: "center", color: lightBlue }}>{title} has {noOfQuestions} Cards</Text>
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
const mapStateToProps = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(Deck)