import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../Screen/FeedScreen'
import CreateScreen from '../Screen/CreateScreen'

const Tab = createBottomTabNavigator()
const TabNavigator=()=>{
  return(
  <Tab.Navigator
  screenOptions={({route})=> ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Create') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      
      tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}
  >
  <Tab.Screen  name ='Feed'  component={FeedScreen}/>
  <Tab.Screen  name ='Create'  component={CreateScreen}/>
  
  
  </Tab.Navigator>
  )
}
export default TabNavigator