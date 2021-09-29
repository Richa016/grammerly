import * as React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from '../Config'
export default class Login extends React.Component {
  constructor(){
    super()
    this.state={
      emailid:'',
      password:'',
    }
  }
  login= async(email,password)=>{
if(email && password){
 try{
const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              this.props.navigation.navigate('FeedScreen')
            }
          }
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                alert("user dosen't exists")
                break
              case 'auth/invalid-email':
                alert('incorrect email or password')
                break
            }
          }
        }
        else{
            alert('enter email and password');
        }
      }

 

  
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: '#00074ef6',
        }}>
        <View>
          <Text
            style={{
              fontSize: 24,
              marginTop: 5,
              color: 'white',
              alignSelf: 'center',
            }}>
            Grammerly
          </Text>
        </View>
        <View>
          
          <TextInput
            style={{
              width: 300,
              height: 35,
              marginTop: 20,
              borderRadius: 13,
              fontSize: 20,
              margin: 10,
              backgroundColor: 'white',
            }}
            placeholder="emailid"
            keyboardType="email-address"
            onChangeText={(a) => {
              this.setState({
                emailid: a,
              });
            }}
          />
          <TextInput
            style={{
              width: 300,
              height: 35,
              marginTop: 20,
              borderRadius: 13,
              fontSize: 20,
              margin: 10,
              backgroundColor: 'white',
            }}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(a) => {
              this.setState({
                password: a,
              });
            }}
          />
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              borderRadius: 7,
              backgroundColor: 'white',
              color: 'white',
              alignSelf: 'center',
              marginTop: 20,
            }}
            onPress={() => {
              this.login(this.state.emailid, this.state.password);
            }}
            >
            <Text style={{ textAlign: 'center', fontSize: 15 }}>login</Text>
          </TouchableOpacity>
                </View>
      </KeyboardAvoidingView>
    );
  }
}
