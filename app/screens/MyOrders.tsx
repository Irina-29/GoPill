import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Button, DataTable, List, Paragraph } from "react-native-paper";
const MyOrdersScreen = ({ navigation }: any) => {

    const deliveredData = [{ id: 'item1' }, { id: 'item2' }]
    const processingData = [{ id: 'item3' }, { id: 'item4' }]

    const [data, setData] = useState<{ id?: string }[]>(deliveredData);
    const [selection, setSelection] = useState<string>("delivered");

    /**
     https://callstack.github.io/react-native-paper/data-table.html
     */
    return <MainLayout>
        <DataTable.Row>
            <DataTable.Cell>
                <Button color={selection === 'delivered' ? '#64b5f6' : 'white'} 
                labelStyle={{color : selection === 'delivered' ? 'white' : '#64b5f6'}}
                mode="contained" 
                onPress={() => { setSelection("delivered"); setData(deliveredData) }}>Delivered</Button>
            </DataTable.Cell>
            <DataTable.Cell>
                <Button color={selection === 'proccessing' ? '#64b5f6' : 'white'} 
                labelStyle={{color : selection === 'proccessing' ? 'white' : '#64b5f6'}}
                mode="contained" 
                onPress={() => { setSelection("proccessing"); setData(processingData) }}>Processing</Button>
            </DataTable.Cell>
        </DataTable.Row>
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Item</DataTable.Title>
                <DataTable.Title numeric>Quantity</DataTable.Title>
            </DataTable.Header>
            {data.map(d => <DataTable.Row key={d.id}>
                <DataTable.Cell>{d.id}</DataTable.Cell>
            </DataTable.Row>)}
        </DataTable>

    </MainLayout >
}

export default MyOrdersScreen;