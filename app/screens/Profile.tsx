import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Drawer } from "react-native-paper";
import { Dimensions } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10 }}>
            <Appbar.BackAction color="white" onPress={() => navigation.navigate("Home")}/>
                <Appbar.Content color={'white'} title={`Profile`} />
            </Appbar.Header>
            <Drawer.Item
                style={{ backgroundColor: 'white',
                width: Dimensions.get('window').width - 30,
                height: Dimensions.get('window').height / 10,
                marginTop: 25
                }}
                icon="cart"
                label="My Orders"
                onPress={() => navigation.navigate('MyOrders')}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white',
                width: Dimensions.get('window').width - 30,
                height: Dimensions.get('window').height / 10 }}
                icon="pencil-outline"
                label="Account"
                onPress={() => navigation.navigate('AccountPage')}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white',
                width: Dimensions.get('window').width - 30,
                height: Dimensions.get('window').height / 10}}
                icon="cog-outline"
                label="Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white',
                width: Dimensions.get('window').width - 30,
                height: Dimensions.get('window').height / 10 }}
                icon="help-circle"
                label="Support"
                onPress={() => navigation.navigate('Support')}
            />
            <Drawer.Item
                style={{ backgroundColor: 'white',
                width: Dimensions.get('window').width - 30,
                height: Dimensions.get('window').height / 10 }}
                icon="logout"
                label="Log out"
                onPress={() => navigation.navigate('Login')}
            />
        </MainLayout>
    );
}

export default ProfileScreen;