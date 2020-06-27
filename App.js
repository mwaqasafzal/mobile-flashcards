import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import Quiz from './components/Quiz'
import Score from './components/Score'
export default function App() {
  return <Quiz />;
}

