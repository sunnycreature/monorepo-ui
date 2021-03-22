import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { configureStore, RootState } from '@lib/common-store';
import { AuthNavigator } from '@lib/common-mobile-auth';
import { Theme as defaultTheme, Provider as UIProvider } from '@lib/common-ui';

import AppNavigation from './src/navigatiors/AppNavigator';

enableScreens();

const store = configureStore;

const Router = () => {
  const { device, user, company } = useSelector((state: RootState) => state.auth);

  return user && device && company ? <AppNavigation /> : <AuthNavigator />;
}

export default function App() {
  return (
    <Provider store={store}>
      <UIProvider theme={defaultTheme}>
        {Platform.OS === 'ios' && <StatusBar barStyle={'dark-content'} />}
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </UIProvider>
    </Provider>
  );
}
