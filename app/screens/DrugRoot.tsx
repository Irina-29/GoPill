import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrugsScreen from "./DrugsList";
import DrugDetailScreen from "./DrugPage";

//https://reactnavigation.org/docs/hello-react-navigation
const ItemStack = createNativeStackNavigator();

const DrugRootScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="DrugList" component={DrugsScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="DrugDetail" component={DrugDetailScreen} options={{ headerShown: false }} />
    </ItemStack.Navigator>
}

export default DrugRootScreen;