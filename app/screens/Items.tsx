import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemListScreen from "./ItemList";
import ListItem from "./ItemEdit";

const ItemStack = createNativeStackNavigator();

const ItemScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="ItemList" component={ItemListScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="ItemEdit" component={ListItem} options={{ headerShown: false }} />
    </ItemStack.Navigator>
}

export default ItemScreen;