import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Button, Card, DataTable, Divider, List, Paragraph, Subheading, Title } from "react-native-paper";
import { View } from "react-native";

const ScheduleListScreen = ({ navigation }: any) => {

    const [data, setData] = useState<{ id?: string, label: string, quantity: number }[]>([]);
    /**
     https://callstack.github.io/react-native-paper/data-table.html
     */
    return <MainLayout>
        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>
            <Subheading>Upcoming alarms</Subheading>
            <View style={{ marginTop: '2%' }}>
                {/* LIST -> SWIPE*/}
                <List.Section>
                    <Divider />
                    <List.Item
                        title="Take Paracetamol"
                        description="Today, 6:00 PM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        title="Take Vitamin C"
                        description="Today, 6:30 PM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        title="Take Vitamin D3"
                        description="Tomorrow, 12:00 PM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        title="Take Nurofen"
                        description="Monday, 26th May, 11:00 AM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        title="Take Aspirin"
                        description="Tuesday, 27th May, 3:00 PM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        title="Take Calcivid"
                        description="Wednesday, 28th May, 8:00 AM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                </List.Section>
            </View>
        </View>
    </MainLayout >
}

export default ScheduleListScreen;