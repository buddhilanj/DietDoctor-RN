import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@app/screens/HomeScreen';
import RecipeScreen from '@app/screens/RecipeScreen';
import TrackScreen from '@app/screens/TrackScreen';

import Screens from '@app/navigation/Screens';

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === Screens.Main.Home) {
            iconName = 'home-account';
          } else if (route.name === Screens.Main.Recipe) {
            iconName = 'pasta';
          } else if (route.name === Screens.Main.Track) {
            iconName = 'poll';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={Screens.Main.Home} component={HomeScreen} />
      <Tab.Screen name={Screens.Main.Recipe} component={RecipeScreen} />
      <Tab.Screen name={Screens.Main.Track} component={TrackScreen} />
    </Tab.Navigator>
  );
}
