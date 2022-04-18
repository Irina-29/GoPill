import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Button, Appbar } from "react-native-paper";
import { View, Image, Text, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrugCard, { Drug } from "./DrugCard";

const DrugsStack = createNativeStackNavigator();

const renderDrugs = (Drugs: Drug[]) => {
    return (Drugs.map(drug => <DrugCard drug={drug}></DrugCard>))
}

const DrugsScreen = ({ navigation }: any) => {

    const drugsList: Drug[] = [
        {
            id: 1,
            name: "Advil",
            quantity: 24,
            price: 13.49
        },
        {
            id: 2,
            name: "Paracetamol",
            quantity: 20,
            price: 3.00
        }
    ]

    return (
        <MainLayout>
            <ScrollView>
                {renderDrugs(drugsList)}
            </ScrollView>
        </MainLayout>
    )
}

export default DrugsScreen;