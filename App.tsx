/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import MyStore from './src/redux/myStore';







function App(): React.JSX.Element {
  

 
  return (
<Provider store={MyStore}>
<RootNavigation/>
</Provider>

    
  );
}

const styles = StyleSheet.create({

});

export default App;
