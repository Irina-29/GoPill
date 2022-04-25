import React, { useState } from "react";
import MainLayout from "./Layout";
import { Appbar, IconButton, Modal, Portal, RadioButton, Searchbar } from "react-native-paper";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import PharmacyCard, { Pharmacy } from "./PharmacyCard";

const renderPharmacy = (Pharmacy: Pharmacy[]) => {
    return (Pharmacy.map(pharmacy => <PharmacyCard pharmacy={pharmacy} key={pharmacy.id}></PharmacyCard>))
}

const SearchScreen = ({ navigation }: any) => {

    const pharmacyList: Pharmacy[] = [
         {
            id: 1,
            name: "Farmacia Tei",
            address: "Str. Barbu Văcărescu 154-158",
            hours: "8 AM - 8:45 PM",
            drugPrice: 14.20,
            distance: 450
        },
        {
            id: 2,
            name: "Catena",
            address: "Calea Dorobanți 152",
            hours: "7 AM - 9:30 PM",
            drugPrice: 13.49,
            distance: 300
        },
        {
            id: 3,
            name: "Sensiblu",
            address: "Strada Tipografilor 44150",
            hours: "Open 24 hours",
            drugPrice: 15.35,
            distance: 235
        }
    ]

    const [pharmacy, setPharmacy] = useState<Pharmacy[]>(pharmacyList);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#64b5f6',
            bottom: 10,
        }
    });

    const onChangeSearch = (query: string) => setPharmacy(pharmacyList.filter(d => d.name.includes(query)));

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [value, setValue] = React.useState('first');

    const sortPrice = () => setPharmacy(pharmacyList.sort((a, b) => (a.drugPrice - b.drugPrice)));
    const sortDistance = () => setPharmacy(pharmacyList.sort((a, b) => (a.distance - b.distance)));

    return (
        <><Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
            paddingTop: 20, paddingBottom: 20, marginRight: 25, marginLeft: 25,borderRadius: 20}}>
            <Text style={{display: 'flex',  flexDirection: 'row', alignItems: 'center', marginLeft: 35, fontSize: 15, marginBottom: 10}}>Filter by:</Text>
            <RadioButton.Group onValueChange={newValue => {newValue === "price"?sortPrice(): sortDistance(); setValue(newValue); hideModal()}} value={value}>
                <View style={{display: 'flex',  flexDirection: 'row', alignItems: 'center', marginLeft: 25}}>
                    <RadioButton value="price"/>
                    <Text>Price</Text>
                </View>
                <View style={{display: 'flex',  flexDirection: 'row', alignItems: 'center', marginLeft: 25}}>
                    <RadioButton value="distance"/>
                    <Text>Distance</Text>
                </View>
                </RadioButton.Group>
            </Modal>
        </Portal>
        <MainLayout>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("DrugDetail")} />
                <Appbar.Content color="white" title="Find medicine" />
            </Appbar.Header>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginLeft: "6%", marginRight: "3%" }}>
                <Searchbar
                    style={{ margin: "3%" }}
                    placeholder="Search"
                    onChangeText={onChangeSearch} />
                <IconButton
                    icon="filter"
                    size={35}
                    onPress={showModal} />
            </View>
            <ScrollView>
                {renderPharmacy(pharmacy)}
            </ScrollView>
        </MainLayout></>
    );
}

export default SearchScreen;