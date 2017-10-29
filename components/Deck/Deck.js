import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

import styles from '../../utils/styles';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.updateDeckView = this.updateDeckView.bind(this);
  }

  updateDeckView(callback) {
    this.props.navigation.state.params.updateHome();
    this.forceUpdate(() => {
      if (callback) {
        callback();
      }
    });
  }

  startQuiz = (deck) => {
    if (deck.questions.length === 0) {
      Alert.alert('Not enough cards to start a quiz.');
    } else {
      this.props.navigation.navigate('Quiz', { deck });
    }
  }

  render() {
    const { deckId } = this.props.navigation.state.params;
    const deck = this.props.decks[deckId];
    const cardsList = deck.questions;
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.headTextCenter}>{deck.title}</Text>
            <Text style={{ textAlign: 'center' }}>{`${cardsList.length} Card(s)`}</Text>
          </View>
          <TouchableOpacity
            style={styles.btnOne}
            onPress={() => this.props.navigation.navigate(
              'AddCard',
              {
                deckId,
                updateDeckView: this.updateDeckView,
              },
            )
            }
          >
            <Text>Add Question Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLP} onPress={() => { this.startQuiz(deck); }}>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Deck.propTypes = {
  deckId: PropTypes.string.isRequired,
  decks: PropTypes.arrayOf({}).isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = decks => ({ decks });

export default connect(mapStateToProps)(Deck);
