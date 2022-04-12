import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Home";
import ItemScreen from "./Items";
import HomeRootScreen from "./HomeRoot";

//https://reactnavigation.org/docs/tab-based-navigation
const Tab = createBottomTabNavigator();

const MainNavigator = () => (

    <Tab.Navigator>
        <Tab.Screen
            name="Home"
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
            //SCHEDULE!!!
            name="Items"
            component={ItemScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Schedule',
                tabBarIcon: ({ color }) => (
                    <Icon name="calendar-month" color={color} size={26} />
                ),
            }}
        />  
        <Tab.Screen
            //SEARCH!!!
            name="Search"
            component={ItemScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Search',
                tabBarIcon: ({ color }) => (
                    <Icon name="magnify" color={color} size={26} />
                ),
            }}   
        />  
    </Tab.Navigator>
);

export default MainNavigator;