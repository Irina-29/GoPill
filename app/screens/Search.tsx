import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Searchbar } from "react-native-paper";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Drug } from "./DrugCard";
import PharmacyCard, { Pharmacy } from "./PharmacyCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PharmacyStack = createNativeStackNavigator();

const renderPharmacy = (Pharmacy: Pharmacy[]) => {
    return (Pharmacy.map(pharmacy => <PharmacyCard pharmacy={pharmacy} key={pharmacy.id}></PharmacyCard>))
}

const SearchScreen = ({ navigation }: any) => {

    const pharmacyList: Pharmacy[] = [
         {
            id: 1,
            name: "Farmacia Tei",
            address: "Str. Barbu Văcărescu 154-158",
            hours: "8 AM - 8:45 PM",
            drugPrice: 22.50,
            distance: 450
        },
        {
            id: 2,
            name: "Catena",
            address: "Calea Dorobanți 152",
            hours: "7 AM - 9:30 PM",
            drugPrice: 20.50,
            distance: 300
        },
    ]

    const [pharmacy, setPharmacy] = useState<Pharmacy[]>(pharmacyList);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#64b5f6',
            bottom: 10,
        },
    });

    const onChangeSearch = (query: string) => setPharmacy(pharmacyList.filter(d => d.name.includes(query)));

    return (
        <MainLayout>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("DrugDetail")} />
                <Appbar.Content color="white" title="Find medicine" />
            </Appbar.Header>
            <Searchbar
            style={{margin: "3%"}}
            placeholder="Search"
            onChangeText={onChangeSearch}
            />
            <ScrollView>
                {renderPharmacy(pharmacy)}
            </ScrollView>
        </MainLayout>
    );
}

export default SearchScreen;