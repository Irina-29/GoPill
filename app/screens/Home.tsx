import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Subheading, Button, Appbar, Avatar, List, Divider } from "react-native-paper";
import {TouchableOpacity, View, Image, Text, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => {

    const [data, setData] = useState<{ label: string, quantity: number }[]>();
    const [user, setUser] = useState<{ name: string, email: string, password: string,address: string, phoneNumber: string}>();

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
            <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10, left: 8}}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Avatar.Image size={65} source={require('./assets/avatar.png')} />
                </TouchableOpacity>
                <Appbar.Content color={'white'} title={`Hello, ${user?.name || user?.email}!`} />
            </Appbar.Header>
            <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
                    <Subheading>Quick Action</Subheading>
                        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center',  marginTop: '10%', marginBottom: '10%'}}>
                            <Button labelStyle={{color:'white', lineHeight: 32}} style={{alignSelf: 'center', width: 200}} mode="contained" color="#64b5f6" 
                            // style={{width: 140, paddingTop: '4%', paddingBottom: '4%'}} 
                            onPress={() => navigation.navigate("DrugsList")}
                            >Add new medicine</Button>
                            {/* <Button labelStyle={{color:'white'}} style={{alignSelf: 'center', width: 200}} mode="contained" color="#64b5f6"
                            onPress={() => navigation.navigate("Search")}
                            >Buy medicine</Button> */}
                        </View>
                    <Subheading>Notifications</Subheading>
                        <View style={{marginTop: '2%'}}>
                            {/* LIST -> SWIPE*/}
                            <ScrollView>
                            <List.Section>
                                <Divider />
                                <List.Item
                                    title="Take Paracetamol"
                                    description="Alarm at 7:30 PM"
                                    left={props => <List.Icon {...props} icon="pill" />}
                                />
                                <Divider />
                                {/* <List.Item
                                    title="Take Vitamin C"
                                    description="Alarm at 6:30 PM"
                                    left={props => <List.Icon {...props} icon="pill" />}
                                />
                                <Divider /> */}
                                <List.Item
                                    title="Only 3x Vitamin C pills left"
                                    description="Reorder medicine"
                                    left={props => <List.Icon {...props} icon="cart-outline" />}
                                />
                                <Divider />
                                <List.Item
                                    title="SALE 60% OFF on Nurofen"
                                    description="Catena pharmacy"
                                    left={props => <List.Icon {...props} icon="sale" />}
                                />
                                <Divider />
                            </List.Section>
                            </ScrollView>
                        </View>
            </View>
       </MainLayout>
    );
}

export default HomeScreen;