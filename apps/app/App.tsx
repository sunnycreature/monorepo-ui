import React from 'react'
import { configureStore, RootState, LoginAction } from '@lib/common-store';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { StyleSheet, TextInput } from 'react-native';
import useAddReducer from './src/utils/useAddReducer';
// import {
//   Provider as UIProvider,
//   Theme as defaultTheme,
// } from '@lib/common-ui/configuration'
// import { useFonts } from 'expo-font'
// import AppLoading from 'expo-app-loading'
// import AppNavigation from './src/navigatiors/AppNavigator'
import { Button, Text, View } from 'react-native';
import docReducer from './src/store/docStore/doc.reducer';
import { IDocState, IDocument } from './src/store/docStore/types';

// import myReducer, { MyState } from './src/store/reducer';

const store = configureStore;

const MyDocuments = () => {
  useAddReducer('docs', docReducer);

  const { docData } = useSelector((state: RootState & { docs: IDocState }) => state.docs);

  const dispatch = useDispatch();

  const handleLoad = async () => {
    dispatch(LoginAction({ userName: 'Stas', 'password': '123' }));
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
  const { server, port } = useSelector((state: RootState) => state.config);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(LoginAction({ userName: 'Stas', 'password': '123' }));
  }

  return (
    <View>
      <Button title="Load" onPress={handleLogin} />
      <Text>{loading ? 'is loading' : 'loaded'}</Text>
      <Text>{error ? status : 'no error'}</Text>
      <Text>ID: {data?.id || 'no data'}</Text>
      <Text>NAME: {data?.name || 'no data'}</Text>
      <Text>serverName: {server || 'no data'}</Text>
      <Text>port: {port || 'no data'}</Text>
    </View >
  )
}

export default function App() {
  /*   const [loaded] = useFonts({
      OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    }) */

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Mytext />
        <MyDocuments />
      </View>
    </Provider>
  );


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