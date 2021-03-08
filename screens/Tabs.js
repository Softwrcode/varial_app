import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Templates} from './Templates';
const Tab = createMaterialBottomTabNavigator();

export class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ffff"
        barStyle={{backgroundColor: '#4F6D7A'}}>
        <Tab.Screen
          name="Templates"
          component={Templates}
          options={{
            tabBarLabel: 'Templates',
            tabBarIcon: ({color}) => (
              <FontAwesome name="address-card" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
export default Tabs;
