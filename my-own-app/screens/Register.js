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

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      fontsLoaded: false,
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  registerUser = (email, password, confirmPassword, first_name, last_name) => {
    if (password == confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          firebase
            .database()
            .ref('/users/' + userCredential.user.uid)
            .set({
              email: userCredential.user.email,
              first_name: first_name,
              last_name: last_name,
              current_theme: 'dark',
            });
        })
        .then(() => {
          Alert.alert('User registered!!');
          this.props.navigation.replace('Login');
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    } else {
      Alert.alert("Passwords don't match!");
    }
  };

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      const { email, password, confirmPassword, first_name, last_name } =
        this.state;

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={{ marginLeft: 250 }}>
            <Image style={styles.icon} source={require('../assets/logo.png')} />
          </View>

          <View style={{justifyContent:"center", alignItems:"center"}}>

          <Text style={styles.titleText}> Hi {'\n'}Welcome </Text>

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ first_name: text })}
            placeholder={'First name'}
            placeholderTextColor={'black'}
          />

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ last_name: text })}
            placeholder={'last name'}
            placeholderTextColor={'black'}
          />

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ email: text })}
            placeholder={'email'}
            placeholderTextColor={'black'}
          />

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ password: text })}
            placeholder={'password'}
            placeholderTextColor={'black'}
            secureTextEntry
          />

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ confirmPassword: text })}
            placeholder={'confirmPassword'}
            placeholderTextColor={'black'}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() =>
              this.registerUser(
                email,
                password,
                confirmPassword,
                first_name,
                last_name
              )
            }>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.replace('Login')}>
            <Text style={styles.buttonTextNewUser}>Login ?</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(45),
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: -30,
    marginleft: 100,
    borderRadius:100
  },
  titleText: {
    fontSize: 39,
    fontFamily: 'Smokum-regular',
    fontWeight: 'Bold',
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
    borderColor: 'black',
  },
  textinput: {
    width: RFValue(250),
    height: RFValue(40),
    padding: RFValue(10),
    marginTop: RFValue(10),
    borderColor: 'black',
    borderBottomWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(15),
    color: 'black',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    fontFamily: 'Smokum-regular',
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: RFValue(30),
    backgroundColor: 'black',
    marginBottom: RFValue(20),
  },
  buttonText: {
    fontSize: RFValue(24),
    color: 'white',
    fontFamily: 'Smokum-regular',
  },
  buttonTextNewUser: {
    fontSize: RFValue(20),
    color: 'black',
    fontFamily: 'Smokum-regular',
    textDecorationLine: 'underline',
  },
});
