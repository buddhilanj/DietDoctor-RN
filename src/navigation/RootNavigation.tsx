import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitScreen from '@app/screens/InitScreen';
import AuthNavigation from '@app/navigation/AuthNavigation';
import MaintTabsNavigation from '@app/navigation/MainTabNavigation';
import Screens from '@app/navigation/Screens';

const Root = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      <Root.Screen name={Screens.Root.Init} component={InitScreen} />
      <Root.Screen name={Screens.Root.Auth} component={AuthNavigation} />
      <Root.Screen
        name={Screens.Root.MainTab}
        component={MaintTabsNavigation}
      />
    </Root.Navigator>
  );
}
