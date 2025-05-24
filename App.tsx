/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ReactSipProvider, redeclareGlobals } from '@voicenter-team/react-native-opensips';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MainNavigationStack } from './src/navigator/MainNavigationStack';
import { Platform, PermissionsAndroid } from 'react-native';
redeclareGlobals();
const getPermissions = async () => {
  try {
      if (Platform.OS === 'android') {
          PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.RECORD_AUDIO ]).then(result => console.log(result, 'permissions res'))
          // await Contacts.requestPermission()
      }
  } catch(e) {
      console.warn(e, 'perm err')
  }
}
getPermissions()
function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
        <SafeAreaProvider>
          <ReactSipProvider>
            <MainNavigationStack />
          </ReactSipProvider>
        </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
