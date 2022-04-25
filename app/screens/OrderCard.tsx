import React, { useState } from "react";
import { Dimensions, StyleProp, TextStyle, View, ViewStyle, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Avatar, Button, Card } from "react-native-paper";

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
    medicine: string,
    bottle: string,
    no: number,
    status: "Delivered" | "Processing"
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
        <Card.Title title={`Order No ${order.no}`} right={LeftContent(order.date)} style={{ padding: 10 }} />
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
                    <Text style={boldStyle}>{`${order.amount} lei`}</Text>
                </View>
            </View>
            {expanded && order.status === 'Processing' && 
            <View>
                <View style={{marginTop: '4%'}}>
                    <View style={lineStyle}>
                        <Text>Medicine: </Text>
                        <Text style={boldStyle}>{order.medicine}</Text>
                    </View>
                    <View style={lineStyle}>
                        <Text>Price: </Text>
                        <Text style={boldStyle}>{`${order.bottle} lei`}</Text>
                    </View>
                </View>
                <View style={mapStyles.container}>
                    <MapView style={mapStyles.map} initialRegion={{ latitude: 44.4455, longitude: 26.090, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
                        <Marker coordinate={{ latitude: 44.457465558013624, longitude: 26.09637597248771 }}>
                            <Avatar.Icon icon="car-side" size={30} />
                        </Marker>
                        <Marker coordinate={{ latitude: 44.432, longitude: 26.08 }}>
                            <Avatar.Icon style={{backgroundColor: '#F95C6D'}} icon="map-marker" size={30} />
                        </Marker>
                    </MapView>
                </View>
            </View>
            }
            {expanded && order.status === 'Delivered' && 
            <View style={{marginTop: '4%'}}>
                <View style={lineStyle}>
                    <Text>Medicine: </Text>
                    <Text style={boldStyle}>{order.medicine}</Text>
                </View>
                <View style={lineStyle}>
                    <Text>Price: </Text>
                    <Text style={boldStyle}>{`${order.bottle} lei`}</Text>
                </View>
            </View>}
        </Card.Content>
        <Card.Actions style={multiLineStyle}>
            <Button onPress={() => setExpanded(!expanded)}>{expanded ? "Hide Details" : "Show Details"}
            </Button>
            <Text style={{ color: order.status === 'Delivered' ? 'green' : 'red' }}>{order.status}</Text>
        </Card.Actions>
    </Card>)
}

export default OrderCard;