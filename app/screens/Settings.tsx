import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Button, Drawer, Headline, Portal, Modal } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsForApp = ({ navigation }: any) => {
    const [user, setUser] = useState<{ name: string, email: string }>();
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const containerStyle = { backgroundColor: 'white', padding: 20, marginRight: 15, marginLeft: 15, borderRadius: 5 };

    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = await AsyncStorage.getItem('@user');
            if (!!storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
        fetchUser();
    }, [])

    return (
        <><Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Headline style={{ alignSelf: 'center', color: "#64b5f6" }}>Allow notifications?</Headline>
                <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button labelStyle={{ color: 'white', fontSize: 14}} style={{ alignSelf: 'flex-start', width: 100 }} mode="contained" color="#F95C6D"
                        onPress={() => hideModal()}
                    >Deny</Button>
                    <Button labelStyle={{ color: 'white', fontSize: 14 }} style={{ alignSelf: 'center', width: 100 }} mode="contained" color="#81FDA7"
                        onPress={() => {hideModal(); navigation.navigate('Notifications');}}
                    >Allow</Button>
                </View>
            </Modal>
        </Portal>
        <MainLayout>
            <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10 }}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Profile")} />
                <Appbar.Content color={'white'} title={`Settings`} />
            </Appbar.Header>
            <Drawer.Item
                style={{ backgroundColor: 'white', marginTop: 20 }}
                icon="bell"
                label="Notifications"
                onPress={showModal}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white', marginTop: 10 }}
                icon="brightness-4"
                label="Theme"
            />
        </MainLayout></>
    );
}

export default SettingsForApp;