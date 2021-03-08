import React, { Component } from 'react';
import { Container, Body, Text, List, ListItem,Item, Input,Image, Thumbnail, Left, Right,Segment,Button, Icon, Header, Content, Title, CheckBox } from 'native-base';
import { ScrollView, StyleSheet,View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
export  class Language extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container>
         <ScrollView>
          {/* // */}
        {/* list view for app and contact invite friends */}
            <List>
            <ListItem>
              <Body>
                <View style={{flexDirection:'row'}}>
              <Text style={styles.labelTxt}>English</Text> 
              <Left>
              </Left>
              <CheckBox checked={true} color="gray" style={{borderRadius:2,marginTop:5}}/>
          </View>
          </Body>
            </ListItem>
            <ListItem>
              <Body>
                <View style={{flexDirection:'row'}}>
              <Text style={styles.labelTxt}>Mandarin</Text> 
              <Left>
              </Left>
              <CheckBox checked={true} color="gray" style={{borderRadius:2,marginTop:5}}/>
          </View>
          </Body>
            </ListItem>
          </List>
          </ScrollView>
      </Container>
    );
  }
}

export default Language;
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
});