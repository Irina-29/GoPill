import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";
import { View, Image, Text, ScrollView } from "react-native";

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

export interface Drug {
    id: number
    name: string
    quantity: number
    price: number
}

const DrugCard = ({ drug }: {drug: Drug}) => {
    return (
        <Card key={drug.id}>
            <Card.Title title={drug.name} left={LeftContent} />
            <Card.Content>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default DrugCard;