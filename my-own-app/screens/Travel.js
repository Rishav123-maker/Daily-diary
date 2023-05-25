import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TravelScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> TravelScreen </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
   container:{
     flex:1
   }


})