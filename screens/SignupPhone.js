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
import RNPickerSelect from 'react-native-picker-select';

export class SignupPhone extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:'',
      state:'',
      mobile:'',
      username:'',
      errors: {
        state:'',
        mobile:'',
        username:'',
      },
      
      isLoading: false,
      isFormSubmit: false,
    }

    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  // signup with phone page navigates to otp verify
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
    const {errors, state,mobile,username} = this.state;
    let isValid = true;

    if (state === '') {
      errors.state = 'State is required';
      this.setState({
        errors,
      });
    }

    if (mobile === '') {
      errors.mobile = 'Mobile is required';
      this.setState({
        errors,
      });
    }
    if (username === '') {
      errors.username = 'Username is required';
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
    
    const {
      errors,
      state,
      mobile,
      username,
      isLoading,
      isFormSubmit,
      keyboardHeight,
    } = this.state;
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
          <View style={{ borderColor: 'gray',height: 40, width: "95%",borderWidth: 1,marginBottom: 20,borderRadius:5,alignItems:'center' }}>
      <Picker
      style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20,borderRadius:5 }}
      itemStyle={{width:100}}
      mode="dropdown" 
      onChangeText={(val) => this.onChangeHandleText('state', val)}>
      <Picker.Item label="India" value="India" />
      <Picker.Item label="USA" value="USA" />
      <Picker.Item label="Canada" value="Canada" />
      <Picker.Item label="Jappan" value="Jappan" />
      <Picker.Item label="Australia" value="Australia" />
    </Picker>
          </View>
          
          {errors.state !== '' && isFormSubmit === true && (
            <Text style={styles.errText}>{errors.state}</Text>
          )}
       <View style={{flexDirection:'row'}}> 
        <TextInput
          style={{ height: 40, width: "20%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20,borderRadius:5 }}
          // Adding hint in TextInput using Placeholder option.
          placeholder="+91"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent" 
        />
       <TextInput
          style={{ height: 40, width: "75%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20,borderRadius:5 }}
          // Adding hint in TextInput using Placeholder option.
          placeholder="Enter Your Phone Number"
          keyboardType='numeric'
          // Making the Under line Transparent.
          underlineColorAndroid="transparent" 
          onChangeText={(val) => this.onChangeHandleText('mobile', val)}
        /> 
       </View>
       {errors.mobile !== '' && isFormSubmit === true && (
            <Text style={styles.errText}>{errors.mobile}</Text>
          )}
       <TextInput
          style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20,borderRadius:5 }}
          // Adding hint in TextInput using Placeholder option.
          placeholder="User Name"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          
          onChangeText={(val) => this.onChangeHandleText('username', val)}
        />
        {errors.username !== '' && isFormSubmit === true && (
            <Text style={styles.errText}>{errors.username}</Text>
          )}
        <LinearGradient
              colors={['#ff3300', '#ff3300']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]} onPress={() => this.onSubmitHandle()}>
               SUBMIT
              </Text>
        </LinearGradient>
        </View>
      </View>
    );
  }
}
export default SignupPhone;
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
 picker: {
  width: '95%',
  marginTop: -70
},
picker_items: {
  fontSize: 15,
  width: '95%',
},
errText: {
  color: 'red',
  fontSize: 13,
  paddingTop: 3,
},
});
