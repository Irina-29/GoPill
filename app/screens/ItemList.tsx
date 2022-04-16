import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Button, Card, DataTable, Divider, Headline, List, Paragraph, Subheading, Title, FAB } from "react-native-paper";
import { View, ScrollView } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

const ItemListScreen = ({ navigation }: any) => {

    const [data, setData] = useState<{ id?: string, label: string, quantity: number }[]>([]);
    /**
     https://callstack.github.io/react-native-paper/data-table.html
        */
    return (
        <MainLayout>
            <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
                <Headline style={{textAlign: "center", lineHeight: 80, color: 'white', backgroundColor: '#64b5f6' }}>My List</Headline >
                <View style={{marginLeft: '5%', marginRight: '5%'}}>
                <FAB
                    style={{margin: 10, right: 0, bottom: 0, backgroundColor: "#64b5f6", position: 'absolute'}}
                    // label={"ADD"}
                    icon="plus"
                    color="white"
                    onPress={() => console.log('Pressed')}
                />
                    <ScrollView>
                        <List.Section>
                            <List.Item
                                    title="Panadol"
                                    description="3x pills"
                                    left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                    title="Paracetamol"
                                    description="12x pills"
                                    left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                    title="Vitamin C"
                                    description="27x pills"
                                    left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                    title="Vitamin D3"
                                    description="28x pills"
                                    left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                    title="Nurofen"
                                    description="39x pills"
                                    left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                    title="Aspirin"
                                    description="50x pills"
                                    left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                    title="Calcivid"
                                    description="100x pills"
                                    left={props => <List.Icon {...props} icon="pill" />}
                            />
                        </List.Section>
                    </ScrollView>
                </View>
            </View>
        </MainLayout >
    );
}

export default ItemListScreen;