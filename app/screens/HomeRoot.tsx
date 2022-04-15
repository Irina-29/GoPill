import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import HomeScreen from "./Home";
import PrescriptionScreen from "./Prescription";

//https://reactnavigation.org/docs/hello-react-navigation
const ItemStack = createNativeStackNavigator();

const HomeRootScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <ItemStack.Screen name="Prescription" component={PrescriptionScreen} options={{ headerShown: false }} />
    </ItemStack.Navigator>
}

export default HomeRootScreen;