import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { userActions, authActions, RootState,  } from '@lib/common-store';

import { ConfigScreen } from '../screens/ConfigScreen';
import { ActivationScreen } from '../screens/ActivationScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { IBaseUrl } from '@lib/types';


type AuthStackParamList = {
  Connection: undefined;
  Splash: undefined;
  Login: undefined;
  Config: undefined;
  Activation: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  // const { docData } = useSelector((state: RootState) => state.docs);  
/*   const {
    device,
    settingsForm,
    settings,
    showSettings,
    setSettings,
    checkDevice,
    loading: { serverReq },
  } = state; */

  const device = undefined;
  const settingsForm = undefined;
  const settings = undefined;
  const showSettings = (visible: boolean) => {};;    
  const setSettings = (ettings: IBaseUrl) => {};
  
  const serverReq = {
    isError: false,
    isLoading: false,
    status: '',
  };

  const { checkDevice } = authActions;


  const CongfigWithParams = useCallback(
    () => <ConfigScreen setSettings={setSettings} showSettings={showSettings} settings={settings} />,
    [setSettings, settings, showSettings],
  );

  const SplashWithParams = useCallback(
    () => (
      <SplashScreen serverReq={serverReq} showSettings={showSettings} settings={settings} checkDevice={checkDevice} />
    ),
    [checkDevice, serverReq, settings, showSettings],
  );

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      {device ? (
        <AuthStack.Screen name="Login" component={SignInScreen} />
      ) : settingsForm ? (
        <AuthStack.Screen name="Config" component={CongfigWithParams} />
      ) : device === undefined ? (
        <AuthStack.Screen name="Splash" component={SplashWithParams} options={{ animationTypeForReplace: 'pop' }} />
      ) : (
        <AuthStack.Screen name="Activation" component={ActivationScreen} />
      )}
    </AuthStack.Navigator>
  );
};

export { AuthNavigator };
