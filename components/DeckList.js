import React, { useEffect } from 'react'
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import Deckinfo from '../components/Deckinfo'
import { purple, lightBlue } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { receiveDataHandler } from '../actions'

const DeckList = ({ navigation, decks, isLoaded, dispatch }) => {
  // const Data = [{ title: "Test", questions: [{ question: "Test", answer: "Test Answer" }] }];

  useEffect(() => {
    dispatch(receiveDataHandler());
  }, []);

  const deckInfo = ({ item }) => {
    const { title, questions } = item;
    return (
      <Deckinfo
        title={title}
        key={title}
        onPress={() => navigation.navigate("Deck", { title })}
        noOfQuestions={questions.length} />
    );
  }

  let content = (
    <View style={styles.container}>
      <ActivityIndicator style={{ alignSelf: "center" }} />
    </View>
  );
  let list;
  if (isLoaded) {
    if (decks.length > 0) {
      list = (
        <FlatList
          data={decks}
          renderItem={deckInfo}
          contentContainerStyle={styles.list}
        >
        </FlatList>);
    }
    else
      list = (
        <Text
          style={styles.noDeckMsg}>
          No Deck Exists Currently,You can Create a new One
        </Text>);

    content = (
      <View style={styles.container}>
        {list}
        <Ionicons
          name="md-add-circle"
          size={65}
          color={purple}
          style={styles.addDeck}
          onPress={() => { navigation.navigate("Create Deck") }}
        />
      </View>
    );
  }


  return content;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 24,
    alignItems: "center"
  },
  noDeckMsg: {
    padding: 24,
    textAlign: "center",
    color: lightBlue
  },
  addDeck: {
    position: "absolute",
    bottom: 25,
    right: 25
  }
});

const mapStateToProps = ({ decks, isLoaded }) => ({
  decks: Object.values(decks),
  isLoaded
});

export default connect(mapStateToProps)(DeckList);