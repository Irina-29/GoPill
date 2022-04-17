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
            amount: 120,
            date: "05-12-2009",
            id: 124863835463,
            quantity: 4,
            status: "Delivered",
            bottle: "4",
            medicine: "Paracetamol ",
            no: 6
        },
        {
            amount: 120,
            date: "05-12-2009",
            id: 12486354464356,
            quantity: 4,
            status: "Delivered",
            bottle: "4",
            medicine: "Paracetamol",
            no: 4
        },
        {
            amount: 120,
            date: "05-12-2009",
            id: 12486233435464,
            quantity: 4,
            status: "Delivered",
            bottle: "4",
            medicine: "Paracetamol",
            no: 3
        },
        {
            amount: 120,
            date: "05-12-2009",
            id: 124863832234536,
            quantity: 4,
            status: "Delivered",
            bottle: "4",
            medicine: "Paracetamol",
            no: 2
        }
    ]
    const processingData: Order[] = [
        {
            amount: 120,
            date: "05-12-2009",
            id: 12486383243563,
            quantity: 4,
            status: "Processing",
            bottle: "4",
            medicine: "Paracetamol",
            no: 1
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
        <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10, left: 8 }}>
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