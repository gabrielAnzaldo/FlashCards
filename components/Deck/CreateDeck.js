import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../utils/styles';
import { operateDeck } from '../../actions';
import { newDeck } from '../../utils/utils';

class CreateDeck extends Component {
  state = {
    title: '',
    msg: '',
  }

  checkInput() {
    if (this.state.title.length < 3) {
      // alert('Title Must Be At Least 3 Characters Long');
    }
    this.createDeck();
  }

  createDeck() {
    const deck = newDeck(this.state.title);
    this.props.operateDeck(deck);
    this.props.navigation.state.params.updateHome(() => {
      this.props.navigation.navigate(
        'Deck',
        {
          deckId: deck.id,
          updateHome: this.props.navigation.state.params.updateHome,
        },
      );
    });
  }

  render() {
    return (
      <View style={styles.NewDeckcontainer}>
        <Text style={{ marginTop: 50 }}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textField}
          placeholder="Title"
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
        />
        <TouchableOpacity style={styles.btnBlue} onPress={() => this.checkInput()}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 30 }}>{this.state.msg}</Text>
      </View>
    );
  }
}

CreateDeck.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  operateDeck: PropTypes.func.isRequired,
};

const mapStateToProps = decks => ({ decks });

const mapDispatchToProps = dispatch => ({ operateDeck: deck => dispatch(operateDeck(deck)) });

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeck);
