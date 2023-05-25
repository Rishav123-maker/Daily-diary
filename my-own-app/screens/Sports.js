import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SportsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> SportsScreen </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
   container:{
     flex:1
   }


})