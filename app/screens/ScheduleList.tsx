import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Button, Divider, Modal, List, Subheading, Headline, Appbar, Portal } from "react-native-paper";
import { ScrollView, View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Drug } from "./DrugCard";

const ScheduleListScreen = ({ navigation }: any) => {

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const containerStyle = { backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, marginRight: 25, marginLeft: 25, borderRadius: 20 };
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#64b5f6',
            bottom: 10,
        },
    });

    const decreasePill = async() =>
    {   
        const storedDrugs = await AsyncStorage.getItem("@mydrugs")
        if(!storedDrugs)
            return
        const allDrugs: Drug[] = JSON.parse(storedDrugs)
        const alarmDrug = allDrugs.find(d => d.name === "Paracetamol") 
        if(alarmDrug) {
            alarmDrug.remainingPills = alarmDrug?.remainingPills?alarmDrug.remainingPills-1: 0
        }
        await AsyncStorage.setItem("@mydrugs", JSON.stringify(allDrugs))
        hideModal()
    }

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
                        onPress={() => hideModal()}
                    >Skip</Button>
                    <Button labelStyle={{ color: 'white', fontSize: 13 }} style={{ alignSelf: 'center', width: 90 }} mode="contained" color="#64b5f6"
                        onPress={() => hideModal()}
                    >Snooze</Button>
                    <Button labelStyle={{ color: 'white', fontSize: 13 }} style={{ alignSelf: 'center', width: 80 }} mode="contained" color="#81FDA7"
                        onPress={decreasePill}
                    >Ok</Button>
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
                            <Subheading style={{ marginLeft: "4%", marginBottom: "4%", marginTop: "4%", color: "#64b5f6" }}>Upcoming alarms</Subheading>
                            <Divider />
                        </View>
                        <List.Section style={{ marginTop: "0%" }}>
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Paracetamol"
                                description="Today, 7:30 PM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Paracetamol"
                                description="Tomorrow, 7:30 PM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />
                            <Divider />
                            <List.Item
                                style={{ marginLeft: "2%" }}
                                title="Take Paracetamol"
                                description="Tuesday, 26th April, 7:30 PM"
                                left={props => <List.Icon {...props} icon="pill" />}
                            />   
                        </List.Section>
                    </ScrollView>
                </View>
            </MainLayout></>
    );
}

export default ScheduleListScreen;