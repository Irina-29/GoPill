import React, { useState } from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { Button, Headline, List, Modal, Paragraph, Portal, Subheading } from "react-native-paper";
import { Drug } from "./DrugCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const ListItem = ({ drug, onDelete}: any) => {

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    const containerStyle = {
        backgroundColor: 'white', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20, paddingBottom: 20, marginRight: 25, marginLeft: 25,
        borderRadius: 20
    };

    const navigation = useNavigation();

        return (
        <TouchableOpacity 
        key={drug.id}
        onPress={showModal}>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Headline style={{ alignSelf: 'center' }}>{drug.name}</Headline>
                    <Subheading>{`${drug.remainingPills}x pills left`}</Subheading>
                    <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                        <Button labelStyle={{ color: 'white', fontSize: 15, lineHeight: 25 }} style={{ alignSelf: 'center', width: 200, marginBottom: 20, marginTop: 10}} mode="contained" color="#64b5f6"
                            // style={{width: 140, paddingTop: '4%', paddingBottom: '4%'}} 
                        // onPress={() => navigation.navigate("ScheduleList")}
                        onPress={() => { hideModal(); navigation.navigate("ScheduleRootScreen",{screen:"ScheduleList"}); }}
                        >Add to schedule</Button>
                        <Button labelStyle={{ color: 'white', fontSize: 15, lineHeight: 25 }} style={{ alignSelf: 'center', width: 200}} mode="contained" color="#F95C6D"
                            // style={{width: 140, paddingTop: '4%', paddingBottom: '4%'}} 
                            onPress={() => onDelete(drug.id)}
                        >Remove from list</Button>
                        {/* <Button labelStyle={{color:'white'}} style={{alignSelf: 'center', width: 200}} mode="contained" color="#64b5f6"
                                onPress={() => navigation.navigate("Search")}
                                >Buy medicine</Button> */}
                    </View>
                </Modal>
            </Portal>
            <List.Item
                style={{marginLeft:"2%"}}
                title={drug.name}
                description={`${drug.remainingPills}x pills`}
                left={props => <List.Icon {...props} icon="pill" />} />
        </TouchableOpacity>
        )
}

export default ListItem;