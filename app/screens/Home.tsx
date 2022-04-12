import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Subheading, Button, Appbar, Avatar } from "react-native-paper";
import {TouchableOpacity, View, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => {

    const [data, setData] = useState<{ label: string, quantity: number }[]>();
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
            <Appbar.Header style={{ backgroundColor: '#81d3f9'}}>
                <TouchableOpacity style={{marginBottom: '6%', marginLeft: '2%'}} onPress={() => navigation.navigate("Profile")}>
                    <Avatar.Image size={65} source={require('./assets/avatar.png')} />
                </TouchableOpacity>
                <Appbar.Content style={{marginBottom: '6%', marginLeft: '2%'}} title={`Hello, ${user?.name || user?.email}!`} />
                {/* <Appbar.Action icon="logout" onPress={() => navigation.navigate("Login")}/> */}
                <TouchableOpacity style={{marginBottom: '6%', marginLeft: '2%'}} onPress={() => navigation.navigate("Login")}>
                    <Image style={{width: 38, height: 38, marginBottom: '6%', marginRight: '2%'}} source={require('./assets/cog-outline.png')}/>
                </TouchableOpacity>
            </Appbar.Header>
            <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', marginTop: '5%', marginLeft: '5%'}}>
                    <Subheading>Quick Action</Subheading>
                        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',  marginTop: '10%', marginBottom: '10%'}}>
                            <Button mode="outlined" color="#81d3f9" style={{width: 140, paddingTop: '4%', paddingBottom: '4%'}} 
                            // onPress={() => navigation.navigate("Schedule")}
                            >Add drug</Button>
                            <Button mode="outlined" color="#81d3f9" style={{width: 140, paddingTop: '4%', paddingBottom: '4%'}}
                            onPress={() => navigation.navigate("Search")}
                            >Buy drug</Button>
                        </View>
                    <Subheading>Notifications</Subheading>
            </View>
       </MainLayout>
    );
}

export default HomeScreen;