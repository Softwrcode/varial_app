import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Image } from 'native-base';
import { ScrollView, StyleSheet,View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
export  class Feed extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
      <Card>
          <CardItem>
              <Left>
                <Thumbnail source={require('../assets/logo93.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
      </Card>
      </View>
    );
  }
}

export default Feed;
// css styles for login screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
      },
});