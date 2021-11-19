/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppStack from './App/UI/Navigation/MainNavigation';
import { AppStyle } from './App/UI/Utils/AppStyles';

declare const global: {HermesInternal: null | {}};
const App = () =>{
  return(
    <View
    style = {AppStyle.MainViewStyle}
    >
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </View>
  )
}
export default App;
