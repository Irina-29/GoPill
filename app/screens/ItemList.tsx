import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Button, Card, DataTable, Divider, Headline, List, Paragraph, Subheading, Title } from "react-native-paper";
import { View } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

const ItemListScreen = ({ navigation }: any) => {

        const [data, setData] = useState<{ id?: string, label: string, quantity: number }[]>([]);
        /**
         https://callstack.github.io/react-native-paper/data-table.html
         */
        return <MainLayout>
                <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
                        <Headline style={{textAlign: "center", lineHeight: 100, color: 'white', backgroundColor: '#64b5f6' }}>My List </Headline >
                        <View>
                                {/* LIST -> SWIPE*/}
                                <List.Section>
                                        <List.Item
                                                title="Panadol"
                                                description="Only 3x pills left"
                                                left={props => <List.Icon {...props} icon="pill" />}
                                        />
                                        <Divider />
                                        <List.Item
                                                title="Paracetamol"
                                                description="Only 12x pills left"
                                                left={props => <List.Icon {...props} icon="pill" />}
                                        />
                                        <Divider />
                                        <List.Item
                                                title="Vitamin C"
                                                description="Only 27x pills left"
                                                left={props => <List.Icon {...props} icon="pill" />}
                                        />
                                        <Divider />
                                        <List.Item
                                                title="Vitamin D3"
                                                description="Only 28x pills left"
                                                left={props => <List.Icon {...props} icon="pill" />}
                                        />
                                        <Divider />
                                        <List.Item
                                                title="Nurofen"
                                                description="Only 39x pills left"
                                                left={props => <List.Icon {...props} icon="pill" />}
                                        />
                                        <Divider />
                                        <List.Item
                                                title="Aspirin"
                                                description="Only 50x pills left"
                                                left={props => <List.Icon {...props} icon="pill" />}
                                        />
                                        <Divider />
                                        <List.Item
                                                title="Calcivid"
                                                description="Only 100x pills left"
                                                left={props => <List.Icon {...props} icon="pill" />}
                                        />
                                        <Divider />
                                        <List.Item
                                                title="Calcivid"
                                                description="Only 100x pills left"
                                                left={props => <List.Icon {...props} icon="pill" />}
                                        />
                                        <Divider />
                                </List.Section>
                        </View>
                </View>
        </MainLayout >
}

export default ItemListScreen;