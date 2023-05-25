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
  Dimensions,
  Button,
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

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text> Home Screen </Text>
        </View>
        <View style={{ flex: 0.37 }}>
          <View style={styles.detailsContainer}>
            <Image
              source={require('../assets/Cooking.jpeg')}
              style={styles.imagebg2}
            />
            <Text style={styles.detailText}> Cooking </Text>
            <View style={styles.button}>
              <Button
                title="Click"
                color="black"
                onPress={() => {
                  this.props.navigation.navigate('Cooking');
                }}
              />
            </View>
          </View>
          <View style={[styles.detailsContainer, { marginTop: 20 }]}>
            <Image
              source={require('../assets/Traveling.jpeg')}
              style={styles.imagebg2}
            />
            <Text style={styles.detailText1}> Traveling </Text>
            <View style={styles.button1}>
              <Button
                title="Click"
                color="black"
                onPress={() => {
                  this.props.navigation.navigate('Rock');
                }}
              />
            </View>
          </View>

          <View style={[styles.detailsContainer, { marginTop: 20 }]}>
            <Image
              source={require('../assets/Arts2.jpeg')}
              style={styles.imagebg2}
            />
            <Text style={[styles.detailText,{color:'white',fontSize:40}]}> Arts </Text>
            <View style={styles.button}>
              <Button
                title="Click"
                color="black"
                onPress={() => {
                  this.props.navigation.navigate('Rock');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.5,
  },
  imagebg2: {
    position: 'absolute',
    width: '100%',
    height: RFValue(130),
    resizeMode: 'stretch',
    zIndex: -1,
  },
  detailText: {
    zIndex: 100,
    fontSize: RFValue(25),
    fontWeight: 'bold',
    fontFamily: 'ConcertFont',
    color: 'black',
    marginLeft: RFValue(10),
    marginTop: RFValue(10),
  },
  detailText1: {
    zIndex: 100,
    fontSize: RFValue(25),
    fontWeight: 'bold',
    fontFamily: 'ConcertFont',
    color: 'black',
    marginLeft: RFValue(200),
    marginTop: RFValue(10),
  },
  button1: {
    width: RFValue(100),
    marginLeft: RFValue(210),
    marginTop: RFValue(10),
  },
  button: {
    width: RFValue(100),
    marginLeft: RFValue(10),
    marginTop: RFValue(10),
  },
});
