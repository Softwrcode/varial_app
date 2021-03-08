import {Button} from 'native-base';
import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AnimatedSplash from "react-native-animated-splash-screen";

export class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }

  onSignIn = () => {
    this.props.navigation.navigate('LoginScreen');
  };
  setAppLoaded = () => {
    this.setState({ isLoaded: true })
  }
  render() {
    return (
      <AnimatedSplash
      translucent={false}
      isLoaded={this.state.isLoaded}
      logoImage={require('../assets/logo1.jpg')}
      backgroundColor={"#ffff"}
      logoHeight={150}
      logoWidth={150}
    >
    </AnimatedSplash>
    );
  }
}
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F6D7A',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  ttile: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e3b4f',
  },
  textSign: {
    fontWeight: 'bold',
    color: 'white',
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 130,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
    marginRight: 30,
  },
});
