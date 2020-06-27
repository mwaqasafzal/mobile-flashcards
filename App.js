import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import Quiz from './components/Quiz'
import Score from './components/Score'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middlewares from './middlewares'
import reducers from './reducers'

const store = createStore(reducers, middlewares);

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Flash Cards"
        >
          <Stack.Screen name="Flash Cards" component={DeckList} />
          <Stack.Screen name="Create Deck" component={AddDeck} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Add Card" component={AddCard}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

