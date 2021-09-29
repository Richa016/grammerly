import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import DashboardScreen from './Screen/DashboardScreen'
import LoginScreen from './Screen/LoginScreen';
import LoadingScreen from './Screen/LoadingScreen';
import firebase from 'firebase';
import { firebaseConfig } from './Config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
});
const AppNavigator = createAppContainer(AppSwitchNavigator);
export default function App() {
  return <AppNavigator/>;
  }
