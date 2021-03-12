import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { PrimaryButton, PrimaryInput } from '@lib/ui'
import createAppStore from '@lib/common-context/configuration/redux/store'
import { dependencies } from './src/configuration/dependencies'
import { ui, AppErrorBoundary, AppView } from '@lib/common-ui/';
import  { Provider as StoreProvider, Theme as defaultTheme }  from '@lib/common-ui/configuration'
import { useFonts } from 'expo-font'
import { reloadAsync } from 'expo-updates';
import AppLoading from 'expo-app-loading'
import AppNavigation  from './src/navcontext/ui/AppNavigation'

const store = createAppStore(dependencies)

/* const { Heading1, Paragraph } = ui;

const AppNavigation = () => {
  const [name, setName] = useState('Stas');

  return (
    <AppView>
      <Heading1>Hello</Heading1>
      <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</Paragraph>
      <PrimaryButton title="Hello, world!" />
      <PrimaryInput value={name} label="Name" onChangeText={setName} />
    </AppView>
  )
}
 */
export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  return (
    <AppErrorBoundary reload={reloadAsync}>
      <StoreProvider theme={defaultTheme} store={store}>
        {loaded ? <AppNavigation /> : <AppLoading />}
      </StoreProvider>
    </AppErrorBoundary>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
})
