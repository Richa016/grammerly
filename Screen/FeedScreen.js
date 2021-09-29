import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';
import IdiomsScreen from './IdiomScreen';
import PronaunciationScreen from './PronaunciationScreen';
import VerbScreen from './VerbForm';
let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};
export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      dropdownHeight: 40,
      idiom: '',
      synonyms: '',
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            style={{ flex: 1, resizeMode: 'cover' }}
            source={require('../assets/Background.jpg')}>
            <SafeAreaView style={styles.droidSafeArea} />

            <Text
              style={{
                fontSize: 20,
                marginTop: 0,
                fontFamily: 'Bubblegum-Sans',
                color: 'white',
                alignSelf: 'center',
              }}>
              {' '}
              Grammerly{' '}
            </Text>

            <ScrollView>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('IdiomsScreen')
                  }>
                  <Text style={styles.appTitleText}> Idioms</Text>
                </TouchableOpacity>
                <DropDownPicker
                  items={[
                    {
                      label: ' Add insult to injury (part of a sentence) ',
                      value:
                        'to add another bad situation on top of an existing one.',
                    },
                    {
                      label: 'Spill the beans ',
                      value: 'To reveal someOne truth',
                    },
                    { label: 'Up in the air', value: ' Incomplete things' },
                    {
                      label: 'Piece of a cake',
                      value: 'Something which is easy',
                    },
                    {
                      label: ' Kill two birds with one stone',
                      value: ': to achieve two things by doing a single action',
                    },
                    {
                      label: 'cat got your tongue ',
                      value:
                        'Used to ask someone that one cherishes  above  all other.',
                    },
                    {
                      label: ' A blessing in a disguise',
                      value: 'a good thing that seemed bad first',
                    },
                    {
                      label: 'A dime a dozen',
                      value: 'Something is common not unique ',
                    },
                    {
                      label: 'Cup of  tea ',
                      value: 'Something you enjoy',
                    },
                    {
                      label: ' speak of devil',
                      value:
                        'The person you are just talking about actually appears at that movement ',
                    },

                    {
                      label: 'see eye to eye',
                      value: 'Agreeing with someone',
                    },

                    {
                      label: 'Hell freezes Over',
                      value: ' When we think that somethig will never happen',
                    },

                    {
                      label: 'cliond Smeone Judgement',
                      value: 'To cause Someone to be unable to think',
                    },

                    {
                      label: 'Birds of feather flop together',
                      value: 'Two people or thinks are similar to each other',
                    },

                    {
                      label: 'Let the cat out of the bag',
                      value: 'Reveal a secret by mistake',
                    },

                    {
                      label: 'Judge a book by its cover',
                      value:
                        'You shouldn’t make judgements based on appearance.',
                    },
                    {
                      label: 'Steal someone’s thunder',
                      value: 'diverted attention away from me',
                    },

                    {
                      label: 'Rattle your saber',
                      value: 'To make agrresive',
                    },

                    {
                      label: 'Under the skin',
                      value: 'To iritate by someone',
                    },

                    {
                      label: 'Pictures paints in a thousand walls',
                      value:
                        'A visual Image which is more discriptive than words',
                    },

                    {
                      label: 'The last straw',
                      value:
                        'The final source of irritation for someone to finally lose patience',
                    },

                    {
                      label: 'Break a leg',
                      value: 'good luck',
                    },

                    {
                      label: 'To cut corners',
                      value: 'to do something badly or cheaply.',
                    },

                    {
                      label: 'To cost an arm and a leg',
                      value: 'something is very expensive.',
                    },

                    {
                      label: 'The best of both worlds',
                      value:
                        ' means you can enjoy two different opportunities at the same time',
                    },

                    {
                      label: 'When pigs fly',
                      value: 'something that will never happen',
                    },

                    {
                      label: 'Once in a blue moon',
                      value: 'an event that happens infrequently.',
                    },

                    {
                      label: 'Cream of the top',
                      value: 'The best',
                    },

                    {
                      label: 'To feel under the weather',
                      value: 'to not feel well.',
                    },

                    {
                      label: 'Beat around the bush',
                      value: "To avoid talking about what's important",
                    },
                    {
                      label: 'Hit the sack',
                      value: 'Go to sleep',
                    },

                    {
                      label: 'Under the weather',
                      value: 'Not well, slightly sick or ill.',
                    },

                    {
                      label: 'Cool as a cumcumber',
                      value: 'Very relaxed',
                    },

                    {
                      label: 'Bad fix ',
                      value: 'Difficult Situation',
                    },

                    {
                      label: 'Twist of fate',
                      value: 'The things that happens by chance',
                    },
                    {
                      label: 'Switches ends up ditches',
                      value:
                        'people who tell on others  end up with consequences (such as injury) ',
                    },
                    {
                      label: 'Off the hook ',
                      value: 'No longer in a diffuculty Or toublrOr work',
                    },
                    {
                      label: 'Epic Fails',
                      value: 'Great Disaster',
                    },
                    {
                      label: 'Miss the boat ',
                      value: 'Miss a chance',
                    },
                    {
                      label: 'Hit the road ',
                      value: 'Journey begins',
                    },
                    {
                      label: 'A tough cookie',
                      value:
                        ' Determined and physically or emotionally strong.',
                    },
                    {
                      label: 'Have butterflies in your stomach',
                      value: 'excited and nervous.',
                    },
                    {
                      label: 'I could eat a horse',
                      value: 'I feel extremely hungry.',
                    },
                    {
                      label: 'By the skin of your teeth',
                      value: 'By the smallest possible amount of time.',
                    },
                  ]}
                  defaultValue={this.state.idiom}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: 'transparent' }}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  dropDownStyle={{ backgroundColor: '#fae900' }}
                  labelStyle={{
                    color: 'white',
                    fontFamily: 'Bubblegum-Sans',
                  }}
                  arrowStyle={{
                    color: 'white',
                    fontFamily: 'Bubblegum-Sans',
                  }}
                  onChangeItem={(item) =>
                    this.setState({
                      idiom: item.value,
                    })
                  }
                />
                <TextInput
                  style={{
                    marginTop: 15,
                    width: '80%',
                    alignSelf: 'left',
                    height: 35,
                    textAlign: 'left',
                    borderWidth: 2,
                    outline: 'none',
                    borderColor: 'white',
                  }}
                  placeholder="Meanings of Idioms"
                  value={this.state.idiom}
                />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('VerbScreen')}>
                  <Text style={styles.appTitleText}> Verbs Forms</Text>
                </TouchableOpacity>
                <Text style={styles.appTitleText}> Synonyms </Text>

                <DropDownPicker
                  items={[
                    { label: 'abandon', value: 'leave , ditch' },
                    {
                      label: 'abundant',
                      value: ' ample , plentiful, generous',
                    },
                    { label: 'Accomplish', value: 'Achieve,attain,finish' },
                    { label: 'Ache', value: 'pain,hurt,suffer' },
                    { label: 'adequate', value: 'enough,sufficient,capable' },
                    {
                      label: 'adequate ',
                      value: 'enough , sufficient , capable ',
                    },
                    { label: 'admire ', value: 'respect  , esteem, praise  ' },
                    { label: 'affluent ', value: 'rich, wealthy, prosperous ' },
                    { label: 'affirmative', value: 'agreement,approval' },
                    {
                      label: 'always ',
                      value: 'regular,Consistently , constantly ',
                    },
                    {
                      label: 'Angry ',
                      value: 'agreement, enraged , Irritated ',
                    },
                    { label: 'Award', value: 'present ,grant , give ' },
                    { label: 'barren', value: 'dry ,desert , treeless ' },
                    {
                      label: 'beautiful ',
                      value: 'pretty , attractive,lovely',
                    },
                    { label: 'big', value: 'large, enormous,great' },
                    {
                      label: 'boring ',
                      value: 'courageous, unafraid ,daring ',
                    },
                    {
                      label: 'bright',
                      value: 'shining , radiant , illuminated',
                    },
                    { label: ' broad ', value: 'wide , vast , spacious ' },
                    {
                      label: 'broad - minded ',
                      value: 'liberal , tolerate, free thinking ',
                    },
                    { label: 'careful', value: 'cautious , watchful ,alert ' },
                    { label: 'change ', value: 'modify , transform , alter' },
                    { label: 'chat', value: 'gossip , talk , conversation' },
                    { label: 'cheat ', value: 'decieve , fool ,trick' },
                    { label: 'cheerful ', value: 'glad , happy , joyful' },
                    { label: 'clever', value: 'smart , brainy , intelligent' },
                    { label: 'collect', value: 'gather, assemble,same' },
                    { label: 'confident', value: 'sure , certain , positive' },
                    { label: 'confuse', value: 'puzzle , upset , bewildere' },
                    { label: 'crazy', value: 'mad , insane , silly' },
                    {
                      label: 'custom',
                      value: 'traditional, practice, characteristics',
                    },

                    { label: 'dangerous', value: 'falat , risky ,unsafe' },
                    { label: 'defect', value: 'flaw,error, fault' },
                    { label: 'delete', value: 'erase , remove , interested' },
                    { label: 'eager', value: 'keen, enthusiastic, interested' },
                    {
                      label: 'easy ',
                      value: 'effortless , comfortable , relaxed ',
                    },
                    {
                      label: 'encourage',
                      value: 'uplift, inspire , motivated',
                    },
                    {
                      label: 'enjoy ',
                      value: 'like , be pleased , appreciate',
                    },
                    { label: 'enemy', value: 'opponent,rival, competitor' },
                    {
                      label: 'famous',
                      value: 'renowned ,eminent, celebrated ',
                    },
                  ]}
                  defaultValue={this.state.synonyms}
                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10,
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: 'transparent' }}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  dropDownStyle={{ backgroundColor: '#ebdc12' }}
                  labelStyle={{
                    color: 'white',
                    fontFamily: 'Bubblegum-Sans',
                  }}
                  arrowStyle={{
                    color: 'white',
                    fontFamily: 'Bubblegum-Sans',
                  }}
                  onChangeItem={(item) =>
                    this.setState({
                      synonyms: item.value,
                    })
                  }
                />
                <TextInput
                  style={{
                    marginTop: 15,
                    width: '80%',
                    alignSelf: 'left',
                    height: 55,
                    textAlign: 'left',
                    borderWidth: 2,
                    outline: 'none',
                    borderColor: 'white',
                  }}
                  placeholder="Snonyms"
                  value={this.state.synonyms}
                />

                <Text style={styles.appTitleText}>
                  {' '}
                  Passive and Active Voices
                </Text>
                <Text style={styles.appTitleText}> Tenses</Text>
                <Text style={styles.appTitleText}> Brain Twisters</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("PronaunciationScreen")
                  }>
                  <Text style={styles.appTitleText}>PronaunciationScreen</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },

  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
    marginTop: 15,
    width: '80%',
    alignSelf: 'left',
    height: 25,
    textAlign: 'left',
    borderWidth: 2,
    outline: 'none',
    borderColor: 'white',
  },
  cardContainer: {
    flex: 0.85,
  },
});
