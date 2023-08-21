import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '@app/navigation/RootNavigation';

export default function AppContainer() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
