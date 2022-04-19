import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Button, Card, DataTable, Divider, Modal, List, Paragraph, Subheading, Title, Headline, Appbar, Portal } from "react-native-paper";
import { ScrollView, View, StyleSheet } from "react-native";

const ScheduleListScreen = ({ navigation }: any) => {

    const [data, setData] = useState<{ id?: string, label: string, quantity: number }[]>([]);
    /**
     https://callstack.github.io/react-native-paper/data-table.html
     */
    const [visible, setVisible] = React.useState(false);
    const [visibleInTimeout, setVisibleInTimeout] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, marginRight: 25, marginLeft: 25, borderRadius: 20 };
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#64b5f6',
            bottom: 10,
        },
    });
    useEffect(() => {
        const timer = setTimeout(() => {
            showModal()
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <><Portal>
            <Modal visible={visible} contentContainerStyle={containerStyle}>
                <Headline style={{ alignSelf: 'center', color: "#64b5f6" }}>Take Paracetamol</Headline>
                <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button labelStyle={{ color: 'white', fontSize: 13}} style={{ alignSelf: 'flex-start', width: 80 }} mode="contained" color="#F95C6D"
                        // style={{width: 140, paddingTop: '4%', paddingBottom: '4%'}} 
                        onPress={() => hideModal()}
                    >Skip</Button>
                    <Button labelStyle={{ color: 'white', fontSize: 13 }} style={{ alignSelf: 'center', width: 90 }} mode="contained" color="#64b5f6"
                        // style={{width: 140, paddingTop: '4%', paddingBottom: '4%'}} 
                        onPress={() => hideModal()}
                    >Snooze</Button>
                    <Button labelStyle={{ color: 'white', fontSize: 13 }} style={{ alignSelf: 'center', width: 80 }} mode="contained" color="#81FDA7"
                        // style={{width: 140, paddingTop: '4%', paddingBottom: '4%'}} 
                        onPress={() => hideModal()}
                    >Ok</Button>
                    {/* <Button labelStyle={{color:'white'}} style={{alignSelf: 'center', width: 200}} mode="contained" color="#64b5f6"
                            onPress={() => navigation.navigate("Search")}
                            >Buy medicine</Button> */}
                </View>
            </Modal>
        </Portal>
            <MainLayout>
                <Appbar.Header style={styles.container}>
                    <Appbar.BackAction color="white" onPress={() => navigation.navigate("Home")} />
                    <Appbar.Content color="white" title="My Schedule" />
                </Appbar.Header>
                <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
                    <ScrollView stickyHeaderIndices={[0]}>
                        <View style={{ backgroundColor: "white" }}>
                            <Subheading style={{ marginLeft: "4%", marginBottom: "4%", marginTop: "4%" }}>Upcoming alarms</Subheading>
                            <Divider />
                        </View>
                        {/* LIST -> SWIPE*/}
                        <List.Section style={{ marginTop: "0%" }}>
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Paracetamol"
                                description="Today, 6:00 PM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Vitamin C"
                                description="Today, 6:30 PM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Vitamin D3"
                                description="Tomorrow, 12:00 PM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Nurofen"
                                description="Monday, 26th May, 11:00 AM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Aspirin"
                                description="Tuesday, 27th May, 3:00 PM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Calcivid"
                                description="Wednesday, 28th May, 8:00 AM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />

                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Nurofen"
                                description="Monday, 26th May, 11:00 AM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Vitamin D3"
                                description="Tomorrow, 12:00 PM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Vitamin D3"
                                description="Tomorrow, 12:00 PM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />

                        </List.Section>
                    </ScrollView>
                </View>
            </MainLayout></>
    );
}

export default ScheduleListScreen;