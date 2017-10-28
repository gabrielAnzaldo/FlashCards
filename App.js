import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is another test</Text>
      </View>
    );
  }
}

