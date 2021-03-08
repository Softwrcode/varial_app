import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Body, Text, List, ListItem, Image, Thumbnail, Left,Button, Right, View, Switch } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
export  class LoginOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainbtn}>
        <Button  style={styles.buttonCancel}>
            <FontAwesome name="envelope"  size={20} style={{color:'#ffff',marginLeft:10}}> | </FontAwesome>
            <Text style={{color:'#ffff',marginRight:10,textAlign:'right'}}>Change Email ID</Text>
          </Button> 
        </View>
        <View style={styles.mainbtn}>
        <Button  style={styles.buttonTxt}>
            <FontAwesome name="phone"  size={20} style={{color:'#ffff',marginLeft:10}}> | </FontAwesome>
            <Text style={{color:'#ffff',marginRight:10,textAlign:'right'}}>Change Phone Number</Text>
          </Button> 
        </View>
     
 </View>
    );
  }
}


export default LoginOptions;
// css styles for notify screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  buttonCancel:{
    height:40,
    width:250,
    backgroundColor:'#417358',
    marginRight:50,
    textAlign:'right'
  },
  buttonTxt:{
    height:40,
    backgroundColor:'#727d77',
    marginRight:50,
    textAlign:'right'
  },
  mainbtn:{
    alignItems:'center',
    marginLeft:90,
    marginTop:20
  }
});

