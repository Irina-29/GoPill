import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Divider, Headline, List, FAB, Modal, Portal, Provider, Button, Paragraph, Appbar} from "react-native-paper";
import { View, ScrollView, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Drug } from "./DrugCard";
import ListItem from "./ItemEdit";

const addItemToList = (drug: Drug[]) => {
    return <ListItem drug={drug}></ListItem>
}

const ItemListScreen = ({ navigation, route }: any) => {

    const [drug, setDrug] = useState<Drug>(route.params?.drug || {})

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
            <Appbar.Content color="white" title="My List"/>
        </Appbar.Header>
        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
            <ScrollView>
                <List.Section>
                    <Text>{JSON.stringify(drug)}</Text>
                    {/* functie -> sa afiseze item in lista cu medicamentul */}
                    {/* {addItemToList(drug)} */}

                    {/* <TouchableOpacity onPress={showModal}>
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Paracetamol"
                        description="3x pills"
                        left={props => <List.Icon {...props} icon="pill" />} />
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={showModal}>
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Vitamin C"
                        description="27x pills"
                        left={props => <List.Icon {...props} icon="pill" />} />
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={showModal}>
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Vitamin D3"
                        description="28x pills"
                        left={props => <List.Icon {...props} icon="pill" />} />
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={showModal}>
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Nurofen"
                        description="39x pills"
                        left={props => <List.Icon {...props} icon="pill" />} />
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={showModal}>
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Aspirin"
                        description="50x pills"
                        left={props => <List.Icon {...props} icon="pill" />} />
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={showModal}>
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Calcivid"
                        description="100x pills"
                        left={props => <List.Icon {...props} icon="pill" />} />
                    </TouchableOpacity> */}
                    
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