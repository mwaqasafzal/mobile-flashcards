import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAwareScrollView } from 'react-native'
import { blue, white } from '../utils/colors'
import { addCardHandler } from '../actions'
import { connect } from 'react-redux'

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  }
  addTheCard = () => {
    const { question, answer } = this.state;
    const { route, navigation, dispatch } = this.props;
    const deckCard = {
      deckId: route.params.title,
      card: {
        question,
        answer
      }
    }
    dispatch(addCardHandler(deckCard));
    navigation.navigate("Flash Cards");
  }
  textChangeHandler = (type, text) => {
    if (type === "question")
      this.setState({ question: text });
    else
      this.setState({ answer: text });
  }
  render() {
    const { question, answer } = this.state;
    const isDisabled = question.length == 0 || answer.length == 0;
    return (
      <ScrollView contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">

        <TextInput
          multiline
          maxLength={140}
          style={styles.question}
          placeholder="Question"
          name="question"
          value={question}
          onChangeText={(text) => this.textChangeHandler("question", text)} />

        <TextInput
          multiline
          maxLength={140}
          style={styles.answer}
          placeholder="Answer"
          name="answer"
          value={answer}
          onChangeText={(text) => this.textChangeHandler("answer", text)} />

        <TouchableOpacity
          style={[styles.submitBtn, (isDisabled && styles.disabledBtn)]}
          disabled={isDisabled}
          onPress={this.addTheCard} >
          <Text style={styles.submitBtnTxt}>Add Card</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40
  },
  question: {
    borderBottomWidth: 1,
    borderBottomColor: blue,
    marginBottom: 40,
    fontSize: 16

  },
  answer: {
    borderBottomWidth: 1,
    borderBottomColor: blue,
    marginBottom: 40,
    fontSize: 16
  },
  submitBtn: {
    backgroundColor: blue,
    padding: 12,
    borderRadius: 20
  },
  submitBtnTxt: {
    textAlign: "center",
    color: white,
    fontSize: 18
  },
  disabledBtn: {
    backgroundColor: "rgba(39,73,109,0.5)",
  }
})

export default connect()(AddCard)