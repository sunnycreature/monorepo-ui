import React from 'react'
import { configureStore, RootState, authActions, userActions } from '@lib/common-store';
import { AuthNavigator } from '@lib/common-mobile-auth';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Button, Text, StyleSheet, StatusBar, View, Platform } from 'react-native';
import useAddReducer from './src/utils/useAddReducer';
import {
  Provider as UIProvider,
  Theme as defaultTheme,
} from '@lib/common-ui/configuration'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
// import AppNavigation from './src/navigatiors/AppNavigator'

import docReducer from './src/store/docStore/doc.reducer';
import { IDocState, IDocument } from './src/store/docStore/types';
import { NavigationContainer } from '@react-navigation/native';

// import myReducer, { MyState } from './src/store/reducer';

const store = configureStore;

const MyDocuments = () => {
  useAddReducer('docs', docReducer);

  const { docData } = useSelector((state: RootState & { docs: IDocState }) => state.docs);

  const dispatch = useDispatch();

  const handleLoad = async () => {
    dispatch(userActions.LoginAction({ userName: 'Stas', 'password': '123' }));
  }

  // const docData: IDocument[] = [];

  return (
    <View>
      <Button title="Load documents" onPress={handleLoad} />
      <Text>docData:</Text>
      <Text>{docData?.[0].number || 'no my data'}</Text>
    </View >
  )
}

const Mytext = () => {
  const { data, loading, error, status } = useSelector((state: RootState) => state.users);
  const settings = useSelector((state: RootState) => state.auth.settings);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(userActions.LoginAction({ userName: 'Stas', 'password': '123' }));
  }

  return (
    <View>
      <Button title="Load user" onPress={handleLogin} />
      <Text>{loading ? 'is loading' : 'loaded'}</Text>
      <Text>{error ? status : 'no error'}</Text>
      <Text>ID: {data?.id || 'no data'}</Text>
      <Text>NAME: {data?.userName || 'no data'}</Text>
      <Text>serverName: {settings?.server || 'no data'}</Text>
      <Text>port: {settings?.port || 'no data'}</Text>
    </View >
  )
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
          {loaded ? <AuthNavigator /> : <AppLoading />}
        </NavigationContainer>
      </UIProvider>
    </Provider>
  );


  {/* <Mytext /> */ }
  {/* <Mytext />
            <MyDocuments /> */}

  /*   return (
      <StoreProvider store={store}>
        <UIProvider theme={defaultTheme}>
          {loaded ? <AppNavigation /> : <AppLoading />}
        </UIProvider>
      </StoreProvider>
    ) */
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
})