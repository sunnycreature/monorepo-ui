import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { authActions, RootState } from '@lib/common-store';
import { IBaseUrl, ICompany, IUserCredentials } from '@lib/types';

import { CompaniesScreen, SplashScreen, SignInScreen, ConfigScreen, ActivationScreen } from '../screens';

type AuthStackParamList = {
  Connection: undefined;
  Splash: undefined;
  Login: undefined;
  Config: undefined;
  Activation: undefined;
  Company: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  const { device, settings, error, loading, status, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const saveSettings = (settings: IBaseUrl) => dispatch(authActions.setSettings(settings));
  const checkDevice = () => dispatch(authActions.checkDevice());
  const activateDevice = (code: string) => dispatch(authActions.activateDevice(code))

  const disconnect = () => dispatch(authActions.disconnect());
  const signIn = (credentials: IUserCredentials) => dispatch(authActions.signIn(credentials))
  const logout = () => dispatch(authActions.logout())

  const setCompany = (company: ICompany) => dispatch(authActions.setCompany(company));

  const serverReq = {
    isError: error,
    isLoading: loading,
    status: status,
  };

  const CongfigWithParams = useCallback(
    () => <ConfigScreen onSetSettings={saveSettings} settings={settings} />,
    [saveSettings, settings],
  );

  const SplashWithParams = useCallback(
    () => (
      <SplashScreen request={serverReq} settings={settings} onCheckDevice={checkDevice} />
    ),
    [serverReq, settings],
  );

  const SignInWithParams = useCallback(
    () => (
      <SignInScreen request={serverReq} onDisconnect={disconnect} onSignIn={signIn} />
    ),
    [signIn, disconnect, serverReq],
  );

  const ActivateWithParams = useCallback(
    () => (
      <ActivationScreen request={serverReq} onDisconnect={disconnect} onActivate={activateDevice} />
    ),
    [activateDevice, disconnect, serverReq]
  );

  const CompaniesWithParams = useCallback(
    () => (
      <CompaniesScreen onLogout={logout} onSetCompany={setCompany} />
    ),
    [activateDevice, disconnect, serverReq]
  );


  useEffect(() => {    
    console.log('mount nav');    
    return () => {
      console.log('unmount nav');
    };
  }, []);

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      {device ? (
        !user
          ? <AuthStack.Screen name="Login" component={SignInWithParams} options={{ animationTypeForReplace: user ? 'pop' : 'push' }} />
          : <AuthStack.Screen name="Company" component={CompaniesWithParams} options={{ animationTypeForReplace: 'push' }} />
      ) : device === undefined ? (
        <>
          <AuthStack.Screen name="Splash" component={SplashWithParams} options={{ animationTypeForReplace: 'pop' }} />
          <AuthStack.Screen name="Config" component={CongfigWithParams} />
        </>
      ) : (
        <AuthStack.Screen name="Activation" component={ActivateWithParams} options={{ animationTypeForReplace: 'push' }} />
      )}
    </AuthStack.Navigator>
  );
};

export { AuthNavigator };
