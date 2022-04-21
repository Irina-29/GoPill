import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Divider, Headline, List, FAB, Modal, Portal, Provider, Button, Paragraph, Appbar} from "react-native-paper";
import { View, ScrollView, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Drug } from "./DrugCard";
import ListItem from "./ItemEdit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemListScreen = ({ navigation, route }: any) => {

    const [drugs, setDrugs] = useState<Drug[]>([])

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#64b5f6',
            bottom: 10,
        },
    });

    const refresh = () => {
        // AsyncStorage.setItem('@mydrugs', '[]')
        AsyncStorage.getItem('@mydrugs').then(drugs => {
            if (!!drugs) {
                setDrugs(JSON.parse(drugs));
            }
        })
    }

    const deleteDrug = (id: number) => {
        AsyncStorage.setItem("@mydrugs", JSON.stringify(drugs.filter(d => d.id !== id))).then(refresh)
    }

    useEffect(refresh, [drugs])

    return (
    <MainLayout>
        <Appbar.Header style={styles.container}>
            <Appbar.BackAction color="white" onPress={() => navigation.navigate("Home")}/>
            <Appbar.Content color="white" title="My List"/>
        </Appbar.Header>
        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
            <ScrollView>
                <List.Section>
                    {drugs.map(d => <ListItem drug = {d} key={d.id} onDelete={deleteDrug}></ListItem>)}
                </List.Section>
            </ScrollView>
            <FAB
                style={{ width: "16%", top: 452, left: 272, backgroundColor: "#64b5f6", position: 'absolute' }}
                icon="plus"
                color="white"
                onPress={() => navigation.navigate("DrugsList")} />
        </View>
    </MainLayout>
    );
}

export default ItemListScreen;