import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar } from "react-native-paper";;
import { ScrollView } from "react-native";
import {
    Tabs,
    TabScreen,
} from 'react-native-paper-tabs';
import OrderCard, { Order } from "./OrderCard";
import AsyncStorage from '@react-native-async-storage/async-storage';

const renderOrders = (Orders: Order[]) => {
    return (Orders.map(order => <OrderCard order={order} key={order.id}></OrderCard>
        )
    )
}
const MyOrdersScreen = ({ navigation }: any) => {

    const deliveredData: Order[] = [
        {
            amount: 29.50,
            date: "01-04-2022",
            id: 12480,
            quantity: 1,
            status: "Delivered",
            bottle: "25.30",
            medicine: "Nurofen",
            no: 6
        },
        {
            amount: 12.35,
            date: "12-03-2022",
            id: 12481,
            quantity: 3,
            status: "Delivered",
            bottle: "3",
            medicine: "Augmentin",
            no: 5
        },
        {
            amount: 16.05,
            date: "28-02-2022",
            id: 12486,
            quantity: 2,
            status: "Delivered",
            bottle: "4",
            medicine: "Vitamin D3",
            no: 4
        },
        {
            amount: 10.42,
            date: "03-02-2022",
            id: 12483,
            quantity: 1,
            status: "Delivered",
            bottle: "1",
            medicine: "Vitamin C",
            no: 3
        },
        {
            amount: 48.52,
            date: "13-01-2022",
            id: 12495,
            quantity: 5,
            status: "Delivered",
            bottle: "3",
            medicine: "Aspirin",
            no: 2
        },
        {
            amount: 32.25,
            date: "26-12-2021",
            id: 12498,
            quantity: 3,
            status: "Delivered",
            bottle: "6",
            medicine: "Calcivid",
            no: 1
        }
    ]
    const processingData: Order[] = [
        {
            amount: 17.65,
            date: "16-04-2022",
            id: 12484,
            quantity: 1,
            status: "Processing",
            bottle: "15.35",
            medicine: "Advil",
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