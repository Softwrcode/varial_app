import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Body, Text, List, ListItem, Image, Thumbnail, Left,Button, Right, View, Switch } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
export  class PushNotify extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = () =>{
    this.props.navigation.navigate('Invites');
   }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.toggleButton}>
      <ToggleSwitch
  isOn={false}
  onColor="#07d94d"
  offColor="#c3c9c5"
  label="Push Notification"
  labelStyle={{ color: "black", fontSize:18 }}
  size="medium"
  onToggle={isOn => console.log("changed to : ", isOn)}
/>
            </View>
            <View style={styles.toggleButton}>
            <ToggleSwitch
  isOn={false}
  onColor="#04b52d"
  offColor="#04b52d"
  label="Email Notification"
  labelStyle={{ color: "black", fontSize:18 }}
  size="medium"
  onToggle={isOn => console.log("changed to : ", isOn)}
/>
</View>
</View>
    );
  }
}


export default PushNotify;
// css styles for notify screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  toggleButton:{
    marginTop:40,
    marginLeft:110,
    flexDirection:'row'
  }
});

