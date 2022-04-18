import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Avatar, Button, Divider, Drawer, Paragraph } from "react-native-paper";
import {AsyncStorage, TouchableOpacity } from "react-native";
const SettingsForApp = ({ navigation }: any) => {
    const [user, setUser] = useState<{ name: string, email: string }>();

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
        <MainLayout>
            <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10 }}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Profile")} />
                <Appbar.Content color={'white'} title={`Settings`} />
            </Appbar.Header>
            <Drawer.Item
                style={{ backgroundColor: 'white' }}
                icon="bell"
                label="Allow notifications"
                onPress={() => navigation.navigate('Login')}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white' }}
                icon="brightness-4"
                label="Theme"
                onPress={() => navigation.navigate('Login')}
            />
        </MainLayout>
    );
}

export default SettingsForApp;