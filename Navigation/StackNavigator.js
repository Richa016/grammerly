import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TabNavigator from './TabNavigator'
import VerbScreen from '../Screen/VerbForm'
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="VerbForm" component={VerbScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
