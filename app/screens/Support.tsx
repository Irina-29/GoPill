import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SupportPage = ({ navigation }: any) => {
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
                <Appbar.Content color={'white'} title={`Support`} />
            </Appbar.Header>
        </MainLayout>
    );
}

export default SupportPage;