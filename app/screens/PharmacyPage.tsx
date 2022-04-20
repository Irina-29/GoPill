import React, { useState } from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import { Drug } from "./DrugCard";
import MainLayout from "./Layout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Marker } from 'react-native-maps';
import { Pharmacy } from "./PharmacyCard";

const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
};

const PharmacyDetailScreen = ({ navigation, route }: any) => {

        const [pharmacy, setPharmacy] = useState<Pharmacy>(route.params?.pharmacy || {})

        // const addDrug = async() => {
        //     const storedDrugs = await AsyncStorage.getItem("@mydrugs")
        //     const drugs: Drug[] = storedDrugs?JSON.parse(storedDrugs): []

        //     // const alarmDrug = drugs.find(d => d.name === "Paracetamol")
        //     // if(alarmDrug) {
        //     //     alarmDrug.remainingPills = alarmDrug?.remainingPills?alarmDrug.remainingPills-1: 0
        //     // }
        //     // await AsyncStorage.setItem("@mydrugs", JSON.stringify(drugs))

        //     await AsyncStorage.setItem("@mydrugs", JSON.stringify([...drugs, drug]))
        //     onToggleSnackBar()
        // }

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

        return (
            <MainLayout>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Search")}/>
                <Appbar.Content color="white" title={pharmacy.name}/>
            </Appbar.Header>
            <ScrollView>
            <View style={{borderRadius: 55, overflow: 'hidden' }}>
                <MapView style={mapStyles.map} initialRegion={{ latitude: 44.4268, longitude: 26.1025, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
                    <Marker coordinate={{ latitude: 44.410, longitude: 26.1012 }}>
                        <Avatar.Icon icon="map-marker-radius" size={30} />
                    </Marker>
                    <Marker coordinate={{ latitude: 44.432, longitude: 26.08 }}>
                        <Avatar.Icon style={{backgroundColor: '#F95C6D'}} icon="map-marker" size={30} />
                    </Marker>
                </MapView>
            </View>
                {/* <View style={stylesItems.container}>
                    <Image style={{ width: 200, height: 200}} source={drug.image}/>
                </View> */}
                {/* <List.Section style={{marginLeft: '4%', marginRight: '4%'}}>
                    <List.Item
                        title="Dose"
                        description={`${drug.dose}x per day`}
                        left={props => <List.Icon {...props} icon="calendar-month-outline" />}
                    />
                    <Divider />
                    <List.Item
                        title="Quantity"
                        description={`${drug.quantity}x pills`}
                        left={props => <List.Icon {...props} icon="basket-outline" />}
                    />
                    <Divider />
                    <List.Accordion
                        style={{backgroundColor: "white"}}
                        title="Description"
                        titleStyle={{marginLeft: "4%"}}
                        left={props => <List.Icon style={{marginLeft: "0%"}} {...props} icon="clipboard-text-outline" />}>
                        <List.Item title="" description={drug.description} descriptionNumberOfLines={5}/>
                    </List.Accordion>
                </List.Section>
                <View style={[stylesItems.container, stylesItems.buttons]}>
                    <Button labelStyle={{color:'white', lineHeight: 32}} style={{alignSelf: 'center', width: 150}} mode="contained" color="#64b5f6"
                    onPress={() => addDrug()}
                    >Add to list</Button>
                    <Button labelStyle={{color:'white', lineHeight: 32}} style={{alignSelf: 'center', width: 150}} mode="contained" color="#64b5f6"
                    onPress={() => navigation.navigate("Search", {drug})}
                    >Find medicine</Button>
                </View> */}
                </ScrollView>
            </MainLayout>
        )
}

export default PharmacyDetailScreen;