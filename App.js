/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// import {SetUp} from './page/SetUp';
const Main=require('./page/Main');
const SetUp=require('./page/SetUp');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={style.container}>
        <SetUp></SetUp>
      </View>
    );
  }
}
const style=StyleSheet.create({
    container:{
      flex:1,
    },
})