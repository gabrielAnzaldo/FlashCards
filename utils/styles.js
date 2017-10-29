import { StyleSheet } from 'react-native';
import { black, gray, blue } from './colors';

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
    backgroundColor: '#E53935',
    borderRadius: 3,
  },
  btnGreen: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#66BB6A',
    borderRadius: 3,
  },
  btnLP: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#0288D1',
    borderRadius: 3,
  },
  textWhite: {
    color: '#fff',
  },
  textBlack: {
    color: black,
  },
  container: {
    backgroundColor: '#fff',
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
  },
  deckListContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 10,
  },
  containerThree: {
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
    borderBottomColor: '#9E9E9E',
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default styles;
