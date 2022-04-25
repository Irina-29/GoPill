import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeRootScreen from "./HomeRoot";
import ItemListScreen from "./ItemList";
import ScreenRootScreen from "./ScheduleRoot";

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