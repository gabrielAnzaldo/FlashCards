import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../utils/styles';

class Quiz extends Component {
  constructor(props) {
    super(props);
    const { deck } = this.props.navigation.state.params;
    const cards = deck.questions;

    this.state = {
      right: 0,
      wrong: 0,
      at: 0,
      deck,
      cards,
      cardsLength: cards.length,
      answerAsText: '',
    };
  }

  answerQuestion(guess) {
    const card = this.state.cards[this.state.at];
    if (guess === card.answer) {
      this.setState(prevState => ({ answerAsText: '', right: prevState.right + 1, at: prevState.at + 1 }));
    } else {
      this.setState(prevState => ({ answerAsText: '', wrong: prevState.wrong + 1, at: prevState.at + 1 }));
    }
  }

  startOver() {
    this.setState({ at: 0, right: 0, wrong: 0 });
  }

  render() {
    if (this.state.cards[this.state.at]) {
      return (
        <View style={styles.QuizContainer}>
          <ScrollView>
            <Text style={{ marginTop: 10, marginBottom: 50, textAlign: 'center' }}>
              {this.state.deck.title} Quiz
            </Text>
            <Text style={styles.headTextCenter}>{this.state.cards[this.state.at].question}</Text>
            <Text style={{ margin: 20, textAlign: 'center' }}>
              {this.state.answerAsText}
            </Text>
            <TouchableOpacity
              style={styles.btnOne}
              onPress={() => this.setState({
                answerAsText: String(this.state.cards[this.state.at].answer),
              })}
            >
              <Text>Show Answer</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                style={styles.btnGreen}
                onPress={() => this.answerQuestion(true)}
              >
                <Text>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnLightBlue}
                onPress={() => this.answerQuestion(false)}
              >
                <Text>Incorrect</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{ margin: 10 }}>Right: {this.state.right}</Text>
              <Text style={{ margin: 10 }}>Wrong: {this.state.wrong}</Text>
            </View>
            <Text style={{ marginTop: 30, marginBottom: 30, textAlign: 'center' }}>
              {`${this.state.at + 1}/${this.state.cardsLength}`} Quesions
            </Text>
            <TouchableOpacity style={styles.btnRed} onPress={() => this.startOver()}>
              <Text>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOne} onPress={() => this.props.navigation.goBack()}>
              <Text>Back To Deck</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      );
    }

    return (
      <View style={styles.QuizContainer}>
        <ScrollView>
          <Text style={{ marginTop: 50, marginBottom: 50, textAlign: 'center' }}>
            {this.state.deck.title} Quiz
          </Text>
          <Text style={styles.headText}>Quiz Over!</Text>
          <Text>Your Score: {((this.state.right / this.state.cardsLength) * 100).toFixed(2)}%</Text>
          <TouchableOpacity style={styles.btnLightBlue} onPress={() => this.startOver()}>
            <Text>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOne} onPress={() => this.props.navigation.goBack()}>
            <Text>Back To Deck</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

Quiz.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Quiz;
