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
export default class IdiomsScreem extends React.Component {
  render(){
    return(
      <View>
      <Text> Idiom - I could eat a horse
      Meaning - I feel extremely hungry.
      Example - I'm so hungry I could eat a horse.
      </Text>
       <Text> Idiom - Add insult to injury 
      Meaning - I feel extremely hungry.
      Example - to add insult to injury, they refused to pay my expenses.
      </Text>
     
      </View>
    )
  }
}