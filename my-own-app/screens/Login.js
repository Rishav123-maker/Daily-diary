import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native';

import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
   'Smokum-regular': require('../assets/fonts/Smokum-Regular.ttf'),
};

const appIcon = require('../assets/logo.png');

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fontsLoaded: false,
      userSignedIn: false,
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      const { email, password } = this.state;

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <ImageBackground
            source={require('../assets/bg.jpeg')}
            style={styles.backgroundImage}>
            <Text style={styles.appTitleText}>Daily Routine App</Text>


            <View style={{justifyContent:"center", alignItems:"center"}}>
            <Image source={appIcon} style={styles.appIcon} />

            <TextInput
              style={styles.textinput}
              onChangeText={(text) => this.setState({ email: text })}
              placeholder={'Enter Email'}
              placeholderTextColor={'#FFFFFF'}
              
            />
            <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={(text) => this.setState({ password: text })}
              placeholder={'Enter Password'}
              placeholderTextColor={'#FFFFFF'}
              secureTextEntry
            />

            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => this.signIn(email, password)}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.buttonTextNewUser}>New User ?</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.button2,{marginTop:30}]}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.buttonText2}>Forgot Password?</Text>
            </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c'
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  appIcon: {
    width: RFValue(200),
    height: RFValue(200),
    resizeMode: 'contain',
    marginBottom: RFValue(20),
  },
  appTitleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: RFValue(40),
    fontFamily: 'Smokum-regular',
    marginBottom: RFValue(20),
  },
  textinput: {
    width: RFValue(250),
    height: RFValue(50),
    padding: RFValue(10),
    borderColor: '#FFFFFF',
    borderBottomWidth:RFValue(2),
    borderRadius: RFValue(10),
    fontSize: RFValue(20),
    color: '#FFFFFF',
    backgroundColor: '#15193c',
    fontFamily: 'Smokum-regular',
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: RFValue(30),
    backgroundColor: 'white',
    marginBottom: RFValue(20),
  },
  buttonText: {
    fontSize: RFValue(29),
    color: '#15193c',
    fontFamily: 'Smokum-regular',
  },
   buttonText2: {
    fontSize: RFValue(25),
    color: 'white',
    fontFamily: 'Smokum-regular',
    textDecorationLine: 'underline'
  },
  buttonTextNewUser: {
    fontSize: RFValue(20),
    color: '#FFFFFF',
    fontFamily: 'Smokum-regular',
    textDecorationLine: 'underline',
  },
});
