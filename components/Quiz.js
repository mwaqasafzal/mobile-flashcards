import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Button from './CustomBtn'
import { red, green, lightBlue, blue } from '../utils/colors'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    questions: null,
    score: 0,
    questionNo: 0,
    showAnswer: false
  }

  componentDidMount() {
    //when screen will load only then this code(listener )will execute
    const { route, decks, navigation } = this.props;

    navigation.addListener('focus', () => {
      const title = route.params.title;
      const questions = decks[title].questions;
      navigation.setOptions({ title });
      this.setState({ questions });
    });
    navigation.addListener('blur', () => {
      this.setState({ questions: null, showAnswer: false, score: 0, questionNo: 0 });
    });

  }
  checkAnswer = result => {
    let { questionNo, questions, score } = this.state;
    const { navigation, route } = this.props;
    if (result === "correct")
      score++;
    questionNo++;

    if (questionNo === questions.length)
      return navigation.navigate("Score", {
        score,
        questions: questionNo,
        title: route.params.title //if user wants to take the quiz again,this would to it him here
      });//at that time questionNo will be equal to total questions
    this.setState({ score, questionNo });

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
          <ActivityIndicator />
        </View>);
    }
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
    justifyContent: "center",
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
    color: blue,
    margin: 25,
    textAlign: "center"
  },
  answer: {
    fontSize: 28,
    color: lightBlue,
    margin: 25,
    textAlign: "center"
  },
  questionsCount: {
    color: blue,
    fontSize: 24,
    position: "absolute",
    top: 65,
    left: 20
  }
});
const mapStateToProps = ({ decks }) => ({
  decks
})

export default connect(mapStateToProps)(Quiz)
