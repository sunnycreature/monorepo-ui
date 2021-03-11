import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '@my/ui'
import { PrimaryInput } from '@my/ui'

export default function App() {
  const [name, setName] = useState('Stas');

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <PrimaryButton title="Hello, world!" />
      <PrimaryInput value={name} label="Name" onChangeText={setName} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
