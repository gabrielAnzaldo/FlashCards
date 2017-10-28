import { StyleSheet } from 'react-native';
import { black, red, gray, blue, lightPurp } from './colors';

const styles = StyleSheet.create({
  headText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  headTextCenter: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnOne: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: gray,
    borderRadius: 3,
  },
  btnBlue: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: blue,
    borderRadius: 3,
  },
  btnRed: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: red,
    borderRadius: 3,
  },
  btnLP: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: lightPurp,
    borderRadius: 3,
  },
  textWhite: {
    color: '#fff',
  },
  textBlack: {
    color: black,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  HomeContainerOne: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  NewDeckcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  QuizContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  container_two: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 10,
  },
  container_three: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  },
  textField: {
    height: 45,
    width: 275,
    marginTop: 50,
    marginBottom: 20,
    padding: 3,
    borderRadius: 3,
    borderColor: gray,
    borderWidth: 1,
  },
  list: {
    flex: 1,
  },
  deckItemBtn: {
    flex: 1,
    justifyContent: 'center',
  },
  deckItemView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomColor: gray,
    padding: 10,
  },
});

export default styles;
