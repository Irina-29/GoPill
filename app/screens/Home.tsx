import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Subheading, Button } from "react-native-paper";
import {View } from "react-native";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => {

    const [data, setData] = useState<{ label: string, quantity: number }[]>();

    return (
        <MainLayout>
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