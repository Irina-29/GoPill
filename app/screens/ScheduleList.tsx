import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Button, Card, DataTable, Divider, List, Paragraph, Subheading, Title, Headline } from "react-native-paper";
import { ScrollView, View } from "react-native";

const ScheduleListScreen = ({ navigation }: any) => {

    const [data, setData] = useState<{ id?: string, label: string, quantity: number }[]>([]);
    /**
     https://callstack.github.io/react-native-paper/data-table.html
     */
    return <MainLayout>
        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
        {/* <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}> */}
        <Headline style={{ textAlign: "center", lineHeight: 80, color: 'white', backgroundColor: '#64b5f6' }}>My Schedule</Headline>
            <View style={{ marginTop: '4%' }}>
                <Subheading style={{marginLeft:"4%", marginBottom: "2%"}}>Upcoming alarms</Subheading>
                {/* LIST -> SWIPE*/}
                <ScrollView>
                <List.Section style={{marginBottom: "12%"}}>
                    <Divider />
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Take Paracetamol"
                        description="Today, 6:00 PM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Take Vitamin C"
                        description="Today, 6:30 PM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Take Vitamin D3"
                        description="Tomorrow, 12:00 PM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Take Nurofen"
                        description="Monday, 26th May, 11:00 AM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Take Aspirin"
                        description="Tuesday, 27th May, 3:00 PM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                    <List.Item
                        style={{marginLeft:"2%"}}
                        title="Take Calcivid"
                        description="Wednesday, 28th May, 8:00 AM"
                        left={props => <List.Icon {...props} icon="pill" />}
                    />
                    <Divider />
                </List.Section>
                </ScrollView>
            </View>
        </View>
    </MainLayout >
}

export default ScheduleListScreen;