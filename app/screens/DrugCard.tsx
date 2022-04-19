import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";
import { View, Image, Text, ScrollView, StyleProp, ViewStyle, StyleSheet } from "react-native";

const LeftContent = () => <Image style={{width: 90, height: 60}} source={require('./assets/drugs/advil.jpg')} />

export interface Drug {
    id: number
    name: string
    quantity: number
    price: number
    image: File
}

const styles = StyleSheet.create({
    container: {
        margin: "4%"
    },
});

const DrugCard = ({ drug }: {drug: Drug}) => {
    return (
        <Card key={drug.id} style={styles.container}>
            <Card.Title subtitleStyle={{marginLeft: '18%'}} titleStyle={{marginLeft: '18%'}} title={drug.name} subtitle={`${drug.quantity}x pills`} left={LeftContent}/>      
        </Card>
    )
}

export default DrugCard;