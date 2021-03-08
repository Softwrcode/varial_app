import React, { Component } from 'react';
import { Container, Body, Text, List, ListItem,Item, Input,Image, Thumbnail, Left, Right,Segment,Button, Icon, Header, Content, Title } from 'native-base';
import { ScrollView, StyleSheet,View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
export  class Invites extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container>
         <ScrollView>
           {/* button tab segments */}
            <Segment style={{backgroundColor:'#ff3300'}}>
              <Button first style={styles.buttonRadius}><Text>Apps</Text></Button>
              <Button last active style={styles.buttonRadius}><Text>Contacts</Text></Button>
            </Segment>
            {/* // search bar control in native base elements */}
            <Item searchBar>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
          {/* // */}
        {/* list view for app and contact invite friends */}
            <List>
            <ListItem>
              <Body>
                <View style={{flexDirection:'row'}}>
              <Text style={styles.labelTxt}>Kumar Pratik</Text> 
              <Left>
              </Left>
              <Button  style={styles.buttonCancel}>
            <FontAwesome name="plus"  size={20} style={{color:'#ffff',marginLeft:10}}> | </FontAwesome>
            <Text style={{color:'#ffff',marginRight:10,textAlign:'right'}}>Invite</Text>
          </Button> 
          </View>
          </Body>
            </ListItem>
            <ListItem>
              <Body>
                <View style={{flexDirection:'row'}}>
              <Text style={styles.labelTxt}>Kumar Pratik</Text> 
              <Left>
              </Left>
              <Button  style={styles.buttonCancel}>
            <FontAwesome name="plus"  size={20} style={{color:'#ffff',marginLeft:10}}> | </FontAwesome>
            <Text style={{color:'#ffff',marginRight:10,textAlign:'right'}}>Invite</Text>
          </Button> 
          </View>
          </Body>
            </ListItem>
            <ListItem>
              <Body>
                <View style={{flexDirection:'row'}}>
              <Text style={styles.labelTxt}>Kumar Pratik</Text> 
              <Left>
              </Left>
              <Button  style={styles.buttonCancel}>
            <FontAwesome name="plus"  size={20} style={{color:'#ffff',marginLeft:10}}> | </FontAwesome>
            <Text style={{color:'#ffff',marginRight:10,textAlign:'right'}}>Invite</Text>
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

export default Invites;
// css styles for login screen
const styles = StyleSheet.create({
  buttonCancel:{
    borderRadius:6,
    height:30,
    backgroundColor:'#ff3300',
    marginRight:50,
    textAlign:'right'
  },
  labelTxt:{
    fontSize:16,
    marginBottom:10
  },
  buttonRadius:{
  borderRadius:5,
  width:150
  }
});