import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import HomeScreen from "./Home";
import PrescriptionScreen from "./Prescription";
import ProfileScreen from "./Profile";
import MyOrdersScreen from "./MyOrders";
import SettingsForApp from "./Settings";
import DrugsScreen from "./DrugsList";
import AccountProfile from "./AccountPage";
import SupportPage from "./Support";
import DrugRootScreen from "./DrugRoot";
import NotificationsForApp from "./Notifications";
import ScheduleRootScreen from "./ScheduleRoot";
import ItemListScreen from "./ItemList";

//https://reactnavigation.org/docs/hello-react-navigation
const ItemStack = createNativeStackNavigator();

const HomeRootScreen = () => {
    return <ItemStack.Navigator initialRouteName="Home">
        <ItemStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="Prescription" component={PrescriptionScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="MyOrders" component={MyOrdersScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="Settings" component={SettingsForApp} options={{ headerShown: false }} />
        <ItemStack.Screen name="AccountPage" component={AccountProfile} options={{ headerShown: false }} />
        <ItemStack.Screen name="Support" component={SupportPage} options={{ headerShown: false }} />
        <ItemStack.Screen name="DrugsList" component={DrugRootScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="Notifications" component={NotificationsForApp} options={{ headerShown: false }} />
        <ItemStack.Screen name="ScheduleRootScreen" component={ScheduleRootScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="ItemList" component={ItemListScreen} options={{ headerShown: false }} />
    </ItemStack.Navigator>
}

export default HomeRootScreen;