import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import * as Speech from 'expo-speech';

import { SafeAreaProvider } from 'react-native-safe-area-context';
export default class PronaunciationScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  speak = () => {
    var thingtosay = this.state.text;
    Speech.speak(thingtosay);
  };

  render() {
    console.log(this.state.text);
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text
            style={{
              backgroundColor: '#1797ff',
              fontSize: 20,
              marginTop: 10,
              color: 'black',
            }}>
            Text To speech Convertor
          </Text>
          <Text style={styles.word}>Enter the word here</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.speak();
            }}>
            <Text>Click here to hear the speech</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              var word = this.state.text;

              alert('this Word is not available');
            }}></TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBox: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  button: {
    marginTop: 100,
    width: '100%',
    fontSize: 20,
    alignSelf: 'center',
    height: 40,
    borderRadius: 100,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
    backgroundColor: '#1797ff',
  },
  word: {
    marginTop: 10,
    width: '80%',
    fontSize: 20,
    height: 40,
    textAlign: 'center',
    borderWidth: 0,
    color: 'black',
    outline: '0',
  },
  img: {
    width: 150,
    height: 150,
    marginTop: 5,
    marginLeft: 90,
  },
});
