import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { blue, red } from '../utils/colors'
import Button from './CustomBtn'

const Score = ({ route, navigation }) => {
  let score = 0;
  let questions = 0;
  let title = ""
  if (route) {
    score = route.params.score;
    questions = route.params.questions;
    title = route.params.title;
  }
  return (
    <View style={styles.container}>
      <View style={styles.scorePannel}>
        <Text style={styles.scoreMsg}>Your Score!</Text>
        <Text style={styles.score}>{score}/{questions}</Text>
      </View>
      <View style={styles.btnPannel}>
        <Button
          title="Quiz Again"
          style={styles.quizAgainBtn}
          onPress={() => { navigation.navigate("Take Quiz", { title }) }}
        />
        <Text
          title="Go Home"
          style={{ color: red, textAlign: "center", textDecorationStyle: "solid" }}
          onPress={() => { navigation.navigate("Flash Cards") }}
        >Go Home</Text>
      </View>

    </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  },
  scoreMsg: {
    fontSize: 32,
    color: blue,
    margin: 10
  },
  score: {
    fontSize: 24,
    color: blue
  },
  quizAgainBtn: {
    backgroundColor: blue,
    borderRadius: 15,
    padding: 10,
    margin: 10
  },
  btnPannel: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  scorePannel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Score