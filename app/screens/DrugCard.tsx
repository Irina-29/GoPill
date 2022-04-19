import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";
import { View, Image, Text, ScrollView, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LeftContent = (drug:Drug)=>() => <Image style={{width: 85, height: 70}} source={drug.image} />

export interface Drug {
    id: number
    name: string
    quantity: number
    price: number
    image: any
}

const styles = StyleSheet.create({
    container: {
        marginTop: "3%",
        marginBottom: "3%",
        marginLeft: "6%",
        marginRight: "6%"
    },
});

const DrugCard = ({ drug }: {drug: Drug}) => {
    const navigation = useNavigation();
    
    return (
        <Card key={drug.id} style={styles.container} onPress={() => navigation.navigate("DrugDetail", {drug})}>
            <Card.Title subtitleStyle={{marginLeft: '18%'}} titleStyle={{marginLeft: '18%'}} title={drug.name} subtitle={`${drug.quantity}x pills`} left={LeftContent(drug)}/>      
        </Card>
    )
}

export default DrugCard;