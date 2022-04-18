import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Button, DataTable, Title, List, Paragraph, Appbar, Avatar, Card, } from "react-native-paper";;
import { AsyncStorage, TouchableOpacity, View, Text, StyleProp, ViewStyle, TextStyle, ScrollView, Dimensions } from "react-native";
import {
    Tabs,
    TabScreen,
    useTabIndex,
    useTabNavigation,
} from 'react-native-paper-tabs';
import MapView from "react-native-maps";
import OrderCard, { Order } from "./OrderCard";

const renderOrders = (Orders: Order[]) => {
    return (Orders.map(order => <OrderCard order={order}></OrderCard>
        )
    )
}
const MyOrdersScreen = ({ navigation }: any) => {

    const deliveredData: Order[] = [
        {
            amount: 35,
            date: "01-04-2022",
            id: 12480,
            quantity: 5,
            status: "Delivered",
            bottle: "7",
            medicine: "Sumamed",
            no: 6
        },
        {
            amount: 9,
            date: "12-03-2022",
            id: 12481,
            quantity: 3,
            status: "Delivered",
            bottle: "3",
            medicine: "Augmentin",
            no: 5
        },
        {
            amount: 16,
            date: "28-02-2022",
            id: 12486,
            quantity: 4,
            status: "Delivered",
            bottle: "4",
            medicine: "Vitamin D3",
            no: 4
        },
        {
            amount: 10,
            date: "03-02-2022",
            id: 12483,
            quantity: 10,
            status: "Delivered",
            bottle: "1",
            medicine: "Vitamin C",
            no: 3
        },
        {
            amount: 15,
            date: "13-01-2022",
            id: 12483,
            quantity: 5,
            status: "Delivered",
            bottle: "3",
            medicine: "Aspirin",
            no: 2
        },
        {
            amount: 18,
            date: "26-12-2021",
            id: 12483,
            quantity: 3,
            status: "Delivered",
            bottle: "6",
            medicine: "Calcivid",
            no: 1
        }
    ]
    const processingData: Order[] = [
        {
            amount: 6,
            date: "16-04-2022",
            id: 12484,
            quantity: 6,
            status: "Processing",
            bottle: "1",
            medicine: "Paracetamol",
            no: 7
        }
    ]
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

    /**
     https://callstack.github.io/react-native-paper/data-table.html
     */
    return <MainLayout>
        <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10 }}>
            <Appbar.BackAction color="white" onPress={() => navigation.navigate("Profile")} />
            <Appbar.Content color={'white'} title={`My Orders`} />
        </Appbar.Header>
        <Tabs dark={true}>
            <TabScreen label="Processing">
                <ScrollView>
                    {renderOrders(processingData)}
                </ScrollView>
            </TabScreen>
            <TabScreen label="Delivered">
                <ScrollView>
                    {renderOrders(deliveredData)}
                </ScrollView>
            </TabScreen>
        </Tabs>
    </MainLayout >
}

export default MyOrdersScreen;