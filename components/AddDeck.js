import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAwareScrollView } from 'react-native'
import { blue, white } from '../utils/colors'
import Button from './CustomBtn'

class AddDeck extends Component {
  state = {
    title: ""
  }
  addTheDeck = () => {
    const { title } = this.state;
    console.log("adding Deck");
  }
  textChangeHandler = (text) => {
    this.setState({ title: text });
  }
  render() {
    const { title } = this.state;
    const isDisabled = title.length == 0;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>New Deck</Text>
          <ScrollView
            contentContainerStyle={styles.form}
            keyboardShouldPersistTaps="always">
            <TextInput
              maxLength={30}
              style={styles.title}
              placeholder="Deck's Title"
              name="title"
              value={title}
              onChangeText={this.textChangeHandler} />
            <Button
              style={[styles.submitBtn, (isDisabled && styles.disabledBtn)]}
              disabled={isDisabled}
              onPress={this.addTheDeck}
              title="Add Deck"
              titleStyle={styles.submitBtnTxt}
            />
          </ScrollView >
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  innerContainer: {
    height: "60 %",
  },
  form: {
    justifyContent: "center",
    flex: 1,
  },
  header: {
    fontSize: 38,
    color: blue,
    textAlign: "center"
  },
  title: {
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

export default AddDeck