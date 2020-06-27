import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './CustomBtn'
import { red, green, lightBlue, blue } from '../utils/colors'
class Quiz extends Component {
  state = {
    questions: null,
    score: 0,
    questionNo: 0,
    showAnswer: false
  }
  componentDidMount() {
    this.setState({ questions: [{ question: "Test", answer: "Test" }] });
  }
  checkAnswer = result => {
    if (result === "correct")
      this.setState(({ score }) => ({
        score: score + 1
      }))

  }

  toggle = () => {
    this.setState(({ showAnswer }) => ({
      showAnswer: !showAnswer
    }))
  }
  render() {
    const { questions, questionNo, showAnswer } = this.state;
    let quiz = null;
    if (!questions) {
      quiz = (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>);
    }
    else if (questions.length == 0)
      quiz = (
        <View style={styles.container}>
          <Text>No Card Found</Text>
        </View>
      )
    else {
      const { question, answer } = questions[questionNo];

      let description = (
        <View style={styles.descPannel}>
          <Text style={styles.question}>{question}</Text>
          <Text
            style={{ color: red }}
            onPress={this.toggle}>Answer</Text>
        </View>
      );
      if (showAnswer)
        description = (
          <View style={styles.descPannel}>
            <Text style={styles.answer}>{answer}</Text>
            <Text
              style={{ color: red }}
              onPress={this.toggle}>Question</Text>
          </View>
        );

      quiz = (
        <View style={styles.container}>
          <Text style={styles.questionsCount}>
            {questionNo + 1}/{questions.length}</Text>
          {description}
          <View style={styles.btnContainer}>
            <Button
              title="Correct"
              style={styles.correctBtn}
              onPress={() => this.checkAnswer("correct")}
            />
            <Button
              title="Incorrect"
              style={styles.incorrectBtn}
              onPress={() => this.checkAnswer("incorrect")}
            />
          </View>
        </View>
      );

    }

    return quiz;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10

  },

  descPannel: {
    flex: 2,
    justifyContent: "space-around",
    alignItems: "center"
  },
  btnContainer: {
    flex: 2,
    justifyContent: "flex-start"
  },
  correctBtn: {
    backgroundColor: green,
    borderRadius: 15,
    padding: 10,
    margin: 10
  },
  incorrectBtn: {
    backgroundColor: red,
    borderRadius: 15,
    padding: 10,
    margin: 10
  },
  question: {
    fontSize: 28,
    color: blue
  },
  answer: {
    fontSize: 28,
    color: lightBlue
  },
  questionsCount: {
    color: blue,
    fontSize: 24,
    position: "absolute",
    top: 65,
    left: 20
  }
});

export default Quiz
