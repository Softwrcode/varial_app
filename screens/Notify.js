import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Body, Text, List, ListItem, Image, Thumbnail, Left,Button, Right, View } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
export  class Notify extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = () =>{
    this.props.navigation.navigate('Invites');
   }
  render() {
    return (
      <Container>
        <ScrollView>
      <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/logo93.jpg')} />
              </Left>
              <Body>
              <Text style={styles.labelTxt}>Kumar Pratik</Text>
                <View style={{flexDirection:'row'}}>
                <Button  style={styles.buttonConfirm}>
            <FontAwesome name="user-o"  size={20} style={{color:'#ffff',marginLeft:10}}/>
            <Text style={styles.notifyText} >Confirm</Text>
          </Button>
          <Button  style={styles.buttonCancel}>
            <FontAwesome name="close"  size={20} style={{color:'#ffff',marginLeft:10}}/>
            <Text style={styles.notifyText}>Cancel</Text>
          </Button>
          </View>
          </Body>
            </ListItem>
          </List>
          </ScrollView>
      </Container>
    );
  }
}


export default Notify;
// css styles for notify screen
const styles = StyleSheet.create({
  notifyText:{
    color:'#ffff',
    marginRight:10,
    textAlign:'right'
  },
  buttonConfirm:{
    borderRadius:6,
    height:30,
    backgroundColor:'#ff3300',
    marginRight:15
  },
  buttonCancel:{
    borderRadius:6,
    height:30,
    backgroundColor:'#e1e1d0',
    marginRight:15
  },
  labelTxt:{
    fontSize:16,
    marginBottom:10
  }
});

