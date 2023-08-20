import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./RootNavigation";
export default function AppContainer(){
    return(
        <NavigationContainer>
            <RootNavigation/>
        </NavigationContainer>
    );
}