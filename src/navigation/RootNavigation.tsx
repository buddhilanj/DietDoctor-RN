import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitScreen from '@app/screens/InitScreen';
import AuthNavigation from '@app/navigation/AuthNavigation';
import MaintTabsNavigation from '@app/navigation/MainTabNavigation';
import Screens from '@app/navigation/Screens';
import {useAppSelector} from '@app/hooks';

const Root = createNativeStackNavigator();
export default function RootNavigation() {
  const {loading, token} = useAppSelector(state => state.auth);
  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      {(loading === 'failed' || (loading === 'succeeded' && !token)) && (
        <Root.Screen name={Screens.Root.Auth} component={AuthNavigation} />
      )}
      {loading === 'succeeded' && !!token && (
        <Root.Screen
          name={Screens.Root.MainTab}
          component={MaintTabsNavigation}
        />
      )}
      {(loading === 'idle' || loading === 'pending') && (
        <Root.Screen name={Screens.Root.Init} component={InitScreen} />
      )}
    </Root.Navigator>
  );
}
