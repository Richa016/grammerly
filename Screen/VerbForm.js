import * as React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
export default class VerbScreen extends React.Component{
  render(){
    return(
      <View>
      <Image
      style={styles.img}
      source={require('../assets/Verb1.jpg')}
      />
            <Image
      style={styles.img}
      source={require('../assets/Verb2.jpg')}
      />
            <Image
      style={styles.img}
      source={require('../assets/Verb3.jpg')}
      />
      <Image
      style={styles.img}
      source={require('../assets/Verb4.jpg')}
      />
      <Image
      style={styles.img}
      source={require('../assets/Verb5.jpg')}
      />
      <Image
      style={styles.img}
      source={require('../assets/Verb6.jpg')}
      />
      <Image
      style={styles.img}
      source={require('../assets/verb7.jpg')}
      />
     
      </View>
    )
  }
}
const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    marginTop: 5,
    marginLeft: 90,
  },

})