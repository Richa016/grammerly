import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class CreateScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsLoad: false,
      previewImage: 'Nature1',
      dropdownHeight: 40,
    };
  }
  displayAlert = () => {
    alert('Your response has been Submitted');
  };
  async fontLoad() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoad: true });
  }
componentDidMount(){
  this.fontLoad()
}
  render() {
    if (!this.state.fontsLoad) {
      return <AppLoading />;
    } else {
      let preview_image = {
        nature1: require('../assets/Nature1.jpeg'),
        nature2: require('../assets/Nature2.jpg'),
        nature3: require('../assets/Nature3.jpg'),
        nature4: require('../assets/Nature4.jpg'),
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <Text>Hi</Text>
          <TextInput
            style={styles.inputFont}
            placeholder="Thought of the day"
          />
          <TextInput
            style={{
              marginTop: 15,
              width: '80%',
              height: 135,
              borderWidth: 1,
              outline: 'none',
              color: 'white',
            }}
            placeholder="Eassy"
          />
          <TouchableOpacity
            style={{ backgroundColor: 'teal' }}
            onPress={this.displayAlert}>
            <Text
              style={{
                color: 'white',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
          <Text>CreatePost</Text>

          <ScrollView>
            <Image
              source={preview_image[this.state.previewImage]}
              style={styles.previewImage}
            />
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
                item={[
                  { label: 'Nature1', value: 'nature1' },
                  { label: 'Nature2', value: 'nature2' },
                  { label: 'Nature3', value: 'nature3' },
                  { label: 'Nature4', value: 'nature4' },
                ]}
              
              defaultValue={this.state.previewImage}
              containerStyle=
              {{
                height: 40,
                borderRadius: 20,
                marginBottom: 10,
              }}
              onOpen=
              {() => {
                this.setState({ dropdownHeight: 170 });
              }}
              onClose=
              {() => {
                this.setState({ dropdownHeight: 40 });
              }}
              style={{ backgroundColor: 'transparent' }}
              itemStyle=
              {{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{ backgroundColor: '#2f345d' }}
              labelStyle=
              {{
                color: 'white',
                fontFamily: 'Bubblegum-Sans',
              }}
              arrowStyle=
              {{
                color: 'white',
                fontFamily: 'Bubblegum-Sans',
              }}
              onChangeItem=
              {(item) =>
                this.setState({
                  previewImage: item.value,
                })
              }/>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'black',
    borderWidth: RFValue(1),
    borderRadius: RFValue(1),
    paddingLeft: RFValue(1),
    color: 'black',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
});
