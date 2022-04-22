import React, { useState } from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";
import { Appbar, Avatar, Button, Snackbar } from "react-native-paper";
import { Drug } from "./DrugCard";
import MainLayout from "./Layout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Marker } from 'react-native-maps';
import { Pharmacy } from "./PharmacyCard";
import openMap from 'react-native-open-maps';

const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
};

const PharmacyDetailScreen = ({ navigation, route }: any) => {

        const [pharmacy, setPharmacy] = useState<Pharmacy>(route.params?.pharmacy || {})

        const styles = StyleSheet.create({
            container: {
                backgroundColor: '#64b5f6',
                bottom: 10,
            },
        });

        const stylesItems = StyleSheet.create({
            container: {
                display: "flex",
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            },
            buttons: {
                marginTop: "5%",
                marginBottom: "5%",
                marginLeft: '2%', 
                marginRight: '2%'
            }
        });

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

        const [visible, setVisible] = React.useState(false);
        const onToggleSnackBar = () => setVisible(!visible);
        const onDismissSnackBar = () => setVisible(false);

        const goToPharmacy = () => openMap({latitude: 44.457465558013624, longitude: 26.09637597248771, zoom: 18});

        return (
        <MainLayout>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Search")}/>
                <Appbar.Content color="white" title={pharmacy.name}/>
            </Appbar.Header>
            <ScrollView>
                <View style={{borderRadius: 55, overflow: 'hidden' }}>
                    <MapView style={mapStyles.map} initialRegion={{ latitude: 44.4455, longitude: 26.090, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
                        <Marker coordinate={{ latitude: 44.457465558013624, longitude: 26.09637597248771 }}>
                            <Avatar.Icon icon="map-marker-radius" size={30} />
                        </Marker>
                        <Marker coordinate={{ latitude: 44.432, longitude: 26.08 }}>
                            <Avatar.Icon style={{backgroundColor: '#F95C6D'}} icon="map-marker" size={30} />
                        </Marker>
                    </MapView>
                </View>
                <View style={{display: 'flex',flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly', marginLeft: "6%", marginTop: "2%"}}>
                    <Text style={{fontSize: 35, color: "#64b5f6"}}>Advil</Text>
                    <Text style={{fontSize: 20}}>{`Price: ${pharmacy.drugPrice} lei`}</Text>
                    <Text style={{fontSize: 20}}>{`Distance: ${pharmacy.distance} m`}</Text>
                </View>
                <View style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: "8%"}}>
                    <Button labelStyle={{color:'white', lineHeight: 32}} style={{alignSelf: 'center', width: 200, marginBottom: "6%"}} mode="contained" color="#64b5f6"
                    onPress={onToggleSnackBar}>ORDER</Button>
                    <Button labelStyle={{color:'white', lineHeight: 32}} style={{alignSelf: 'center', width: 200, marginBottom: "4%"}} mode="contained" color="#64b5f6"
                    onPress={goToPharmacy}>PICKUP IN STORE</Button>
                </View>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                    label: 'Track your order',
                    onPress: () => {
                        navigation.navigate("MyOrders")
                    },
                    }}>
                    Payment successful!
                </Snackbar>
            </ScrollView>
        </MainLayout>
        )
}

export default PharmacyDetailScreen;