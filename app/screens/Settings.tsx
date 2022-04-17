import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Avatar, Button, Divider, Paragraph } from "react-native-paper";
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
            <Appbar.Header style={{ backgroundColor: '#64b5f6' }}>
                <TouchableOpacity style={{ marginBottom: '6%', marginLeft: '2%' }} onPress={() => navigation.navigate("Profile")}>
                    <Avatar.Image size={65} source={require('./assets/avatar.png')} />
                </TouchableOpacity>
                <Appbar.Content color={'white'} style={{ marginBottom: '6%', marginLeft: '2%' }} title={`Hello, ${user?.name || user?.email}!`} />
            </Appbar.Header>
            <Button icon="cart" mode="outlined" onPress={() => navigation.navigate('MyOrders')}>
                My orders
            </Button>
            <Divider />
            <Button icon="logout" mode="outlined" onPress={() => navigation.navigate('Login')}>
                Log out
            </Button>
        </MainLayout>
    );
}

export default SettingsForApp;