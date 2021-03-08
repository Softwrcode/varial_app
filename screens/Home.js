import React, {Component} from 'react';
import {View, Image, StyleSheet,Text,Button, TextInput, Platform,ListView,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
// radio button js file
// icons imports
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// plugins imports
import LinearGradient from 'react-native-linear-gradient';
import {Container, Tabs, Tab, Header, TabHeading, Icon, ScrollableTab} from 'native-base';
import Notify from './Notify';
import Global from './Global';
export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
      <Tabs>
        <Tab heading={ <TabHeading style={{backgroundColor:'#ff3300',}}>
        <FontAwesome name="users"  style={{color:'#ffff'}} size={20} />
        <Text style={styles.tabButton}>Friends Notifications</Text></TabHeading>}>
          <Notify/>
        </Tab>
        <Tab heading={ <TabHeading style={{backgroundColor:'#ff3300',}}>
        <FontAwesome name="globe"  style={{color:'#ffff'}} size={30} />
        <Text style={styles.tabButton}>Global Notifications</Text>
        </TabHeading>}>
          <Global/>
          </Tab>
      </Tabs>
    </Container>
  //     <View style={styles.container}>
  //    <View style={styles.buttonContainer}>
  //    <TouchableOpacity
  //       style={styles.button}
  //     >
  //       <FontAwesome name="users"  style={{color:'#ffff'}} size={30} />
  //       <Text style={[styles.textSign, {color: '#fff'}]}>Friends request</Text>
  //     </TouchableOpacity>
  //  </View>
  //    <View style={styles.buttonContainer}>   
  //    <TouchableOpacity
  //       style={styles.button}
  //     >
  //     <FontAwesome name="globe"  size={30} style={{color:'#ffff'}}/>
  //       <Text style={[styles.textSign, {color: '#fff'}]}>Global Notifications</Text>
  //     </TouchableOpacity>
  //    </View>
  //  </View>
    );
  }
}
export default Home;
// css styles for login screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signIn: {
    width: '99%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSign: {
    fontWeight: 'bold',
    color: 'white',
  },
errText: {
    color: 'red',
    fontSize: 13,
  },
  mainButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 10,
    height:'100%'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff3300",
    padding: 10,
    height:60
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 130,
  },
  tabButton:{
    color:'#ffff',
    marginLeft:5,
    fontWeight:'bold',
    fontSize:16
  }
});
