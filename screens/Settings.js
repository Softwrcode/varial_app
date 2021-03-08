import React, { Component } from 'react';
import {View, Image, StyleSheet,Text, TextInput, Platform,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
export  class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',marginLeft:15}}>
  <TouchableOpacity 
  style={styles.circleBtn}
  >
  <FontAwesome name="unlock"
    size={30}
    color="gray" />
</TouchableOpacity>
<TouchableOpacity 
  style={styles.circleBtn}
  >
  <FontAwesome name="bell-exclamation"
    size={30}
    color="gray" />
</TouchableOpacity>
    </View>
    </View>
    );
  }
}


export default Settings;
// css styles for settings screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  logo: {
    height: 90,
    width: 100,
    borderRadius: 130,
  },
  circleBtn:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginLeft:10,
    width:90,
    height:90,
    backgroundColor:'#fff',
    borderRadius:100,
    borderColor:"pink"
  }
});

