import React, { useState } from "react";
import { Dimensions, StyleProp, TextStyle, View, ViewStyle, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Avatar, Button, Card, Paragraph, TextInput } from "react-native-paper";
import ItemEditScreen from "./ItemEdit";
import MainLayout from "./Layout";
const LeftContent = (date: string) => () => <Text>{date}</Text>
const lineStyle: StyleProp<ViewStyle> = {
    display: 'flex',
    flexDirection: 'row'
}
export interface Order {
    id: number
    date: string
    quantity: number
    amount: number
    status: "delivered" | "processing"
}
const multiLineStyle: StyleProp<ViewStyle> = {
    ...lineStyle,
    justifyContent: 'space-between'
}
const boldStyle: StyleProp<TextStyle> = {
    fontWeight: 'bold'
}
const mapStyles: any = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        margin: 15,
        width: Dimensions.get('window').width - 30,
        height: Dimensions.get('window').height / 3,
    },
};
const OrderCard = ({ order }: { order: Order }) => {
    const [expanded, setExpanded] = useState<boolean>(false)

    return (<Card style={{ margin: 10 }} key={order.id}>
        <Card.Title title={`Order No ${order.id}`} right={LeftContent(order.date)} style={{ padding: 10 }} />
        <Card.Content>
            <View style={lineStyle}>
                <Text>Tracking number: </Text>
                <Text style={boldStyle}>{order.id}</Text>
            </View>
            <View style={multiLineStyle}>
                <View style={lineStyle}>
                    <Text>Quantity: </Text>
                    <Text style={boldStyle}>{order.quantity}</Text>
                </View>
                <View style={lineStyle}>
                    <Text>Total amount: </Text>
                    <Text style={boldStyle}>{`${order.amount} $`}</Text>
                </View>
            </View>
            {expanded && order.status === 'processing' && <View style={mapStyles.container}>
                <MapView style={mapStyles.map} initialRegion={{latitude: 45, longitude:26, latitudeDelta: 0.05, longitudeDelta:0.05}}>
                    <Marker coordinate={{latitude: 45, longitude : 26 }}>
                        <Avatar.Icon icon="car-side" size={30}/>
                    </Marker>
                </MapView>
            </View>}
            {expanded && order.status === 'delivered' && <View style={mapStyles.container}>
                <Text>idkfsjsVDNH</Text>
            </View>}
        </Card.Content>

        <Card.Actions style={multiLineStyle}>
            <Button onPress={() => setExpanded(!expanded)}>{expanded ? "Hide Details" : "Show Details"}
            </Button>
            <Text style={{ color: order.status === 'delivered' ? 'green' : 'red' }}>{order.status}</Text>
        </Card.Actions>
    </Card>)
}

export default OrderCard;