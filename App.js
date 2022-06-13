/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  
} from 'react-native';
import Navigation from './src/navigation';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar/>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#F9FBFC',
  }
});

export default App;
