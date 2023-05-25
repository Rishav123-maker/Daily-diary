import * as React from 'react';
import { View, Text, StyleSheet,Image,Dimensions } from 'react-native';

export default class CookingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Image source={require('../assets/Cooking2.jpeg')}  style={styles.image3}/>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
   container:{
     flex:1
   },
   image3:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
   },


})