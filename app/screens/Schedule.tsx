import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScheduleEditScreen from "./ScheduleEdit";
import ScheduleListScreen from "./ScheduleList";
import ScheduleAlarmScreen from "./ScheduleAlarm";

const ScheduleStack = createNativeStackNavigator();

const ScheduleScreen = () => {
    return <ScheduleStack.Navigator>
        <ScheduleStack.Screen name="ScheduleAlarm" component={ScheduleAlarmScreen} options={{ headerShown: false }} />
        <ScheduleStack.Screen name="ScheduleList" component={ScheduleListScreen} options={{ headerShown: false }} />
        <ScheduleStack.Screen name="ScheduleEdit" component={ScheduleEditScreen} options={{ headerShown: false }} />
    </ScheduleStack.Navigator>
}

export default ScheduleScreen;