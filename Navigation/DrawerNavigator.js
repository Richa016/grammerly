import * as  React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import ProfileScreen from '../Screen/ProfileScreen'
import TabNavigator from './TabNavigator'
import CreateScreen from '../Screen/CreateScreen'
const Drawer = createDrawerNavigator()
export default class DrawerNavigator extends React.Component{
  render(){
    return(
      <Drawer.Navigator screenOptions= {{headerShown:false}}>
       <Drawer.Screen
      name='Home'
      component={TabNavigator}
      />
     
      <Drawer.Screen
      name='Profile'
      component={ProfileScreen}
      />
      
      </Drawer.Navigator>
    )
  }
}