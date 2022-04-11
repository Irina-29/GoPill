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
            <Appbar.Header style={{ backgroundColor: '#81d3f9'}}>
                <TouchableOpacity style={{marginBottom: '6%', marginLeft: '2%'}} onPress={() => navigation.navigate("Profile")}>
                    <Avatar.Image size={65} source={require('./assets/avatar.png')} />
                </TouchableOpacity>
                <Appbar.Content style={{marginBottom: '6%', marginLeft: '2%'}} title={`Hello, ${user.name || user.email}!`} />
                {/* <Appbar.Action icon="logout" onPress={() => navigation.navigate("Login")}/> */}
                <TouchableOpacity style={{marginBottom: '6%', marginLeft: '2%'}} onPress={() => navigation.navigate("Login")}>
                    <Image style={{width: 38, height: 38, marginBottom: '6%', marginRight: '2%'}} source={require('./assets/cog-outline.png')}/>
                </TouchableOpacity>
            </Appbar.Header>
            <View style={{ alignSelf: 'stretch', backgroundColor: 'white', height: '100%', display: 'flex', flexDirection: 'column' }}>{children}</View>
        </SafeAreaView> :
            <ActivityIndicator />
    );
}

export default MainLayout;