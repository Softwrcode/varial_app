import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Body, Text, List, ListItem, Image, Thumbnail, Left,Button, Right, View, Switch, Content } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
export  class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
       <Content>
          <List>
            <ListItem>
              <Text>kumar pradik</Text>
            </ListItem>
            <ListItem >
              <Text>Test</Text>
            </ListItem>
            <ListItem>
              <Text>Maveric</Text>
            </ListItem>
            <ListItem>
              <Text>John</Text>
            </ListItem>
            <ListItem>
              <Text>High quality</Text>
            </ListItem>
          </List>
        </Content>
 </View>
    );
  }
}


export default History;
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

