import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';
import styles from '../utils/styles';
import { operateCard } from '../actions';
import { newCard } from '../utils/NewCard';

class AddCard extends Component {
  state = {
    question: '',
    answer: false,
    msg: '',
  };

  checkInput() {
    if (this.state.question < 3) {
      // alert('Empty values are not allowed');
    } else {
      this.addCard();
    }
  }

  addCard() {
    const { deckId } = this.props.navigation.state.params;
    const card = newCard(this.state.question, this.state.answer);
    this.props.operateCard(card, deckId);
    this.props.navigation.state.params.updateDeckView(() => {
      this.setState({ msg: 'New Card Added!', question: '', answer: false }, () => {
        setTimeout(() => {
          this.setState({ msg: '' });
        }, 2000);
      });
    });
  }

  render() {
    const id = this.props.navigation.state.params.deckId;
    const deck = this.props.decks[id];
    return (
      <View style={styles.NewDeckcontainer}>
        <Text style={{ marginTop: 50 }}>Add Card To {deck.title} Deck</Text>
        <TextInput
          style={styles.textField}
          placeholder="Enter Question"
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
        />
        <Text style={{ margin: 20 }}>Set The Answer</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 20 }}>False</Text>
          <Switch
            value={this.state.answer}
            onValueChange={value => this.setState({ answer: value })}
          />
          <Text style={{ marginLeft: 20 }}>True</Text>
        </View>
        <Text style={{ marginTop: 30 }}>{this.state.msg}</Text>
        <Text style={{ margin: 15 }} />
        <TouchableOpacity style={styles.btnBlue} onPress={() => this.checkInput()}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AddCard.propTypes = {
  deckId: PropTypes.string.isRequired,
  navigation: PropTypes.shapeOf({
    state: PropTypes.shapeOf({
      params: PropTypes.object,
    }).isRequired,
  }).isRequired,
  decks: PropTypes.arrayOf(PropTypes.objectOf({})).isRequired,
  operateCard: PropTypes.func.isRequired,
};

const mapStateToProps = decks => ({ decks });

const mapDispatchToProps = dispatch => ({
  operateCard: (card, deckId) => dispatch(operateCard(card, deckId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
