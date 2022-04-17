import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Button, Card, DataTable, Divider, List, Paragraph, Subheading, Title, Headline, Appbar } from "react-native-paper";
import { ScrollView, View, StyleSheet } from "react-native";

const ScheduleListScreen = ({ navigation }: any) => {

    const [data, setData] = useState<{ id?: string, label: string, quantity: number }[]>([]);
    /**
     https://callstack.github.io/react-native-paper/data-table.html
     */

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
                <Appbar.Content color="white" title="My Schedule"/>
            </Appbar.Header>
            <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
            {/* <Headline style={{ textAlign: "center", lineHeight: 80, color: 'white', backgroundColor: '#64b5f6' }}>My Schedule</Headline> */}
                <ScrollView stickyHeaderIndices={[0]}>
                    <View style={{backgroundColor:"white"}}>
                        <Subheading style={{marginLeft:"4%", marginBottom: "4%", marginTop: "4%"}}>Upcoming alarms</Subheading>
                        <Divider />
                    </View>
                    {/* LIST -> SWIPE*/}
                    <List.Section style={{marginTop: "0%"}}>
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
                        <List.Item
                            style={{marginLeft:"2%"}}
                            title="Take Nurofen"
                            description="Monday, 26th May, 11:00 AM"
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
                            title="Take Vitamin D3"
                            description="Tomorrow, 12:00 PM"
                            left={props => <List.Icon {...props} icon="pill" />}
                        />

                    </List.Section>
                </ScrollView>
            </View>
        </MainLayout>
    );
}

export default ScheduleListScreen;