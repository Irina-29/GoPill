import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Button, Appbar, Searchbar } from "react-native-paper";
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
            price: 13.49,
            image: require('./assets/drugs/advil.jpg')
        },
        {
            id: 2,
            name: "Nurofen",
            quantity: 24,
            price: 25.30,
            image: require('./assets/drugs/nurofen.jpg')
        },
        {
            id: 3,
            name: "Paracetamol",
            quantity: 20,
            price: 3.00,
            image: require('./assets/drugs/paracetamol.jpg')
        },
        {
            id: 4,
            name: "Vitamin C",
            quantity: 30,
            price: 22.50,
            image: require('./assets/drugs/vitamin-c.png')
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