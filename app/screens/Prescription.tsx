import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrescriptionCameraScreen from "./PrescriptionCamera";
import PrescriptionListScreen from "./PrescriptionList";
import PrescriptionEditScreen from "./PrescriptionEdit";

const ItemStack = createNativeStackNavigator();

const PrescriptionScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="PrescriptionList" component={PrescriptionListScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="PrescriptionCamera" component={PrescriptionCameraScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="PrescriptionEdit" component={PrescriptionEditScreen} options={{ headerShown: false }} />
    </ItemStack.Navigator>
}

export default PrescriptionScreen;