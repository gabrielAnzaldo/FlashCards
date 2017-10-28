import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../utils/styles';
import { operateDeck } from '../../actions';
import { newDeck } from '../../utils/NewCard';

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
    this.props.navigation.state.params.updateHomeView(() => {
      this.props.navigation.navigate(
        'Deck',
        {
          deck_id: deck.id,
          updateHomeView: this.props.navigation.state.params.updateHomeView,
        },
      );
    });
  }

  render() {
    return (
      <View style={styles.NewDeckcontainer}>
        <Text style={{ marginTop: 50 }}>Create Deck View</Text>

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
  navigation: PropTypes.shapeOf({
    state: PropTypes.shapeOf({
      params: PropTypes.object,
    }).isRequired,
  }).isRequired,
  operateDeck: PropTypes.func.isRequired,
};

const mapStateToProps = decks => ({
  decks,
});

const mapDispatchToProps = dispatch => (
  {
    operateDeck: deck => dispatch(operateDeck(deck)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeck);
