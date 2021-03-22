import { IBaseUrl, IDataFetch } from '@lib/types';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Text, Button, IconButton, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { globalStyles } from '@lib/common-ui';
import { SubTitle } from '@lib/common-ui/src/components';

type Props = {
  settings: IBaseUrl | undefined;
  request: IDataFetch;
  onCheckDevice: () => void;
  onBreakConnection?: () => void;
};

const SplashScreen = (props: Props) => {
  const { onCheckDevice, onBreakConnection, request, settings } = props;

  const { colors } = useTheme();

  const navigation = useNavigation();

  return (
    <>
      <View style={[globalStyles.container, localStyles.container]}>
        <SubTitle>Подключение к серверу</SubTitle>
        <Text style={localStyles.serverName}>
          {settings ? `${settings.protocol}${settings.server}:${settings.port}` : 'сервер не указан'}
        </Text>
        <View
          style={{
            ...localStyles.statusBox,
            backgroundColor: colors.background,
          }}
        >
          {request.isError && <Text style={localStyles.errorText}>Ошибка: {request.status}</Text>}
          {request.isLoading && <ActivityIndicator size="large" color="#70667D" />}
        </View>
        {!request.isLoading ? (
          <Button
            onPress={onCheckDevice}
            icon="apps"
            mode="contained"
            style={[globalStyles.rectangularButton, localStyles.buttons]}
          >
            Подключиться
          </Button>
        ) : (
          <Button
            onPress={onBreakConnection}
            icon="block-helper"
            mode="contained"
            style={[globalStyles.rectangularButton, localStyles.buttons]}
          >
            Прервать
          </Button>
        )}
      </View>
      <View style={globalStyles.bottomButtons}>
        <IconButton
          icon="server"
          size={30}
          onPress={() => navigation.navigate('Config')}
          color={colors.background}
          style={[globalStyles.circularButton, { backgroundColor: colors.primary }]}
        />
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
  buttons: {
    width: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#cc5933',
    fontSize: 18,
  },
  serverName: {
    color: '#888',
    fontSize: 18,
    marginVertical: 10,
  },
  statusBox: {
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
  },
});

export { SplashScreen };
