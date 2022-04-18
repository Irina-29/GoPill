import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Avatar, Button, Divider, Paragraph } from "react-native-paper";
import { AsyncStorage, StyleProp, TouchableOpacity, ViewStyle } from "react-native";
const SupportPage = ({ navigation }: any) => {
    const [user, setUser] = useState<{ name: string, email: string }>();
    const lineStyle: StyleProp<ViewStyle> = {
        display: 'flex',
        flexDirection: 'row'
    }
    
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
                <Appbar.Content color={'white'} title={`Support`} />
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

export default SupportPage;