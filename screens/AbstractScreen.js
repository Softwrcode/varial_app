import React, {Component} from 'react';
import {View, Image, StyleSheet,Text,TouchableOpacity} from 'react-native';
// plugins imports
import LinearGradient from 'react-native-linear-gradient';

export class AbstractScreen extends Component {
  constructor(props) {
    super(props);
  }

onSignup=()=>{
  this.props.navigation.navigate('SignupPhone');
}
onSignupEmail=()=>{
  this.props.navigation.navigate('SignupEmail');
}
onSigninEmail=()=>{
  this.props.navigation.navigate('SigninEmail');
}
onLoginPhone=()=>{
  this.props.navigation.navigate('LoginPhone');
}
  render() {
    return (
      <View style={styles.container}> 
       <View style={styles.header}>
      <Image
        source={require('../assets/logo93.jpg')}
        style={styles.logo}
        resizeMode="stretch"
      />
    </View>
    <View style={styles.footer}>
    <TouchableOpacity style={styles.borderButton}>
      <Text style={{color:'grey'}} onPress={() => this.onSignup()}>SIGN UP WITH PHONE</Text>
    </TouchableOpacity>
    <View style={{marginTop:10}}>
    <TouchableOpacity style={styles.borderButton}>
      <Text style={{color:'grey'}} onPress={() => this.onSignupEmail()}>SIGN UP WITH EMAIL</Text>
    </TouchableOpacity>
    </View>
    <View style={{marginTop:10}}>
    <TouchableOpacity style={styles.borderButton}>
      <Text style={{color:'grey'}} onPress={() => this.onLoginPhone()}>LOGIN WITH PHONE</Text>
    </TouchableOpacity>
    </View>
    <View style={{marginTop:10}}>
    <TouchableOpacity style={styles.borderButton}>
      <Text style={{color:'grey'}} onPress={() => this.onSigninEmail()}>LOGIN WITH EMAIL</Text>
    </TouchableOpacity>
    </View>
    
    <View style={{marginTop:15,fontFamily: 'Poppins-Medium'}}>
      <Text style={{color:'grey'}}>Choose Language</Text>
    </View>
    <View style={{marginTop: 20,
    flexDirection: 'row'}}>
    <TouchableOpacity style={{marginRight:100}}>
      <Text style={{color:'grey'}}>English</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={{color:'grey'}}>Mandarin</Text>
    </TouchableOpacity>
    </View>
    <View style={{marginTop:100,flexDirection:'row'}}>
    <Text style={{color:'#a19e95'}}>Terms of Service | </Text>
    <Text style={{color:'#a19e95'}}>Privacy Policy | </Text> 
    <Text style={{color:'#a19e95'}}>FAQ</Text>
    </View>
    </View>
  </View>
    );
  }
}
export default AbstractScreen;
// css styles for abstract screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 130,
  },
  borderButton:{
    borderColor: 'grey', 
    borderWidth: 1, 
    borderRadius: 4, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    height: 40, 
    width: 300,
  },
  countryLogo: {
    height: 20,
    width: 50,
    borderRadius: 90,
  },
});
