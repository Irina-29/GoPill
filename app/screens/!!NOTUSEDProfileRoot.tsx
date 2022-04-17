import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "./EditProfile";
import SettingsForApp from "./Settings";
import MyOrdersScreen from "./MyOrders";
import ProfileScreen from "./Profile";
//https://reactnavigation.org/docs/hello-react-navigation
const ProfileStack = createNativeStackNavigator();

const ProfileRootScreen = () => {
    return <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <ProfileStack.Screen name="MyOrders" component={MyOrdersScreen} options={{ headerShown: false }} />
        <ProfileStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        <ProfileStack.Screen name="Settings" component={SettingsForApp} options={{ headerShown: false }} />

    </ProfileStack.Navigator>
}

export default ProfileRootScreen;