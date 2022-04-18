import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Avatar, Button, Divider, Drawer, List, Paragraph } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AsyncStorage, TouchableOpacity } from "react-native";
import MyOrdersScreen from "./MyOrders";
import SettingsForApp from "./Settings";
const ProfileStack = createNativeStackNavigator();
const ProfileScreen = ({ navigation }: any) => {
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
            <Appbar.BackAction color="white" onPress={() => navigation.navigate("Home")}/>
                <Appbar.Content color={'white'} style={{ marginBottom: '6%', marginLeft: '2%' }} title={`Profile`} />
            </Appbar.Header>
            <Drawer.Item
                style={{ backgroundColor: 'white' }}
                icon="cart"
                label="My Orders"
                onPress={() => navigation.navigate('MyOrders')}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white' }}
                icon="pencil-outline"
                label="Account"
                onPress={() => navigation.navigate('AccountPage')}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white' }}
                icon="cog-outline"
                label="Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white' }}
                icon="help-circle"
                label="Support"
                onPress={() => navigation.navigate('Support')}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white' }}
                icon="logout"
                label="Log out"
                onPress={() => navigation.navigate('Login')}
            />
        </MainLayout>
    );
}

export default ProfileScreen;