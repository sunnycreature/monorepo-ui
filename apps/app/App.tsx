import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '@lib/ui'
import { PrimaryInput } from '@lib/ui'
import { auth, companyб  } from '@lib/client-api'

export default function App() {
  const [name, setName] = useState('Stas');
  const [password, setPassword] = useState('1');
  const [companies, getCompanies] = useState();
  const login = () => auth.login(name, );
  const getCompanies = () => company.getCompany('gs');

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <PrimaryButton title="Login" onPress={login}/>
      <PrimaryInput value={name} label="Name" onChangeText={setName} />
      <PrimaryInput value={password} label="Password" onChangeText={setPassword} />
      <PrimaryButton title="Get companies" onPress={getCompanies}/>
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
