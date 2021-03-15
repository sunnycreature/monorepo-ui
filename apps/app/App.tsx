import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { configureStore, RootState } from '@lib/common-store';
import { AuthNavigator } from '@lib/common-mobile-auth';

import {
  Provider as UIProvider,
  Theme as defaultTheme,
} from '@lib/common-ui/configuration'


import { Mytext } from './src/screens/Test';

const store = configureStore;

const Router = () => {
  const { device, user } = useSelector((state: RootState) => state.auth);

  console.log('device', device);
  console.log('user', user);

  return user && device ? <Mytext /> : <AuthNavigator />;
}

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
  })

  return (
    <Provider store={store}>
      <UIProvider theme={defaultTheme}>
        {Platform.OS === 'ios' && <StatusBar barStyle={'dark-content'} />}
        <NavigationContainer>
          {loaded ? <Router /> : <AppLoading />}
        </NavigationContainer>
      </UIProvider>
    </Provider>
  );
}
