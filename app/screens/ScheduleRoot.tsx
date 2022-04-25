import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScheduleListScreen from "./ScheduleList";
import ScheduleAlarmScreen from "./ScheduleAlarm";

const ItemStack = createNativeStackNavigator();

const ScheduleRootScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="ScheduleList" component={ScheduleListScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="ScheduleAlarm" component={ScheduleAlarmScreen} options={{ headerShown: false }} />
    </ItemStack.Navigator>
}

export default ScheduleRootScreen;