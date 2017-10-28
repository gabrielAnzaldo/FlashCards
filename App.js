import React, { Component } from 'react';
import { Platform, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import reducer from './reducer';

import Home from './components/Home';
import Quiz from './components/Quiz';
import CreateDeck from './components/Deck/CreateDeck';
import Deck from './components/Deck/Deck';
import AddCard from './components/AddCard';

import { white, purple } from './utils/colors';
import { setLocalNotification } from './utils/utils';

const Stack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck',
    },
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      title: 'Create Deck',
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
});

DrawerNavigator(
  {
    Home: {
      screen: Stack,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: () => <FontAwesome name="home" size={30} />,
      },
    },
    CreateDeck: {
      screen: CreateDeck,
      navigationOptions: {
        drawerLabel: 'Create Deck',
        drawerIcon: () => <FontAwesome name="plus" size={30} />,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    drawerOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 55,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
      },
    },
  },
);

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <StatusBar translucent backgroundColor={purple} />
          <Stack />
        </View>
      </Provider>
    );
  }
}
