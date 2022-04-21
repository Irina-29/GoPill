import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Home";
import ItemScreen from "./Items";
import ScheduleScreen from "./Schedule";
import HomeRootScreen from "./HomeRoot";
import ItemListScreen from "./ItemList";
import ScheduleListScreen from "./ScheduleList";
import SearchScreen from "./Search";
import ScreenRootScreen from "./ScheduleRoot";

//https://reactnavigation.org/docs/tab-based-navigation
const Tab = createBottomTabNavigator();

const MainNavigator = () => (

    <Tab.Navigator>
        <Tab.Screen
            name="HomeRoot"
            component={HomeRootScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            //  LIST!!!
            name="Item"
            component={ItemListScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'List',
                tabBarIcon: ({ color }) => (
                    <Icon name="format-list-bulleted" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            //SCHEDULE!!!
            name="Schedule"
            component={ScreenRootScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Schedule',
                tabBarIcon: ({ color }) => (
                    <Icon name="calendar-month" color={color} size={26} />
                ),
            }}
        />  
    </Tab.Navigator>
);

export default MainNavigator;