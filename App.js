import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import React, {useState} from 'react';
// Initial Screens
import {Splash} from './screens/Splash';
import {Tabs} from './screens/Tabs';
import {Templates} from './screens/Templates';
import { AbstractScreen } from './screens/AbstractScreen';
import Otp from './screens/Otp';
import SignupEmail from './screens/SignupEmail';
import SigninEmail from './screens/SigninEmail';
import LoginPhone from './screens/LoginPhone';
import ForgetPassword from './screens/ForgetPassword';
import Home from './screens/Home';
import Notify from './screens/Notify';
import Global from './screens/Global';
import SignupPhone from './screens/SignupPhone';
import { Invites } from './screens/Invites';
import PushNotify from './screens/PushNotify';
import Language from './screens/Language';
import Feed from './screens/Feed';
import LoginOptions from './screens/LoginOptions';
import History from './screens/History';
import Settings from './screens/Settings';
const Stack = createStackNavigator();
// const Tabs = createMaterialBottomTabNavigator();



export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AbstractScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="AbstractScreen" component={AbstractScreen} />
          <Stack.Screen name="SignupPhone" component={SignupPhone} 
  options={{ title: 'SIGNUP WITH PHONE',headerShown:true,headerTitleStyle: { color: '#a19e95' }} } />
  
<Stack.Screen name="LoginPhone" component={LoginPhone} 
options={{ title: 'LOGIN WITH PHONE',headerShown:true,headerTitleStyle: { color: '#a19e95' }} } />
  <Stack.Screen name="SignupEmail" component={SignupEmail} 
options={{ title: 'SIGNUP WITH EMAIL',headerShown:true,headerTitleStyle: { color: '#a19e95' }} } />
<Stack.Screen name="SigninEmail" component={SigninEmail} 
options={{ title: 'LOGIN WITH EMAIL',headerShown:true,headerTitleStyle: { color: '#a19e95' }} } />
          <Stack.Screen name="Otp" component={Otp} options={{ title: 'OTP VALIDATION',headerShown:true,headerTitleStyle: { color: '#a19e95' }} } />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ title: 'FORGET PASSWORD',headerShown:true,headerTitleStyle: { color: '#a19e95' }} } />
          <Stack.Screen name="Home" component={Home} options={{ title: 'NOTIFICATIONS',headerShown:true,headerTitleStyle: { color: '#a19e95',justifyContent:'center' }} } />
          <Stack.Screen name="Notify" component={Notify} options={{ title: 'NOTIFICATIONS',headerShown:true,headerTitleStyle: { color: '#a19e95',justifyContent:'center' }} }/>    
          <Stack.Screen name="Global" component={Global} />
          <Stack.Screen name="Language" component={Language} options={{ title: 'SELECT LANGUAGE',headerShown:true,headerTitleStyle: { color: '#a19e95',justifyContent:'center' }} } />
          
          <Stack.Screen name="Feed" component={Feed}/>
          <Stack.Screen name="Settings" component={Settings} options={{ title: 'SETTINGS',headerShown:true,headerTitleStyle: { color: '#a19e95',justifyContent:'center' }} } />
          <Stack.Screen name="History" component={History} options={{ title: 'History',headerShown:true,headerTitleStyle: { color: '#a19e95',justifyContent:'center' }} }/>
          
          <Stack.Screen name="LoginOptions" component={LoginOptions} options={{ title: 'LOGIN OPTIONS',headerShown:true,headerTitleStyle: { color: '#a19e95',justifyContent:'center' }} }/>
          <Stack.Screen name="PushNotify" component={PushNotify} options={{ title: 'NOTIFICATIONS',headerShown:true,headerTitleStyle: { color: '#a19e95',justifyContent:'center' }} } />
          <Stack.Screen name="Invites" component={Invites} options={{ title: 'INVITE FRIENDS',headerShown:true,headerTitleStyle: { color: '#a19e95',justifyContent:'center' }} } />
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
