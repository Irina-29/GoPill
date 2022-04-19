import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Button, Appbar, Searchbar } from "react-native-paper";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrugCard, { Drug } from "./DrugCard";

const DrugsStack = createNativeStackNavigator();

const renderDrugs = (Drugs: Drug[]) => {
    return (Drugs.map(drug => <DrugCard drug={drug} key={drug.id}></DrugCard>))
}

const DrugsScreen = ({ navigation }: any) => {

    const drugsList: Drug[] = [
        {
            id: 1,
            name: "Advil",
            quantity: 24,
            price: 13.49,
            image: require('./assets/drugs/advil.jpg'),
            dose: 3,
            description: "Advil provides temporary relief of pain and discomfort from: Headache, Back Pain, Muscle Pain, Period Pain, Dental Pain, Arthritis Pain, Sore Throat Pain, Cold & Flu"
        },
        {
            id: 2,
            name: "Calcivid",
            quantity: 60,
            price: 42.30,
            image: require('./assets/drugs/calcivid.png'),
            dose: 3,
            description: "Advil provides temporary relief of pain and discomfort from: Headache, Back Pain, Muscle Pain, Period Pain, Dental Pain, Arthritis Pain, Sore Throat Pain, Cold & Flu"        },
        {
            id: 3,
            name: "Nurofen",
            quantity: 24,
            price: 25.30,
            image: require('./assets/drugs/nurofen.jpg'),
            dose: 3,
            description: "Advil provides temporary relief of pain and discomfort from: Headache, Back Pain, Muscle Pain, Period Pain, Dental Pain, Arthritis Pain, Sore Throat Pain, Cold & Flu"        },
        {
            id: 4,
            name: "Paracetamol",
            quantity: 20,
            price: 3.00,
            image: require('./assets/drugs/paracetamol.jpg'),
            dose: 3,
            description: "Advil provides temporary relief of pain and discomfort from: Headache, Back Pain, Muscle Pain, Period Pain, Dental Pain, Arthritis Pain, Sore Throat Pain, Cold & Flu"        },
        {
            id: 5,
            name: "Vitamin C",
            quantity: 30,
            price: 22.50,
            image: require('./assets/drugs/vitamin-c.jpg'),
            dose: 4,
            description: "Advil provides temporary relief of pain and discomfort from: Headache, Back Pain, Muscle Pain, Period Pain, Dental Pain, Arthritis Pain, Sore Throat Pain, Cold & Flu"        },
        {
            id: 6,
            name: "Vitamin D",
            quantity: 30,
            price: 33.50,
            image: require('./assets/drugs/vitamin-d.png'),
            dose: 4,
            description: "Advil provides temporary relief of pain and discomfort from: Headache, Back Pain, Muscle Pain, Period Pain, Dental Pain, Arthritis Pain, Sore Throat Pain, Cold & Flu"        }
    ]

    const [drugs, setDrugs] = useState<Drug[]>(drugsList); 

    const onChangeSearch = (query: string) => setDrugs(drugsList.filter(d => d.name.includes(query)));

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#64b5f6',
            bottom: 10,
        },
    });

    return (
        <MainLayout>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Home")}/>
                <Appbar.Content color="white" title="Medicine"/>
            </Appbar.Header>
            <Searchbar
            style={{margin: "3%"}}
            placeholder="Search"
            onChangeText={onChangeSearch}
            />
            <ScrollView>
                {renderDrugs(drugs)}
            </ScrollView>
        </MainLayout>
    )
}

export default DrugsScreen;