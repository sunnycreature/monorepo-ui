import React from 'react'
import { configureStore, RootState, LoginAction } from '@lib/common-store';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { StyleSheet, TextInput } from 'react-native';
// import {
//   Provider as UIProvider,
//   Theme as defaultTheme,
// } from '@lib/common-ui/configuration'
// import { useFonts } from 'expo-font'
// import AppLoading from 'expo-app-loading'
// import AppNavigation from './src/navigatiors/AppNavigator'
import { Button, Text, View } from 'react-native';
// import docReducer from './src/store/docStore/doc.reducer';

/* const reducers: reducersList = {
  documents: docReducer,
} */

// const store = configureStore(reducers)
const store = configureStore()

const Mytext = () => {
  const { data, loading, error, status } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  const handleLogin = async () => {    
    dispatch(LoginAction({ userName: 'Stas', 'password': '123' }));
  }

  return (    
    <View>
      <Button title="Load" onPress={handleLogin} />
      <Text>{loading ? 'is loading' : 'loaded'}</Text>
      <Text>{error ? status : 'no error'}</Text>
      <Text>{data?.id || 'no data'}</Text>
      <Text>{data?.name || 'no data'}</Text>
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