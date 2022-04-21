import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScheduleListScreen from "./ScheduleList";

//https://reactnavigation.org/docs/hello-react-navigation
const ItemStack = createNativeStackNavigator();

const ScheduleRootScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="ScheduleList" component={ScheduleListScreen} options={{ headerShown: false }} />
    </ItemStack.Navigator>
}

export default ScheduleRootScreen;