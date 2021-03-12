import * as React from 'react'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { Store } from 'redux'

interface AppProviderProps {
  theme: typeof DefaultTheme
  store: Store<any, any>
  children: React.ReactNode
}

export default function AppProvider({
  theme,
  store,
  children,
}: AppProviderProps) {
  return (
    <ActionSheetProvider>
      <StoreProvider store={store}>
        <PaperProvider {...{ theme }}>{children}</PaperProvider>
      </StoreProvider>
    </ActionSheetProvider>
  )
}
