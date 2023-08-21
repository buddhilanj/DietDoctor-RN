import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@app/screens/LoginScreen';
import Screens from '@app/navigation/Screens';

const Auth = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <Auth.Navigator>
      <Auth.Screen name={Screens.Auth.Login} component={LoginScreen} />
    </Auth.Navigator>
  );
}
