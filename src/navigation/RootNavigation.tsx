import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "@app/screens/HomeScreen";
const Root = createNativeStackNavigator();
export default function RootNavigation(){
    return <Root.Navigator>
        <Root.Screen name="Home" component={HomeScreen} />
      </Root.Navigator>
}