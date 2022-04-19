import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Searchbar } from "react-native-paper";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Drug } from "./DrugCard";

const SearchScreen = ({ navigation, route }: any) => {

    const [drug, setDrug] = useState<Drug>(route.params?.drug || {})

    const containerStyle = { backgroundColor: 'white', padding: 20, marginRight: 15, marginLeft: 15, borderRadius: 5 };
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#64b5f6',
            bottom: 10,
        },
    });

    return (
        <MainLayout>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Home")} />
                <Appbar.Content color="white" title="Find medicine" />
            </Appbar.Header>
            <Searchbar
            style={{margin: "3%"}}
            placeholder="Search"
            // onChangeText={onChangeSearch}
            />
            <ScrollView>
                <Text>{JSON.stringify(drug)}</Text>
            </ScrollView>
        </MainLayout>
    );
}

export default SearchScreen;