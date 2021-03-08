import React, {Component} from 'react';
import {View, Image, StyleSheet,Text, TextInput, Platform,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
// radio button js file
// icons imports
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// plugins imports
import LinearGradient from 'react-native-linear-gradient';
import {Picker, Item} from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';

export class Otp extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:'',
      timer:3,
      minutes_Counter: '00',
      seconds_Counter: '00',
    }
  }

  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }
  componentDidUpdate() {
    if (this.state.timer === 1) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  resendOtp = () => {
    this.setState({
      isButtonDisabled: true,
    });
    
    this.setTimeout( () => {
       isButtonDisabled = false
    },30000) //this will enable button after 30 seconds you can change time here.
    
    this.interval = setInterval(
      () => { return this.setState((prevState) => {
        return { timer: prevState.timer - 1 }; }); },
      1000
    );
    
this.requestOtp();
      }

  // componentDidMount(){
  //   let timer = setInterval(() => {
  //       var num = (Number(this.state.seconds_Counter) + 1).toString(),
  //         count = this.state.minutes_Counter;
   
  //       if (Number(this.state.seconds_Counter) == 59) {
  //         count = (Number(this.state.minutes_Counter) +1).toString();
  //         num = '00';
  //       }
  //       this.setState({
  //         minutes_Counter: count.length == 1 ? '0' + count : count,
  //         seconds_Counter: num.length == 1 ? '0' + num : num
  //       });
  //     }, 1000);
  //     this.setState({ timer });
 
  // }
  
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
      <Text style={{marginBottom:50}}>**Please enter the OTP to verify your phone number**</Text>
       <View style={{flexDirection:'row'}}> 
        <TextInput
          style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20,borderRadius:5 }}
          // Adding hint in TextInput using Placeholder option.
          placeholder="Enter OTP"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
          {/* <Text style={styles.counterText}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text> */}
       </View>
       
       <View style={{flexDirection:'row'}}>
               <Text style={styles.text}>{this.state.timer}</Text>
      </View>
         <View style={{marginBottom:20,width:'100%',alignItems:'center'}}>
         <LinearGradient
              colors={['#ff3300', '#ff3300']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]} onPress={this.resendOtp}
 disabled={this.state.isButtonDisabled}>
               Resend (OTP)
              </Text>
        </LinearGradient>
         </View>
        <LinearGradient
              colors={['#ff3300', '#ff3300']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>
               Validate OTP
              </Text>
        </LinearGradient>
        </View>
      </View>
    );
  }
}
export default Otp;
// css styles for otp screen
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
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textheader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textfooter: {
    color: '#05375a',
    fontSize: 18,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 130,
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 16,
    color: '#fff',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  signIn: {
    width: '95%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  textSign: {
    fontWeight: 'bold',
    color: 'white',
  },
  frgtText: {
    fontSize: 15,
    marginTop: 50,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: 'grey',
  },
  frgtPass: {
    fontSize: 15,
    marginTop: 20,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: 'grey',
  },
  signUpText: {
    color: '#4F6D7A',
    fontSize: 15,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnStyle: {
    backgroundColor: '#d62725',
    color: '#000',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#f54242',
    height: 40,
    width: "95%",
    marginBottom: 20,
 },
 submitButtonText:{
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize:14,
    fontWeight:'bold'
 }
});
