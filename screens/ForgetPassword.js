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

export class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state={
        email:'',
        errors:{
            email:''
        },
        isLoading: false,
        isFormSubmit: false,
    }
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  // login page navigates
  onSubmit = () => {
    this.props.navigation.navigate('Otp');
  };

  
  onChangeHandleText = (fieldName, value) => {
    let {errors} = this.state;
    errors[fieldName] = '';
    this.setState(
      {
        [fieldName]: value,
        errors,
      },
      (_) => {
        if (value === null && value === '' && value === undefined) {
          errors[fieldName] = 'Please enter the ' + fieldName;
          this.setState({
            errors,
          });
        }
      },
    );
  };

  /// on submit method in login page
  onSubmitHandle = () => {
    const {errors, email} = this.state;
    let isValid = true;

    if (email === '') {
      errors.email = 'Email ID is required';
      this.setState({
        errors,
      });
    }

    this.setState(
      {
        isFormSubmit: true,
        isLoading: true,
      },
      (_) => {
        Object.keys(errors).forEach(function (key) {
          if (errors[key]) {
            isValid = false;
          }
        });
        if (isValid) {
          this.onSubmit();
        } else {
          this.setState({
            isLoading: false,
          });
        }
      },
    );
  };

  render() {
      
    const {errors, email,
        isLoading,
        isFormSubmit} = this.state;
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
        <TextInput
          style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20,borderRadius:5 }}
          // Adding hint in TextInput using Placeholder option.
          placeholder="Email ID"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent" 
          onChangeText={(val) => this.onChangeHandleText('email', val)}
        />
        {errors.email !== '' && isFormSubmit === true && (
            <Text style={styles.errText}>{errors.email}</Text>
          )}
        <LinearGradient
              colors={['#ff3300', '#ff3300']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]} onPress={() => this.onSubmitHandle()}>
               Reset Password
              </Text>
        </LinearGradient>
        </View>
      </View>
    );
  }
}
export default ForgetPassword;
// css styles for login screen
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
    marginBottom:100
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
 },
 
errText: {
    color: 'red',
    fontSize: 13,
  },
});