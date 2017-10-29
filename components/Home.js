import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../utils/styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.updateHome = this.updateHome.bind(this);
  }

  state = {
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 500 }).start();
  }

  getKey = item => item.id;

  makeListItem = deciItem => (
    <TouchableHighlight
      style={styles.deckItemBtn}
      onPress={() => this.props.navigation.navigate(
        'Deck',
        {
          deckId: deciItem.item.id,
          updateHome: this.updateHome,
        },
      )}
    >
      <View style={styles.deckItemView}>
        <Text style={styles.headText}>{deciItem.item.title}</Text>
        <Text style={{ justifyContent: 'center' }}>
          {`${deciItem.item.questions.length} Card(s)`}
        </Text>
      </View>
    </TouchableHighlight>
  );

  buildDecksList() {
    const decks = [];
    Object.keys(this.props.decks).forEach((deckId) => {
      const deck = this.props.decks[deckId];
      decks.push(deck);
    });
    return decks;
  }

  updateHome(callback) {
    this.forceUpdate(() => {
      if (callback) {
        callback();
      }
    });
  }

  render() {
    const decksLength = Object.keys(this.props.decks).length;
    if (decksLength <= 0) {
      const { opacity } = this.state;
      return (
        <View style={styles.HomeContainerOne}>
          <Animated.View style={{ opacity }}>
            <Text style={{ textAlign: 'center' }}>No Decks</Text>
            <TouchableOpacity
              style={styles.btnOne}
              onPress={() => this.props.navigation.navigate(
                'CreateDeckView',
                {
                  updateHome: this.updateHome,
                },
              )}
            >
              <Text>Create Deck</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      );
    }

    const decksList = this.buildDecksList();

    return (
      <View style={styles.deckListContainer}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: 30, justifyContent: 'center', textAlign: 'center' }}>
            {`${decksList.length} Deck(s)`}
          </Text>
          <TouchableOpacity
            style={styles.btnOne}
            onPress={() => this.props.navigation.navigate(
              'CreateDeck',
              {
                updateHome: this.updateHome,
              },
            )}
          >
            <Text>Create Deck</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerThree}>
          <FlatList
            style={styles.list}
            data={decksList}
            renderItem={this.makeListItem}
            keyExtractor={this.getKey}
          />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = decks => ({ decks });

export default connect(mapStateToProps)(Home);
