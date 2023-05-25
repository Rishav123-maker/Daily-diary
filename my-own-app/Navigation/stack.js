import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import SportsScreen from '../screens/Sports';
import TimeScreen from '../screens/Time';
import TravelScreen from '../screens/Travel';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import CookingScreen  from '../screens/Cooking';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cooking" component={CookingScreen}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
          <Stack.Screen name="Sports"  component={SportsScreen}/>
          <Stack.Screen name="Time" component={TimeScreen}/>
          <Stack.Screen name="Travel" component={TravelScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


