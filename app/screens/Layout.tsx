import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Avatar } from "react-native-paper";
import { ActivityIndicator, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MainLayout = ({ children }: any) => {

    const [user, setUser] = useState<{ name: string, email: string }>();

    const navigation = useNavigation() as any;

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
        user ? <SafeAreaView>
            <View style={{ alignSelf: 'stretch', backgroundColor: 'white', height: '100%', display: 'flex', flexDirection: 'column' }}>{children}</View>
        </SafeAreaView> :
            <ActivityIndicator />
    );
}

export default MainLayout;